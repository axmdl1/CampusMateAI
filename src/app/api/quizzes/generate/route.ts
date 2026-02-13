import { NextRequest, NextResponse } from 'next/server';
import { retrieveRelevantChunks } from '@/lib/rag';
import OpenAI from 'openai';

// Initialize OpenAI client for LM Studio
const openai = new OpenAI({
    apiKey: 'not-needed',
    baseURL: 'http://localhost:1234/v1',
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { type } = body; // 'explain' or 'quiz'

        if (!type || !['explain', 'quiz'].includes(type)) {
            return NextResponse.json({ error: 'Invalid generation type' }, { status: 400 });
        }

        // Retrieve context
        // For 'explain', we want a general summary, so we might implicitly query for "main concepts".
        // For 'quiz', we want "questions and answers".
        const query = type === 'explain' ? 'summary overview main points' : 'test questions key facts';
        const relevantChunks = await retrieveRelevantChunks(query, 5); // Get top 5 chunks

        const contextText = relevantChunks.map(c => c.text).join('\n---\n');

        let systemPrompt = '';
        let userPrompt = '';

        if (type === 'explain') {
            systemPrompt = `You are a helpful AI tutor. Your goal is to explain the provided document content clearly and concisely to a student.
            Use Markdown formatting. Use headings, bullet points, and bold text for checking readability.`;
            userPrompt = `Please explain the following document content:\n\n${contextText}`;
        } else {
            // QUIZ GENERATION
            systemPrompt = `You are a strict output generator. You must generate a JSON array of 20 multiple choice questions based on the provided text.
            
            The output must be a valid JSON array of objects. NO markdown, NO code blocks, just raw JSON.
            Each object must have:
            - "question": string
            - "options": array of 4 strings
            - "correctAnswer": string (must match one of the options exactly)
            - "explanation": string (brief explanation of why it is correct)

            Example format:
            [
                {
                    "question": "What is 2+2?",
                    "options": ["3", "4", "5", "6"],
                    "correctAnswer": "4",
                    "explanation": "Basic arithmetic."
                }
            ]`;
            userPrompt = `Generate 20 questions based on this content:\n\n${contextText}`;
        }

        const response = await openai.chat.completions.create({
            model: 'local-model', // LM Studio usually ignores this or uses loaded model
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            stream: true,
        });

        // Create a ReadableStream for the response
        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of response) {
                    const content = chunk.choices[0]?.delta?.content || '';
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
                controller.close();
            },
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/plain',
                'Transfer-Encoding': 'chunked',
            },
        });

    } catch (error) {
        console.error('Generation error:', error);
        return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
    }
}

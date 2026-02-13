import { NextRequest, NextResponse } from 'next/server';
import { retrieveRelevantChunks } from '@/lib/rag';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'not-needed',
    baseURL: 'http://localhost:1234/v1',
});

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json({ error: 'Messages array is required' }, { status: 400 });
        }

        const lastMessage = messages[messages.length - 1];
        const query = lastMessage.content;

        // Retrieve relevant context from the document
        const relevantChunks = await retrieveRelevantChunks(query, 5);
        const contextText = relevantChunks.map(c => c.text).join('\n---\n');

        const systemPrompt = {
            role: 'system',
            content: `You are a helpful academic tutor assisting a student with a document.
            Use the following context to answer the student's questions. 
            If the answer is not in the context, say you don't find it in the document but try to answer from general knowledge if relevant (and mark it as general knowledge).
            
            CONTEXT:
            ${contextText}
            
            RULES:
            1. Be concise and clear.
            2. Use Markdown formatting.
            3. Maintain a professional, encouraging tone.`
        };

        const completion = await openai.chat.completions.create({
            model: 'local-model',
            messages: [systemPrompt, ...messages],
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content || '';
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
                controller.close();
            },
        });

        return new NextResponse(stream, {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });

    } catch (error) {
        console.error('Document Chat error:', error);
        return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 });
    }
}

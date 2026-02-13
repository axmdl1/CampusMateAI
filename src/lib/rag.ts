// This is a mock implementation of RAG (Retrieval-Augmented Generation)
// In a real application, this would use a vector database like Pinecone, Weaviate, or Chroma.

export interface Chunk {
    id: string;
    text: string;
    metadata: any;
}

const mockStore: Chunk[] = [];

export async function processDocument(file: File): Promise<string> {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock chunking
    const text = "This is a mock document content derived from the uploaded file. In a real system, the file would be parsed (PDF/Docx) and split into chunks embedded into a vector store.";

    mockStore.push({
        id: Date.now().toString(),
        text,
        metadata: { filename: file.name }
    });

    return "mock-session-id";
}

export function clearVectorStore() {
    // mockStore.length = 0; // functional no-op for now to keep history in this mock session
}

export async function retrieveRelevantChunks(query: string, limit: number = 3): Promise<Chunk[]> {
    // Return all mock chunks for now, or a generic one if empty
    if (mockStore.length === 0) {
        return [{
            id: 'default',
            text: "This is default context because no documents have been processed yet. The user asked about: " + query,
            metadata: {}
        }];
    }
    return mockStore.slice(0, limit);
}

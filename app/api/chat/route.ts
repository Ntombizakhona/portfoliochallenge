import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import { getSystemPrompt } from '@/lib/portfolioData';

// Initialize the new GenAI client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function POST(request: NextRequest) {
    try {
        const { message, history } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        if (!process.env.GEMINI_API_KEY) {
            console.log('No GEMINI_API_KEY found in environment');
            return NextResponse.json({
                response: "I'm currently in demo mode. To enable full AI capabilities, please configure the GEMINI_API_KEY in your environment variables. Feel free to explore the portfolio in the meantime!"
            });
        }

        // Build conversation history for context
        const chatHistory = history?.map((msg: { role: string; content: string }) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        })) || [];

        // Create a chat session with the new SDK
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            history: chatHistory,
            config: {
                systemInstruction: getSystemPrompt(),
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        // Send message and get response
        const result = await chat.sendMessage({ message });
        const response = result.text ?? "I'm having trouble connecting. Please try again!";

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Chat API Error:', error);

        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }

        return NextResponse.json({
            response: "I'm having a moment! Please try again or reach out directly via the contact section."
        });
    }
}

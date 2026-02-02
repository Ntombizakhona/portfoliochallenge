import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { getSystemPrompt } from '@/lib/portfolioData';

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

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
            // Fallback response when API key is not configured
            console.log('No GEMINI_API_KEY found in environment');
            return NextResponse.json({
                response: "I'm currently in demo mode. To enable full AI capabilities, please configure the GEMINI_API_KEY in your environment variables. Feel free to explore the portfolio in the meantime!"
            });
        }

        console.log('API Key found, first 10 chars:', process.env.GEMINI_API_KEY.substring(0, 10) + '...');

        // Get the Gemini model
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: getSystemPrompt(),
        });

        // Build conversation history for context
        const chatHistory = history?.map((msg: { role: string; content: string }) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        })) || [];

        // Start chat with history
        const chat = model.startChat({
            history: chatHistory,
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        // Generate response
        const result = await chat.sendMessage(message);
        const response = result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        console.error('Chat API Error:', error);

        // Log more details about the error
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }

        return NextResponse.json({
            response: "I'm having a moment! Please try again or reach out directly via the contact section."
        });
    }
}

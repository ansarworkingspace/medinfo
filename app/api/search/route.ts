

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const { searchTerm } = await req.json();

    if (!searchTerm) {
      return NextResponse.json({ error: 'Please provide a search term.' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY_OF_MEDINFO;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key is missing in the environment variables.' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });

    const prompt = `For the Indian medicine or chemical named "${searchTerm}", provide the following details in a simple format with no additional explanation:
      - Medicine Name
      - Chemical Composition (list the key active ingredients and their strengths, if applicable)
      - Primary Uses (brief list of uses for the medicine)`;

    const result = await model.generateContent([{ text: prompt }]);
    const aiResponse = result.response.text(); // Extract the AI-generated response

    return NextResponse.json({ response: aiResponse }, { status: 200 });
  } catch (error) {
    console.error('Error from Gemini API:', error);
    return NextResponse.json({ error: 'There was an error processing your request.' }, { status: 500 });
  }
}

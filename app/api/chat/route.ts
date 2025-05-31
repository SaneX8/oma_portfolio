import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";
import { projectSummaries } from "@/lib/data/myData";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You're a chatbot assistant for a developer portfolio. Answer questions only based on the following projects:\n${projectSummaries}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = chatResponse.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}

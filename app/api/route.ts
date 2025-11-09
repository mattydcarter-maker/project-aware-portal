import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessages = body.messages ?? [];

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content:
            "You are the Project AWARE assistant for Suncorp. Help Australians prepare for hailstorms and extreme weather in simple, practical steps. Be clear, calm and actionable. Do NOT give legal or financial advice; instead, recommend speaking with Suncorp or emergency services where appropriate.",
        },
        ...userMessages,
      ],
    });

    const text =
      // @ts-ignore – shape of the Responses API
      response.output[0]?.content[0]?.text ?? "Sorry, I couldn’t respond.";

    return Response.json({ reply: text });
  } catch (e) {
    console.error("AI route error:", e);
    return new Response(
      JSON.stringify({
        reply: "Error contacting the AI service.",
      }),
      { status: 500 }
    );
  }
}

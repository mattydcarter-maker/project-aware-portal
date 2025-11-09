"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
   {
     role: "assistant" as const,
     content:
       "Hi, I’m the Project AWARE assistant. Ask me anything about hailstorms and extreme weather preparedness.",
   },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: ChatMessage[] = [
  ...messages,
  { role: "user" as const, content: input },
];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
        const res = await fetch("/api/aware-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: newMessages }),
        });


      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply ?? "Sorry, I couldn’t respond.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong talking to the AI. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-6 right-6 bg-[#FFD200] hover:bg-[#E5BE00] text-slate-900 rounded-full shadow-lg p-3"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b bg-slate-900 text-white flex justify-between items-center">
            <div>
              <p className="text-sm font-semibold">Project AWARE Assistant</p>
              <p className="text-[11px] text-slate-300">
                Ask me about hail risk, checklists, or next steps.
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-300 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 px-3 py-2 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[80%] ${
                    m.role === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <p className="text-[11px] text-slate-500">Assistant is typing…</p>
            )}
          </div>

          <div className="border-t px-3 py-2 flex gap-2 items-center">
            <input
              className="flex-1 border border-slate-300 rounded-full px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="Type your question…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="text-xs px-3 py-1.5 rounded-full bg-emerald-600 text-white disabled:opacity-60"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

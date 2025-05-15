import React, { RefObject, useEffect } from "react";

interface ChatProps {
  messages: Message[];
  loading: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
}

export default function Chat({ messages, loading, messagesEndRef }: ChatProps) {
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, messagesEndRef]);

  return (
    <div className="flex-1 overflow-y-auto px-8 py-6 bg-black/95 border-b border-zinc-800">
      {messages.length === 0 && !loading && (
        <div className="text-zinc-400 text-center mt-24">No messages yet.</div>
      )}
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-lg max-w-[70%] text-sm whitespace-pre-line font-medium shadow-md ${
              msg.role === "user"
                ? "bg-indigo-600 text-white"
                : "bg-zinc-800 text-zinc-100"
            }`}
          >
            {msg.content}
          </div>
        </div>
      ))}
      {loading && (
        <div className="mb-4 flex justify-start">
          <div className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-100 max-w-[70%] text-sm font-medium shadow-md flex items-center gap-2">
            <span className="loading-dots">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
      <style jsx>{`
        .loading-dots {
          display: inline-block;
        }
        .dot {
          animation: blink 1.4s infinite both;
          font-size: 1.5em;
          line-height: 1;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0%, 80%, 100% { opacity: 0; }
          40% { opacity: 1; }
        }
      `}</style>
    </div>
  );
} 
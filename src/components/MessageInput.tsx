import { useState, useRef } from 'react';
import { useChat } from './ChatContext';

export default function MessageInput() {
  const { sendMessage, loading } = useChat();
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;
    sendMessage(input);
    setInput('');
    textareaRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <form className="w-full flex items-center gap-2 px-8 py-4 bg-black/90 border-t border-zinc-800" onSubmit={handleSend}>
      <textarea
        ref={textareaRef}
        className="flex-1 rounded-lg bg-zinc-900 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-zinc-500 resize-y min-h-[40px] max-h-40"
        placeholder="Type a message..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        rows={1}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        disabled={loading || !input.trim()}
      >
        {loading ? '...' : 'Send'}
      </button>
    </form>
  );
} 
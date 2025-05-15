import { Message } from './ChatContext';

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-[70%] text-sm whitespace-pre-line font-medium shadow-md transition-colors duration-200 ${
          isUser
            ? 'bg-indigo-600 text-white'
            : 'bg-zinc-800 text-zinc-100'
        }`}
      >
        {message.content}
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
} 
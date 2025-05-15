import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Home,
  Workflow,
  Webhook,
  Settings,
  ShoppingBag,
  Mail,
  Zap,
  Youtube,
  Plus,
  MessageSquare,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";

const navItems = [
  { name: "Chat", href: "/", icon: <Home size={20} /> },
  { name: "Workflows", href: "/workflows", icon: <Workflow size={20} /> },
  { name: "Webhooks", href: "/webhooks", icon: <Webhook size={20} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
];

const integrations = [
  { name: "Discord", href: "/integrations/discord", icon: <FaDiscord size={18} /> },
  { name: "Shopify", href: "/integrations/shopify", icon: <ShoppingBag size={18} /> },
  { name: "Gmail", href: "/integrations/gmail", icon: <Mail size={18} /> },
  { name: "Make.com", href: "/integrations/make", icon: <Zap size={18} /> },
  { name: "YouTube", href: "/integrations/youtube", icon: <Youtube size={18} /> },
];

const savedChats = [
  { id: 1, name: "Welcome!" },
  { id: 2, name: "Project Ideas" },
  { id: 3, name: "Integration Help" },
];

function AddChatButton({ className = "", ...props }) {
  return (
    <Tooltip.Root delayDuration={200}>
      <Tooltip.Trigger asChild>
        <button
          className={`transition-all duration-200 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 flex items-center justify-center shadow-md border-2 border-indigo-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
          aria-label="New Chat"
          style={{ boxShadow: "0 4px 24px 0 rgba(80,80,255,0.15)" }}
          {...props}
        >
          <Plus size={18} />
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="right"
          className="bg-zinc-900 text-white px-3 py-2 rounded shadow text-sm font-semibold"
        >
          New Chat
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`relative h-screen bg-black/90 text-white border-r border-zinc-800 flex flex-col transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
        style={{ height: "100dvh" }}
      >
        {/* Top header */}
        <div className="flex items-center h-16 px-2 border-b border-zinc-800 gap-2 relative">
          {/* Toggle button */}
          <button
            className={`transition-all duration-200 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-full p-2 shadow flex items-center justify-center ${
              collapsed ? "rotate-180" : ""
            }`}
            onClick={() => setCollapsed((c) => !c)}
            aria-label="Toggle sidebar"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Add Chat when expanded */}
          {!collapsed && <AddChatButton />}
        </div>

        {/* Floating Add Chat button when sidebar is collapsed */}
        {collapsed && (
          <div
            className="absolute z-50 animate-fadeIn"
            style={{
              top: "1rem",
              left: "5.1rem",
              animation: "fadeIn 0.3s ease-in-out",
            }}
          >
            <AddChatButton />
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-2 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          {navItems.map((item) => {
            const active = router.pathname === item.href;
            return (
              <Link key={item.name} href={item.href} legacyBehavior>
                <a
                  className={`flex items-center gap-3 px-3 py-2 rounded font-medium transition-colors ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-zinc-800 text-zinc-200"
                  } ${collapsed ? "justify-center" : ""}`}
                >
                  {item.icon}
                  {!collapsed && <span>{item.name}</span>}
                </a>
              </Link>
            );
          })}

          {!collapsed && (
            <>
              <div className="mt-6 text-xs uppercase text-zinc-400 tracking-wider mb-2">
                Saved Chats
              </div>
              <div className="space-y-1 mb-6">
                {savedChats.map((chat) => (
                  <button
                    key={chat.id}
                    className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-zinc-800 text-zinc-200 transition-colors text-sm"
                    style={{ textAlign: "left" }}
                  >
                    <MessageSquare size={16} className="opacity-70" />
                    <span className="truncate">{chat.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          <div
            className={`text-xs uppercase text-zinc-400 tracking-wider mb-2 ${
              collapsed
                ? "text-center whitespace-nowrap overflow-hidden text-ellipsis px-1"
                : ""
            }`}
          >
            Integrations
          </div>
          <div className="space-y-2">
            {integrations.map((item) => (
              <Tooltip.Root key={item.name} delayDuration={200}>
                <Tooltip.Trigger asChild>
                  <Link href={item.href} legacyBehavior>
                    <a
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-colors hover:bg-zinc-800 ${
                        collapsed ? "justify-center" : ""
                      }`}
                    >
                      {item.icon}
                      {!collapsed && <span>{item.name}</span>}
                    </a>
                  </Link>
                </Tooltip.Trigger>
                {collapsed && (
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      className="bg-zinc-900 text-white px-2 py-1 rounded shadow text-xs"
                    >
                      {item.name}
                    </Tooltip.Content>
                  </Tooltip.Portal>
                )}
              </Tooltip.Root>
            ))}
          </div>
        </nav>
      </aside>

      {/* Custom animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}

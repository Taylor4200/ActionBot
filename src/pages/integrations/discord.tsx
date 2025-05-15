import React from "react";
import Sidebar from '../../components/Sidebar';
import TopNav from '../../components/TopNav';

export default function DiscordIntegration() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Discord Integration</h1>
          <p className="text-zinc-400">Connect your Discord account and manage bots or webhooks here.</p>
          <p className="mt-4 text-zinc-500 text-sm">To integrate for real: Use Discord OAuth2 for authentication and Discord API for bots/webhooks.</p>
        </main>
      </div>
    </div>
  );
} 
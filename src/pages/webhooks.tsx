import React from "react";
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

export default function Webhooks() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Webhooks</h1>
          <p className="text-zinc-400">This is the Webhooks page. Manage your incoming and outgoing webhooks here.</p>
        </main>
      </div>
    </div>
  );
} 
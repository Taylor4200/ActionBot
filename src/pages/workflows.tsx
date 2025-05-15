import React from "react";
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

export default function Workflows() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Workflows</h1>
          <p className="text-zinc-400">This is the Workflows page. Build and manage your automations here.</p>
        </main>
      </div>
    </div>
  );
} 
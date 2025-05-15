import React from "react";
import Sidebar from '../../components/Sidebar';
import TopNav from '../../components/TopNav';

export default function ShopifyIntegration() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Shopify Integration</h1>
          <p className="text-zinc-400">Connect your Shopify store and manage automations here.</p>
          <p className="mt-4 text-zinc-500 text-sm">To integrate for real: Use Shopify OAuth2 and Admin API for store actions.</p>
        </main>
      </div>
    </div>
  );
} 
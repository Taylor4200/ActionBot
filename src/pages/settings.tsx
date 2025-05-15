import React from "react";
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import SettingsForm from '../components/SettingsForm';

export default function Settings() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Settings</h1>
          <SettingsForm />
        </main>
      </div>
    </div>
  );
} 
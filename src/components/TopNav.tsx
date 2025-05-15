import { useTheme } from "./ThemeContext";
import { useUser } from "./UserContext";
import { Sun, Moon, User, CreditCard, LogOut } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";

export default function TopNav() {
  const { theme, toggleTheme } = useTheme();
  const user = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full h-16 flex items-center justify-between px-8 bg-black/80 border-b border-zinc-800">
      <div className="text-xl font-bold tracking-tight text-white">
        <span className="text-indigo-400">Action</span> Bot
      </div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-full p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
        >
          {mounted ? (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />) : null}
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="rounded-full bg-zinc-800 hover:bg-zinc-700 p-1.5">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-indigo-500"
              />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-zinc-900 text-white rounded shadow-lg p-2 min-w-[180px] mt-2">
            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer">
              <User size={16} /> Account Settings
            </DropdownMenu.Item>
            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer">
              <CreditCard size={16} /> Billing
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="my-1 border-t border-zinc-700" />
            <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded hover:bg-zinc-800 cursor-pointer text-red-400">
              <LogOut size={16} /> Log out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
} 
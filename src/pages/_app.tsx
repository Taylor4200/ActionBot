import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeContext";
import { UserProvider } from "@/components/UserContext";
import { ChatProvider } from "@/components/ChatContext";
import { TooltipProvider } from '@radix-ui/react-tooltip';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <ChatProvider>
          <TooltipProvider>
            <Component {...pageProps} />
          </TooltipProvider>
        </ChatProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

// import AppProvider from '../components/provider/appProvider'
import HighlightProvider from "@/components/provider/HighlightProvider";
import Link from "next/link";
import Image from "next/image";
import { AuthProvider } from "@/components/provider/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <Toaster />

        <SidebarProvider>
          <AppSidebar />
          <nav className="md:hidden fixed top-0 flex justify-between items-center w-full px-8 py-6 backdrop-blur-md z-50">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={110} height={110} />
            </Link>
            <SidebarTrigger />
          </nav>

          <HighlightProvider>
            <main className="flex-1 overflow-auto px-8 py-24 max-w-3xl mx-auto prose dark:prose-invert">
              {children}
            </main>
          </HighlightProvider>
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

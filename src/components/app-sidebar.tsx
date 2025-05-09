"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navItems } from "@/constants/constant";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { app, auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { checkPremiumStatus } from "@/config/firebase/auth";
import NavUser from "./nav-user";
import { AuthContext } from "./provider/AuthProvider";
import { Coins, CreditCard, Gauge, Moon } from "lucide-react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useTheme } from "next-themes";

export function AppSidebar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();
  const [isPremium, setIsPremium] = React.useState<boolean>(false);
  const [xp, setXp] = React.useState<number>(0);

  const userAuth = React.useContext(AuthContext);

  // Cek status premium saat user login/logout
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const premiumStatus = await checkPremiumStatus(user.uid);
        setIsPremium(premiumStatus);

        const db = getDatabase(app);
        const userRef = ref(db, `users/${user.uid}/xp`);
        onValue(userRef, (snapshot) => {
          const value = snapshot.val();
          setXp(typeof value === "number" ? value : 0);
        });
      } else {
        setIsPremium(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Tutup sidebar saat navigasi berubah (hanya di mobile)
  React.useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname, isMobile]);

  const filteredNavItems = isPremium
    ? navItems
    : navItems.filter((item) => !item.premium);

  const { theme, setTheme } = useTheme();

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image
                  priority
                  src="/logo.svg"
                  alt="logo"
                  width={110}
                  height={110}
                  className="dark:hidden block"
                />
                <Image
                  priority
                  src="/logo_dark.svg"
                  alt="logo_dark"
                  width={110}
                  height={110}
                  className="dark:block hidden"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard"}
                  className={
                    pathname === "/dashboard" ? "!bg-sidebar-accent" : ""
                  }
                >
                  <Link href="/dashboard">
                    <Gauge /> Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Moon /> {theme === "dark" ? "Light" : "Dark"} Mode
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/dashboard/pay"}
                  className={
                    pathname === "/dashboard/pay" ? "!bg-sidebar-accent" : ""
                  }
                >
                  <Link href="/dashboard/pay">
                    <CreditCard /> Transaction
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="!opacity-100" disabled>
                  <Coins /> {xp} XP
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {filteredNavItems.map((section) => (
          <SidebarGroup key={section.name}>
            <SidebarGroupLabel>{section.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className={
                        pathname === item.url ? "!bg-sidebar-accent" : ""
                      }
                    >
                      <Link href={item.url}>
                        <item.icon />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: userAuth?.user?.name || "",
            email: userAuth?.user?.email || "",
            avatar: userAuth?.user?.avatar || "",
            xp: xp,
            isPremium,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}

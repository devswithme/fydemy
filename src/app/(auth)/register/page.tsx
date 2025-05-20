"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { signInWithGoogle } from "@/config/firebase/index";
import { useRouter } from "next/navigation";
import { setCookies } from "@/actions";
import { logEvent } from "@/lib/utils";

export default function RegisterPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      setCookies(user.uid);
      logEvent("register_click", {
        button_name: "Register",
      });
      router.push("/dashboard"); // Redirect setelah login
    } catch (error) {
      console.error("Google Sign-In failed", error);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-5">
      {/* Left Section */}
      <div className="col-span-3 relative hidden bg-neutral-900 lg:block py-48 pr-40 pl-28 text-white space-y-4 font-light">
        <h1 className="text-5xl tracking-tight text-balance">
          Sign up for your account today.
        </h1>
        <p className="max-w-lg">
          Start your quest now to collect XP, achieve higher rankings, and
          compete against other users!
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 p-6 lg:p-10 col-span-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={110} height={110} />
          </Link>
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            <ArrowLeft /> Home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center xl:px-16">
          <div className="w-full space-y-5">
            <div className="space-y-1">
              <h1 className="text-lg sm:text-xl font-semibold">Register</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Currently available using Google provider only.
              </p>
            </div>

            <Button
              variant="menu"
              className="w-full"
              size="lg"
              onClick={handleGoogleSignIn}
            >
              <Image src="/google.svg" alt="google" width={25} height={25} />
              Continue with Google
            </Button>

            <p className="text-muted-foreground text-xs sm:text-sm">
              Have registered?{" "}
              <Link href="/login" className="text-blue-800 font-medium">
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

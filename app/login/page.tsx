"use client";
import React, { useEffect, useState } from "react";
import "./styles.css";
import SignInForm from "./components/SignIn";
import SignUpForm from "./components/SignUp";
import Box from "@/components/Box";
import { Auth } from "@supabase/auth-ui-react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";

export default function App() {
  const { session } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.refresh();
      router.push("/");
    }
  }, [session, router]);

  const supabaseClient = useSupabaseClient();

  return (
    <div className="App">
      <Box>
        <Auth
          supabaseClient={supabaseClient}
          providers={["github"]}
          magicLink={true}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#22c55e",
                },
              },
            },
          }}
          theme="dark"
        />
      </Box>
    </div>
  );
}

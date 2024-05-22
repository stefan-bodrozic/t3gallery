import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { TopNav } from "./_components/topnav";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import React from "react";

export const metadata = {
  title: "T3 Gallery App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider> 
      <html lang="en" className={`${GeistSans.variable} flex flex-gap gap-4`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body>
            <TopNav />
            {children}
            {modal}
            <div id="modal-root"/>
          </body>
      </html>
    </ClerkProvider>
  );
}

import '../styles/globals.css';
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import SideBar from "../components/SideBar";
import {authOptions} from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";
import React from "react";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html>
      <head>
          <title>Chat GPT</title>
      </head>
      <body>
      <SessionProvider session={session}>
          {!session ? (
              <Login />
          ):(
              <div className="flex">
                  <div className="bg-[#202331] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                      <SideBar />
                  </div>

                  <ClientProvider />

                  <div className="bg-[#292D3E] flex-1">{children}</div>
              </div>
          )}
      </SessionProvider>
      </body>
    </html>
  )
}

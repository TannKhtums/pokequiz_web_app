import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";
import SideNav from "../components/sidenav";
import { Header } from "../components/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";

export const metadata: Metadata = {
  title: "PokeQuiz",
  description: "A Tanner Garlick project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <SideNav />
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            <AntdRegistry>{children}</AntdRegistry>
          </div>
        </div>
      </body>
    </html>
  );
}

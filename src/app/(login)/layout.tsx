import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { DeviceProvider } from "@/components/Contexts/DeviceContext";
import { UserProvider } from "@/components/Contexts/UserContext";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

const myTheme = createTheme({
  primaryColor: "blue",
  defaultRadius: 0,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Air Quality - Login",
  description: "Air Quality Monitoring System, login page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="dark" theme={myTheme}>
          <Notifications />
          <UserProvider>{children}</UserProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

"use client";

import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconDashboard,
  IconCpu2,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { act, useEffect, useState } from "react";
import classes from "./Shell.module.css";
import { useUser } from "../Contexts/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";

const data = [
  { link: "/app", label: "Dashboard", icon: IconDashboard },
  { link: "/app/devices", label: "Devices", icon: IconCpu2 },
  { link: "/app/settings", label: "Settings", icon: IconSettings },
  { link: "/", label: "Log out", icon: IconLogout },
];

export function Shell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const [active, setActive] = useState("/app");

  const { logout } = useUser();

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.link === active || undefined}
      href={item.link}
      key={item.label}
      onClick={async (event) => {
        setActive(item.link);
        if (item.label === "Log out") {
          event.preventDefault();
          await logout();
        }
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActive(window.location.pathname);
    }
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">{links}</AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

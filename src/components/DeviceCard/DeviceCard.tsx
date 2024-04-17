"use client";

import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconChartLine, IconEdit, IconUnlink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "./DeviceCard.module.css";

export function DeviceCard({
  id,
  name,
  status,
  location,
}: {
  id: number;
  name: string;
  status: string;
  location: string;
}) {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Badge
        w="fit-content"
        variant="light"
        color={status === "Online" ? "green" : "red"}
      >
        {status}
      </Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {name}
      </Text>
      <Text fw={500} mt="xs">
        {location}
      </Text>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Group>
            <ActionIcon
              variant="subtle"
              size="lg"
              onClick={() => {
                router.push(`/app/devices/${id}`);
              }}
            >
              <IconChartLine
                style={{ width: "70%", height: "70%" }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray" size="lg">
              <IconEdit
                style={{ width: "70%", height: "70%" }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>

          <ActionIcon variant="subtle" color="gray" size="lg">
            <IconUnlink
              style={{ width: "70%", height: "70%" }}
              color={theme.colors.red[6]}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
}

"use client";

import { Badge, Center, Grid, Group, Paper, Stack, Text } from "@mantine/core";
import { IconCpu2, IconMapPin } from "@tabler/icons-react";

export default function DeviceData({
  lastValue,
  device,
}: {
  lastValue: any;
  device: any;
}) {
  if (!device) {
    return null;
  }

  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 12 }}>
        <Group justify="space-between" grow style={{ marginBottom: 5 }}>
          <Text w={500}>{device.name}</Text>
          <Group justify="flex-end">
            <Badge color={device.status === "Online" ? "green" : "red"}>
              {device.status}
            </Badge>
          </Group>
        </Group>
        <Stack>
          <Group>
            <IconCpu2 size={16} />
            <Text size="sm">SN: {device.serial_number}</Text>
          </Group>
          <Group>
            <IconMapPin size={16} />
            <Text size="sm">Location: {device.location}</Text>
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Paper
          shadow="xs"
          p="lg"
          withBorder
          radius="md"
          style={(theme) => ({
            backgroundColor:
              device.co2_green > lastValue("CO2")
                ? theme.colors.green[9]
                : device.co2_yellow > lastValue("CO2")
                ? theme.colors.yellow[9]
                : theme.colors.red[9],
          })}
        >
          <Center>
            <Stack>
              <Badge size="xl" color="gray">
                CO2
              </Badge>
              <Text fw={700} size="xl" ta="center" c="white">
                {lastValue("CO2")} ppm{"  "}
                <Badge
                  c={
                    lastValue("CO2_trend") === 1
                      ? "green"
                      : lastValue("CO2_trend") === -1
                      ? "red"
                      : "gray"
                  }
                  color="gray"
                  size="xl"
                  ta="center"
                  fw={700}
                >
                  {lastValue("CO2_trend") === 1
                    ? "↑"
                    : lastValue("CO2_trend") === -1
                    ? "↓"
                    : "→"}
                </Badge>
              </Text>
            </Stack>
          </Center>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Paper
          shadow="xs"
          p="lg"
          withBorder
          radius="md"
          style={(theme) => ({
            backgroundColor:
              0 >= lastValue("Temperature")
                ? theme.colors.blue[9]
                : 15 >= lastValue("Temperature")
                ? theme.colors.cyan[9]
                : 21 >= lastValue("Temperature")
                ? theme.colors.green[9]
                : theme.colors.yellow[9],
          })}
        >
          <Center>
            <Stack>
              <Badge size="xl" color="gray">
                Temperature
              </Badge>
              <Text fw={700} size="xl" ta="center" c="white">
                {lastValue("Temperature")} °C{"  "}
                <Badge
                  c={
                    lastValue("Temp_trend") === 1
                      ? "green"
                      : lastValue("Temp_trend") === -1
                      ? "red"
                      : "gray"
                  }
                  color="gray"
                  size="xl"
                  ta="center"
                  fw={700}
                >
                  {lastValue("Temp_trend") === 1
                    ? "↑"
                    : lastValue("Temp_trend") === -1
                    ? "↓"
                    : "→"}
                </Badge>
              </Text>
            </Stack>
          </Center>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Paper
          shadow="xs"
          p="lg"
          withBorder
          radius="md"
          style={(theme) => ({
            backgroundColor:
              30 > lastValue("Humidity")
                ? theme.colors.red[9]
                : 60 >= lastValue("Humidity")
                ? theme.colors.green[9]
                : 80 >= lastValue("Humidity")
                ? theme.colors.yellow[9]
                : theme.colors.red[9],
          })}
        >
          <Center>
            <Stack>
              <Badge size="xl" color="gray">
                Humidity
              </Badge>
              <Text fw={700} size="xl" ta="center" c="white">
                {lastValue("Humidity")}%{"  "}
                <Badge
                  c={
                    lastValue("Humi_trend") === 1
                      ? "green"
                      : lastValue("Humi_trend") === -1
                      ? "red"
                      : "gray"
                  }
                  color="gray"
                  size="xl"
                  ta="center"
                  fw={700}
                >
                  {lastValue("Humi_trend") === 1
                    ? "↑"
                    : lastValue("Humi_trend") === -1
                    ? "↓"
                    : "→"}
                </Badge>
              </Text>
            </Stack>
          </Center>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Paper
          shadow="xs"
          p="lg"
          withBorder
          radius="md"
          style={(theme) => ({
            backgroundColor:
              1.5 >= lastValue("Battery")
                ? theme.colors.red[9]
                : 2 >= lastValue("Battery")
                ? theme.colors.yellow[9]
                : theme.colors.green[9],
          })}
        >
          <Center>
            <Stack>
              <Badge size="xl" color="gray">
                Batterry Volatage
              </Badge>
              <Text fw={700} size="xl" ta="center" c="white">
                {lastValue("Battery")}V
              </Text>
            </Stack>
          </Center>
        </Paper>
      </Grid.Col>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Paper shadow="xs" p="lg" withBorder radius="md">
          <Center>
            <Stack>
              <Badge size="xl" color="gray">
                Position
              </Badge>
              <Text fw={700} size="xl" ta="center" c="white">
                {lastValue("Position")}
              </Text>
            </Stack>
          </Center>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}

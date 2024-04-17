"use client";

import { DeviceCard } from "@/components/DeviceCard/DeviceCard";
import { Badge, Button, Grid, Group, Space, Title } from "@mantine/core";

const devices = [
  {
    id: 1,
    name: "Device 1",
    status: "Online",
    location: "Location 1",
  },
  { id: 2, name: "Device 2", status: "Offline", location: "Location 2" },
  { id: 3, name: "Device 3", status: "Online", location: "Location 3" },
  { id: 4, name: "Device 4", status: "Offline", location: "Location 4" },
  { id: 5, name: "Device 5", status: "Online", location: "Location 5" },
];

const Devices = () => {
  const onlineDevices = devices.filter((device) => device.status === "Online");

  return (
    <>
      <Group justify="space-between">
        <Group>
          <Title>Devices</Title>
          <Badge color="green" size="lg">
            {onlineDevices.length} online
          </Badge>
          <Badge color="red" size="lg">
            {devices.length - onlineDevices.length} offline
          </Badge>
        </Group>
        <Button>Add device</Button>
      </Group>
      <Space h="lg" />
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: "xl" }}>
        {devices.map((device) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={device.id}>
            <DeviceCard
              id={device.id}
              name={device.name}
              status={device.status}
              location={device.location}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Devices;

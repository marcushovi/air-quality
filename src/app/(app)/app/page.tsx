"use client"

import { Badge, Button, Grid, Group, Space, Text, Title, Container, SimpleGrid, Skeleton, rem } from "@mantine/core";

import { useDevices } from "@/components/Contexts/DeviceContext";
import MapChart from "../../../components/app/MapChart";
import { DeviceTable } from "@/components/app/tables/DeviceTable";
import { ProgressCard } from "@/components/app/ProgressCard";

const PRIMARY_COL_HEIGHT = rem(400);

const App = () => {

  const { devices } = useDevices();
  const onlineDevicess = devices.filter((devicee) => devicee.status === "Online");

  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <>
      <Group justify="space-between">
        <Group>
          <Title>Dashboard</Title>
        </Group>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="md" my="md">
        <DeviceTable />
        <Grid gutter="md" align="center">
          <Grid.Col span={6}>
            <Group justify="center" gap="xl">
              <Badge color="green" size="lg" >
                {onlineDevicess.length} Devices online
              </Badge>
              <Badge color="red" size="lg">
                {devices.length - onlineDevicess.length} Devices offline
              </Badge>
            </Group>
          </Grid.Col>
          <Grid.Col span={6}>
             <ProgressCard/>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      {/* <MapChart/> */}
    </>
  );
};

export default App;

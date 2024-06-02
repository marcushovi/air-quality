"use client";

import { useDevices } from "@/components/Contexts/DeviceContext";
import { DeviceCard } from "@/components/app/DeviceCard";
import DeviceDataModalForm, {
  DeviceFormValues,
} from "@/components/app/forms/DeviceDataModalForm";
import {
  Badge,
  Button,
  Grid,
  Group,
  Loader,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
function convertSecondsToMinutesAndSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}
const Devices = () => {
  const {
    remainingTimeToRefresh,
    isLoadingDevices,
    devices,
    updateDevice,
    addDevice,
    deleteDevice,
  } = useDevices();
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<DeviceFormValues | null>(
    null
  );

  const handleAddDevice = () => {
    setSelectedDevice(null);
    setModalOpened(true);
  };

  const handleEditDevice = (device: DeviceFormValues) => {
    setSelectedDevice(device);
    setModalOpened(true);
  };

  const handleSubmitDevice = (device: any) => {
    if (selectedDevice) {
      updateDevice(device);
    } else {
      addDevice(device);
    }
    setModalOpened(false);
  };

  return (
    <>
      <Group justify="space-between">
        <Group>
          <Title>Devices</Title>
          <Badge color="green" size="lg">
            Online:{" "}
            {devices.filter((device) => device?.status === "online").length}
          </Badge>
          <Badge color="red" size="lg">
            Offline:{" "}
            {devices.filter((device) => device?.status === "offline").length}
          </Badge>
          <Badge variant="transparent" color="gray" size="lg">
            Next Refresh in:{" "}
            {convertSecondsToMinutesAndSeconds(remainingTimeToRefresh)}
          </Badge>
        </Group>
        <Button onClick={handleAddDevice}>Add device</Button>
      </Group>
      <Space h="lg" />
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: "xl" }}>
        {devices &&
          devices.map((device) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={device?.device_id}>
              <DeviceCard
                device_id={device?.device_id.toString()} // Fix: Convert device_id to string
                serial_number={device?.serial_number}
                name={device?.name}
                location={device?.location}
                co2_green={device?.co2_green}
                co2_yellow={device?.co2_yellow}
                co2_red={device?.co2_red}
                onEdit={() => handleEditDevice(device)}
                onDelete={() => deleteDevice(device?.device_id)}
                isLoading={isLoadingDevices}
                status={device?.status}
              />
            </Grid.Col>
          ))}
        {devices.length === 0 && !isLoadingDevices && (
          <Grid.Col>
            <Text>No devices found</Text>
          </Grid.Col>
        )}
      </Grid>
      <DeviceDataModalForm
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        onSubmit={handleSubmitDevice}
        initialValues={selectedDevice || undefined}
      />
    </>
  );
};

export default Devices;

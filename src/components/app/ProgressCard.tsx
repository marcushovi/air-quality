import { Text, Progress, Card } from '@mantine/core';
import { useDevices } from '../Contexts/DeviceContext';

export function ProgressCard() {

  const { devices } = useDevices();
  const onlineDevicesLength = devices.filter((devicee) => devicee.status === "Online").length;
  const on = onlineDevicesLength
  const allDevicesLength = devices.length;

  const value = onlineDevicesLength / allDevicesLength;


  return (
    <Card withBorder radius="md" padding="xl" bg="var(--mantine-color-body)">
      <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
        Devices online
      </Text>
      <Text fz="lg" fw={500}>
        {onlineDevicesLength}/{allDevicesLength}
      </Text>
      <Progress value={value} mt="md" size="lg" radius="xl" />
    </Card>
  );
}
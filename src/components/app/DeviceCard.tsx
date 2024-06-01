import {
  ActionIcon,
  Badge,
  Card,
  Divider,
  Group,
  Skeleton,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core";
import { modals } from "@mantine/modals";
import {
  IconChartLine,
  IconCpu2,
  IconEdit,
  IconMapPin,
  IconPlayerRecordFilled,
  IconUnlink,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

interface DeviceCardProps {
  device_id: string;
  serial_number: string;
  name: string;
  status: string;
  location: string;
  co2_green: number;
  co2_yellow: number;
  co2_red: number;
  onEdit: ({ device }: any) => void;
  onDelete: ({ device }: any) => void;
  isLoading: boolean;
}

export const DeviceCard = ({
  device_id,
  serial_number,
  name,
  status,
  location,
  co2_green,
  co2_yellow,
  co2_red,
  onEdit,
  onDelete,
  isLoading,
}: DeviceCardProps) => {
  const theme = useMantineTheme();
  const router = useRouter();

  const deviceUnlink = () => {
    modals.openConfirmModal({
      title: "Unlink device",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete device:{" "}
          {
            <>
              <Text fw={700}>Name: {name}</Text>
              <Text fw={700}>SN: {serial_number}</Text>
            </>
          }
          All data will be deleted!!.
        </Text>
      ),
      labels: {
        confirm: "Delete device",
        cancel: "Cancel",
      },
      confirmProps: { color: "red" },
      onConfirm: () => {
        onDelete(device_id);
      },
    });
  };

  return (
    <Skeleton visible={isLoading} radius="md">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" grow style={{ marginBottom: 5 }}>
          <Text w={500}>{name}</Text>
          <Group justify="flex-end">
            <Badge color={status === "Online" ? "green" : "red"}>
              {status}
            </Badge>
          </Group>
        </Group>
        <Stack>
          <Group>
            <IconCpu2 size={16} />
            <Text size="sm">SN: {serial_number}</Text>
          </Group>
          <Group>
            <IconMapPin size={16} />
            <Text size="sm">Location: {location}</Text>
          </Group>
          <Divider my="xs" label="CO2 Levels" labelPosition="center" />
          <Group>
            <IconPlayerRecordFilled size={16} color="green" />
            <Text size="sm">Green Level: {co2_green} ppm</Text>
          </Group>
          <Group>
            <IconPlayerRecordFilled size={16} color="orange" />
            <Text size="sm">Yellow Level: {co2_yellow} ppm</Text>
          </Group>
          <Group>
            <IconPlayerRecordFilled size={16} color="red" />
            <Text size="sm">Red Level: {co2_red} ppm</Text>
          </Group>
        </Stack>
        <Card.Section mt="md" py="xs" px="lg" withBorder>
          <Group justify="space-between">
            <Group>
              <ActionIcon
                variant="subtle"
                size="lg"
                onClick={() => {
                  router.push(`/app/devices/${device_id}`);
                }}
              >
                <IconChartLine
                  style={{ width: "70%", height: "70%" }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                color="gray"
                size="lg"
                onClick={onEdit}
              >
                <IconEdit
                  style={{ width: "70%", height: "70%" }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>

            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              onClick={() => {
                deviceUnlink();
              }}
            >
              <IconUnlink
                style={{ width: "70%", height: "70%" }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Card.Section>
      </Card>
    </Skeleton>
  );
};

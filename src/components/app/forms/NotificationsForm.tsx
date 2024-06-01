import {
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Space,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const NotificationsForm = () => {
  const form = useForm({
    initialValues: {
      appNotifications: true,
      emailNotifications: true,
    },
  });

  const handleSubmit = (values: any) => {
    console.log("Notification settings:", values);
    // Implement notification settings update logic here
  };

  return (
    <Card>
      <Text c="red">Comming soon...</Text>
      <Title order={2}>Notifications </Title>
      <Box miw={340} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Checkbox
            disabled
            label="In-app notifications"
            {...form.getInputProps("appNotifications", { type: "checkbox" })}
          />
          <Space h="md" />
          <Checkbox
            disabled
            label="Email notifications"
            {...form.getInputProps("emailNotifications", { type: "checkbox" })}
          />

          <Group justify="flex-end" mt="md">
            <Tooltip label="Comming soon">
              <Button data-disabled type="submit" disabled={!form.isDirty()}>
                Save changes
              </Button>
            </Tooltip>
          </Group>
        </form>
      </Box>
    </Card>
  );
};

export default NotificationsForm;

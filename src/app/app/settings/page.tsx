"use client";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  Space,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Settings = () => {
  const formPass = useForm({
    validateInputOnBlur: true,
    initialValues: {
      newPassword: "",
    },

    validate: {
      newPassword: (value: string) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          value
        )
          ? null
          : "Invalid password",
    },
  });

  const formNotification = useForm({
    initialValues: {
      appNotifications: true,
      emailNotifications: true,
    },
  });
  return (
    <>
      <Title>Settings</Title>
      <Space h="lg" />
      <Container>
        <Card>
          <Title order={2}>Reset password</Title>
          <Box miw={340} mx="auto">
            <form
              onSubmit={formPass.onSubmit((values: any) => console.log(values))}
            >
              <PasswordInput
                withAsterisk
                label="Password"
                description="At least 8 characters with at least one number, one letter and one special character"
                placeholder="Enter new password"
                {...formPass.getInputProps("newPassword")}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" disabled={!formPass.isDirty()}>Save changes</Button>
              </Group>
            </form>
          </Box>
        </Card>
        <Space h="lg" />

        <Card>
          <Title order={2}>Notifications</Title>
          <Box miw={340} mx="auto">
            <form
              onSubmit={formNotification.onSubmit((values: any) =>
                console.log(values)
              )}
            >
              <Checkbox
                label="In-app notifications"
                {...formNotification.getInputProps("appNotifications", { type: 'checkbox' })}
              />
              <Space h="md" />
              <Checkbox
                label="Email notifications"
                {...formNotification.getInputProps("emailNotifications", { type: 'checkbox' })}
              />

              <Group justify="flex-end" mt="md">
                <Button type="submit" disabled={!formNotification.isDirty()}>Save changes</Button>
              </Group>
            </form>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Settings;

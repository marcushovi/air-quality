import {
  Box,
  Button,
  Card,
  Group,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";

const UserDataForm = ({
  user,
  updateUserSettings,
}: {
  user: any;
  updateUserSettings: any;
}) => {
  const form = useForm({
    initialValues: {
      degree: "",
      name: "",
      surname: "",
      company: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    form.setValues({
      degree: user?.degree || "",
      name: user?.name || "",
      surname: user?.surname || "",
      company: user?.company || "",
      email: user?.email || "",
      phone: user?.phone || "",
    });
    form.resetDirty();  
  }, [user]);

  return (
    <Card>
      <Title order={2}>User Data</Title>
      <Box miw={340} mx="auto">
        <form onSubmit={form.onSubmit(updateUserSettings)}>
          <TextInput
            label="Degree"
            placeholder="Enter your degree"
            {...form.getInputProps("degree")}
          />
          <TextInput
            label="Name"
            placeholder="Enter your name"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Surname"
            placeholder="Enter your surname"
            {...form.getInputProps("surname")}
          />
          <TextInput
            label="Company"
            placeholder="Enter your company"
            {...form.getInputProps("company")}
          />
          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Phone"
            placeholder="Enter your phone number"
            {...form.getInputProps("phone")}
          />

          <Group justify="flex-end" mt="md">
            <Tooltip
              label="Update the form first"
              events={{
                hover: !form.isDirty(),
                focus: !form.isDirty(),
                touch: !form.isDirty(),
              }}
            >
              <Button type="submit" disabled={!form.isDirty()}>
                Save changes
              </Button>
            </Tooltip>
          </Group>
        </form>
      </Box>
    </Card>
  );
};

export default UserDataForm;

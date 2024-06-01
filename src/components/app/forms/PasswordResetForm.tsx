import {
  Box,
  Button,
  Card,
  Group,
  PasswordInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const PasswordResetForm = ({ updatePassword }: { updatePassword: any }) => {

  const form = useForm({
    validateInputOnBlur: true,
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordAgain: "",
    },
    validate: {
      oldPassword: (value: string) =>
        value ? null : "Old password is required",
      newPassword: (value: string) =>
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          value
        )
          ? null
          : "Invalid password",
      newPasswordAgain: (value: string, values: any) =>
        value !== values.newPassword ? "Passwords do not match" : null,
    },
  });

  const handleSubmit = (values: any) => {
    updatePassword(values.oldPassword,values.newPassword,values.newPasswordAgain);
  };

  return (
    <Card>
      <Title order={2}>Reset Password</Title>
      <Box miw={340} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <PasswordInput
            withAsterisk
            label="Old Password"
            placeholder="Enter old password"
            {...form.getInputProps("oldPassword")}
          />
          <PasswordInput
            withAsterisk
            label="New Password"
            description="At least 8 characters with at least one number, one letter and one special character"
            placeholder="Enter new password"
            {...form.getInputProps("newPassword")}
          />
          <PasswordInput
            withAsterisk
            label="Confirm New Password"
            placeholder="Confirm new password"
            {...form.getInputProps("newPasswordAgain")}
          />

          <Group justify="flex-end" mt="md">
            <Tooltip
              label="Fill the form first."
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

export default PasswordResetForm;

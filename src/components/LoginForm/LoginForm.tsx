import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Paper,
  Container,
  Title,
  Box,
  Text,
  Loader,
  Skeleton,
  Center,
} from "@mantine/core";
import { useUser } from "../Contexts/UserContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const { isLoading, login, user } = useUser();
  const form = useForm({
    initialValues: {
      login: "",
      password: "",
    },

    // Optionally add validation rules
    validate: {
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = async (values: { login: string; password: string }) => {
    const success = await login(values.login, values.password);
    if (success) {
      router.push("/app");
    }
  };

  if (isLoading) {
    return (
      <Container size={420} my={40}>
        <Skeleton height={45} radius="md" />
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <Center>
            <Loader color="blue" type="dots" />
          </Center>
        </Paper>
      </Container>
    );
  }

  if (user) {
    return (
      <Container size={420} my={40}>
        <Title mb="xl">Already logged in</Title>
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
          <Text>You are already logged in.</Text>
          <Button fullWidth mt="xl" onClick={() => router.push("/app")}>
            Go to App
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container size={420} my={40}>
      <Title mb="xl">Login</Title>
      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Login"
            placeholder=""
            {...form.getInputProps("login")}
            required
          />
          <TextInput
            label="Password"
            placeholder="Your password"
            type="password"
            {...form.getInputProps("password")}
            required
            mt="md"
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

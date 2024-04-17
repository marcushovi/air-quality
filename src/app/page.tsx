"use client";

import { Button, Paper, PasswordInput, TextInput, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "./Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Air Quality!
        </Title>

        <form action="">
          <TextInput
            label="Email address"
            name="email"
            placeholder="test"
            size="md"
            required
          />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="test"
            mt="md"
            size="md"
            required
          />
          <Button
            fullWidth
            mt="xl"
            size="md"
            onClick={(e) => {
              e.preventDefault();
              let email = (document.querySelector('input[name="email"]') as HTMLInputElement)!.value || "";
              let password = (document.querySelector('input[name="password"]') as HTMLInputElement)!.value || "";
              if (email === "test" && password === "test") {
                router.push("/app");
              } else {
                alert("Credentials are test/test");
              }
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

"use client";

import { Container, Space, Title } from "@mantine/core";
import NotificationsForm from "@/components/app/forms/NotificationsForm";
import PasswordResetForm from "@/components/app/forms/PasswordResetForm";
import UserDataForm from "@/components/app/forms/UserDataForm";
import { useUser } from "@/components/Contexts/UserContext";

const Settings = () => {
  const { user, updateUserSettings, updatePassword } = useUser();

  return (
    <>
      <Title>Settings</Title>
      <Space h="lg" />
      <Container>
        <PasswordResetForm updatePassword={updatePassword} />
        <Space h="lg" />
        <UserDataForm user={user} updateUserSettings={updateUserSettings} />
        <Space h="lg" />
        <NotificationsForm />
      </Container>
    </>
  );
};

export default Settings;

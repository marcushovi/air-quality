"use client";

import { Box, LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useUser } from "./Contexts/UserContext";

const AuthenticationWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, login, user } = useUser();
  const router = useRouter();

  // if (isLoading) {
  //   return (
  //     <Center>
  //       <Container mt="xl">
  //         <Loader color="blue" />
  //       </Container>
  //     </Center>
  //   ); // Show loader while checking authentication
  // }

  if (!isLoading && !user) {
    router.push("/"); // Redirect to login page if not authenticated
    return null;
  }

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "md", blur: 4 }}
        loaderProps={{ size: "xl", type: "dots" }}
      />
      {children}
    </Box>
  ); // Render children if authenticated
};

export default AuthenticationWrapper;

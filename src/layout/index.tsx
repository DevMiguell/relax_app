import { Container } from "@nextui-org/react";
import { ReactNode } from "react";
import Header from "./Header";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container
        sm
        css={{
          mt: "2rem",
        }}
      >
        {props.children}
      </Container>
    </>
  );
};

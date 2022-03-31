import { Button, Container, Row } from "@nextui-org/react";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";

const Header = () => {
  return (
    <header
      style={{
        borderBottom: "1px solid #444444",
        height: "5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container sm>
        <Row align="center" justify="space-between">
          <Image src="/logo.svg" alt="Logo" width={80} height={80} />

          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Button
              auto
              ghost
              title="Sair"
              css={{
                p: "0.5rem",
                border: "none",
                color: "#fff",

                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            >
              <VscSignOut size={30} />
            </Button>
            <Button
              auto
              ghost
              title="Perfil"
              css={{
                p: "0.5rem",
                border: "none",
                color: "#fff",

                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#000",
                },
              }}
            >
              <BiUser size={30} />
            </Button>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

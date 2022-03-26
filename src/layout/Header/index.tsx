import { Button, Container, Row, Text } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { CgUser } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";

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
          <Text h3>RELAX.SOUNDS</Text>

          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Button
              auto
              ghost
              color="error"
              onClick={() => signOut()}
              css={{
                p: "0.5rem",
              }}
            >
              <FaSignOutAlt size={30} />
            </Button>
            <Button
              auto
              ghost
              css={{
                p: "0.5rem",
              }}
            >
              <CgUser size={30} />
            </Button>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

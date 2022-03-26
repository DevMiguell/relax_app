import { Container, Row, Text } from "@nextui-org/react";

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
          <Text
            css={{
              fontWeight: "bold",
            }}
          >
            RELAX.SOUNDS
          </Text>

          <div>ACTION BUTTONS</div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

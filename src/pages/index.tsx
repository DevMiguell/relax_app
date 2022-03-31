import { Button, Container, Text } from "@nextui-org/react";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <Container
      md
      css={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/logo.svg" alt="Logo" width={200} height={200} />
          <Text h2>RELAX.SOUNDS</Text>
        </div>
        <Button
          size="xl"
          css={{
            bg: "#fff",
            color: "#000",
            b: "1px solid #000",
            p: "0",
            maxW: "22rem",
            height: "4rem",
          }}
          onClick={() => signIn("google")}
          icon={<FcGoogle size={30} />}
        >
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
            }}
          >
            Entrar com Google
          </p>
        </Button>
      </div>
      <div>
        <Image
          src="/undraw_reading_time_re_phf7.svg"
          alt="undraw_reading_time_re_phf7"
          width={500}
          height={500}
        />
      </div>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/homescreen",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

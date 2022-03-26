import { getSession, signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
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

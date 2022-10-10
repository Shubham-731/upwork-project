import Head from "next/head";

import Center from "../components/Center";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="w-full flex">
        <Nav />
        <Center />
      </div>
    </>
  );
}

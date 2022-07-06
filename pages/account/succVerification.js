import React from "react";

// Icons
// NextJs
import Head from "next/head";
import { useRouter } from "next/router";

export default function Index({ userData }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>IvdaGeo my account</title>
        <meta name="description" content="Онлайн магазин IvdaGeo" />
      </Head>
      <main></main>
    </>
  );
}
export async function getServerSideProps(context) {}

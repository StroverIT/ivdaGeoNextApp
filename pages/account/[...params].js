import React from "react";

// Models
import User from "../../db/models/User";
import Token from "../../db/models/Token";
// Icons
// NextJs
import Head from "next/head";
import { useRouter } from "next/router";

export default function Index({ data }) {
  const router = useRouter();
  console.log(data);
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
export async function getServerSideProps(context) {
  const { params } = context.params;
  const url = params[0];

  let data = {};
  if (url == "verifyAccount") {
    try {
      const userId = params[1];
      const token = params[2];
      const foundToken = await Token.findOne({ token }).populate("userId");

      if (!foundToken || foundToken?.userId?._id != userId) {
        data.error = "Невалидна сесия!";
      }
      if (!data.error) {
        const user = await User.findById(foundToken.userId._id);
        user.isVerified = true;
        await user.save();
        await Token.deleteOne({ _id: foundToken._id });
        data.message = "Успешно потвърдихте акаунта си!";
      }
    } catch (e) {
      data.error = e.message;
    }
  }

  return {
    props: { data },
  };
}

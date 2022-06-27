import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { connectMongo } from "../../../db/connectDb";
import User from "../../../db/models/User";

import { compare } from "bcryptjs";

export default NextAuth({
  //Configure JWT
  session: {
    jwt: true,
  },

  //Specify Provider
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        //Connect to DB
        await connectMongo();
        //Get all the users
        //Find user with the email
        const result = await User.findOne({
          email: credentials.email,
        });
        //Not found - send error res
        if (!result) {
          mongoose.connection.close();

          throw new Error("Несъществуващ и-мейл");
        }
        //Not verifed
        if (!result.verified) {
          mongoose.connection.close();
          throw new Error("Не ви е потвърден акаунта");
        }
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        //Incorrect password - send response
        if (!checkPassword) {
          mongoose.connection.close();

          throw new Error("Грешна парола");
        }
        //Else send success response
        mongoose.connection.close();

        return {
          email: result.email,
          name: result.name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt(token) {
      return token.token;
    },

    async session(session, token, user, account, isNewUser) {
      return session;
    },
  },
});

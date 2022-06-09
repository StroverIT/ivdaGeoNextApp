import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
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
        const client = await MongoClient.connect(process.env.DB_HOST, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        //Get all the users
        const users = await client.db().collection("users");
        //Find user with the email
        const result = await users.findOne({
          email: credentials.email,
        });
        //Not found - send error res
        if (!result) {
          client.close();

          throw new Error("Несъществуващ и-мейл");
        }
        //Not verifed
        if (!result.verifed) {
          client.close();
          throw new Error("Не ви е потвърден акаунта");
        }
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        //Incorrect password - send response
        if (!checkPassword) {
          client.close();
          throw new Error("Грешна парола");
        }
        //Else send success response
        client.close();

        return { email: result.email, name: result.name };
      },
    }),
  ],
});

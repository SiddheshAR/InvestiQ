import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import connectToDB from "./database";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId:process.env.AUTH_GOOGLE_ID,
        cleintSecret:process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
        name:"Credentials",
        credentials:{
            email:{
                label:"Email",
                type:"email",
                placeholder:"Enter Email"
            },
            password:{
                label:"Password",
                type:"password"
            },
        },
        authorize: async (credentials) =>{

            const email = credentials.email 
            const password = credentials.password

            if(!email || !password ){
                // throw new CredentialsSignin("Error here man");
                return("No password no noting")
            }
            await connectToDB();

            const user = {email,id:"dfd"};
            if(password !== 'passcode')
                throw new CredentialsSignin("Password does not match.")
            else return user;
        
        }
    })
  ],
})



import NextAuth, { CredentialsSignin } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import connectToDB from "./database";
import { User } from "./models/userModel";
import {compare} from "bcryptjs";
import Github from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import getUserEmail from "./dummyUsers";

export const { handlers, signIn, signOut, auth } = NextAuth({

  session:{
    strategy:'jwt',
  },  
  providers: [
    Github({
        clientId:process.env.GITHUB_CLIENT_ID,
        clientSecret:process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
        clientId:process.env.AUTH_GOOGLE_ID,
        clientSecret:process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
        async authorize(credentials){
            console.log("Credentials:",credentials);
            if(credentials === null) return null;
            try{
                const user = getUserEmail(credentials?.email);
                console.log("Acc:",user);
                if(user){
                    const isMatch = user?.pass === credentials?.password;
                    if(isMatch){
                        console.log("Success.")
                        return user
                    }else{
                        throw new Error("Password not Matched");
                    }
                }else{
                    throw new Error("User not Found");
                }

            }catch(error){  
                throw new Error(error);
            }
        }
    })
  ],
  pages:{
    signIn:'/login',
  }
})



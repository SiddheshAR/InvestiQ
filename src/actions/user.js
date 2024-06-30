"use server"

import connectToDB from "@/database";
import { User } from "@/models/userModel";
import { redirect } from "next/navigation";
import {hash} from 'bcryptjs';
import { signIn, signOut } from "@/auth";
import { CredentialsSignin } from "next-auth";

export async function registerSubmit(formSubmit){

    let firstName = formSubmit.get('firstname');
    let lastName = formSubmit.get('lastname');
    let email = formSubmit.get('email');
    let password = formSubmit.get('password');
    if( !firstName || !lastName || !email || !password ){
        throw new Error("Please fill all the fields.")
    }
    let userCreationSuccess = false;
        try{
            await connectToDB();
            const existingUser = await User.findOne({email});
            if(existingUser){
                throw new Error("User Already Exists.");
            }
            const hashedPassword = await hash(password, 10)
            await User.create({firstName,lastName,email,password:hashedPassword}),
            console.log("User Created.");
            userCreationSuccess=true;
            }catch(error){
                throw new Error("Server Auth Failed.");
            }finally{
            if(userCreationSuccess){
                redirect("/login");
            }
        }
} 

export async function CredentialsLogin(formData){
    
    try{
        const response = await signIn("credentials",{
            email:formData.get('email'),
            password:formData.get('password'),
            redirect:false
        });
        console.log(response);
        return response;
    }catch(err){
        
    }
    // return("Dong King.")
}
 export async function socialLogin(formData){

    let action = formData.get('action');
    await signIn(action,{ redirectTo : "/"});
 }

 export async function doLogout() {
    await signOut({ redirectTo: "/" });
  }


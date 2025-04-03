"use server"

import { redirect } from "next/navigation";
import { signIn } from "../src/auth";

export const LoginAction = async(_, formData) => {

    // if(!formData){
    //     throw new Error("FormData is null!!!")
    // }
    const email = formData.get("email")
    const password = formData.get("password");

    await signIn("credentials", {
        email, 
        password,
        redirect: false
    });

    redirect("/dashboard")
}
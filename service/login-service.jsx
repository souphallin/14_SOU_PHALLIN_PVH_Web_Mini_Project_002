import { redirect } from "next/navigation";

export async function LoginService({email, password}) {
    const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    const data = await res.json();
    
    if(data?.status != "OK"){
        redirect("/login")
    }

    return data;
}
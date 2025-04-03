import { auth } from "@/auth"

export async function workspaceService(){
    const session = await auth();
    // console.log("sese")
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${session.payload.token}`
        },
    })
    const data = await res.json()
    
    return data
}
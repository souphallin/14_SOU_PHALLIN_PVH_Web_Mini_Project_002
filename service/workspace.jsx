import { auth } from "@/auth"

export async function workspaceService(){
    const session = await auth();
    // console.log("sese")
    const res = await fetch(`http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`, {
        headers: {
            "Authorization": `Bearer ${session.payload.token}`
        },
    })
    const data = await res.json()
    return data
}
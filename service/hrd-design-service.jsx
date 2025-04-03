import { auth } from "@/auth";

export default async function DesignService(){
    const session = await auth();
    console.log("HRD Design Session : ", session)
    const res = await fetch(`http://96.9.81.187:8080/api/v1/tasks/workspace/ada1dbf7-0141-41c6-a218-50d78f4fda62?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,{
        headers: {
            "Authorization" : `Bearer ${session.payload.token}`
        }
    });
    const data = await res.json();
    return data;
}
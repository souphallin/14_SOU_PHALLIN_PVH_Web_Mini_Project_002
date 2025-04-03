import SidebarComponent from "@/components/sidebar/SidebarComponent";
import TaskService from "../../../../service/task-service";
import { auth } from "@/auth";

export default async function DashboardPage(){
    const task = TaskService
    const sesstion = await auth()
    // console.log("session", sesstion.payload.token)
    console.log("Task : ", task)
    return<>
        <div className="grid grid-cols-8">
            <div className="col-span-2">
                <SidebarComponent/>
            </div>
            <div className="col-span-6">
                {/* Main Content */}
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                        <p className="text-gray-600">
                            Welcome to your dashboard. This is a basic sidebar menu example.
                        </p>
                    </div>
                </main>
            </div>
            
        </div>
        
    </>
}
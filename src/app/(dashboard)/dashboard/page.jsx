import SidebarComponent from "@/components/sidebar/SidebarComponent";
import { workspaceService } from "../../../../service/workspace";
import DesignCardComponent from "@/components/design-card/design-card";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const workspaces = await workspaceService();
  
    // const session = await auth();
    // console.log("Session HRD : ", session)
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-2 max-h-full overflow-hidden">
          <SidebarComponent workspaces={workspaces} />
        </div>
        <div className="col-span-6">
          {/* Main Content */}
          <main className="flex-1 p-6 -mt-15">
            <h1 className="text-2xl font-semibold text-gray-900">HRD Design</h1>
            <div className="mt-2 p-6 bg-white rounded-lg shadow-md grid grid-cols-6 gap-10">
                <div className="col-span-2">
                    <p className="text-[#F96666] text-lg border-b-1">Not Stated</p>
                    <DesignCardComponent/>
                </div>
                <div className="col-span-2">
                    <p className="text-[#4379F2] text-lg border-b-1">In Progress</p>
                </div>
                <div className="col-span-2">
                    <p className="text-[#009990] text-lg border-b-1">Finished</p>
                </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

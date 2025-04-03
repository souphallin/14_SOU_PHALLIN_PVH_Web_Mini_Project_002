import WorkflowConponent from "../workarea/WorkflowConponent";
import SidebarAddedComponent from "./SidebarAddedComponent";

export default function SidebarComponent(){
    return<>
        <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-[100%] shadow-md">
            <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                    <span className="ml-2 text-xl font-semibold text-[#94A3B8]">
                    Workspace
                    </span>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.53 12H16.54" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.54004 12H12.35" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.54 16V8" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.54004 13.04V15C2.54004 20 4.54004 22 9.54004 22H15.54C20.54 22 22.54 20 22.54 15V9C22.54 4 20.54 2 15.54 2H9.54004C4.54004 2 2.54004 4 2.54004 9" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <nav className="my-5 px-2">
                <SidebarAddedComponent/>
                {/* <WorkflowConponent/> */}
            </nav>

        </aside>
        
        </div>
    </>
}
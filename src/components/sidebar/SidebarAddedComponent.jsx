import { workspaceService } from "../../../service/workspace"

export default async function SidebarAddedComponent(){
    const workspaces = await workspaceService()
    // console.log("Workspace : ", workspaces)
    return<>
        {workspaces.payload.map((item, index) => (
            <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#F96666]"></div>
                    <h4 key={index} className="hover:font-bold">{item.workspaceName}</h4>
                </div>
                <div>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16667 8.83331C3.25 8.83331 2.5 9.58331 2.5 10.5C2.5 11.4166 3.25 12.1666 4.16667 12.1666C5.08333 12.1666 5.83333 11.4166 5.83333 10.5C5.83333 9.58331 5.08333 8.83331 4.16667 8.83331Z" stroke="#1E293B" strokeWidth="1.5"/>
                        <path d="M15.8334 8.83331C14.9167 8.83331 14.1667 9.58331 14.1667 10.5C14.1667 11.4166 14.9167 12.1666 15.8334 12.1666C16.75 12.1666 17.5 11.4166 17.5 10.5C17.5 9.58331 16.75 8.83331 15.8334 8.83331Z" stroke="#1E293B" strokeWidth="1.5"/>
                        <path d="M8.33331 10.5C8.33331 11.4166 9.08331 12.1666 9.99998 12.1666C10.9166 12.1666 11.6666 11.4166 11.6666 10.5C11.6666 9.58331 10.9166 8.83331 9.99998 8.83331" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        ))}
        
    </>
}
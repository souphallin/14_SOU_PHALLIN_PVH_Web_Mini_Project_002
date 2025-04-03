"use client";

import { useRef, useState } from "react";
import SidebarAddedComponent from "./SidebarAddedComponent";
import AddWorkspaceButton from "./add-workspace-button";
import Favorite from "./favorite";

export default function SidebarComponent({workspaces}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRef = useRef(null);

    const closeModal = () => {
        setIsModalOpen(false);
      };
      console.log("isModalOpen : ", isModalOpen)

      const handleSave = () => {
        const workspaceName = inputRef.current.value.trim();
        if (workspaceName) {
          console.log("New Workspace Name:", workspaceName);
          closeModal(); // Close modal after save
        }
      };

  return (
    <>
      <div className="flex max-h-[240px] overflow-auto">
        {/* Sidebar */}
        <aside className="w-[100%] shadow-md">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <span className="ml-2 text-xl font-semibold text-[#94A3B8]">
                Workspace
              </span>
              <button onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                {/* AddWorkspaceButton */}
                <AddWorkspaceButton  />
              </button>
            </div>
          </div>
          <nav className="my-5 px-2">
            <SidebarAddedComponent workspaces={workspaces} />
            {/* <WorkflowComponent/> */}
          </nav>
        </aside>
      </div>

      <div className="flex max-h-[240px] overflow-auto mt-10">
        {/* Sidebar */}
        <aside className="w-[100%] shadow-md">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <span className="ml-2 text-xl font-semibold text-[#94A3B8]">
                Favorite
              </span>
              <button className="cursor-pointer">
                {/* AddWorkspaceButton */}
                <Favorite/>
              </button>
            </div>
          </div>
          <nav className="my-5 px-2">
            <SidebarAddedComponent />
            {/* <WorkflowComponent/> */}
          </nav>
        </aside>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Add Workspace</h2>
            
            {/* Input Field */}
            <input
              type="text"
              ref={inputRef} // Direct reference instead of state
              placeholder="Enter workspace name"
              className="w-full p-2 border rounded mb-4"
            />
            
            {/* Buttons */}
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

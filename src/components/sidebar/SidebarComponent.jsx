"use client";

import { useRef, useState } from "react";
import SidebarAddedComponent from "./SidebarAddedComponent";
import AddWorkspaceButton from "./add-workspace-button";
import Favorite from "./favorite";

export default function SidebarComponent({ workspaces }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [workspaceName, setWorkspaceName] = useState(""); // Manage input value

    const closeModal = () => {
        setIsModalOpen(false);
        setWorkspaceName(""); // Reset input when closing modal
    };

    const handleSave = async (e) => {
        e.preventDefault();

        if (!workspaceName.trim()) {
            alert("Workspace name cannot be empty!");
            return;
        }

        const formData = new FormData();
        formData.append("workspaceName", workspaceName);
        console.log("Saving Workspace:", workspaceName);

        // Uncomment when backend action is ready
        // await WorkSpaceAction(formData);

        closeModal(); // Close modal after save
    };

    return (
        <>
            <div className="flex max-h-[240px] overflow-auto">
                <aside className="w-[100%] shadow-md">
                    <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                            <span className="ml-2 text-xl font-semibold text-[#94A3B8]">
                                Workspace
                            </span>
                            <button onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                                <AddWorkspaceButton />
                            </button>
                        </div>
                    </div>
                    <nav className="my-5 px-2">
                        <SidebarAddedComponent workspaces={workspaces} />
                    </nav>
                </aside>
            </div>

            <div className="flex max-h-[240px] overflow-auto mt-10">
                <aside className="w-[100%] shadow-md">
                    <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                            <span className="ml-2 text-xl font-semibold text-[#94A3B8]">
                                Favorite
                            </span>
                            <button className="cursor-pointer">
                                <Favorite />
                            </button>
                        </div>
                    </div>
                    <nav className="my-5 px-2">
                        <SidebarAddedComponent />
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
                            name="workspaceName"
                            placeholder="Enter workspace name"
                            className="w-full p-2 border rounded mb-4"
                            value={workspaceName} // Bind state value
                            onChange={(e) => setWorkspaceName(e.target.value)} // Handle change
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

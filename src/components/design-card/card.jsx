"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import React, { useState } from "react";

export default function CardComponent({ hrdDesign }) {
  // Function to determine border and text colors for SelectTrigger
  const getStatusColor = (status) => {
    switch (status) {
      case "NOT_STARTED":
        return "border-[#F96666] text-[#F96666]";
      case "IN_PROGRESS":
        return "border-[#4379F2] text-[#4379F2]";
      case "FINISHED":
        return "border-[#009990] text-[#009990]";
      default:
        return "border-gray-300 text-gray-500";
    }
  };

  // Function to get status circle color
  const getStatusCircleColor = (status) => {
    switch (status) {
      case "NOT_STARTED":
        return "bg-[#F96666]";
      case "IN_PROGRESS":
        return "bg-[#4379F2]";
      case "FINISHED":
        return "bg-[#009990]";
      default:
        return "bg-gray-300";
    }
  };

  // State to track selected status for each task
  const [taskStatuses, setTaskStatuses] = useState(
    hrdDesign?.payload?.map((item) => item.status) // Initialize with the current status of each item
  );

  // Function to handle status change
  const handleStatusChange = (index, newStatus) => {
    const updatedStatuses = [...taskStatuses];
    updatedStatuses[index] = newStatus;
    setTaskStatuses(updatedStatuses);
  };

  return (
    <>
      {hrdDesign?.payload?.map((item, index) => {
        const currentStatus = taskStatuses[index]; // Get the updated status
        const selectTriggerColor = getStatusColor(currentStatus);
        const statusCircleColor = getStatusCircleColor(currentStatus);

        return (
          <div key={index} className="border border-gray-300 rounded-xl mt-8">
            <div className="p-5">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold capitalize">
                  {item.taskTitle}
                </h2>
                <Ellipsis />
              </div>

              {/* Task details */}
              <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
                {item.taskDetails}
              </p>

              <div className="flex justify-between items-center mt-4">
                {/* Tag */}
                <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                  {item.tag}
                </p>

                {/* Status Circle */}
                <div className={`rounded-full w-8 h-8 ${statusCircleColor}`}></div>
              </div>
            </div>

            {/* Progress */}
            <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
              <Select onValueChange={(value) => handleStatusChange(index, value)}>
                <SelectTrigger className={`w-36 truncate border ${selectTriggerColor}`}>
                  <SelectValue placeholder={currentStatus} />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-md border border-gray-200 rounded-md">
                  <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                  <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                  <SelectItem value="FINISHED">FINISHED</SelectItem>
                </SelectContent>
              </Select>

              {/* Date */}
              <p className="flex gap-3 text-light-steel-blue">
                <Clock size={22} /> Mar 23, 2025
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

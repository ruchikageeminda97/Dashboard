import Image from "next/image";
import { MdOutlinePhoto } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";


interface TaskCardProps {
  title: string;
  priority: string;
  assignedCount: number;
  dueDate?: string; 
  reports?: string; 
  bgColor?: string; 
}

const TaskCard: React.FC<TaskCardProps> = ({ title, priority, assignedCount, dueDate, reports, bgColor }) => {
  const visibleIcons = Math.min(assignedCount, 3); 
  const extraCount = Math.max(0, assignedCount - 3); 

  return (
    <div className="w-[95%] h-[140px] bg-white shadow-md rounded-lg p-3 mb-4 mr-4 flex flex-col justify-between" style={{ backgroundColor: bgColor }}>
      <div>
        <div className="">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-[2px] ${
                priority === 'high'
                  ? 'bg-red-500'
                  : priority === 'medium'
                  ? 'bg-[#FFA800]'
                  : 'bg-[#AEE753]'
              }`}
            ></div>
          </div>
          <h3 className="text-[14px] font-medium">{title}</h3>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex -space-x-2">
            {Array.from({ length: visibleIcons }, (_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gray-700 border border-white flex items-center justify-center -ml-2 first:ml-0"
              >
                <MdOutlinePhoto className="text-white h-3" />
              </div>
            ))}
            {extraCount > 0 && (
              <div className="w-6 h-6 rounded-full bg-gray-400 border border-white flex items-center justify-center -ml-2">
                <span className="text-white text-[9px] font-medium">+{extraCount}</span>
              </div>
            )}
          </div>
          <h1 className="">
            <span className="text-[12px] text-gray-500">{priority}</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="text-[12px] text-gray-500">
          {dueDate && <span>Due: {dueDate}</span>}
          {reports && <span className="flex items-center gap-1"><span>⚠️</span> {reports}</span>}
        </div>
      </div>
    </div>
  );
};

export default function Swimlane() {
  return (
    <div className="flex w-full flex-row overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden">
      {/* To Do */}
      <div className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col">
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--boader)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span>To Do</span>
           
          </div>
          <div className="flex gap-2"> <FaPlus className="ml-2" />
           <HiDotsHorizontal className="ml-auto mr-2" /></div>
        </div>
        <div className="justify-center flex flex-col items-center mt-4 ml-2">
          <TaskCard title="User Interview" priority="low" assignedCount={1} />
          <TaskCard title="Design System" priority="medium" assignedCount={4} reports="2 Reports" />
        </div>
      </div>

      {/* In Progress */}
      <div className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col">
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--orange)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span>In Progress</span>
          </div>
           <div className="flex gap-2"> <FaPlus className="ml-2" />
           <HiDotsHorizontal className="ml-auto mr-2" /></div>
        </div>
        <div className="justify-center flex flex-col items-center mt-4 ml-2">
          <TaskCard title="UI Design" priority="high" assignedCount={2} />
          <TaskCard title="Check Clients Feedback" priority="low" assignedCount={5} dueDate="22 April 2022" />
        </div>
      </div>

      {/* Approved  */}
      <div className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col">
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--green)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span>Approved</span>
          </div>
           <div className="flex gap-2"> <FaPlus className="ml-2" />
           <HiDotsHorizontal className="ml-auto mr-2" /></div>
        </div>
        <div className="justify-center flex flex-col items-center mt-4 ml-2">
          <TaskCard title="Prototype" priority="low" assignedCount={5} dueDate="243" />
          <TaskCard title="Detail Page" priority="low" assignedCount={3} />
          <TaskCard title="Animation preloader" priority="high" assignedCount={4} />
        </div>
      </div>

      {/* Reject  */}
      <div className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col">
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--red)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span className="text-white">Reject</span>
          </div>
           <div className="flex gap-2"> <FaPlus className="ml-2" />
           <HiDotsHorizontal className="ml-auto mr-2" /></div>
        </div>
        <div className="justify-center flex flex-col items-center mt-4 ml-2">
          <TaskCard title="Group Management" priority="low" assignedCount={3} dueDate="329" />
          <TaskCard title="Slider controls" priority="low" assignedCount={2} />
        </div>
      </div>
    </div>
  );
}
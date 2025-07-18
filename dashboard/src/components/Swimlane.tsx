'use client';

import { useState } from "react";
import Image from "next/image";
import { MdOutlinePhoto } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoFlashOutline } from "react-icons/io5";
import { TaskCardProps, TaskCard2Props, Task } from './interfaces';


const TaskCard: React.FC<TaskCardProps> = ({ title, priority, assignedCount, dueDate, reports, bgColor, id, onDragStart }) => {
  const visibleIcons = Math.min(assignedCount, 3);
  const extraCount = Math.max(0, assignedCount - 3);

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="w-[95%] h-[140px] bg-white shadow-md rounded-lg p-3 mb-4 mr-4 flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
      data-id={id}
    >
      <div>
        <div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-[2px] ${
                priority === "high"
                  ? "bg-red-500"
                  : priority === "medium"
                  ? "bg-[#FFA800]"
                  : "bg-[#AEE753]"
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
          <div className="flex items-center gap-1 bg-[#F4F5F6] w-[72px] rounded-sm justify-center">
            <IoFlashOutline className="text-[10px]" />
            <span className="text-[10px] text-gray-500">{priority}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="border-b w-full border-[var(--boader)]"></div>
        <div className="flex justify-between w-full">
          <div className="text-[12px] flex text-gray-500">
            {dueDate && <span>Due: {dueDate}</span>}
            {reports && (
              <span className="flex items-center gap-1">
                <span>⚠️</span> {reports}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TaskCard2: React.FC<TaskCard2Props> = ({ title, priority, assignedCount, dueDate, reports, bgColor, image, id, onDragStart }) => {
  const visibleIcons = Math.min(assignedCount, 3);
  const extraCount = Math.max(0, assignedCount - 3);

  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="w-[95%] h-[220px] bg-white shadow-md rounded-lg p-3 mb-4 mr-4 flex flex-col justify-between"
      style={{ backgroundColor: bgColor || "#fff" }}
      data-id={id}
    >
      <div>
        <div className="flex flex-col">
          <div
            className={`w-2 h-2 rounded-[2px] ${
              priority === "high"
                ? "bg-red-500"
                : priority === "medium"
                ? "bg-[#FFA800]"
                : "bg-[#AEE753]"
            }`}
          ></div>
          <h3 className="text-[14px] font-medium text-black">{title}</h3>
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
          <div className="flex items-center gap-1 bg-[#F4F5F6] w-[72px] rounded-sm justify-center">
            <IoFlashOutline className="text-[10px]" />
            <span className="text-[10px] text-gray-500">{priority}</span>
          </div>
        </div>
      </div>
      {image && (
        <div className="flex items-center justify-center flex-grow bg-[#353945] mt-2 rounded">
          <MdOutlinePhoto className="text-white text-4xl" />
        </div>
      )}
      <div className="flex justify-between items-end">
        <div className="text-[12px] text-gray-300">
          {dueDate && <span>Due: {dueDate}</span>}
          {reports && (
            <span className="flex items-center gap-1">
              <span>⚠️</span> {reports}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const TaskForm: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Omit<Task, 'id' | 'lane'> & { lane: string }) => void;
  lane: string;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'low',
    assignedCount: 1,
    dueDate: '',
    reports: '',
    image: false,
    lane: 'todo',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData({
      title: '',
      priority: 'low',
      assignedCount: 1,
      dueDate: '',
      reports: '',
      image: false,
      lane: 'todo',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-medium mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Assigned Count</label>
            <input
              type="number"
              name="assignedCount"
              value={formData.assignedCount}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              min="1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="text"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., 22 April 2022"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Reports</label>
            <input
              type="text"
              name="reports"
              value={formData.reports}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., 2 Reports"
            />
          </div>
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                name="image"
                checked={formData.image}
                onChange={handleChange}
                className="mr-2"
              />
              Include Image
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--primary)] text-white rounded-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Swimlane() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "User Interview", priority: "low", dueDate: "243", assignedCount: 1, lane: "todo" },
    { id: "2", title: "Design System", priority: "medium", dueDate: "243", assignedCount: 4, reports: "2 Reports", lane: "todo" },
    { id: "3", title: "UI Design", priority: "high", assignedCount: 2, lane: "inprogress" },
    { id: "4", title: "Check Clients Feedback", priority: "low", assignedCount: 5, dueDate: "22 April 2022", image: true, lane: "inprogress" },
    { id: "5", title: "Prototype", priority: "low", assignedCount: 5, dueDate: "243", lane: "approved" },
    { id: "6", title: "Detail Page", priority: "low", dueDate: "243", assignedCount: 3, lane: "approved" },
    { id: "7", title: "Animation preloader", priority: "high", dueDate: "243", assignedCount: 4, lane: "approved" },
    { id: "8", title: "Group Management", priority: "low", assignedCount: 3, dueDate: "329", lane: "reject" },
    { id: "9", title: "Slider controls", priority: "low", assignedCount: 2, dueDate: "243", lane: "reject" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLane, setSelectedLane] = useState<string>("");

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, taskId: string) => {
    e.dataTransfer.setData("text/plain", taskId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newLane: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, lane: newLane } : task
      )
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleAddTask = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (taskData: Omit<Task, 'id' | 'lane'> & { lane: string }) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        ...taskData,
        id: `${prevTasks.length + 1}`,
        lane: 'todo',
      },
    ]);
  };

  return (
    <div className="flex w-full flex-row overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden">
      {/* To Do */}
      <div
        className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col"
        onDrop={(e) => handleDrop(e, "todo")}
        onDragOver={handleDragOver}
      >
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--boader)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span>To Do</span>
          </div>
          <div className="flex gap-2">
            <button className="cursor-pointer" onClick={handleAddTask}>
              <FaPlus className="ml-2" />
            </button>
            <HiDotsHorizontal className="ml-auto mr-2" />
          </div>
        </div>
        <div className="justify-center cursor-pointer flex flex-col items-center mt-4 ml-2">
          {tasks
            .filter((task) => task.lane === "todo")
            .map((task) =>
              task.image ? (
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  image={task.image}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              ) : (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              )
            )}
        </div>
      </div>

      {/* In Progress */}
      <div
        className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col"
        onDrop={(e) => handleDrop(e, "inprogress")}
        onDragOver={handleDragOver}
      >
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--orange)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span>In Progress</span>
          </div>
          <div className="flex gap-2">
            <button className="cursor-pointer" onClick={handleAddTask}>
              <FaPlus className="ml-2" />
            </button>
            <HiDotsHorizontal className="ml-auto mr-2" />
          </div>
        </div>
        <div className="justify-center cursor-pointer flex flex-col items-center mt-4 ml-2">
          {tasks
            .filter((task) => task.lane === "inprogress")
            .map((task) =>
              task.image ? (
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  image={task.image}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              ) : (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              )
            )}
        </div>
      </div>

      {/* Approved */}
      <div
        className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col"
        onDrop={(e) => handleDrop(e, "approved")}
        onDragOver={handleDragOver}
      >
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--green)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span>Approved</span>
          </div>
          <div className="flex gap-2">
            <button className="cursor-pointer" onClick={handleAddTask}>
              <FaPlus className="ml-2" />
            </button>
            <HiDotsHorizontal className="ml-auto mr-2" />
          </div>
        </div>
        <div className="justify-center cursor-pointer flex flex-col items-center mt-4 ml-2">
          {tasks
            .filter((task) => task.lane === "approved")
            .map((task) =>
              task.image ? (
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  image={task.image}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              ) : (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              )
            )}
        </div>
      </div>

      {/* Reject */}
      <div
        className="flex-shrink-0 w-[70%] md:w-[50%] lg:w-[25%] h-auto border-b-2 md:border-b-0 md:border-r-2 border-[var(--boader)] flex flex-col"
        onDrop={(e) => handleDrop(e, "reject")}
        onDragOver={handleDragOver}
      >
        <div className="justify-between w-full h-[60px] bg-white items-center flex">
          <div className="w-[50%] md:w-[35%] h-[30px] bg-[var(--red)] rounded-full flex text-[12px] md:text-[14px] items-center justify-center ml-2">
            <span className="text-white">Reject</span>
          </div>
          <div className="flex gap-2">
            <button className="cursor-pointer" onClick={handleAddTask}>
              <FaPlus className="ml-2" />
            </button>
            <HiDotsHorizontal className="ml-auto mr-2" />
          </div>
        </div>
        <div className="justify-center cursor-pointer flex flex-col items-center mt-4 ml-2">
          {tasks
            .filter((task) => task.lane === "reject")
            .map((task) =>
              task.image ? (
                <TaskCard2
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  image={task.image}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              ) : (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  assignedCount={task.assignedCount}
                  dueDate={task.dueDate}
                  reports={task.reports}
                  bgColor={task.bgColor}
                  onDragStart={(e) => handleDragStart(e, task.id)}
                />
              )
            )}
        </div>
      </div>

      <TaskForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        lane={selectedLane}
      />
    </div>
  );
}
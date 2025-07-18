import Image from "next/image";
import photo from "../../public/hero/gallery.png";
import pen from "../../public/hero/pen.png";
import { MdOutlinePhoto } from "react-icons/md";
import { GoPencil } from "react-icons/go";

interface AssignedIconsProps {
  count: number;
}

const AssignedIcons: React.FC<AssignedIconsProps> = ({ count }) => {
  const baseIcons = 3;
  const extraCount = Math.max(0, count - baseIcons);

  return (
    <div className="flex items-center">
      {Array.from({ length: baseIcons }, (_, i) => (
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
  );
};

export default function Hero() {
  return (
    <div className="border-b-2 bg-white border-[var(--boader)]">
      <div className="p-6 ">
        <div className="flex  items-center gap-6">
          <h1 className="text-2xl font-semibold">Sport Xi Project</h1>
          <div className="w-20 text-[10px] flex justify-center items-center rounded-[4px] h-5 bg-[var(--orange)]">
            In progress
          </div>
        </div>

        <p className="text-[var(--gray)] text-[16px] mt-2">event production</p>
        <div className="flex items-center gap-[18px] mt-2 ">
          <h1 className="text-[var(--gray)] text-[16px]">assigned</h1>
          <AssignedIcons count={5} />
          <div className="w-[100px] h-[30px] text-[var(--gray)] border-[var(--boader)] border-2 rounded-full flex items-center justify-center text-[12px]">
            Manage <GoPencil className="ml-1 text-[12px] text-[var(--gray)]" />
          </div>

        </div>

        <div className="border-b-2 border-[var(--boader)] mt-6" />

        <p className="text-[var(--gray)] text-[14px] mt-4">Last updated on: 04 April, 2022</p>
      </div>
    </div>
  );
}
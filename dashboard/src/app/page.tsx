import Hero from "@/components/Hero";
import Swimlane from "@/components/Swimlane";

export default function Home() {
  return (
    <div className="h-screen overflow-auto">
      <Hero />
      <Swimlane/>
    </div>
  );
}
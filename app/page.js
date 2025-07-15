import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import WelcomeSection from "./components/WelcomeSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Content-Welcome to the Webapp */}
        <WelcomeSection />
        {/* Video of how to use it */}
        <VideoSection />
      </div>
    </div>
  );
}

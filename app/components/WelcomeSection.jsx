"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

function WelcomeSection() {
  const router = useRouter();
  const onDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <div className="p-5  my-10 ml-10">
      <div className="grid grid-cols-1 gap-8">
        <h2 className="text-primary text-3xl justify-center">
          AI-Powered Mock Interviews, Real Feedback.
        </h2>
        <p className="text-xl justify-center">
          Stressed about interviews? AI Interview Mocker simulates real
          interviews with tailored questions and instant feedback. Practice
          anytime, anywhere—and walk into your next interview with confidence.
        </p>
        <p className="text-lg  justify-center">
          Job interviews can be nerve-wracking. This app helps you practice with
          AI, get real-time feedback, and boost your confidence before the real
          deal.
        </p>
      </div>
      <div className=" my-10 cursor-pointer">
        <Button className="cursor-pointer" onClick={onDashboard}>
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}

export default WelcomeSection;

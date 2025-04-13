"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/FormContainer";

type FormData = {
  jobPosition?: string;
  jobDescription?: string;
  duration?: string;
  type?: string[];
};

function CreateInterview() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);

  const handleFormSubmit = (formData: FormData) => {
    console.log("Final form data:", formData);
  };

  return (
    <div className="mt-5 px-10 md:px-24 lg:px-44 xl:px-56">
      <div className="flex gap-5 items-center">
        <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        <h2 className="font-bold text-2xl">Create new interview</h2>
      </div>
      <Progress className="my-5" value={step * 33.33} />
      <FormContainer onSubmitForm={handleFormSubmit} />
    </div>
  );
}

export default CreateInterview;

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { InterviewType } from "@/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type FormData = {
  jobPosition?: string;
  jobDescription?: string;
  duration?: string;
  type?: string[];
};

type FormContainer = {
  onSubmitForm: (data: FormData) => void;
};

function FormContainer({ onSubmitForm }: FormContainer) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      jobPosition: "",
      jobDescription: "",
      duration: "",
      interviewType: [] as string[],
    },
  });

  const interviewType = watch("interviewType");

  const toggleInterviewType = (type: string) => {
    const newTypes = interviewType.includes(type)
      ? interviewType.filter((t) => t !== type)
      : [...interviewType, type];

    setValue("interviewType", newTypes);
  };

  const onSubmit = (data: FormData) => {
    onSubmitForm(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5 bg-white rounded-xl">
      <div>
        <h2 className="text-sm font-medium">Job position</h2>
        <Input
          className="mt-2"
          placeholder="e.g. Full stack, Data science"
          {...register("jobPosition")}
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Job description</h2>
        <Textarea
          className="h-[200px] mt-2"
          placeholder="Enter job description"
          {...register("jobDescription")}
        />
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview duration</h2>
        <Select onValueChange={(value) => setValue("duration", value)}>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            {["5 Min", "15 Min", "30 Min", "45 Min", "60 Min"].map((val) => (
              <SelectItem key={val} value={val}>
                {val}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5">
        <h2 className="text-sm font-medium">Interview type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => {
            const isSelected = interviewType.includes(type.title);
            return (
              <div
                key={index}
                className={`flex items-center gap-2 p-1 px-2 rounded-2xl cursor-pointer border ${
                  isSelected
                    ? "bg-blue-100 border-primary"
                    : "bg-white border-gray-300"
                } hover:bg-secondary`}
                onClick={() => toggleInterviewType(type.title)}
              >
                <type.icon className="h-4 w-4" />
                <span>{type.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-7 flex justify-end">
        <Button type="submit">
          Generate question <ArrowRight />
        </Button>
      </div>
    </form>
  );
}

export default FormContainer;

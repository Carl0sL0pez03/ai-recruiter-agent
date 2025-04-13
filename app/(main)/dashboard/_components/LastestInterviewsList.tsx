"use client";
import { Video } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

type InterviewType = {
  id: string;
  title: string;
  createdAt: string;
};

function LastestInterviewsList() {
  const [interviewList, setInterviewList] = useState<InterviewType[]>([]);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Previously created interviews</h2>
      {interviewList?.length === 0 && (
        <div className="p-5 flex flex-col gap-3 items-center mt-5">
          <Video className="h-10 w-10 text-primary" />
          <h2>You dont have any interview created!</h2>
          <Button>+ Create new interview</Button>
        </div>
      )}
    </div>
  );
}

export default LastestInterviewsList;

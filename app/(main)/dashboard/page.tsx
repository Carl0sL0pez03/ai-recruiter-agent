import React from "react";

import {
  CreateOptions,
  LastestInterviewsList,
  WelcomeContainer,
} from "./_components";

function Dashboard() {
  return (
    <div>
      <WelcomeContainer />
      <h2 className="my-3 font-bold text-2xl">Dashboard</h2>
      <CreateOptions />

      <LastestInterviewsList />
    </div>
  );
}

export default Dashboard;

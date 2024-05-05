import React from "react";
import { navBarData, navBarData_2 } from "./components/navBarData";

const FP_navBar = () => {
  return (
    <div>
      <div className="flex flex-col g">
        <div className="flex flex-col gap-10 items-start pl-[20px]">
          {navBarData.map(
            (item: { content: string; icon: string }, index: number) => (
              <div className="flex items-center gap-2">
                <img
                  height="20"
                  width="20"
                  src={item.icon}
                  alt={item.content}
                />
                <div className="text-white text-xl">{item.content}</div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col gap-10 items-start pl-[20px]">
          {navBarData_2.map(
            (item: { content: string; icon: string }, index: number) => (
              <div className="flex items-center gap-2">
                <img
                  height="20"
                  width="20"
                  src={item.icon}
                  alt={item.content}
                />
                <div className="text-white text-xl">{item.content}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FP_navBar;

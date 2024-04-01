import DashCard from "@/components/DashCard";
import DashHeader from "@/components/DashHeader";
import { BarChart } from "@/components/BarChart";
import React from "react";
import { DoughnutChart } from "@/components/DoghnutChart";
import LastRecord from "@/components/LastRecord";
import { GoHomeFill } from "react-icons/go";

const data = [
  {
    icon: <GoHomeFill color="white" size={24} />,
    title: "Food and Drinks",
    time: "15:00",
    ammount: "- 2,000₮",
  },
  {
    icon: <GoHomeFill color="white" size={24} />,
    title: "Home Rent",
    time: "15:00",
    ammount: "- 2,000₮",
  },
  {
    icon: <GoHomeFill color="white" size={24} />,
    title: "Car",
    time: "15:00",
    ammount: "- 2,000₮",
  },
  {
    icon: <GoHomeFill color="white" size={24} />,
    title: "Util",
    time: "15:00",
    ammount: "- 2,000₮",
  },
  {
    icon: <GoHomeFill color="white" size={24} />,
    title: "Misc",
    time: "15:00",
    ammount: "- 2,000₮",
  },
  {
    icon: <GoHomeFill color="white" size={24} />,
    title: "Clothes",
    time: "15:00",
    ammount: "- 2,000₮",
  },
];
function Dashboard() {
  return (
    <div className="flex flex-col gap-9">
      <DashHeader />
      <div className="flex flex-col bg-[#F3F4F6] gap-5 h-fit">
        <DashCard />
        <div className="flex gap-4">
          <BarChart />
          <DoughnutChart />
        </div>
        <div className="bg-white rounded-xl flex flex-col m-[50px] shadow-xl">
          <div className="font-bold text-[16px] h-[56px] flex items-center p-5">
            <h2>Last Records</h2>
          </div>
          <div className="flex flex-col gap-3">
            {data.map((el, i) => (
              <LastRecord
                key={i}
                icon={el.icon}
                title={el.title}
                time={el.time}
                ammount={el.ammount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

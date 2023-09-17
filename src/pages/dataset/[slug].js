import React, { useState } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import ViewData from "../../components/Sections/ViewData";
import Stats from "../../components/Sections/Stats";
import Contribute from "../../components/Sections/Contribute";
import Code from "../../components/Sections/Code";
import AISwitch from "../../components/Sections/AISwitch";

const BlurredOverlay = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-md z-10">
    <div className="flex flex-col gap-[10px] p-10 bg-white rounded-xl">
      <img src="/icons/locked.svg" className="h-[120px]" alt="" />
      <span className="text-2xl font-semibold">Buy to View</span>
    </div>
  </div>
);

const TabTrigger = ({ value, label }) => (
  <Trigger
    className="focus:outline-none bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-[#9381FF] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current outline-none  cursor-pointer focus:outline-none"
    value={value}
  >
    {label}
  </Trigger>
);

const DataSetPage = () => {
  const [type, setType] = useState("pdf");
  const [isBought, setIsBought] = useState(false);

  const tabsConfig = [
    { value: "tab1", label: "View Data", content: <ViewData /> },
    { value: "tab2", label: "AI Actions", content: <AISwitch type={type} /> },
    { value: "tab3", label: "Contribute", content: <Contribute /> },
    { value: "tab4", label: "Code", content: <Code /> },
    { value: "tab5", label: "Stats", content: <Stats /> },
  ];
  return (
    <div className="flex flex-row gap-[60px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col gap-[10px] w-[350px] rounded-xl p-4 ring ring-indigo-50 bg-[#B8B8FF40]">
          <div>
            <img src="/icons/pdf.svg" className="h-[200px]" alt="" />
          </div>
          <p className="font-bold text-[20px]">Dataset Name</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            nulla amet voluptatum sit rerum, atque, quo culpa ut necessitatibus
            eius suscipit eum accusamus, aperiam voluptas exercitationem facere
            aliquid fuga. Sint.
          </p>
          <div>
            <strong className="rounded-xl border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
              Category
            </strong>
          </div>
          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div
              data-tip="Users"
              className="flex items-center tooltip gap-[8px] text-[#9381FF]"
            >
              <i class="fa-solid fa-users"></i>
              <span>200</span>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div
              data-tip="Files"
              className="flex tooltip items-center gap-[8px] text-[#9381FF]"
            >
              <i class="fa-solid fa-file"></i>
              <span>200</span>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

            <div
              data-tip="Forks"
              className="flex tooltip items-center gap-[8px] text-[#9381FF]"
            >
              <i class="fa-solid fa-code-fork"></i>
              <span>200</span>
            </div>
          </div>
        </div>
        {isBought ? (
          <button className="btn btn-outline btn-primary rounded-xl">
            Fork with 100{" "}
            <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
          </button>
        ) : (
          <button
            className="btn btn-outline btn-primary rounded-xl"
            onClick={() => setIsBought(true)}
          >
            Buy with 50{" "}
            <img src="/icons/royale-coin.svg" className="h-[32px]" alt="" />
          </button>
        )}
      </div>
      <div className="rounded-xl p-4 ring ring-indigo-50">
        <Root className="flex flex-col w-[1100px]" defaultValue="tab1">
          <List
            className="shrink-0 flex border-b border-[#3d445110]"
            aria-label="Manage your account"
          >
            {tabsConfig.map((tab) => (
              <TabTrigger key={tab.value} value={tab.value} label={tab.label} />
            ))}
          </List>
          {tabsConfig.map((tab) => (
            <Content
              key={tab.value}
              className="grow p-5 bg-white rounded-b-md outline-none max-h-[750px] overflow-scroll relative"
              value={tab.value}
            >
              {tab.content}
              {!isBought && <BlurredOverlay />}
            </Content>
          ))}
        </Root>
      </div>
    </div>
  );
};

export default DataSetPage;

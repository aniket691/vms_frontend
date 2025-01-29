import React from "react";
import statUserIcon from "./images/stat-user-icon.png";
import statDocIcon from "./images/stat-doc.png";
import statSuccessIcon from "./images/stat-success.png";
import statVerifyIcon from "./images/stat-verify.png";


const Stat = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: statUserIcon,
              number: "10K",
              label: "एकूण नोंदणीकृत वापरकर्ते",
              bgcolor: "bg-[#DDE2E5]",
            },
            {
              icon: statDocIcon,
              number: "200+",
              label: "प्रक्रिया केलेल्या विनंत्या",
              bgcolor: "bg-[#FEF6E0]",
            },
            {
              icon: statVerifyIcon,
              number: "60K+",
              label: "सत्यापित केंद्रे",
              bgcolor: "bg-[#EAE3F6]",
            },
            {
              icon: statSuccessIcon,
              number: "6K+",
              label: "यशस्वी दर",
              bgcolor: "bg-[#DCF1F4]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgcolor} rounded-xl p-8 flex gap-x-6`}
            >
              <img src={stat.icon} alt={stat.label} className=" mb-2 w-14" />

              <div className="flex  flex-col items-start">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 ">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stat;

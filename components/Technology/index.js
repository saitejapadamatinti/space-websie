import { useState, useEffect } from "react";
import Navbar from "../Navbar";

const destinationTabs = [
  {
    tabNumber: "1",
    id: "1",
  },
  {
    tabNumber: "2",
    id: "2",
  },
  {
    tabNumber: "3",
    id: "3",
  },
];

const technologyArray = [
  {
    id: "1",
    spaceType: "THE TERMINOLOGY...",
    spaceWork: "LAUNCH VEHICLE",
    aboutSpace:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    spaceLanscapeImage: "/assets/technology/image-launch-vehicle-landscape.jpg",
    spacePotraiteImage: "/assets/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    id: "2",
    spaceType: "THE TERMINOLOGY...",
    spaceWork: "SPACEPORT",
    aboutSpace:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    spaceLanscapeImage: "/assets/technology/image-spaceport-landscape.jpg",
    spacePotraiteImage: "/assets/technology/image-spaceport-portrait.jpg",
  },
  {
    id: "3",
    spaceType: "THE TERMINOLOGY...",
    spaceWork: "SPACE CAPSULE",
    aboutSpace:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    spaceLanscapeImage: "/assets/technology/image-space-capsule-landscape.jpg",
    spacePotraiteImage: "/assets/technology/image-space-capsule-portrait.jpg",
  },
];

export default function Technology() {
  const [selectedTab, setSelectedTab] = useState(destinationTabs[0].id);
  const [filterdArray, setFilterdArray] = useState([]);

  const getFilterdProjectArry = () => {
    const newFilterdArray = technologyArray.filter((eachList) => {
      return eachList.id === selectedTab;
    });
    setFilterdArray(newFilterdArray);
  };

  useEffect(() => {
    getFilterdProjectArry();
  }, [selectedTab]);

  return (
    <div className="bg-ownTechnologyImageDesktop lg:h-screen bg-cover">
      <Navbar />
      <div className="flex justify-between lg:w-screen lg:mt-12">
        <div className="">
          <div className="max-md:flex max-md:justify-center max-md:items-center lg:pl-40 md-pl:">
            <h1 className="md:text-[20px] lg:text-[28px] text-white max-md:pl-0 max-lg:pl-[60px] max-lg:my-10">
              <span className="text-gray-600">03</span> SPACE LAUNCH 101
            </h1>
          </div>
          <div className="max-lg:w-screen">
            <div className="flex justify-between lg:w-screen items-center lg:flex-row md:flex-col max-md:flex-col">
              <div className="lg:pl-40 max-md:order-2 max-lg:order-2 max-lg:flex max-lg:space-x-5 max-lg:mt-14 max-lg:mb-3">
                {destinationTabs.map((each) => (
                  <div onClick={() => setSelectedTab(each.id)}>
                    {selectedTab === each.id ? (
                      <div className="bg-white rounded-full flex cursor-pointer justify-center items-center w-[60px] h-[60px] text-[32px] mb-6">
                        {each.tabNumber}
                      </div>
                    ) : (
                      <div className="bg-transparent text-white border-2 cursor-pointer border-white rounded-full flex justify-center items-center w-[60px] h-[60px] text-[32px] mb-6">
                        {each.tabNumber}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="max-md:order-3 max-lg:order-3">
                {filterdArray.map((each) => (
                  <div className="max-lg:text-center max-lg:pb-14">
                    <p className="text-ownParaColor text-[16px] ">
                      {each.spaceType}
                    </p>
                    <h1 className="md:text-[40px] lg:text-[56px] text-white max-lg:py-2">
                      {each.spaceWork}
                    </h1>
                    <p className="max-md:text[15px] max-md:w-[357px] text-ownParaColor md:text-[16px] lg:text-[18px] w-[444px]">
                      {each.aboutSpace}
                    </p>
                  </div>
                ))}
              </div>
              <div className=" ">
                {filterdArray.map((each) => (
                  <div className="lg:w-[450px] lg:h-[450px] max-md:order-1 max-lg:order-1 md:w-screen md:h-[400px]">
                    <img
                      className="lg:h-[100%] md:w-full md:h-full object-cover hidden lg:block"
                      src={each.spacePotraiteImage}
                    />
                    <img
                      className="lg:h-[100%] md:w-full md:h-full object-cover lg:hidden"
                      src={each.spaceLanscapeImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

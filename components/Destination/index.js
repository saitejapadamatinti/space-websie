import { useEffect, useState } from "react";
import Navbar from "../Navbar";

const destinationTabs = [
  {
    destinationName: "MOON",
    id: "moon",
  },
  {
    destinationName: "MARS",
    id: "mars",
  },
  {
    destinationName: "EUROPA",
    id: "europa",
  },
  {
    destinationName: "TITAN",
    id: "titan",
  },
];

const destionationDataList = [
  {
    id: "moon",
    destinationImage: "/assets/destination/image-moon.png",
    destinationName: "MOON",
    content:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400",
    estTravelTime: "3 DAYS",
  },
  {
    id: "mars",
    destinationImage: "/assets/destination/image-mars.png",
    destinationName: "MARS",
    content:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDistance: "225 MIL",
    estTravelTime: "9 MONTHS",
  },
  {
    id: "europa",
    destinationImage: "/assets/destination/image-europa.png",
    destinationName: "EUROPA",
    content:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL. KM",
    estTravelTime: "3 YEARS",
  },
  {
    id: "titan",
    destinationImage: "/assets/destination/image-titan.png",
    destinationName: "TITAN",
    content:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL KM",
    estTravelTime: "7 YEARS",
  },
];

export default function Desination() {
  const [selectedTab, setSelectedTab] = useState(destinationTabs[0].id);
  const [filterdArray, setFilterdArray] = useState([]);

  const getFilterdProjectArry = () => {
    const newFilterdArray = destionationDataList.filter((eachList) => {
      return eachList.id === selectedTab;
    });
    setFilterdArray(newFilterdArray);
  };

  useEffect(() => {
    getFilterdProjectArry();
  }, [selectedTab]);

  return (
   
    <div className="bg-ownDestinationIamgeDesktop xl:h-screen w-screen">
      <Navbar />
      <div className="max-md:pb-8 max-md:justify-center flex lg:justify-center lg:mt-12">
        <div className="lg:w-4/5 max-md:flex max-md:flex-col max-md:items-center max-md:text-center">
          <div>
            <h1 className=" md:text-[20px] lg:text-[28px] text-white xl:mb-12 md:pt-10 lg:pt-0  md:pl-[60px] lg:pl-[0px]">
              <span className="text-gray-600">01</span> PICK YOUR DESTINATION
            </h1>
          </div>
          <div className="flex text-white justify-end only: lg:text[16px] max-md:hidden md:hidden lg:block">
            <div className="flex justify-end">
              <div className="lg:w-3/6 space-x-4">
                {destinationTabs.map((each) => (
                  <button onClick={() => setSelectedTab(each.id)}>
                    {selectedTab === each.id ? (
                      <p className="underline decoration-2 underline-offset-8">
                        {each.destinationName}
                      </p>
                    ) : (
                      <p>{each.destinationName}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex max-lg:justify-center md:w-screen md:text-center md:py-14 lg:p-0 lg:w-auto">
            {filterdArray.map((eachItem) => (
              <div className="max-md:text-center max-md:items-center max-md:flex-col flex lg:justify-center lg:flex-row md:flex-col lg:space-x-40">
                <div className="max-md:w-[180px] max-md:pt-[20px] md:mb-10 lg:m-0">
                  <img src={eachItem.destinationImage} className="md:inline" />
                </div>
                <div className="flex space-x-4 max-md:text-[14px] text-white justify-end max-md:justify-center max-md:py-6 xl:pr-72 xl:text[16px] lg:hidden md:block">
                  {destinationTabs.map((each) => (
                    <button onClick={() => setSelectedTab(each.id)}>
                      {selectedTab === each.id ? (
                        <p className="underline decoration-2 underline-offset-8">
                          {each.destinationName}
                        </p>
                      ) : (
                        <p>{each.destinationName}</p>
                      )}
                    </button>
                  ))}
                </div>
                <div className="max-md:items-center flex flex-col justify-start lg:text-start">
                  <h1 className="max-md:text-[56px] xl:text-[100px] text-white md:text-[80px]">
                    {eachItem.destinationName}
                  </h1>
                  <p className="max-md:w-[327px] lg:w-[444px] text-ownParaColor leading-8 md-text[16px] md:w-[573px]">
                    {eachItem.content}
                  </p>
                  <hr className="max-md:w-[100%] opacity-25 my-10" />
                  <div className="max-md:flex-col max-md:space-x-0 max-md:space-y-10 flex md:justify-center lg:justify-start space-x-20">
                    <div>
                      <p className="text-[14px] text-ownParaColor">
                        AVG. DISTANCE
                      </p>
                      <h1 className="text-[28px] text-white">
                        {eachItem.avgDistance}
                      </h1>
                    </div>
                    <div>
                      <p className="text-[14px] text-ownParaColor">
                        EST. TRAVEL TIME
                      </p>
                      <h1 className="text-[28px] text-white">
                        {eachItem.estTravelTime}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}

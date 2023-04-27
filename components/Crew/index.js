import { useEffect, useState } from "react";
import Navbar from "../Navbar";

const crewTabsListArray = [
  {
    id: "commander",
  },
  {
    id: "mission specialist",
  },
  {
    id: "pilot",
  },
  {
    id: "flight engineer",
  },
];

const crewArray = [
  {
    id: "commander",
    personRole: "COMMANDER",
    personName: "DOUGLAS HURLEY",
    aboutPerson:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    personeImage: "/assets/crew/image-douglas-hurley.png",
  },
  {
    id: "mission specialist",
    personRole: "MISSION SPECIALIST",
    personName: "MARK SHUTTLEWORTH",
    aboutPerson:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    personeImage: "/assets/crew/image-mark-shuttleworth.png",
  },
  {
    id: "pilot",
    personRole: "PILOT",
    personName: "VICTOR GLOVER",
    aboutPerson:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    personeImage: "/assets/crew/image-victor-glover.png",
  },
  {
    id: "flight engineer",
    personRole: "FILGHT ENGINEER",
    personName: "ANOUSHEN ANSARI",
    aboutPerson:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    personeImage: "/assets/crew/image-anousheh-ansari.png",
  },
];

export default function Crew() {
  const [crewTabsList, setCrewTabsList] = useState(crewTabsListArray[0].id);
  const [filterdCrewArray, setFilterdCrewArray] = useState([]);

  console.log(crewTabsList);

  useEffect(() => {
    const filterdCrew = crewArray.filter((each) => {
      return each.id === crewTabsList;
    });
    setFilterdCrewArray(filterdCrew);
  }, [crewTabsList]);

  return (
    <div className="max-md:bg-ownCrewImageMobile max-md:h-screen lg:bg-ownCrewImageDesktop md:bg-ownCrewImageTablet lg:h-screen bg-cover">
      <Navbar />
      <div className="flex lg:justify-center lg:mt-12">
        <div className="lg:w-4/5">
          <div className="max-md:flex max-md:justify-center lg:flex-none">
            <h1 className="md:text-[20px] lg:text-[28px] text-white lg:mb-12 md:pt-10 lg:pt-0  md:pl-[60px] lg:pl-[0px]">
              <span className="text-gray-600">02</span> MEET YOUR CREW
            </h1>
          </div>
          <div className="max-lg:w-screen">
            {filterdCrewArray.map((each) => (
              <div className="flex md:mt-10 lg:mt-[126px] max-lg:flex-col">
                <div className="max-md:order-3 max-lg:text-center max-lg:flex max-lg:flex-col max-lg:items-center">
                  <p className="max-md:text-[16px] text-ownParaColor2 md:text-[28px] lg:text-[32px]">
                    {each.personRole}
                  </p>
                  <h1 className="max-md:text-[24px] text-white md:text-[40px] lg:text-[52px] max-lg:pb-4">
                    {each.personName}
                  </h1>
                  <p className="max-md:w-[327px] max-md:text-[15px] w-[458px] md:text[16px] text-ownParaColor ">
                    {each.aboutPerson}
                  </p>
                  <div className="max-md:order-[-1] flex space-x-4 lg:absolute lg:bottom-20 max-lg:pt-10 max-md:pb-8">
                    {crewTabsListArray.map((eachItem) => (
                      <button
                        onClick={() => setCrewTabsList(eachItem.id)}
                        key={eachItem.id}
                      >
                        {crewTabsList === eachItem.id ? (
                          <div className="bg-white w-3.5 h-3.5 rounded-full "></div>
                        ) : (
                          <div className="bg-white w-3.5 h-3.5 rounded-full opacity-[0.25]"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="max-md:flex-col max-md:justify-center max-md:items-center max-md:m-0 max-md:pt-8 ml-32 max-lg:mt-[70px] max-lg:flex max-lg:justify-center">
                  <img
                    className="max-md:w-[177px] lg:absolute lg:bottom-0 w-[420px]"
                    src={each.personeImage}
                  />
                  <hr className="opacity-25 w-4/5 max-md:block md:hidden" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

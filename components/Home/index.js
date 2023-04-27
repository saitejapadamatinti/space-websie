import Navbar from "../Navbar";

export default function Home() {
  return (
    <div className="max-md:bg-ownHomeBackgroundImageMobile lg:bg-ownHomeBackgroundImage md:bg-ownHomeBackgroundImageMd xl:h-screen md:pb-12 bg-cover max-md:pb-[50px]">
      <div className="container-xl">
        <Navbar />
      </div>
      <div className="flex xl:h-4/6 max-md:flex-col xl:flex-row xl:justify-around items-center md:flex-col md:space-y-10 md:text-center md:space-y-36">
        <div className="max-md:text-center">
          <h1 className="max-md:text-[16px] text-white text-[28px] max-lg:text-[20px] mt-[100px]">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <p className="max-md:text-[80px] text-[150px] text-white">SPACE</p>
          <p className="max-md:text-[15px] max-md:w-[327px] w-[444px] text-ownParaColor text-[18px] max-lg:text-[19px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="max-md:mt-[100px] max-md:w-[150px] max-md:h-[150px] bg-white p-20 rounded-full w-[274px] h-[274px] flex justify-center items-center">
          <h1 className="max-md:text-[20px] text-ownHeadColor text-[32px]">
            EXPLORE
          </h1>
        </div>
      </div>
    </div>
  );
}

import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="w-full bg-[#122315] rounded-3xl ml-16 items-start">
      <div className="container mx-auto flex px-5 flex-col">
        <p className=" px-4 bg-[#57e44b] w-72 rounded-r-3xl mt-10 font-medium py-1 text-[#122315]">
          Best Blog Website In This Universe
        </p>
        <div className=" lg:w-2/3 w-full">
          <h1 className="sm:text-7xl text-3xl mt-8 font-black text-[#f3ede4]">
            Your Daily Dose of{" "}
            <span className="text-[#57e44b]">Inspiration & Insight</span>
          </h1>
          <p className="leading-relaxed text-[#f3ede4] mt-8">
            Welcome, your go-to source for fresh ideas, inspiring stories, and
            expert insights. Whether you&apos;re here to learn something new,
            spark your creativity, or stay updated on the latest trends,
            we&apos;ve got you covered. Dive into a world of knowledge, and let
            your curiosity guide the way!
          </p>
          <div className="flex mt-8 mb-10">
            <Button className='bg-[#57e44b] hover:bg-[#77d86e] text-[#122315] font-bold'>GET STARTED</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

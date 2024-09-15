import { useEffect, useState } from "react";
import { Button } from "../ui/button";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full bg-[#122315] mx-auto px-4 sm:px-6 lg:px-8">
      <section className=" body-font">
        <div className="container mx-auto flex flex-col lg:flex-row items-center py-10 lg:py-0">
          <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
            <h1
              className={`title-font text-3xl sm:text-7xl mb-4 font-black text-[#f3ede4] transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              KNOWLEDGE <br />{" "}
              <span className="text-[#57e44b]">MEETS CURIOSITY</span>
            </h1>
            <p
              className={`mb-8 leading-relaxed text-[#f3ede4]  transition-all duration-1000 delay-300 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Welcome, where inspiration meets insight.
              Whether you&apos;re seeking fresh ideas, thoughtful perspectives, or
              practical tips, we&apos;ve got you covered. Our goal is to empower
              curious minds and foster meaningful conversations through diverse
              topics. Dive in, explore, and let each post spark your creativity
              and growth!
            </p>
            <div
              className={`flex justify-center lg:justify-start transition-all duration-1000 delay-600 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Button className="bg-[#57e44b] hover:bg-[#77d86e] text-[#122315] font-bold">Get Started</Button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full w-5/6 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              className="w-full h-auto"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#57e44b", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#2a4d21", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect width="400" height="400" fill="#122315" />
              <path
                d="M200,50 L350,150 L300,350 L100,300 L50,150 Z"
                fill="url(#grad1)"
              />
              <circle cx="200" cy="200" r="80" fill="#ffd700" opacity="0.8" />
              <path
                d="M150,100 Q200,50 250,100 T350,150"
                fill="none"
                stroke="#ff8c00"
                strokeWidth="8"
              />
              <path
                d="M50,250 Q100,300 150,250 T250,200"
                fill="none"
                stroke="#57e44b"
                strokeWidth="8"
              />
              <circle cx="100" cy="100" r="20" fill="#32CD32" />
              <circle cx="300" cy="300" r="30" fill="#FFD700" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

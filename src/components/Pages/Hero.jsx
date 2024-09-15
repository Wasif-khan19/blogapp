function Hero() {
  return (
    <div className="w-full bg-[#122315]">
      <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
        <p className="bg-[#57e44b] rounded-3xl mb-6 px-4 font-medium py-1 text-[#122315]">Best Blog Website In This Universe</p>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="sm:text-7xl text-3xl mb-5 font-black text-[#f3ede4]">
          Your Daily Dose of <span className="text-[#57e44b]">Inspiration & Insight</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

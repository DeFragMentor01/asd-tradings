import React from "react";
import logoPng from "../assets/asd-image2.png";
import screenImg from "../assets/factory-img.jpeg";

const Hero = () => {
  return (
    <div
      className="bg-gray-300 flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="w-full md:w-4/5 xl:w-3/5 mx-auto p-6 rounded-md max-w-5xl flex flex-wrap px-4 md:px-0">
        <div className="w-full md:w-1/2 flex justify-center flex-col items-center pr-4">
          <img
            src={logoPng}
            alt="Logo"
            className="w-4/5 md:w-4/5 lg:w-4/5 mb-24 mt-0 md:mt-[-5rem]" // Increased the width slightly
          />

          <img
            src={screenImg}
            alt="Stock"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover mt-8 md:mt-0" // Increased the top margin to create more space
          />
        </div>

        <div className="w-full md:w-1/2 flex-grow flex flex-col justify-start md:pl-4 text-center md:text-center">
          <h1
            className="text-5xl md:text-7xl font-bold leading-tight"
            style={{ color: "#1B1D51" }}
          >
            Hello,
          </h1>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#1B1D51" }}
          >
            a bit about us
          </h2>
          <div className="flex justify-center mt-8">
            <div className="flex justify-center items-center mx-4">
              <div
                className="w-12 md:w-24 h-12 md:h-24 rounded-full flex justify-center items-center"
                style={{ backgroundColor: "#C82D4D" }}
              >
                <p className="text-white font-bold text-sm md:text-xl">BUY</p>
              </div>
            </div>
            <div className="flex justify-center items-center mx-4">
              <div
                className="w-12 md:w-24 h-12 md:h-24 rounded-full flex justify-center items-center"
                style={{ backgroundColor: "#C82D4D" }}
              >
                <p className="text-white font-bold text-sm md:text-xl">SELL</p>
              </div>
            </div>
            <div className="flex justify-center items-center mx-4">
              <div
                className="w-12 md:w-24 h-12 md:h-24 rounded-full flex justify-center items-center"
                style={{ backgroundColor: "#C82D4D" }}
              >
                <p className="text-white font-bold text-sm md:text-xl">TRADE</p>
              </div>
            </div>
          </div>
          <div
            className="text-base md:text-md mt-6"
            style={{ color: "#1B1D51" }}
          >
            <p className="mt-4">
              Welcome to ASD Tradings, your global surplus inventory solutions
              provider.
            </p>
            <p className="mt-4">
              We specialize in seamlessly connecting surplus and excess stock
              buyers and sellers across the world.
            </p>
            <p className="mt-4">
              Our mission is simple: to create a dynamic marketplace where
              excess products find new homes and businesses unlock hidden value.
            </p>
            <p className="mt-4">
              At ASD Tradings, we understand the challenges that surplus
              inventory can pose for businesses of all sizes.
            </p>
            <p className="mt-4">
              We are committed to streamlining an efficient way to turn your
              surplus goods into opportunities.
            </p>
            <p className="mt-4">
              Whether you’re looking to clear out excess stock or find quality
              products at unbeatable prices, we’re here to bridge the gap.
            </p>
            <p className="mt-4">
              We’re always happy to chat, via Phone, Email, and LinkedIn –
              Looking forward to connecting!😃
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

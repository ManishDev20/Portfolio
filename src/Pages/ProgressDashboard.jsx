import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProgressDashboard = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeLeft = newYearDate - now;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [tooltip, setTooltip] = useState({ index: null, category: "" });

  const earnedData = [
    {
      category: "Freelancing",
      amount: 36500,
      color: "bg-purple-500",
    },
    { category: "E-books", amount: 0, color: "bg-sky-500" },
    { category: "Courses", amount: 0, color: "bg-yellow-500" },
    { category: "SaaS", amount: 0, color: "bg-pink-600" },
  ];

  const gridSquares = Array.from({ length: 1000 }, (_, index) => {
    const totalEarned = earnedData.reduce((acc, item) => acc + item.amount, 0);
    const squareNumber = index + 1;

    if (squareNumber <= totalEarned / 1000) {
      const category = earnedData.find(
        (item, idx) =>
          squareNumber <=
          earnedData
            .slice(0, idx + 1)
            .reduce((acc, item) => acc + item.amount / 1000, 0)
      );
      return { index, category: category.category, color: category.color };
    }

    return { index, category: "", color: "bg-gray-500" };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Scroll to top when Contact Page loads
  }, []);

  return (
    <div className="bg-[#161616]">
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 font-semibold p-2 text-white cursor-progress text-center sm:text-lg md:text-xl lg:text-2xl hover:underline">
        Follow My 1 Million Journey
      </div>

      <section className="max-w-[1000px] mx-auto min-h-screen py-10 px-5">
        <nav className="flex justify-between items-center px-2 sm:px-5 my-2 sm:my-5">
          <Link to={"/"} className="Logo text-white text-6xl sm:text-7xl">
            manish
          </Link>
          <a href="https://buymeacoffee.com/manishcodes">
            <img
              src="./img/yellow-button.png"
              alt="Buy me a coffee"
              className="w-28 sm:w-36"
            />
          </a>
        </nav>

        <div className="my-5 text-center text-white text-xl sm:text-2xl md:text-3xl font-bold">
          MY ₹10,00,000 Grid
        </div>

        <div className="my-5 text-center text-white text-lg sm:text-xl md:text-2xl">
          Each Square Represents <span className="text-blue-500 ">1,000</span>{" "}
          Rupees.
        </div>

        <div className="grid place-items-center grid-cols-[repeat(10,_minmax(0,1fr))] min-[540px]:grid-cols-[repeat(20,_minmax(0,1fr))] min-[900px]:grid-cols-[repeat(40,_minmax(0,1fr))] gap-x-1 gap-y-1 py-2">
          {gridSquares.map(({ index, category, color }) => (
            <div className="relative flex items-center justify-center">
              {/* Pinging Circle  */}
              {category ? (
                <>
                  <div
                    className={`absolute w-[20px] h-[20px] ${color} rounded-full animate-ping  transition-colors delay-1000 duration-[3s]`}
                  ></div>
                </>
              ) : (
                <span></span>
              )}

              {/* Core Circle */}
              <div
                key={index}
                className={`${color} w-4 h-4 flex items-center justify-center hover:scale-110 relative`}
                onMouseEnter={() => setTooltip({ index, category })}
                onMouseLeave={() => setTooltip({ index: null, category: "" })}
              >
                {tooltip.index === index && (
                  //   tooltip container
                  <span
                    className={`absolute z-50 -top-10 w-max ${color} text-white text-xs px-2 py-1 rounded-full transition-all scale-100`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {category || "Unallocated"}
                    {/* Arrow */}
                    <span
                      className={`absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 ${color} rotate-45`}
                    />
                  </span>
                )}
              </div>
            </div>
            // square box
          ))}
        </div>

        <div className="w-full flex justify-between items-center my-5">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Ends on:</span>
            <span className="text-gray-400">31 December, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Last Update:</span>
            <span className="text-gray-400">17 March, 2025</span>
          </div>
        </div>

        <div className="countdown bg-gradient-to-r from-slate-800 via-slate-950 to-slate-800 text-white py-5 text-center rounded">
          <h1 className="text-xl font-bold mb-6">Challenge will ends in</h1>
          <div className="flex justify-center gap-4 text-xl">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="flex flex-col items-center">
                <span className="font-bold">{value}</span>
                <span>{key}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 my-10 text-white text-lg">
          <h2 className="font-bold text-2xl">Earning Breakdown</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {earnedData.map(({ category, amount, color }) => (
              <div
                key={category}
                className={`p-4 rounded shadow-lg flex flex-col items-center ${color}`}
              >
                <span className="font-bold">{category}</span>
                <span>₹{amount}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressDashboard;

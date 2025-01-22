import React from "react";

const ProfileWatchlist = () => {
  return (
    <div>
      <div>
        <div className="text-2xl text-white font-bold py-4 ">Watchlist</div>
        <div className="border-b "></div>
      </div>

      <div className="text-white pt-6 flex flex-col items-center gap-4 ">
        <div className="flex flex-col justify-center items-center gap-2 w-80 h-60 ">
          <div className="text-center text-white font-bold text-2xl ">
            No Watchlist Found
          </div>

          <div className="text-center text-gray-500 py-4">
            Looks like you have nothing in your watchlist. You can add something
            from Home.
          </div>
          <button className="bg-vividRed rounded-2xl text-white px-8 py-1">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileWatchlist;

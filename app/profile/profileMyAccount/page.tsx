import React from "react";
import { IoIosWarning } from "react-icons/io";

const userInfo = [
  { label: "Name", value: "Akash" },
  { label: "Email", value: "NA" },
  { label: "Mobile", value: "8976123450" },
  { label: "Country", value: "India" },
  { label: "State", value: "Madhya Pradesh" },
  { label: "Age", value: "26-30 Years" },
  { label: "Gender", value: "MALE" },
  { label: "Login Method", value: "Mobile" },
];

const ProfileMyAccount = () => {
  return (
    <div>
      <div>
        <div className="text-2xl text-white font-bold py-4 ">My Accounts</div>
        <div className="border-b "></div>
      </div>

      <div className="text-white pt-6 flex flex-col gap-4 ">
        {/* Subscription Details */}
        <div className="bg-[#10101A] rounded-t-3xl ">
          <div className="text-lg font-semibold p-2 py-4">
            Subscription Details
          </div>
          <div className="border-b border-red-500 "></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 ">
          {/* My Info Section */}
          <div className=" rounded-3xl w-full sm:w-1/2 bg-[#10101A] ">
            <div className="text-lg font-semibold p-2 py-4 ">My Info</div>
            <div className="border-b border-red-500 w-full "></div>

            <ul className="space-y-2 py-4 px-4 ">
              {userInfo.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium">{item.label}:</span>
                  <span className="text-yellow-400">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Devices Section */}
          <div className=" rounded-3xl w-full sm:w-1/2 bg-[#10101A] ">
            <div className="text-lg font-semibold p-2 py-4 ">Devices</div>
            <div className="border-b border-red-500 w-full "></div>
            <div className="flex flex-col ">
              <div className="flex justify-center items-center p-4 ">
                No content device available
              </div>
            </div>
          </div>
        </div>
        {/* History Section */}
        <div className=" rounded-3xl w-full bg-[#10101A] ">
          <div className="text-lg font-semibold p-2 py-4">
            My Content History
          </div>
          <div className="border-b border-red-500 w-full "></div>
          <div className="flex justify-center items-center p-4 ">
            No content history available
          </div>
        </div>
        {/* Watch History Section */}
        <div className=" rounded-3xl w-full bg-[#10101A] ">
          <div className="text-lg font-semibold p-2 py-4">My Watch History</div>
          <div className="border-b border-red-500 w-full "></div>
          <div className="flex flex-col p-4 ">
            <div>
              Content watch history enables you to access the following features
              of the app.
            </div>
            <ol className="list-decimal pl-6 py-2 flex flex-col gap-1">
              <li>Continue watching across multiple devices </li>
              <li>Pause/Resume feature </li>
              <li>Personalized content </li>
            </ol>
            <div className="border-b border-gray-700 w-full "></div>
            <div className="flex flex-col md:flex-row justify-end mt-4 gap-2">
              <div className="flex items-center gap-2">
                <IoIosWarning /> Do you still want to Delete?
              </div>
              <div className="flex gap-2 justify-center">
                <button className=" rounded-full border w-24 flex justify-center items-center py-2">
                  CANCEL
                </button>

                <button className=" rounded-full bg-vividRed w-24 flex justify-center items-center py-2">
                  YES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMyAccount;

"use client";
import { FaUserCircle } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoIosEye, IoMdEyeOff } from "react-icons/io";
import { MdArrowForwardIos, MdEdit } from "react-icons/md";

interface ProfileSidebarProps {
  closeSidebar: () => void;
  handleCompleteProfile: () => void;
  handleAddProfile: () => void;
  handlePasswordField: () => void;
  openPasswordField: boolean;
  handlePasswordFieldClose: () => void;
  showPassword: boolean;
  submitPassword: string;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowPassword: () => void;
  handleSubmitPassword: () => void;
  handleToogle: () => void;
  errorPassword: string;
  handleLanguageSelect: (language: string) => void;
  editCompleteProfile: boolean;
  switchProfile: boolean;
  editProfile: boolean;
  addProfile: boolean;
  toogleButton: boolean;
  selectedLanguage: string[];
  selectedRatings: string[];
  handleSelectRating: (rating: string) => void;
  ratings: {
    id: string;
    label: string;
  }[];
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  closeSidebar,
  handleCompleteProfile,
  handleAddProfile,
  editCompleteProfile,
  switchProfile,
  editProfile,
  addProfile,
  toogleButton,
  handleToogle,
  selectedLanguage,
  handleLanguageSelect,
  selectedRatings,
  handleSelectRating,
  handlePasswordField,
  openPasswordField,
  handlePasswordFieldClose,
  showPassword,
  handleShowPassword,
  submitPassword,
  handlePassword,
  handleSubmitPassword,
  errorPassword,
  ratings,
}) => {
  const ageRanges = [
    { value: "", label: "Select Age" },
    { value: "18-25", label: "18-25" },
    { value: "26-35", label: "26-35" },
    { value: "36-45", label: "36-45" },
    { value: "46-60", label: "46-60" },
    { value: "60+", label: "60+" },
  ];

  const stateName = [
    { label: "Select State" },
    { label: "MP" },
    { label: "UP" },
    { label: "UK" },
    { label: "JK" },
    { label: "RJ" },
    { label: "TN" },
    { label: "GJ" },
    { label: "AP" },
    { label: "HR" },
  ];

  const countryName = [
    { label: "Select Country" },
    { label: "India" },
    { label: "Spain" },
    { label: "Australia" },
    { label: "Japan" },
    { label: "Britain" },
  ];

  const languageName = [
    { label: "Tamil" },
    { label: "Telugu" },
    { label: "Malyalam" },
    { label: "kannada" },
    { label: "Hindi" },
    { label: "Bengali" },
    { label: "Marathi" },
    { label: "English" },
  ];
  return (
    <>
      {openPasswordField && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-[#262626] rounded-lg shadow-lg w-96 px-4 relative">
              <div className="py-4">
                <div className="text-lg font-bold text-white">
                  Password Required
                </div>
                <div className="text-white text-sm">
                  Enter the Password to Update this Settings
                </div>
              </div>

              <div className="relative">
                {/* Input Field */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500"></div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={submitPassword}
                  onChange={handlePassword}
                  className="w-full py-6 px-2 text-white bg-[#323232] p-0 pb-1 rounded-lg focus:outline-none placeholder-transparent "
                  placeholder="Enter your password"
                />
                <div
                  onClick={handleShowPassword}
                  className="absolute top-3/4 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <IoIosEye size={22} />
                  ) : (
                    <IoMdEyeOff size={22} />
                  )}
                </div>
              </div>
              {errorPassword && (
                <div className="text-vividRed text-sm px-2">
                  {errorPassword}
                </div>
              )}

              <div className="flex justify-end gap-3 py-3">
                <div>
                  <button
                    onClick={handlePasswordFieldClose}
                    className="border text-white px-4 py-2 rounded-full"
                  >
                    CANCEL
                  </button>
                </div>

                <div>
                  <button
                    onClick={handleSubmitPassword}
                    className="bg-vividRed px-6 py-2 rounded-full text-white"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40"
        onClick={closeSidebar}
      ></div>
      {editCompleteProfile ? (
        <>
          <div className="fixed right-0 top-0 h-screen overflow-y-auto  w-full sm:w-1/2 md:w-3/5 lg:w-2/6 bg-darkGray z-40 ">
            {switchProfile && (
              <>
                <div className="px-6 py-2 text-white">
                  <div className="text-xl font-bold py-4">Switch Profile</div>

                  <div className="flex flex-col md:flex-row gap-4">
                    {/* profile 1 */}
                    <div className=" bg-gray-800 rounded-2xl cursor-pointer w-full md:w-1/2 flex flex-col items-center py-6 px-2 border border-vividRed">
                      <div className=" bg-white p-2 rounded-full ">
                        <FaUserCircle
                          size={60}
                          className="text-vividRed bg-white rounded-full "
                        />
                      </div>
                      <div className="py-2">Akash sen</div>
                      <div className="py-1 text-brightYellow">Primary User</div>
                      <div className="py-1">
                        <button
                          className="border rounded-3xl px-4 py-1 flex items-center gap-2"
                          onClick={handleCompleteProfile}
                        >
                          <MdEdit />
                          Edit
                        </button>
                      </div>
                    </div>
                    {/* profile 2 */}
                    <div
                      onClick={handleAddProfile}
                      className=" bg-gray-800 rounded-2xl cursor-pointer w-full md:w-1/2 flex flex-col items-center py-6 px-2 border border-transparent hover:border-white"
                    >
                      <div className="bg-gray-600 p-2 rounded-full ">
                        <FiPlus
                          size={60}
                          className="text-white rounded-full "
                        />
                      </div>
                      <div className="py-2">Add Profiles</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 py-2 md:py-8 justify-center">
                  <button
                    onClick={closeSidebar}
                    className="text-white rounded-full border w-24 flex justify-center items-center py-2"
                  >
                    CANCEL
                  </button>

                  <button className=" rounded-full text-white bg-vividRed w-24 flex justify-center items-center py-2">
                    Select
                  </button>
                </div>
              </>
            )}

            {editProfile && (
              <div className="flex flex-col gap-4 ">
                <div className="px-6 py-2 text-white flex flex-col gap-6">
                  <div className="text-xl font-bold py-4">Edit Profile</div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* profile 1 */}
                    <div className=" flex gap-4 items-center ">
                      <div className=" flex justify-center items-center relative">
                        <FaUserCircle className=" h-16 w-16" />
                        <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-black ">
                          <MdEdit className=" h-full w-full text-black" />
                        </button>
                      </div>
                      <div className="cursor-pointer ">
                        <button
                          className="py-1 px-3 border rounded-full text-nowrap "
                          onClick={handleCompleteProfile}
                        >
                          Edit Complete Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-2 flex flex-col gap-6 ">
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="bg-transparent outline-none text-white border-b w-full pb-2 "
                  />
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="bg-transparent outline-none text-white border-b w-full pb-2"
                  />
                  <div
                    onClick={handlePasswordField}
                    className="w-full bg-gray-600 rounded-xl py-2 px-2 flex items-center  cursor-pointer text-white font-bold"
                  >
                    Set Pin
                    <span className=" ml-auto">
                      <MdArrowForwardIos className="text-white" size={16} />
                    </span>
                  </div>

                  <div className="text-yellow-400 ml-auto cursor-pointer">
                    Change Password ?
                  </div>
                  <div className="flex gap-4  justify-center">
                    <button
                      onClick={closeSidebar}
                      className="text-white rounded-full border w-24 flex justify-center items-center py-2"
                    >
                      CANCEL
                    </button>

                    <button className=" rounded-full text-white bg-vividRed w-24 flex justify-center items-center py-2">
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}

            {addProfile && (
              <div className="flex flex-col gap-4 ">
                <div className="px-6 py-2 text-white flex flex-col gap-6">
                  <div className="text-xl font-bold py-4">App Profile</div>

                  <div className="flex flex-col md:flex-row gap-6 ">
                    {/* profile 1 */}
                    <div className=" flex gap-4 items-center ">
                      <div className=" flex justify-center items-center relative">
                        <FaUserCircle className=" h-16 w-16" />
                        <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-black ">
                          <MdEdit className=" h-full w-full text-black" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" py-2 flex flex-col gap-6 ">
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="bg-transparent outline-none text-white border-b w-full pb-2 "
                    />

                    <div className="w-full bg-background rounded-xl py-2 px-2 flex justify-between items-center  cursor-pointer text-white ">
                      Kids Profile
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            onClick={handleToogle}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300 dark:bg-gray-700 peer-checked:after:translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>

                    <div className="w-full bg-background rounded-xl py-2 px-2 flex flex-col   cursor-pointer text-white ">
                      <span className="">Choose Preferred Languages</span>
                      <div className="flex py-2 flex-wrap gap-2">
                        {languageName.map((item) => {
                          return (
                            <div key={item.label}>
                              <button
                                onClick={() => handleLanguageSelect(item.label)}
                                className={`border rounded-full px-4 py-1 ${
                                  selectedLanguage.includes(item.label)
                                    ? "bg-vividRed"
                                    : ""
                                }`}
                              >
                                {" "}
                                {item.label}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {toogleButton && (
                      <>
                        <div
                          className={`w-full bg-background rounded-xl py-2 px-2  flex-col   cursor-pointer text-white  ${
                            toogleButton ? "block" : "hidden"
                          }`}
                        >
                          <span className="">Select Maturity Restrictions</span>
                          <div className="flex flex-col items-start space-y-6 relative py-2">
                            {ratings.map((rating) => (
                              <div
                                key={rating.id}
                                className="flex items-center space-x-3 relative"
                              >
                                <label className="flex items-center">
                                  <input
                                    type="checkbox"
                                    checked={selectedRatings.includes(
                                      rating.id
                                    )}
                                    onChange={() => {
                                      handleSelectRating(rating.id);
                                    }}
                                    className="w-6 h-6 accent-vividRed cursor-pointer"
                                  />
                                </label>
                                <span
                                  className={`text-sm ${
                                    selectedRatings.includes(rating.id)
                                      ? "text-white"
                                      : "text-gray-400"
                                  }`}
                                >
                                  {rating.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <div className="flex gap-4  justify-center">
                      <button
                        onClick={closeSidebar}
                        className="text-white rounded-full border w-24 flex justify-center items-center py-2"
                      >
                        CANCEL
                      </button>

                      <button className=" rounded-full text-white bg-vividRed w-24 flex justify-center items-center py-2">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="fixed right-0 top-0 h-screen overflow-y-auto md:overflow-y-hidden w-full sm:w-3/5  bg-darkGray z-40">
            {/* edit complete profle */}
            <div className=" h-full w-full ">
              <div className="px-10 py-4 text-white w-full h-full flex flex-col  sm:gap-10  ">
                <div className="font-bold py-4 w-full ">
                  <div className="text-xl "> Profile</div>
                  <div className="text-sm text-gray-300">
                    All Fields are mandatory
                  </div>
                </div>

                <div className="flex flex-col gap-4  w-full h-full ">
                  <div className=" py-2 flex flex-col sm:flex-row gap-10 w-full">
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="bg-transparent outline-none text-white border-b w-full pb-2 flex flex-1"
                    />
                    <input
                      type="text"
                      placeholder="Your Last Name"
                      className="bg-transparent outline-none text-white border-b w-full pb-2 flex flex-1"
                    />
                  </div>
                  <div className=" py-2 flex flex-col sm:flex-row gap-10 w-full">
                    <input
                      type="text"
                      placeholder="Mobile no"
                      className="bg-transparent outline-none text-white border-b w-full pb-2 flex flex-1"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="bg-transparent outline-none text-white border-b w-full pb-2 flex flex-1"
                    />
                  </div>
                  <div className=" py-2 flex flex-col sm:flex-row gap-10 w-full">
                    <select className="bg-transparent text-white border-b py-2 w-full sm:w-1/2 outline-none flex flex-1">
                      {ageRanges.map((ageRange) => (
                        <option
                          key={ageRange.value}
                          value={ageRange.value}
                          className="bg-darkGray"
                        >
                          {ageRange.label}
                        </option>
                      ))}
                    </select>
                    <div className="flex flex-1 gap-2 justify-between items-center">
                      <label className="w-full">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="hidden peer"
                        />
                        <div className="text-white border rounded-full px-2 py-2 text-center w-full peer-checked:bg-yellow-500 peer-checked:border-yellow-500 cursor-pointer">
                          Male
                        </div>
                      </label>
                      <label className="w-full">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="hidden peer"
                        />
                        <div className="text-white border rounded-full px-2 py-2 text-center w-full peer-checked:bg-yellow-500 peer-checked:border-yellow-500 cursor-pointer">
                          Female
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className=" py-2 flex flex-col sm:flex-row gap-10 w-full">
                    <select className="bg-transparent text-white border-b py-2 w-full sm:w-1/2 outline-none flex flex-1 ">
                      {stateName.map((stateName) => (
                        <option
                          key={stateName.label}
                          value={stateName.label}
                          className="bg-darkGray"
                        >
                          {stateName.label}
                        </option>
                      ))}
                    </select>
                    <select className="bg-transparent text-white border-b py-2 w-full sm:w-1/2 outline-none flex flex-1">
                      {countryName.map((countryName) => (
                        <option
                          key={countryName.label}
                          value={countryName.label}
                          className="bg-darkGray"
                        >
                          {countryName.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-4 py-2 justify-center">
                    <button
                      onClick={closeSidebar}
                      className="text-white rounded-full border w-32 flex justify-center items-center py-2"
                    >
                      BACK
                    </button>

                    <button className=" rounded-full text-white bg-vividRed w-32 flex justify-center items-center py-2">
                      DONE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileSidebar;

"use client";
import { useEffect, useRef, useState } from "react";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import {
  MdEdit,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import ProfileSidebar from "./profileSidebar/page";
import ProfileWatchlist from "./profileWatchlist/page";
import ProfileMyAccount from "./profileMyAccount/page";
import ProfileFeedback from "./profileFeedback/page";
import ProfileDevice from "./profileDevice/page";
import ProfileContactUs from "./profileContactUs/page";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { profileTab } from "../constantData/profileTabConst";

const Profile = () => {
  const router = useRouter();
  const isActivePath = usePathname();
  console.log("isActivePath", isActivePath);

  // Add Carousel button Here
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const [activeTab, setActiveTab] = useState("watchlist");
  const [sideBar, setSideBar] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [switchProfile, setSwitchProfile] = useState(false);
  const [editCompleteProfile, setEditCompleteProfile] = useState(false);
  const [addProfile, setAddProfile] = useState(false);
  const [toogleButton, setToggleButton] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [openPasswordField, setOpenPasswordField] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [submitPassword, setSubmitPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const handlePasswordField = () => {
    setOpenPasswordField(true);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordFieldClose = () => {
    setOpenPasswordField(false);
    setSubmitPassword("")
    setErrorPassword("")
    setShowPassword(false)
  };
const handleSubmitPassword = ()=>{
  if(!submitPassword.trim()){
    setErrorPassword("Please Fill the Password First")
  }
  else {
    setErrorPassword("")
  }
}
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitPassword(e.target.value);
    if (e.target.value.trim()) {
      setErrorPassword("");
    }
  };
  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(
      (prevSelected) =>
        prevSelected.includes(language)
          ? prevSelected.filter((item) => item !== language) // Remove if already selected
          : [...prevSelected, language] // Add if not selected
    );
  };
  const handleSelectRating = (rating: string) => {
    if (rating === "all") {
      setSelectedRatings((prev) =>
        prev.includes("all") ? [] : ratings.map((r) => r.id)
      );
    } else {
      setSelectedRatings(
        (prev) =>
          prev.includes(rating)
            ? prev.filter((item) => item !== rating) // Uncheck
            : [...prev, rating] // Check
      );
    }
  };
  const ratings = [
    { id: "all", label: "All (G)" },
    { id: "7+", label: "7+ (U)" },
    { id: "13+", label: "13+ (U/A)" },
    { id: "16+", label: "16+ (U/A)" },
    { id: "18+", label: "18+ (A)" },
  ];

  const handleToogle = () => {
    setToggleButton(!toogleButton);
  };

  useEffect(() => {
    if (activeTab === "subscriptions") {
      router.push("/premium");
    }
  }, [activeTab, router]);

  const renderContent = () => {
    switch (activeTab) {
      case "watchlist":
        return <ProfileWatchlist />;
      case "myaccount":
        return <ProfileMyAccount />;
      case "feedback":
        return <ProfileFeedback />;
      case "device":
        return <ProfileDevice />;
      case "subscriptions":
        return null;
      case "contactus":
        return <ProfileContactUs />;
      default:
        return null;
    }
  };

  const handleSwitchProfile = () => {
    setEditCompleteProfile(true);
    setSwitchProfile(true);
    setEditProfile(false);
    setAddProfile(false);
    openSidebarUSer();
  };
  const handleEditProfile = () => {
    setEditCompleteProfile(true);
    setSwitchProfile(false);
    setAddProfile(false);
    setEditProfile(true);
    openSidebarUSer();
  };
  const handleCompleteProfile = () => {
    setEditCompleteProfile(false);
    setSwitchProfile(false);
    setEditProfile(false);
    setAddProfile(false);
  };

  const handleAddProfile = () => {
    setAddProfile(true);
    setSwitchProfile(false);
  };
  const openSidebarUSer = () => {
    setSideBar(!sideBar);
  };
  const closeSidebar = () => {
    setSideBar(false);
    setOpenPasswordField(false);
  };
  // Disable background scrolling
  useEffect(() => {
    if (sideBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sideBar]);
  return (
    <>
      <div className=" custom-container py-2 px-4 ">
        <div className="text-white text-h1 py-2">My Profile</div>
        <div className="w-full p-2 sm:px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-vividRed rounded-t-lg sm:rounded-br-lg ">
          <div className="text-white flex items-center gap-4 text-nowrap">
            <div className="h-16 w-16 flex justify-center items-center relative">
              <FaUserCircle className=" h-full w-full" />
              <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-vividRed ">
                <MdEdit className=" h-full w-full text-vividRed" />
              </button>
            </div>
            <div className=" flex flex-col ">
              <span className=" font-bold ">User Name</span>
              <span className=" text-brightYellow cursor-pointer hover:underline text-h4 ">
                Subscription
              </span>
            </div>
          </div>
          <div className="text-white flex justify-center items-center gap-4 text-nowrap">
            <button
              className="cursor-pointer hover:underline "
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
            <span className="bg-white h-10 rounded-sm w-0.5 " />
            <button
              className=" py-1 px-4 border-2 rounded-full border-white flex justify-center items-center gap-2 "
              onClick={handleSwitchProfile}
            >
              <div>
                <FaUserFriends />
              </div>
              <div>Switch User</div>
            </button>
          </div>
        </div>

        {/* Carousel MenuTab */}
        <div className="relative sm:hidden">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-[45%] -translate-y-1/2 z-10 bg-gray-800 text-white py-1 px-1 rounded-full shadow-md hover:bg-vividRed "
          >
            <MdKeyboardArrowLeft size={18} />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto py-2 mx-8 gap-2  pb-4 scroll-smooth"
          >
            {profileTab.map((item, index) => (
              <Link href={item.route} key={index} passHref>
                {index === 0 || index >= profileTab.length - 1 ? null : (
                  <div
                    key={item.id}
                    className={`py-2 px-6 cursor-pointer rounded-2xl ${
                      activeTab === item.id
                        ? "bg-zinc-600"
                        : "hover:bg-gray-700 bg-darkGray"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <div className="flex items-center text-nowrap rounded-2xl gap-2 text-white">
                      {item.Icon}
                      {item.label}
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-[45%]  -translate-y-1/2 z-10 bg-gray-800 text-white py-1 px-1 rounded-full shadow-md hover:bg-vividRed "
          >
            <MdKeyboardArrowRight size={18} />
          </button>
        </div>

        <div className=" flex gap-2">
          <div className="w-full sm:w-2/5 md:w-1/4 bg-darkGray hidden sm:block ">
            <div className="space-y-2 py-4">
              {profileTab.map((item, index) => (
                <Link href={item.route} key={index} passHref>
                  {index === 0 || index >= profileTab.length - 1 ? (
                    ""
                  ) : (
                    <>
                      <div
                        key={item.id}
                        className={`py-2 px-6 text-white cursor-pointer ${
                          activeTab === item.id
                            ? "bg-zinc-600 border-r-2 border-brightYellow "
                            : "hover:bg-gray-700"
                        } `}
                        onClick={() => setActiveTab(item.id)}
                      >
                        <div className="flex items-center gap-6 text-nowrap">
                          {item.Icon}
                          {item.label}
                        </div>
                      </div>
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-3/5 md:w-3/4 ">{renderContent()}</div>
        </div>
      </div>

      {/* // switch user side bar */}
      {sideBar && (
        <ProfileSidebar
          closeSidebar={closeSidebar}
          handleCompleteProfile={handleCompleteProfile}
          handleAddProfile={handleAddProfile}
          editCompleteProfile={editCompleteProfile}
          switchProfile={switchProfile}
          editProfile={editProfile}
          addProfile={addProfile}
          toogleButton={toogleButton}
          handleToogle={handleToogle}
          selectedLanguage={selectedLanguage}
          handleLanguageSelect={handleLanguageSelect}
          selectedRatings={selectedRatings}
          handleSelectRating={handleSelectRating}
          handlePasswordField={handlePasswordField}
          openPasswordField={openPasswordField}
          handlePasswordFieldClose={handlePasswordFieldClose}
          handleShowPassword={handleShowPassword}
          showPassword={showPassword}
          submitPassword={submitPassword}
          handlePassword={handlePassword}
          handleSubmitPassword={handleSubmitPassword}
          errorPassword={errorPassword}
          ratings={ratings}
        />
      )}
    </>
  );
};

export default Profile;

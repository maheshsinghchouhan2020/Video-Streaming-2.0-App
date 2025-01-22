import { FaUserCircle } from "react-icons/fa";
import { LuListPlus } from "react-icons/lu";
import { RiUserStarLine } from "react-icons/ri";
// import { FiPlus } from "react-icons/fi";

import {
  MdImportantDevices,
  MdOutlineSubscriptions,
  MdOutlineSupportAgent,
  MdOutlineTextsms,
} from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";

export type profileTabProps = {
  id: string;
  label: string;
  route: string;
  Icon?: React.ReactNode;
  Icon2?: React.ReactNode;
  profilekey : string;
};

export const profileTab: profileTabProps[] = [
  {
    id: "profile",
    label: "My Profile",
    route: "/profile",
    Icon: <FaUserCircle />,
    Icon2: <IoIosArrowForward />,
    profilekey: "profile",
  },
  {
    id: "watchlist",
    label: "Watchlist",
    route: "/profile#watchlist",
    Icon: <LuListPlus />,
    profilekey: "watchlist",
  },
  {
    id: "myaccount",
    label: "My Accounts",
    route: "/profile#myaccount",
    Icon: <RiUserStarLine />,
    profilekey: "myaccount",
  },
  {
    id: "feedback",
    label: "Feedback",
    route: "/profile#feedback",
    Icon: <MdOutlineTextsms />,
    profilekey: "feedback",
  },
  {
    id: "device",
    label: "Devices",
    route: "/profile#device",
    Icon: <MdImportantDevices />,
    profilekey: "device",
  },
  {
    id: "subscriptions",
    label: "Subscriptions",
    route: "/profile#subscriptions",
    Icon: <MdOutlineSubscriptions />,
    profilekey: "subscriptions",
  },
  {
    id: "contactus",
    label: "Contact Us",
    route: "/profile#contactus",
    Icon: <MdOutlineSupportAgent />,
    profilekey: "contactus",
  },
  { id: "logout", label: "Logout", route: "/", profilekey: "logout", },
];

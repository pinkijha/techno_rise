import { GoStack, GoBriefcase, GoSignOut } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { CiCirclePlus, CiBookmark } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserList,PiNotebookLight } from "react-icons/pi";

export const sidebarItem = [
    {
        id: 1,
        name: 'Overview',
        icon:  <GoStack />,
    },
    {
        id: 2,
        name: 'Employer Profile',
        icon: <FaRegUserCircle />,
    },
    {
        id: 3,
        name: 'Post a Job',
        icon: <CiCirclePlus />,
    },
    {
        id: 4,
        name: 'My Jobs',
        icon: <GoBriefcase />,
    },
    {
        id: 5,
        name: 'Saved Candidates',
        icon: <CiBookmark />,
    },
    {
        id: 6,
        name: 'Plans and Billing',
        icon:   <PiNotebookLight />,
    },
    {
        id: 7,
        name: 'All Companies',
        icon: <PiUserList />,
    },
    {
        id: 8,
        name: 'Settings',
        icon:  <IoSettingsOutline />,
    },
    // {
    //     id: 9,
    //     name: 'Logout',
    //     icon:  <GoSignOut />,
    // },

]


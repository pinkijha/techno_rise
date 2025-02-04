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
        path: '/dashboard/overview',
    },
    {
        id: 2,
        name: 'Employer Profile',
        icon: <FaRegUserCircle />,
        path: '/employerprofile',
    },
    {
        id: 3,
        name: 'Post a Job',
        icon: <CiCirclePlus />,
        path: '/post-a-job',
    },
    {
        id: 4,
        name: 'My Jobs',
        icon: <GoBriefcase />,
        path: '/my-jobs',
    },
    {
        id: 5,
        name: 'Saved Candidates',
        icon: <CiBookmark />,
        path: '/saved-candidates',
    },
    {
        id: 6,
        name: 'Plans and Billing',
        icon:   <PiNotebookLight />,
        path: '/plans-billing',
    },
    {
        id: 7,
        name: 'All Companies',
        icon: <PiUserList />,
        path: '/all-companies',
    },
    {
        id: 8,
        name: 'Settings',
        icon:  <IoSettingsOutline />,
        path: '/dashboard/settings',
    },
    // {
    //     id: 9,
    //     name: 'Logout',
    //     icon:  <GoSignOut />,
    // },

]


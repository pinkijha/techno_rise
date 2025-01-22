import { FaUser, FaBriefcase, FaMoneyCheckAlt, FaCogs, FaSignOutAlt } from "./icons";
import { TiThMenu } from "react-icons/ti";


export const sidebarItem = [
    {
        id: 1,
        name: 'Overview',
        icon:  <TiThMenu/>,
    },
    {
        id: 2,
        name: 'Employer Profile',
        icon: <FaUser  />,
    },
    {
        id: 3,
        name: 'Post a Job',
        icon: <FaBriefcase  />,
    },
    {
        id: 4,
        name: 'My Jobs',
        icon: <FaMoneyCheckAlt  />,
    },
    {
        id: 5,
        name: 'Saved Candidates',
        icon: <FaUser  />,
    },
    {
        id: 6,
        name: 'All Companies',
        icon: <FaBriefcase  />,
    },
    {
        id: 7,
        name: 'Plans and Billing',
        icon:   <FaCogs  />,
    },
    {
        id: 8,
        name: 'Settings',
        icon:  <FaSignOutAlt  />,
    },
    {
        id: 9,
        name: 'Logout',
        icon:  <FaSignOutAlt  />,
    },

]


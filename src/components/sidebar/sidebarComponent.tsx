import Card from "../atom/card/card";
import Sidebar from "./sidebar";
import SidebarItem from "./sidebarItem";
import homeIcon from "../../assets/icons/sidebarIcons/home.svg";
import smsIcon from "../../assets/icons/sidebarIcons/smsIcon.svg";
import campaignIcon from "../../assets/icons/sidebarIcons/campaignIcon.svg";
import contactsIcon from "../../assets/icons/sidebarIcons/contactsIcon.svg";

import templatesIcon from "../../assets/icons/sidebarIcons/templatesIcon.svg";
import reportsIcon from "../../assets/icons/sidebarIcons/reportsIcon.svg";


const SidebarComponent = () => {
  const menuItems = [
    { name: "Home", iconSrc: homeIcon, link: "/home" },
    { name: "SMS", iconSrc: smsIcon, link: "/sms" },
    { name: "Campaign", iconSrc: campaignIcon, link: "/campaign" },
    { name: "Contacts", iconSrc: contactsIcon, link: "/contactlist" },
    { name: "Templates", iconSrc: templatesIcon, link: "/templates" },
    { name: "Reports", iconSrc: reportsIcon, link: "/reports" },
  ];
  return (
    <div className="w-[114px] p-[12px] min-h-full">
      <Card className="w-full h-full  shadow-lg">
        <Sidebar>
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              name={item.name}
              iconSrc={item.iconSrc}
              link={item.link}
            />
          ))}
        </Sidebar>
      </Card>
    </div>
  );
};

export default SidebarComponent;
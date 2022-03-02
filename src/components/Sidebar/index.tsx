// External
import { getSections } from "helpers/sections";
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { SidebarContainer, SidebarItem } from "./styles";

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {getSections.map((section) => (
        <Link to={`/${section.id}`} key={section.id}>
          <SidebarItem color={section.color}>{section.icon}</SidebarItem>
        </Link>
      ))}
    </SidebarContainer>
  );
};

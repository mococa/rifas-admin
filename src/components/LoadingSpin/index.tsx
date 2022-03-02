// External
import React from "react";

// Icons
import { BiLoaderAlt } from "react-icons/bi";

// Styles
import { LoadingContainer } from "./styles";

// Interfaces
interface Props {
  size?: number;
}
export const LoadingSpin: React.FC<Props> = ({ size }) => {
  return (
    <LoadingContainer aria-setsize={size}>
      <BiLoaderAlt />
    </LoadingContainer>
  );
};

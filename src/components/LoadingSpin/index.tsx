import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { LoadingContainer } from "./styles";

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

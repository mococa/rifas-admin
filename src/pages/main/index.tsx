import { useAuth } from "contexts/Auth";
import { getCookie } from "helpers/cookies";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";

interface Props {}

export const MainPage: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  const cookie = getCookie("jwt");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !cookie) {
      navigate("/auth");
    }
  }, [cookie, user, navigate]);

  return <div>hey</div>;
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navi = useNavigate();

  const navigateToHome = () => {
    navi("/");
  };

  const navigateToLogin = (backUrl: string): void => {
    localStorage.setItem("backUrl", backUrl);
    navi("/login");
  };

  const navigateToCreateAccount = () => {
    navi("/create-account");
  };

  const navigateToBack = (): void => {
    navi(localStorage.getItem("backUrl") || "/");
  };

  return {
    navigateToHome,
    navigateToLogin,
    navigateToCreateAccount,
    navigateToBack,
  };
};

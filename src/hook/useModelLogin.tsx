"use client";

import { useState } from "react";

export default function useModelLogin() {
  const [openModelLogin, setOpenModelLogin] = useState(false);

  const toggleModelLogin = () => {
    setOpenModelLogin(!openModelLogin);
  };

  return {
    openModelLogin,
    setOpenModelLogin,
    toggleModelLogin,
  };
}

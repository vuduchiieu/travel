import image from "@/assets/picture/image";
import React from "react";
import icon from "@/assets/icon/icon";

const LoginByIns = () => {
  return (
    <div className="flex items-center gap-x-1.5">
      <img
        className="rounded-lg"
        height="30"
        width="30"
        src={image.instagram}
        alt="instagramIcon"
      />
      <div className="text-xs text-white">
        {" "}
        Đăng nhập bằng tài khoản Instagram{" "}
      </div>
      <img height="16" width="16" src={icon.arrow_r_2_w} alt="arrow-right" />
    </div>
  );
};

export default LoginByIns;

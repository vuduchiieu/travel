"use client";
import React, { useEffect, useState } from "react";

import icon from "@/assets/icon/icon";
import axios from "axios";
import { MainLayout } from "@/layout/MainLayout";
import Image from "next/image";

type User = {
  id: string;
  username?: string;
  email?: string;
  name?: string;
  image?: any;
};

function Search() {
  const [listUser, setListUser] = useState<User[]>([]);
  const [valueSearch, setValueSearch] = useState<string>("");
  const handleCallListUser = async () => {
    const res = await axios.get(
      `${process.env.API_URL}/v1/user?page=1&pageSize=10`
    );

    setListUser(res.data.data);
  };
  useEffect(() => {
    handleCallListUser();
  }, []);

  return (
    <MainLayout>
      <div className="max-w-[620px] min-h-[820px] pt-[6px] mx-auto ">
        <div className="flex justify-center items-center outline outline-[0.5px] outline-[#00000026] w-[100%] h-[60px] p-[12px] rounded-[16px] bg-[#fff]">
          <Image
            width={32}
            height={32}
            src={icon.search}
            className="w-[32px] p-[8px]"
            alt=""
          />
          <input
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            className="w-[90%] outline-none"
            type="text"
            placeholder="Tìm kiếm"
          />
          {valueSearch ? (
            <button
              onClick={() => setValueSearch("")}
              className="w-[22px] h-[22px] p-[6px] rounded-[50%] bg-[#b8b8b8]"
            >
              <Image width={16} height={16} src={icon.close} alt="" />
            </button>
          ) : (
            <span className="w-[22px]"></span>
          )}
        </div>
        <div className="flex flex-col min-h-[500px]">
          {listUser.length > 0 ? (
            listUser.map((item, i) => (
              <div key={i} className="flex pt-[16px] min-h-[84px] ">
                <div className="pt-[4px] pb-[2px] pr-[12px]">
                  <Image
                    width={36}
                    height={36}
                    className="w-[36px] h-[36px] rounded-[100%]"
                    src={item.image || icon.defaultImage}
                    alt=""
                  />
                </div>
                <div className=" w-[90%] border-b-[1px] border-b-solid border-b-[#00000026]">
                  <div className="flex justify-between pb-[8px]">
                    <div>
                      <h2 className="font-semibold text-[15px]">
                        {item.username || item.email}
                      </h2>
                      <h3 className="font-normal text-[15[px] text-[#999999]">
                        {item.name}
                      </h3>
                    </div>
                    <button className="border-solid border-[1px] border-[#00000026] rounded-[10px] min-w-[104px] h-[34px] px-[16px]">
                      <p className="font-semibold text-[15px]">Theo dõi</p>
                    </button>
                  </div>
                  <p className="pb-[12px] font-normal text-[15px]">
                    40 người theo dõi
                  </p>
                </div>
              </div>
            ))
          ) : (
            <Image
              width={30}
              height={30}
              className="absolute w-[30px] top-[25%] left-[50%] right-[50%] animate-spin "
              src={icon.loading}
              priority
              alt=""
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Search;

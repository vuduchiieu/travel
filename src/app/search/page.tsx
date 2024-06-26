"use client";
import React, { useCallback, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import debounce from "lodash/debounce";
import axios from "axios";
import { MainLayout } from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

import icon from "@/assets/image/icon";
import { useAppContext } from "@/components/Context/Context";

type User = {
  _id: string;
  username?: string;
  email?: string;
  name?: string;
  image?: string;
  followers?: any;
};

export default function Search() {
  const { setContentAler, user } = useAppContext();
  const [listUser, setListUser] = useState<User[]>([]);
  const [valueSearch, setValueSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/v1/search?q=${query}`
      );
      const decodedToken: any = jwtDecode(response.data);
      setIsLoading(false);
      setListUser(decodedToken.data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      await handleSearch(query);
    }, 800),
    []
  );

  useEffect(() => {
    setIsLoading(true);
    debouncedSearch(valueSearch);
    return () => {
      debouncedSearch.cancel();
    };
  }, [valueSearch, debouncedSearch]);

  return (
    <MainLayout>
      <div className="max-w-[620px] min-h-[820px] pt-[6px] mx-auto ">
        <label
          htmlFor="search"
          className="flex justify-center items-center outline outline-[0.5px] outline-[#00000026] w-[100%] h-[60px] p-[12px] rounded-[16px] bg-[#fff] shadow-md mb-[12px]"
        >
          <Image
            width={32}
            height={32}
            src={icon.search}
            className="w-[32px] p-[8px]"
            alt=""
          />

          <input
            value={valueSearch}
            id="search"
            onChange={(e) => setValueSearch(e.target.value)}
            className=" w-[90%] h-[100%] outline-none"
            type="text"
            placeholder="Tìm kiếm"
          />
          {valueSearch ? (
            <button
              onClick={() => setValueSearch("")}
              className="w-[22px] h-[22px] p-[6px] rounded-[50%] bg-[#b8b8b8] "
            >
              <Image width={16} height={16} src={icon.close} alt="" />
            </button>
          ) : (
            <span className="w-[22px]"></span>
          )}
        </label>
        <div className="flex flex-col h-[80vh] overflow-y-auto">
          {isLoading ? (
            <Image
              width={30}
              height={30}
              className="absolute w-[30px] top-[25%] left-[50%] right-[50%] animate-spin "
              src={icon.loading}
              priority
              alt=""
            />
          ) : listUser.length === 0 ? (
            <div className="flex justify-center items-center w-[100%] h-[300px]">
              <p className="text-[#999] font-normal">Không tìm thấy ai cả</p>
            </div>
          ) : (
            listUser.map((item, i) => (
              <div key={i} className="flex pt-[16px] min-h ">
                <Link
                  href={`/${item.email}`}
                  className="pt-[4px] pb-[2px] pr-[12px]"
                >
                  <Image
                    width={36}
                    height={36}
                    className="w-[36px] h-[36px] rounded-[100%]"
                    src={item.image || icon.defaultImage}
                    alt=""
                  />
                </Link>
                <div className=" w-[90%] border-b-[1px] border-b-solid border-b-[#00000026]">
                  <div className="flex justify-between pb-[8px]">
                    <Link href={`/${item.email}`}>
                      <h2 className="font-semibold text-[15px]">
                        {item.username || item.email}
                      </h2>
                      <h3 className="font-normal text-[15[px] text-[#999999]">
                        {item.name}
                      </h3>
                    </Link>
                    <button
                      onClick={() => {
                        setContentAler("Chức năng đang cập nhật");
                      }}
                      style={
                        item.followers.some((i: any) => i._id === user.user._id)
                          ? { backgroundColor: "#fff" }
                          : {}
                      }
                      className="flex justify-center items-center h-[36px] min-w-[120px] py-[16px] border border-solid border-[#00000026] bg-[#000] rounded-[10px]"
                    >
                      {item.followers.some(
                        (i: any) => i._id === user.user._id
                      ) ? (
                        <p className="font-semibold text-[#000] text-[15px]">
                          Đang theo dõi
                        </p>
                      ) : (
                        <p className="font-semibold text-[#fff] text-[15px]">
                          Theo dõi
                        </p>
                      )}
                    </button>
                  </div>
                  <p className="pb-[12px] font-normal text-[15px]">
                    {item.followers.length} người theo dõi
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
}

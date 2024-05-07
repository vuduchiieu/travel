"use client";
import { useEffect, useState } from "react";
import icon from "@/assets/icon/icon";
import Header from "@/components/Header/Header";
import axios from "axios";

type User = {
  id: string;
  username?: string;
  email?: string;
  name?: string;
  image?: string;
};

function Search() {
  const [listUser, setListUser] = useState<User[]>([]);
  useEffect(() => {
    const handleCallListUser = async () => {
      const res = await axios.get(
        "https://be-travel-93253ee5ae8f.herokuapp.com/v1/user?page=1&pageSize=10"
      );

      setListUser(res.data.data);
    };
    handleCallListUser();
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-[620px] min-h-[820px] pt-[75px] mx-auto ">
        <div className="flex justify-center items-center outline outline-[0.5px] outline-[#00000026] w-[100%] h-[60px] p-[12px] rounded-[16px] bg-[#fff]">
          <img src={icon.search} className="w-[32px] p-[8px]" alt="" />
          <input
            className="w-[90%] outline-none"
            type="text"
            placeholder="Tìm kiếm"
          />
          <div className="w-[22px] h-[22px] p-[6px] rounded-[50%] bg-[#b8b8b8]">
            <img className="w-[16px]" src={icon.close} alt="" />
          </div>
        </div>
        <div className="flex flex-col h-[500px]">
          {listUser.map((item, i) => (
            <div key={i} className="flex pt-[16px] min-h-[84px] ">
              <div className="pt-[4px] pb-[2px] pr-[12px]">
                <img
                  className=" w-[36px] h-[36px] rounded-[100%]"
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;

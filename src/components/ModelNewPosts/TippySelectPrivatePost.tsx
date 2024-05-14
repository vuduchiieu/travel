import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

interface SelectType {
  isMobile: boolean;
  select: boolean;
  SetSelect: (newState: boolean) => void;
}

export default function TippySelectPrivatePost(Props: SelectType) {
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  return (
    <Tippy
      interactive
      placement="bottom-start"
      visible={openSelect}
      render={(attrs) => (
        <div
          tabIndex={-1}
          {...attrs}
          className="overflow-hidden w-[191px] min-h  bg-[#fff] rounded-[16px] outline-[0.5px] outline-[#00000026] outline shadow-md"
        >
          <button
            onClick={() => {
              Props.SetSelect(true);
              setOpenSelect(false);
            }}
            className="min-h w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] text-left p-[16px] "
          >
            <p className="text-[15px] font-medium">Bất kỳ ai</p>
          </button>
          <button
            onClick={() => {
              Props.SetSelect(false);
              setOpenSelect(false);
            }}
            className="min-h w-[100%] border-b-solid border-b-[1px] border-b-[#00000026] text-left p-[16px] "
          >
            <p className="text-[15px] font-medium">Chỉ mình tôi</p>
          </button>
        </div>
      )}
      onClickOutside={() => setOpenSelect((prev) => !prev)}
    >
      <div
        className="cursor-pointer"
        onClick={() => setOpenSelect((prev) => !prev)}
      >
        <p className="text-[#999] text-[15px] font-normal">
          {Props.select
            ? "Bất kỳ ai cũng có thể xem và bình luận bài viết"
            : "Chỉ mình tôi có thể xem và bình luận bài viết"}
        </p>
      </div>
    </Tippy>
  );
}

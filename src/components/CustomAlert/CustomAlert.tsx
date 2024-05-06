export default function CustomAlert({ content }: any) {
  return (
    <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%] max-w-[100%]  rounded-[10px] p-[10px]  bg-[#000]">
      <p className="text-[#fff]">{content}</p>
    </div>
  );
}

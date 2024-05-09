interface CustomAlertProps {
  content: string;
}
export default function CustomAlert({ content }: CustomAlertProps) {
  return (
    <div className="fixed bottom-[5%] left-[50%] translate-x-[-50%] max-w-[100%]  rounded-[10px] p-[10px]  bg-[#000] z-[1]">
      <p className="text-[#fff] text-[15px]">{content}</p>
    </div>
  );
}

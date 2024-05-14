import Header from "@/components/Header/Header";
import { ReactNode } from "react";

interface MainType {
  children: ReactNode;
}

export function MainLayout({ children }: MainType) {
  return (
    <main className="w-screen h-screen">
      <Header />
      <div
        style={{ paddingTop: 74 }}
        className="max-w-[620px] min-h-[820px] mx-auto"
      >
        {children}
      </div>
    </main>
  );
}

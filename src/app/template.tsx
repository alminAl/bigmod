import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

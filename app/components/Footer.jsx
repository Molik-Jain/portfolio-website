import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-2 flex justify-between">
        <Image src="/images/LOGO2.png" width={100}
              height={50} alt="LOGO" ></Image>
              
        <p className="text-slate-600">Molik Jain 2024 Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

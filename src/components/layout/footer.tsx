import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="h-16 flex flex-col md:flex-row items-center md:justify-between justify-center">
      <h5 className="font-poppins text-[.85rem] md:text-sm">Copyright &copy; 2024 </h5>
      <h5 className="font-poppins text-[.85rem] md:text-sm tracking-tight text-center">
        Designed and developed by Rex Randy Hernandez with&nbsp;
        <span>&#128151;</span>
      </h5>
      <div></div>
    </section>
  );
};

export default Footer;

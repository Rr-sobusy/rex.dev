import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="h-16 flex flex-col md:flex-row items-center justify-between">
      <h5 className="font-poppins text-sm">Copyright &copy; 2024 </h5>
      <h5 className="font-poppins text-sm tracking-tight text-center">
        Designed and developed by Rex Randy Hernandez with <span>&#128151;</span>
      </h5>
      <div></div>
    </section>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <div className="p-10">
      <div
        style={{ textAlign: "center" }}
        className="w-full flex text-center items-center justify-center"
      >
        <img
          style={{ padding: "30px 0" }}
          className="py-8 text-center mx-0 my-auto"
          src={logo}
        ></img>
      </div>
    </div>
  );
}

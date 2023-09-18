import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { Link, Button } from "@nextui-org/react";
import "./header.css";

export default function Header() {
  return (
    <header className="flex flex-row xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-4 py-8 border-gray-500 gap-2">
      <Link to="/" className="flex space-x-2">
        <img
          alt="header text"
          src={logo}
          className="sm:w-32 sm:h-10  h-9 imgLogo"
          width="400px"
          height=""
        />
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight"></h1>
      </Link>
      <div
        className="flex
      gap-4"
      >
        <Link
          className="btnLink flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
          to="/add-video"
          rel="noopener noreferrer"
        >
          <p>New Video</p>
        </Link>
        <Link
          className="btnLink flex max-w-fit items-center justify-center space-x-2 rounded-full border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-500 bg-blue-600 font-medium transition"
          to="/add-category"
          rel="noopener noreferrer"
        >
          <p>New Category</p>
        </Link>
      </div>
    </header>
  );
}

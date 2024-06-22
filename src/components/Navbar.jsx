import React from "react";

import "../App.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-[65px] shadow-md z-10 flex items-center gap-5 pl-5">
        <div className="flex flex-1">
          <ul className="flex gap-5">
            <li className="py-2 border rounded hover:bg-[#8a4af3] hover:text-white">
              <Link className="p-2" to="/">
                Home
              </Link>
            </li>
            <li className="py-2 border rounded hover:bg-[#8a4af3] hover:text-white">
              <Link className="p-2" to="/product">
                Product
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 items-center gap-2 text-[18px] justify-end pr-5">
          <ul className="flex gap-5 items-center">
            <li className="py-1 border rounded hover:bg-[#8a4af3] hover:text-white">
              <Link className="p-2" to="/register">
                Register
              </Link>
            </li>
            <li className="py-1 border rounded hover:bg-[#8a4af3] hover:text-white">
              <Link className="p-2" to="/login">
                Login
              </Link>
            </li>
          </ul>

          <div className="cursor-pointer">
            <Link to="/cart">
              <FontAwesomeIcon
                style={{ fontSize: "18px" }}
                icon={faCartShopping}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

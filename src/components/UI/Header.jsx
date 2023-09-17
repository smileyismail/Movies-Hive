import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import logo from "../../assets/logo.png";

const Header = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <section className="z-50 fixed p-4 w-screen bg-secondary">
      <div className="flex justify-between w-full md:max-w-[80%] mx-auto">
        <Link to="/">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img src={logo} alt="logo" width={40} />
            </div>
            <h1 className="font-bold text-3xl mt-1 hidden sm:flex">
              Movies Hive
            </h1>
          </div>
        </Link>

        <form onSubmit={onSubmitHandler}>
          <div className="relative">
            <input
              onChange={onChangeHandler}
              type="search"
              placeholder="Search Movies..."
              required
              className="bg-primary px-3 py-2 w-[300px] rounded-lg"
            />
            <Link to={`movies/${value}`}>
              <button
                type="submit"
                className="absolute right-0 top-[50%] translate-y-[-50%] p-2 text-2xl border-l-[1px] border-neutral-600"
              >
                <BiSearchAlt2 className="text-accent" />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Header;

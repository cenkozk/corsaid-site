import { useState } from "react";

function Header() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "About us", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  return (
    <nav className="absolute items-center pt-7 px-4 mx-auto w-[90%] top-0 sm:px-0 md:flex md:space-x-6">
      <button className="text-black font-black text-3xl">CorsAid</button>
      <ul
        className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
          state
            ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static"
            : "hidden"
        }`}
      >
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          {navigation.map((item, idx) => (
            <li
              className="text-black hover:text-zinc-500 duration-150"
              key={idx}
            >
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </div>
        <div className="flex flex-row gap-5">
          <li className="order-2 py-6 md:py-0">
            <button className="py-3 px-6 rounded-lg text-md text-white text-center outline outline-1 hover:outline-white outline-transparent bg-black duration-150">
              Log in
            </button>
          </li>
          <li className="order-2 py-6 md:py-0">
            <button className="py-3 px-6 rounded-lg text-md text-white text-center outline outline-1 outline-white bg-black hover:bg-zinc-900 duration-150">
              Sign up
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;

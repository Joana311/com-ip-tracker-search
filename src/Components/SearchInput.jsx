import { useState, useContext, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { DataContext } from "../contexts/DataContext";

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const { setIsloading, setError, setUserData } = useContext(DataContext);
  const prevSearchInput = useRef(null);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  const handleClick = async () => {
    if (searchInput === prevSearchInput.current) return;

    try {
      setError(false);
      setIsloading(true);

      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_eHUa2KiA6RcR4yrUjjEiMbx4V2VBy&ipAddress=${searchInput}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.status === "fail") throw new Error(data.message);
      setUserData(data);
      setIsloading(false);
      prevSearchInput.current = searchInput;
    } catch (error) {
      setIsloading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="flex items-center justify-center mb-6">
      <input
        className="w-2/3 px-1 py-2 mx-0.5 rounded-l-lg md:w-1/2 text-slate-400"
        type="text"
        placeholder="Search for any ip address or domain"
        value={searchInput}
        onChange={handleChange}
      />
      <button
        className="px-1 py-2 bg-black rounded-r-lg "
        onClick={handleClick}
      >
        <IoIosArrowForward className="text-2xl text-white" />
      </button>
    </div>
  );
}

export default SearchInput;

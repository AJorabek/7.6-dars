import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full input-lg"
        />
        <button
          disabled
          className="absolute disabled:text-slate-300 right-4 bottom-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
          >
            <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM13 12H16L12 8L8 12H11V16H13V12Z"></path>
          </svg>
        </button>
      </form>
      <button className="absolute right-14 bottom-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M12.0001 3C10.3432 3 9.00008 4.34315 9.00008 6V12C9.00008 13.6569 10.3432 15 12.0001 15C13.6569 15 15.0001 13.6569 15.0001 12V6C15.0001 4.34315 13.6569 3 12.0001 3ZM12.0001 1C14.7615 1 17.0001 3.23858 17.0001 6V12C17.0001 14.7614 14.7615 17 12.0001 17C9.23865 17 7.00008 14.7614 7.00008 12V6C7.00008 3.23858 9.23865 1 12.0001 1ZM2.19238 13.9615L4.15392 13.5692C4.88321 17.2361 8.11888 20 12.0001 20C15.8813 20 19.1169 17.2361 19.8462 13.5692L21.8078 13.9615C20.8961 18.5452 16.8516 22 12.0001 22C7.14858 22 3.104 18.5452 2.19238 13.9615Z"></path>
        </svg>
      </button>
    </>
  );
};

export default Form;

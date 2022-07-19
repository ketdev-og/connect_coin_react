import React from "react";
import { StyledInput } from "../Logo/StyledInput";

const Inputs = ({ type, name, id, placeholder }) => {
  return (
    <StyledInput className="mb-4">
      <label class="label_text" for={name}>
        {name}
      </label>
      <input
        class="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </StyledInput>
  );
};

export const SelectInput = ({ name, options, select }) => {
  return (
    <div class="w-full">
      <label
        class=""
        for="grid-state"
      >
        {name}
      </label>
      <div class="relative">
        <select
          name={name}
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
          id="grid-state"
        >
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Inputs;

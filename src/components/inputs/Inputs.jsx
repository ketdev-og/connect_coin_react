import { Field } from "formik";
import React from "react";
import { StyledInput } from "../Logo/StyledInput";

const Inputs = ({ type, name, id, placeholder, label, disabled}) => {
  return (
    <StyledInput className="mt-4">
      <label className="label_text" htmlFor={name}>
        {label}
      </label>
      <Field
        className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none"
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled ? true : null}
      />
    </StyledInput>
  );
};

export const SelectInput = ({ name, options, select, label, children }) => {
  return (
    <div className="w-full mt-4">
      <label className="" htmlFor="grid-state">
        {label}
      </label>
      <div className="relative">
        <Field as="select"
          name={name}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white "
          
         
        >
          {children.map((child)=>{
             return <option key={child} id={child}>{child}</option>
          })}
          
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
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

import { SvgIcon } from "@mui/material";
import React from "react";
const Toggle = (props) => {
  return (
    <SvgIcon
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 5H1.25C0.559766 5 0 4.44141 0 3.75C0 3.05977 0.559766 2.5 1.25 2.5H16.25C16.9414 2.5 17.5 3.05977 17.5 3.75C17.5 4.44141 16.9414 5 16.25 5ZM16.25 17.5H1.25C0.559766 17.5 0 16.9414 0 16.25C0 15.5586 0.559766 15 1.25 15H16.25C16.9414 15 17.5 15.5586 17.5 16.25C17.5 16.9414 16.9414 17.5 16.25 17.5Z"
        fill="currentColor"
        className="secondary"
      />
      <path
        d="M2.5 10C2.5 9.30859 3.05977 8.75 3.75 8.75H18.75C19.4414 8.75 20 9.30859 20 10C20 10.6914 19.4414 11.25 18.75 11.25H3.75C3.05977 11.25 2.5 10.6914 2.5 10Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
export default Toggle;

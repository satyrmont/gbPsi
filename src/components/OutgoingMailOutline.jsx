import React from "react";

export function OutgoingMailOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="m18 20l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 13.4L18 12l4 4zM4 17q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h13q.825 0 1.413.588T19 5v5.1q-.25-.05-.5-.075T18 10t-.5.013t-.5.062V6.4L10.4 11L4 6.425V15h8.075q-.05.25-.062.5T12 16t.025.5t.075.5zM5.45 5l4.95 3.55L15.5 5zM4 15V5z"
      ></path>
    </svg>
  );
}
export default OutgoingMailOutline;

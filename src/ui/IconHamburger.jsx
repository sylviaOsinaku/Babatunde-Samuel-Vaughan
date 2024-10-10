// icon:hamburger | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function IconHamburger(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M22 13c0 1.11-.89 2-2 2H4a2 2 0 110-4h9l2.5 2 2.5-2h2a2 2 0 012 2M12 3C3 3 3 9 3 9h18s0-6-9-6M3 18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-1H3v1z" />
    </svg>
  );
}

export default IconHamburger;

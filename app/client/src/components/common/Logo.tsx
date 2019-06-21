import React from "react";
import Link from "next/link";
//@ts-ignore
import css from "../../../public/styles/app.scss";

const Logo: React.FunctionComponent = () => {
  return (
    <Link href="/">
      <a className={css}>
        <div className="containerLogo">
          <div className="logo" />
          <div className="wave" style={{ backgroundColor: "white" }} />
        </div>
      </a>
    </Link>
  );
};

export default Logo;

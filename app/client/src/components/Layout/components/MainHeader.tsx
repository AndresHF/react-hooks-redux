import React from "react";
import { Col } from "antd";
import Logo from "../../common/Logo";
const MainHeader: React.FunctionComponent = ({}) => {
  return (
    <div className="header">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 15, left: 10 }}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

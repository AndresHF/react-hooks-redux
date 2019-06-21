import React from "react";
import MainHeader from "./components/MainHeader";
import { Row, Col } from "antd";
//@ts-ignore
import css from "../../../public/styles/app.scss";
const Layout: React.FunctionComponent<any> = props => {
  const backgroundImage: any = props.backgroundImage;
  console.log(backgroundImage);
  return (
    <div className={css}>
      <Row style={{ width: "100%" }}>
        <MainHeader />
        <div className="afterHeader">
          {backgroundImage ? (
            <div
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                height: "92.5vh"
              }}
            >
              {props.children}
            </div>
          ) : (
            props.children
          )}
        </div>
      </Row>
    </div>
  );
};

export default Layout;

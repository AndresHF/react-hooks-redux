import React from "react";
import Layout from "../src/components/Layout";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
const Main: React.FunctionComponent = ({}) => {
  return (
    <div>
      <Layout backgroundImage="http://localhost:3000/images/mainBanner.jpeg">
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{
            fontSize: 100,
            color: "white",
            width: "100%",
            paddingTop: "10vh"
          }}
        >
          <Col
            xl={12}
            md={18}
            sm={20}
            style={{
              textAlign: "center"
            }}
            className="font1"
          >
            The Wine Room
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Main;

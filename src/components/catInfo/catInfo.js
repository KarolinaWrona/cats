import React from "react";
import { Col, Row } from "react-bootstrap";
import "./catinfo.css";

const CatInfo = ({ name, desc, image }) => {
  return (
    <div className="cat FullHeight">
      <div className="h-100">
        <Row className="h-100">
          <Col md={6} xs={12} className="cat_desc">
            <div className="cat_name">{name} </div>
            <p>{desc}</p>
          </Col>
          <Col md={6} xs={12} className="cat_img" style={{ backgroundImage: `url(${image})` }} />
        </Row>
      </div>
    </div>
  );
};

export default CatInfo;

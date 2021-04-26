import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import React from "react";
import { Col, Form, Input, Row } from "reactstrap";
import "./navsearch.css";

function NavSearch(props) {
  return (
    <Col xs="12">
      <Row>
        <Col xs="6" className="wrap-search-user">
          <Form className="form">
            <div className="icon-search">
              <AiOutlineSearch />
            </div>
            <Input
              type="text"
              className="input-group"
              placeholder="Search"
            ></Input>
          </Form>
        </Col>
        <Col xs="6" className="user">
          <img
            src="http://placeimg.com/640/480"
            alt="avavtar"
            className="user-avartar"
          />
          <span className="user-name">tho do</span>
        </Col>
      </Row>
    </Col>
  );
}

export default NavSearch;

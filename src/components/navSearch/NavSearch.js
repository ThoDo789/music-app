import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Input, Row } from "reactstrap";
import { setDisplay } from "../../redux/actions/action";
import "./navsearch.css";

function NavSearch(props) {
  const dispatch = useDispatch();
  const {isDisplay}= useSelector(state=>state.data)
  const handleShowHide=()=>{
    dispatch(setDisplay(isDisplay))
  }
  return (
    <Col xs="12" className="nav-search">
      <div className="bar-moblie" onClick={handleShowHide} >Music box</div>
      
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

import React from "react";
import PropTypes from "prop-types";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link,NavLink } from "react-router-dom";
import {BiBarChart} from "@react-icons/all-files/bi/BiBarChart";
import "./menu.css"
Menu.propTypes = {};

function Menu(props) {
  return (
    <Col xs="2">
            <h5 className="music-logo">
            <BiBarChart/>
                <span className="title-content">Chef Music</span>
            </h5>

      <h6 className="title">recomend </h6>

      <ul className="list-group g">
       <li> <NavLink className="list-group-item " activeClassName="list-group-item active" to="/" exact><span>For you</span></NavLink></li>
        <li><NavLink className="list-group-item" activeClassName="list-group-item active" to="/library" exact><span>Library</span></NavLink></li>
        <li><NavLink className="list-group-item" activeClassName="list-group-item active" to="/music-video" exact><span>Music video</span></NavLink></li>
    </ul>

      <h6 className="title">My music </h6>

      <ul className="list-group g">
        <li><NavLink className="list-group-item"activeClassName="list-group-item active" to="/liked-song" exact><span>Liked song</span></NavLink></li>
        <li><NavLink className="list-group-item"activeClassName="list-group-item active" to="/album" exact><span>Album</span></NavLink></li>
        <li><NavLink className="list-group-item"activeClassName="list-group-item active" to="/artist" exact><span>Artist</span></NavLink></li>
      </ul>
      <h6 className="title">Playlists</h6>
      <ul className="list-group g">
        <li><NavLink className="list-group-item "activeClassName="list-group-item active" to="/hip-hop" exact><span>Hip hop</span></NavLink></li>
        <li><NavLink className="list-group-item"activeClassName="list-group-item active" to="/jazz" exact><span>Jazz</span></NavLink></li>
      </ul>
    </Col>
  );
}

export default Menu;

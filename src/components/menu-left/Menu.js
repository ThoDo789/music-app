import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { BiBarChart } from "@react-icons/all-files/bi/BiBarChart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col } from "reactstrap";
import { setDisplay } from "../../redux/actions/action";
import "./menu.css";



function Menu() {
  // const [isDisplay,setDisplay]=useState(false)
  const {isDisplay} = useSelector(state=>state.data)
  const dispatch=useDispatch()
  const handleShowHide=()=>{
    dispatch(setDisplay(isDisplay))
    window.scroll(0,0)
  }
  return (
    <Col lg="2" md="12" sm="12" className={isDisplay?"menu-moble col-4-ipad-pro":"menu-moble hidden col-4-ipad-pro"} >
            <h5 className="music-logo">
            <BiBarChart/>
                <span className="title-content">Chef Music</span>
            </h5>
            <div className="hidden-menu-mobile" onClick={handleShowHide}><AiOutlineClose/></div>
      <h6 className="title">recomend </h6>

      <ul className="list-group g">
       <li onClick={handleShowHide}> <NavLink className="list-group-item " activeClassName="list-group-item active" to="/" exact><span>For you</span></NavLink></li>
        <li onClick={handleShowHide}><NavLink className="list-group-item" activeClassName="list-group-item active" to="/library" exact><span>Library</span></NavLink></li>
        <li onClick={handleShowHide}><NavLink className="list-group-item" activeClassName="list-group-item active" to="/music-video" exact><span>Music video</span></NavLink></li>
    </ul>

      <h6 className="title">My music </h6>

      <ul className="list-group g">
        <li onClick={handleShowHide}><NavLink className="list-group-item"activeClassName="list-group-item active" to="/liked-song" exact><span>Liked song</span></NavLink></li>
        <li onClick={handleShowHide}><NavLink className="list-group-item"activeClassName="list-group-item active" to="/album" exact><span>Album</span></NavLink></li>
        <li onClick={handleShowHide}><NavLink className="list-group-item"activeClassName="list-group-item active" to="/artist" exact><span>Artist</span></NavLink></li>
      </ul>
      <h6 className="title">Playlists</h6>
      <ul className="list-group g">
        <li onClick={handleShowHide}><NavLink className="list-group-item "activeClassName="list-group-item active" to="/hip-hop" exact><span>Hip hop</span></NavLink></li>
        <li onClick={handleShowHide}><NavLink className="list-group-item"activeClassName="list-group-item active" to="/jazz" exact><span>Jazz</span></NavLink></li>
      </ul>
    </Col>
  );
}

export default Menu;

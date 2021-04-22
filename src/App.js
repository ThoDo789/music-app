
import "./App.css";
import Menu from "./components/menu-left/Menu";
import { Col, Container, Row } from "reactstrap";
import ShowContent from "./components/show-content/content";
import NavSearch from "./components/navSearch/NavSearch";
import { BrowserRouter as Router } from "react-router-dom";
import ListRight from "./components/list-outside/ListRight";
import Event from "./components/event/Event";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "./components/redux/reducer/DataSlice";

function App() {
    const dispatch = useDispatch()
  useEffect(async()=>{
      async function fetchData() {
        const baseUrl = "http://localhost:5000/songs";
        const response = await axios(baseUrl);
         await dispatch(getData(response.data.body));
      
      }
      fetchData();   
  },[])


  return (
    <Router>
  <Container className="App p-10" fluid={true}>
      <Row className="mt-3 content-wrap">
        <Menu />
        <Col xs="8">
          <Row className="bg-show">
            <NavSearch />
            <ShowContent />
          </Row>
        </Col>
        <ListRight/>
        <Event/>
      </Row>
     
    </Container>
    </Router>
  
  );
}

export default App;

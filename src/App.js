import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./App.css";
import Event from "./components/event/Event";
import ListRight from "./components/list-outside/ListRight";
import Menu from "./components/menu-left/Menu";
import NavSearch from "./components/navSearch/NavSearch";
import ShowContent from "./components/show-content/content";
import { getData } from "./redux/actions/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const baseUrl = "http://localhost:5000/songs";
      async function fetchData() {
        const response = await axios(baseUrl);
        await console.log(response.data.body)

        const data =  await response.data.body
        await dispatch(getData(data));
      }
      fetchData();
    } catch (error) {
      console.log("error");
    }
  }, [dispatch]);


  return (
    <Router>
      <Container className="App p-10" fluid={true}>
        <Row className=" content-wrap">
          <Menu />
          <Col lg="8" sm="12" md="12">
            <Row className="bg-show">
              <NavSearch />
              <ShowContent />
            </Row>
          </Col>
          <ListRight />
          <Event />

        </Row>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Profile from '../../Components/Adopter/Profile.jsx';
import NewSearch from '../../Components/Adopter/NewSearch.jsx';
import Matches from '../../Components/Adopter/Matches.jsx';
import NavBar from '../../Components/NavBar.jsx';

function AdopterHome() {
  return (
    <div>
      <NavBar />
      <Container>
      <h1 class="text-center">Adopter HomePage</h1>
      <Row>
        <Col> 
          <Profile />
        </Col>
        <Col>
          <Matches />
          <br></br>
          <NewSearch />
        </Col>
      </Row>
    </Container>
    </div>
    
   
  );
}

export default AdopterHome;

import { useState } from 'react'
import './App.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  

  return (
    <>
      <div>
       <nav>
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </nav>
      </div>
      
      <h1>Portfolio</h1>
      
      <div className="card">
        
        <p>
          Hi, I am Mike, a web developer!
        </p>
      </div>
      
    </>
  )
}

export default App

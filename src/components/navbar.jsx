import React from 'react'
import {Navbar,Container,OffcanvasHeader, OffcanvasBody, OffcanvasTitle, Nav} from 'react-bootstrap'
export const NavBar = () => {
    return (
      <div  >
      <Navbar bg="dark" expand={''}>
            <Container fluid >
                <Navbar.Brand href="#" style={{ color: 'white', }}>Medical App</Navbar.Brand>
                    <img src={require('../images/image_processing20210715-32557-vn32oq.png')} style={{
                        width: '80px',
                        height: '50px',
                        backgroundColor: 'white',
                    }} alt='logo' />
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} style={{color:'black',backgroundColor:'white'}} />
                <Navbar.Offcanvas placement="end">
                    <OffcanvasHeader>
                        <OffcanvasTitle> Artificial Intelligence Laboratory </OffcanvasTitle>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav>
                            <Nav.Link href='/lungcancer'>Lung Cancer Analysis</Nav.Link>
                        </Nav>
                    </OffcanvasBody>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </div>
  )
}
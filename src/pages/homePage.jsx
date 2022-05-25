import React,{useState} from 'react'
import { Form, Row, Col , Button } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { NavBar } from '../components/navbar'
import BadgeIcon from '@mui/icons-material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Home from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import bgImage from '../images/Image-Content-what-doctors-want.png'
import { Footer } from '../components/footer';
import axios from 'axios'
export const HomePage = () => {
    const details = {}
    const [flag, setFlag] = useState(0)
    const handleSubmit = async () => {
        const { data: res } = await axios.post('http://localhost:3001/addUser', details)
        console.log(res);
        res && setFlag(1)
    }
    return (
        <>
            <NavBar />
            <div style={{display: 'flex'}}>
            <div style={{
                    background: `url(${bgImage}) no-repeat center fixed`,
                    flex: '1',
                    backgroundSize: '100% 100%',
                }}>
            </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '2', marginRight:'20px'}}>
                    <AccountCircleIcon style={{ zoom: '150%' }} />
                    <h3>Patient's Basic Details</h3>
                </div>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName" style={{ display: 'flex', justifyContent: 'center', flex: '1' }}>
                            <BadgeIcon style={{ position: 'relative', top: '12px', zoom: '130%' }} />
                            <TextField label='Name' variant='standard' type="text"
                                onChange={e => details['Name']= e.target.value} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" style={{ display: 'flex', justifyContent: 'center', }}>
                            <AttachEmailIcon style={{ position: 'relative', top: '15px', zoom: '130%' }} />
                            <TextField label='Email' variant='standard' type="email"
                                onChange={e => details['Email']=e.target.value } />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1" style={{ display: 'flex', justifyContent: 'center', }}>
                            <Home style={{ position: 'relative', top: '15px', zoom: '130%' }} />
                            <TextField label='Address Line 1' variant='standard'
                                onChange={e => details['Address']= e.target.value } />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity" style={{ display: 'flex', justifyContent: 'center', }}>
                            <LocationCityIcon style={{ position: 'relative', top: '15px', zoom: '130%' }} />
                            <TextField label='City' variant='standard'
                                onChange={e => details['City']= e.target.value} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridZip" style={{ display: 'flex', justifyContent: 'center', }}>
                            <PersonPinIcon style={{ position: 'relative', top: '15px', zoom: '130%' }} />
                            <TextField label='PIN Code' variant='standard'
                                onChange={e => details['Pincode']= e.target.value} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1"
                            style={{ display: 'flex', justifyContent: 'center', }}>
                            <TextField label='Age' variant='standard' style={{ width: '150px',justifyContent:'center'}}
                                onChange={e => details['Age']=e.target.value } />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2"
                            style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', position: 'relative', left: '20%' }}>
                            <Form.Check type='radio' label='Male' value={0} name='gender'
                                onChange={e => details['Gender'] = 'Male'} style={{ flex: '1' }} />
                            <Form.Check type='radio' label='Female' value={1} name='gender'
                                onChange={e => details['Gender'] = 'Female'} style={{ flex: '2' }} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridSubmit"
                            style={{ justifyContent: 'space-between', alignItems: 'center', position: 'relative', left: '30%' }}>
                                <Button onClick={handleSubmit}>Submit</Button>
                                {flag===1 && <p style={{position:'relative',left:'-30%'}}>Now Choose the Disease In the Menu Option</p>}
                        </Form.Group>
                    </Row>
                    <Row>
                    </Row>
                </Form>
            </div>
            </div>
        <Footer/>
        </> 
    )
}

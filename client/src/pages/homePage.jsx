import React,{useState} from 'react'
import { Form, Row, Col ,InputGroup } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { NavBar } from '../components/navbar'
import BadgeIcon from '@mui/icons-material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Home from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PersonPinIcon from '@mui/icons-material/PersonPin';
export const HomePage = () => {
    const [details, setDetails] = useState({})
    return (
        <>
            <NavBar />
            <div style={{ margin: '50px 200px', }}>       
            <div  style={{ display:'flex'}}><AccountCircleIcon style={{zoom:'150%'}} /><h3>Patient's Basic Details</h3></div>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <BadgeIcon style={{ position: 'relative', top: '12px' ,zoom:'130%'}} /><TextField label='Name' variant='standard' type="text" onChange={e => setDetails({ ...details, 'USerID': e.target.value })} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <AttachEmailIcon style={{ position: 'relative', top: '15px' ,zoom:'130%'}}/><TextField label='Email' variant='standard' type="email" onChange={e => setDetails({ ...details, 'EMAIL': e.target.value })} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Home style={{ position: 'relative', top: '15px' ,zoom:'130%'}}/><TextField label='Address Line 1' variant='standard'/>
                        </Form.Group>

                        <Form.Group as={Col}  className="mb-3" controlId="formGridAddress2">
                        <TextField label='Address Line 2' variant='standard'/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <LocationCityIcon style={{ position: 'relative', top: '15px' ,zoom:'130%'}}/><TextField label='City' variant='standard'  />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                        <PersonPinIcon style={{ position: 'relative', top: '15px' ,zoom:'130%'}}/><TextField label='PIN Code' variant='standard'  />
                        </Form.Group>
                    </Row>
                    <Row>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <TextField label='Age' variant='standard' style={{width:'100px'}} onChange={e=>setDetails({...details,'AGE':e.target.value})}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                    <InputGroup className="mb-3" style={{margin:'5px'}}>
                    <Form.Label>Gender</Form.Label>
                        <Form.Check type='radio' label='Male' value={1} name='gender' />
                        <Form.Check type='radio' label='Female' value={2} name='gender' />
                    </InputGroup>
                </Form.Group>                    
                </Row>
                </Form>
            </div>
        </> 
    )
}

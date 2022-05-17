import React,{useState} from 'react'
import axios from 'axios'
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap'
import {TextField} from '@mui/material/TextField/TextField'
import { NavBar } from './navbar'
export const LungCancer = () => {
    const [details, setDetails] = useState({})
    const symptoms = [
        'Smoking',
        'YellowFingers',
        'Anxiety',
        'Fatigue',
        'Peer_pressure',
        'Chronic_disease',
        'Allergy',
        'Wheezing',
        'Alcohol',
        'Coughing',
        'Shortnessofbreath',
        'SwallowingDifficulty',
        'Chestpain']
    const [input, setInput] = useState({})
    const handleChange = e => {
        const {name,value}=e.target
        setInput({ ...input, [name]: value })
    }
    const handleSubmit = async () => {
        const data = {}
        Object.assign(data, input, details)
        data['addcsrfmiddlewaretoken']='{{ csrf_token }}'
        console.log(data); 
        const { data: res } = fetch('http://127.0.0.1:8000/',{
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            }
        )
    }
    return (
        <div>
        <NavBar/>   
            <div style={{margin: '50px 200px',}}>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name</Form.Label>
                    <TextField  type="text"  onChange={e=>setDetails({...details,'USerID':e.target.value})} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <TextField  type="email" onChange={e=>setDetails({...details,'EMAIL':e.target.value})} />
                    </Form.Group>
                </Row>
                    <h4>Lung Cancer Symptoms</h4>
                <Row>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label >Age</Form.Label>
                    <TextField  style={{width:'100px'}} onChange={e=>setDetails({...details,'AGE':e.target.value})}/>
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Gender</Form.Label>
                    <InputGroup className="mb-3" style={{justifyContent:'space-around'}}>
                        <Form.Check type='radio' label='Male' value={1} name='gender' onChange={handleChange}/>
                        <Form.Check type='radio' label='Female' value={2} name='gender' onChange={handleChange}/>
                    </InputGroup>
                </Form.Group>                    
                </Row>
                {
                        symptoms.map(s => (
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                                <Form.Label>{ s }</Form.Label>
                            <InputGroup className="mb-3" style={{justifyContent:'space-around'}}>
                                <Form.Check type='radio' label='Yes' value={2} name={`${s}`} onChange={handleChange}/>
                                    <Form.Check type='radio' label='No' value={1} name={`${s}`} onChange={handleChange}/>
                            </InputGroup>
                        </Form.Group>
                    ))
                }
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <TextField/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <TextField/>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <TextField  />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <TextField  />
                    </Form.Group>
                </Row>
                <Button variant="primary"  onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>  
            </div>
        </div>
  )
}

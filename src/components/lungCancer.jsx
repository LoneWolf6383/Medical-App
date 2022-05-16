import React,{useState} from 'react'
import {Form,Row,Col,Button, InputGroup} from 'react-bootstrap'
import { NavBar } from './navbar'
export const LungCancer = () => {
    // const symptoms = ['SMOKING', 'YELLOW FINGERS', 'ANXIETY', 'PEER PRESSURE', 'CHRONIC DISEASE', 'FATIGUE', 'ALLERGY', 'WHEEZING', 'ALCOHOL CONSUMPTION', 'COUGHING', 'SHORTNESS OF BREATH', 'SWALLOWING DIFFICULTY', 'CHEST PAIN']
    const symptoms = [
        'UserID',
        'AGE',
        'Gender',
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
        console.log(input);
    }
    return (
        <div>
        <NavBar/>   
            <div style={{margin: '50px 200px',}}>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Row>
                    <h4>Lung Cancer Symptoms</h4>
                <Row>
                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label >Age</Form.Label>
                    <Form.Control style={{width:'100px'}}/>
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
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>  
            </div>
        </div>
  )
}

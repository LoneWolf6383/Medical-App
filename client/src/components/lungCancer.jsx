import React,{useState} from 'react'
import axios from 'axios'
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap'
import { NavBar } from './navbar'
export const LungCancer = () => {
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
        setInput({ ...input, [String(name)]: parseInt(value) })
    }
    const handleSubmit = async () => {
        const data = {}
        Object.assign(data, input)
        // console.log(data);
        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000',
            data: {Smoking:'2'},
        })
            // .then((res) => {
            //   console.log(res.data);
            // })
    }
    return (
        <div>
        <NavBar/>   
            <div style={{margin: '50px 200px',}}>
            <Form>
                    <h4>Lung Cancer Symptoms</h4>
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
                    
                <Button variant="primary"  onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>  
            </div>
        </div>
  )
}

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Form, Col, Button, InputGroup } from 'react-bootstrap'
import { NavBar } from '../components/navbar'
export const LungCancer = (props) => {
    const [symptoms, setSymptoms] = useState([])
    useEffect(() => {
        const getSymptoms = async () => {
            var data = [props.disease]
            const { data: res } = await axios.post('http://localhost:3001/getSymptoms', data)
            var val = res.slice(2, res.length - 4)
            val=val.split('\', \'')
            setSymptoms(val)
        }
        getSymptoms()
    }, [props.disease])
    
    var input={}
    const handleChange = e => {
        const { name, value } = e.target
        input[name]= parseInt(value)
    }
    const handleSubmit = async () => {
        const { input: res } = await axios.post('http://localhost:3001/verifyLungCancer', input)
        console.log(res);
    }
    return (
        <div>
        <NavBar/>   
            <div style={{margin: '50px 200px',}}>
            <Form>
                    <h4> Lung Cancer Symptoms</h4>
                {
                        symptoms.map(s => (!(s.toLowerCase() in {'age':'','_id':''} )&&
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

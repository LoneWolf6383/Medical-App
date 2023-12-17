import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Form, Col, Button, } from 'react-bootstrap'
import { NavBar } from '../components/navbar'
export const Diabetes = (props) => {
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
    const [flag, setFlag] = useState(0)
    var input={}
    const handleSubmit = async () => {
        input['Age']=window.sessionStorage.getItem('Age')
        console.log(window.sessionStorage.getItem('Age'));
        const { data: res } = await axios.post('http://localhost:3001/verifyDiabetes', input)
        console.log(res);
        res===1 && setFlag(1)
        res===2 && setFlag(2)
    }
    return (
        <div>
        <NavBar/>   
            <div style={{margin: '50px 200px',}}>
            <Form>
                    <h4> Diabetes   Symptoms</h4>
                {
                        symptoms.map(s => (!(s.toLowerCase() in {'age':'','_id':'','gender':'','outcome':''} )&&
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                                <Form.Label>{ s }</Form.Label> 
                                <Form.Control type='text' placeholder={"Enter The approx value for " + s} onChange={ e=> input[s]=e.target.value } />
                        </Form.Group>
                    ))
                }
                    
                <Button variant="primary"  onClick={handleSubmit}>
                    Submit
                </Button>
                </Form>  
                { flag===1 && <p>You have No symptoms of Diabetes</p>}
                { flag===2 && <p>You have symptoms of Diabetes</p>}
            </div>
        </div>
  )
}

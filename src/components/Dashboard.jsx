import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Dashboard({users,setUsers}) {
    
  let [name,setName] = useState("")
  let [desc,setDesc] = useState("")

  let navigate = useNavigate()

  let handleTodo = () => {
    const newUser = {name,desc}
    users.push(newUser)
    setUsers([...users])
  };

  let handleDelete = (ii) => {
    if(ii!==-1)
    {
      users.splice(ii,1)
      setUsers([...users])
    }
    else{
      alert("Invalid ID")
    }
  };

  return (
    <>
    <div>
    <h3 style={{textAlign:"center", color:"green"}}>My Todo</h3>

    <div style={{ marginTop:"50px"}}>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Todo Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Todo Desc" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>
        
        <Col xs="auto">
        <Button as={Col} variant="success" type="submit" style={{ marginTop:"30px"}} onClick={()=>handleTodo()}>
            Add Todo
        </Button>
        </Col>
      </Row>
    </Form>
    </div>

    <h2 style={{marginLeft:"20px"}}>My Todo</h2>
    <div className="Cards">
    {
      users.map((e,ii)=>{
      return (
        
      <Card key={ii} style={{ width: '25rem',backgroundColor:"green" }}>
      <Card.Body>
        <Card.Title>Name : {e.name}</Card.Title>
        <Card.Text>
          Description : {e.desc}
        </Card.Text>

        <Card.Text id="content">
          Status :{
          <Form.Select style={{width:"200px"}} >
            <option value="1">Not Completed</option>
            <option value="2" >Completed</option>
          </Form.Select>}
        </Card.Text>

        <Row>
        <Button as={Col} variant="success" type="submit"onClick={()=>navigate(`/edit-user/${ii}`)} >
            Edit
        </Button>
        &nbsp;
        &nbsp;
        <Button as={Col} variant="danger" type="submit" onClick={()=>handleDelete(ii)}>
          Delete
        </Button>
        </Row>
      </Card.Body>
    </Card>
    
    )
  })
 }
</div>
</div>
</>
  )
}

export default Dashboard
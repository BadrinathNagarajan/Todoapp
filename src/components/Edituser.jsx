import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate,useParams } from 'react-router-dom';
import Helper from '../utils/Helper';

function EditUser({users,setUsers}) {

    let [name,setName] = useState("")
    let [desc,setDesc] = useState("")

  let navigate = useNavigate()
  let {id} = useParams()


  const getData = ()=>{
    let index = Helper.findIndexById(users,id)
    if(index!==-1)
    {
      setName(users[index].name)
      setDesc(users[index].desc)
    }
  }
  
    useEffect(()=>{
        if(id)
          getData()
    },[])
  
    let handleTodo = ()=>{
      let index = Helper.findIndexById(users,id)
      users.splice(index,1,{id,name,desc})
      setUsers([...users])
      navigate('/user')
    }
  
  

  return <div id="content-wrapper" className="d-flex flex-column">
  <div id="content">
   <div className="container-fluid">
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
     </div>
     <div className="row">
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
   </div>
  </div>
</div>
}

export default EditUser
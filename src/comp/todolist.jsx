import React, { useEffect, useState } from 'react';
//import Data from '../data';
const TodoList =()=>{
    const [list,setlist]= useState([]);
    const [todo,setTodo]=useState("");
   useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/",{
        headers:{
            'content-Type':'application/json',
        }
    }).then(Response=>Response.json()).then(data=>setlist(data))

   })
    const insertData =() =>{
        //alert(todo);
        let newTodo=[...list,{id:list.length+1,todolist:todo}]
        setlist(newTodo)
        setTodo("");
        fetch("http://127.0.0.1:8000/api/create",{
            headers:{
                'Content-Type':'application/json', 
            },
            method:"POST",
            body:JSON.stringify({
                "todolist":todo,
            })   
        })
        .then(Response =>Response.json())
        // .then(data=>setlist(data))
    }
    const deleteData=(id)=>{
       // alert(id);
       let newData=list.filter(x=>x.id!=id);
       fetch(`http://127.0.0.1:8000/api/delete/${id}`).then(Response=>Response.json())

       setlist(newData);
    }
return (
    <div className="container mt-5">
        <div className="d-flex">
            <input type="text" className="form-control" placeholder="Add your Work" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="btn btn-danger" onClick={()=>insertData()}>Add</button>
        </div>
        <div className="list-group">
        {
        list.map(value=>(
  <div className="list-group-item list-group-item-action ">{value.id}.{value.todolist}
  <span className="float-end">
       <button type="button" onClick={()=>deleteData(value.id)} className="btn btn-link text-danger">
       <i className="bi bi-x-circle"></i>
       </button>
  </span>
  </div>
        ))
        }  
        </div>
    </div>
)
}
export default TodoList;
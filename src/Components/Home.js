import Todos from "./Todos";
import React, {useState} from 'react';
import Addtodo from './Addtodo';


function BasicExample() {
  const onDelete= (todo)=>{
    console.log("I am onDelete", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo = (title,   desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno
    if(todos.length==0){
      sno=0;
    }
    else{
      sno =todos[todos.length-1].sno +1
    }
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc    }
      setTodos([...todos,myTodo]);
      console.log(myTodo);
  }

  const[todos,setTodos]=useState([
    {
      sno: 1,
      title: "Go to Market",
      desc: "Urgent work from the market"
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "Urgent work from the market"
    },
    {
      sno: 3,
      title: "Go to Bazar",
      desc: "Urgent work from the market"
    }
    
  ]);
  return (
    <>
    <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    </>
  );
}

export default BasicExample;
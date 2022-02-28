import { useState } from "react";

const Todo = () => {
    //tasks คือตังแปร ซึ่งมี name เป็น State
    const inittasks = [
        { id: 1, name: "Read a book"}, /**element1 = item */
        { id: 2, name: "Do homework"}, /**element2 = item */
    ];

    const [name, setName] = useState('');
    const [tasks, setTasks] = useState(inittasks);
    
    //add คือฟังก์ชัน
    const add =() =>{
        setTasks([ ...tasks,{id: tasks[tasks.length-1].id+1, name:name} ]);
    }

    const del = () =>{
        console.log('Delete')
    }
    const renderTasks = () =>{
       return tasks.map( (item, index)=> {
           return (<li key={index}> 
           {item.id} {item.name}
           <button onClick={del}>Delete</button>
           </li>) 
       })
    }

    return (
        <>
        <h1>Todo</h1>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <button onClick={add} >Add</button> {name}
        <ul>{ renderTasks() }</ul> 
        </>   
    )

 }
  
 export default Todo

     /** .map เป็นการวนลูป element ตามลำดับของฟังก์ชัน tasks เหมือนกับ for loop 
     *  (e) = ตัวแปร โดยกำหนดให้อ่านข้อมูลผ่าน e.target.value
     *  useState = 1.name เป็นstate, 2.setName เป็นฟังก์ชันที่ใช้setค่าname โดยค่าถ้าname มีการsetค่าใหม่ ตัวแปรจะรีเฟรชอัตโนมัติ
     * npm run dev
    */
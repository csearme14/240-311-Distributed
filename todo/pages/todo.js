import { useState } from "react";

const Todo = () => {
    //tasks คือตังแปร ซึ่งมี name เป็น State
    const initTasks = [
        { id: 1, name: "Read a book"}, /**element1 = item */
        { id: 2, name: "Do homework"}, /**element2 = item */
    ];

    const [name, setName] = useState('');
    const [tasks, setTasks] = useState(initTasks);
    
    //add คือฟังก์ชัน
    const add =() =>{
        setTasks([ ...tasks,{id: tasks[tasks.length - 1].id + 1, name}]);
    }
    // ฟังก์ชันลบ
    const del = (id) =>{
        console.log('Delete')
        //item.id ไหนตรงกันจะ filter ตัวนั้นทิ้ง
        const newTasks = tasks.filter((task)=>( +task.id !== +id)); // id=string +id=int
        setTasks(newTasks); //หรือจะเขียน setTasks([...newTasks]); 
    }
    const renderTasks = () =>{
       return tasks.map( (item, index)=> {
           return (<li key={index}> 
           {item.id} {item.name}
           <button onClick={()=> del(item.id)}>Delete</button>
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
     * ------------------------------------------------------------------------------------------------------------------
     * ตัวอย่างฟังก์ชันลบ 
     * lat a = [1,2,4,2,4,8,5,3]
     * let newA = a.filter((a_item) => a_item !== 4)    คืออยากลบเลข 4 ออก โดย a_item เข้าไปเช็คใน lat a = [1,2,4,2,4,8,5,3]
     * console.log("new A: ",newA);                         ว่าตัวที่ 1 เท่ากับ 4 ไหม ถ้าไม่เท่าจะส่งค่าไปให้ newA 
     *                                                  ถ้าเราต้องการแค่เลข 4 ใช้ let newA = a.filter((a_item) => a_item === 4)
     * ------------------------------------------------------------------------------------------------------------------
    */
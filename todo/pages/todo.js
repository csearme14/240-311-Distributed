import { useState } from "react";

const Todo = () => {
    //tasks คือตังแปร ซึ่งมี name เป็น State
    const initTasks = [
        { id: 1, name: "Read a book"}, /**element1 = item */
        { id: 2, name: "Do homework"}, /**element2 = item */
    ];

    const [name, setName] = useState('');
    const [idEdit,setIdEdit] = useState(0);
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
    //ฟังก์ชัน Edit
    const editTask = (id) =>{
        console.log("Edit" +id);
        setIdEdit(id);
        const t = tasks.find((task) => (+task.id === +id)) //หา tasks ใหม่
        setName(t.name);
        //ถ้ากด Edit ครั้งที่ 2 จะทำการบันทึกคำที่เปลี่ยน
        if (+idEdit === +id){                              //เช็ค id เท่ากันไหม
            const newTasks = tasks.map ((task) =>{
                if(+task.id === +id)                       //เช็ค id เท่ากันไหม     
                task.name = name;                          //เป็นการเก็บชื่อใหม่
                return task;
            })
            setTasks(newTasks);                            
            setIdEdit(0);                                  
        } 
    }

    const renderTasks = () =>{
       return tasks.map( (item, index)=> {
           return (<li key={index}>
            {item.id}
            {
                (idEdit !== item.id)? item.name :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            }

           <button onClick={()=> del(item.id)}>Delete</button>
           <button onClick={()=> editTask(item.id)}>Edit</button>
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

     /** 
     * .map เป็นการวนลูป element ตามลำดับของฟังก์ชัน tasks เหมือนกับ for loop 
     *  useState = 1.name เป็นstate, 2.setName เป็นฟังก์ชันที่ใช้setค่าname โดยค่าถ้าname มีการsetค่าใหม่ ตัวแปรจะรีเฟรชอัตโนมัติ
     *  npm run dev
     * ------------------------------------------------------------------------------------------------------------------
     * ตัวอย่างฟังก์ชันลบ 
     * lat a = [1,2,4,2,4,8,5,3]
     * let newA = a.filter((a_item) => a_item !== 4)    คืออยากลบเลข 4 ออก โดย a_item เข้าไปเช็คใน lat a = [1,2,4,2,4,8,5,3]
     * console.log("new A: ",newA);                         ว่าตัวที่ 1 เท่ากับ 4 ไหม ถ้าไม่เท่าจะส่งค่าไปให้ newA 
     *                                                  ถ้าเราต้องการแค่เลข 4 ใช้ let newA = a.filter((a_item) => a_item === 4)
     * ------------------------------------------------------------------------------------------------------------------
     *      {item.id}
     *      {
     *          (idEdit !== item.id)? item.name :                 แปลว่า ถ้าไม่เท่ากันให้แสดงข้อความเดิม : หากเท่ากัน 
     *          <input type="text" value={name}                   จะรับค่า input โดยเก็บไว้ใน name
     *          onChange={(e) => setName(e.target.value) />       onChange คือ เกิดการเปลี่ยนแปลง เช่น ถ้ามีการพิมพ์ข้อมูลลงไปให้ setName
     *      }                                                     
     * ------------------------------------------------------------------------------------------------------------------
     *     <input type="text" name="xx"                     (e) คือ ตัวแปรที่มี สามารถเปลี่ยนชื่อตัวแปรได้ ซึ่งในที่นี้เปลี่ยนเป็น foo
     *     onChange={ foo =>console.log(foo)} />            ในตัวแปรนั้นจะมี object รวมกันเยอะๆ แต่เราสามารถเรียกใช้แค่บางอย่างได้ 
     *                                                      เช่น (e) = ตัวแปร โดยกำหนดให้อ่านข้อมูลผ่าน e.target.value 
     *  ------------------------------------------------------------------------------------------------------------------
     *                                
    */
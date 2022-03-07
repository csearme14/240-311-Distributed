import { useState } from "react";

const Todo = ( {avatar_url, login} ) => {
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
           return (<li className="relative mr-4 border-2 border-dashed p-8" key={index}>
            <div className="text-3xl text-indigo-200 drop-shawdow-lg">
            <div className="absolute text-xl mr-2 bottom-0 right-0">{item.id}</div>
            {
                (idEdit !== item.id)? item.name :
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            }
            </div>

            <div className="mt-8 flex justify-center">
                <button className="drop-shawdow-lg mr-4 bg-red-200 hover:text-red-600 hover:bg-red-100 rounded-lg p-2" onClick={()=> del(item.id)}>Delete</button>
                <button className="drop-shawdow-lg mr-4 bg-yellow-200 hover:text-orange-600 hover:bg-yellow-100 rounded-lg p-2" onClick={()=> editTask(item.id)}>Edit</button>
            </div>
           </li>) 

       })
    }
    
    return (<div className = "bg-indigo-400 h-screen flex flex-col items-center p-8">
        <div className="flex items-center mb-4">
            <img className="rounded-full mr-4" src={avatar_url} width="80" />
            <h1 className="text-2xl text-indigo-10 drop-shawdow-lg" >Todo for {login}</h1>
        </div>
        
            <div className="block m-3 ">
                <input className="drop-shawdow-lg p-2" type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <button className="drop-shawdow-lg bg-green-300 hover:text-purple-600 hover:bg-green-100 text-indigo-10 p-2" onClick={add} >Add</button> {name}
            </div>
        <ul className="flex flex-wrap" >{ renderTasks() }</ul> 
        </div>   
    )

 }

 Todo.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/users/wwarodom')
    const json = await res.json()
    return { login: json.login, avatar_url: json.avatar_url }
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
     *  Checkpoint  
     *  add tasks < 10 
     *  tasks = ไม่พิมพ์อะไรเลย ต้อง add ไม่ได้
     *  ถ้ามีการลบ tasks เลขลำดับต้องเรียง
     *  ลบ tasks ทั้งหมดต้องไม่พัง
    */
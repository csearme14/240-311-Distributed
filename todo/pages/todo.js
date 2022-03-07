import { useState } from "react";

const Todo = ( {avatar_url, login} ) => {
    //tasks คือตังแปร ซึ่งมี name เป็น State
    const initTasks = [
        { id: 1, name: "Read a book"}, /**element1 = item */
        { id: 2, name: "Do homework"}, /**element2 = item */
        { id: 3, name: "Chalisa Sinban"},
    ];

    const [name, setName] = useState('');
    const [tasks, setTasks] = useState(initTasks);
    const [idEdit,setIdEdit] = useState(-1);
    
    
    //add คือฟังก์ชัน
    const addTask = () => {
        console.log('add');
        if (name == "")
            return alert("กรุณากรอกข้อมูล");
        if (name == " ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "  ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "   ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "    ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "     ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "      ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "       ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "        ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "         ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "          ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "           ")
            return alert("กรุณากรอกข้อมูล");    
        if (name == "            ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "             ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "              ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "               ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                 ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "                  ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                   ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "                    ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                     ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                      ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                       ")
            return alert("กรุณากรอกข้อมูล"); 
        if (name == "                        ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                         ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "                          ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                           ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                            ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                             ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "                              ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                               ")
            return alert("กรุณากรอกข้อมูล");        
        if (name == "                                ")
            return alert("กรุณากรอกข้อมูล");
        if (name == "                                 ")
            return alert("กรุณากรอกข้อมูล");
        if (tasks.length == 0)
            setTasks([{ id: 1, name }]);
        if (tasks.length >= 10)
            return alert("ข้อมูลเกิน 10 ครั้ง");
        else
            setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name }])
        console.log('new task: ', tasks);
    }
    // ฟังก์ชันลบ
    const deleteTask = (id) => {
        console.log("Delete", id);
        const newTasks = tasks.filter((item) => +item.id !== +id);
        setTasks(newTasks);
    }
    //ฟังก์ชัน Edit
    const editTask = (id) => {
        setIdEdit(id);
        const task = tasks.find(item => +item.id === +id)
        setName(task.name);
        if (+idEdit === +id) { // press edit again
            // set new tasks
            const newTasks = tasks.map((task, index) => {
                if (+task.id === +id)
                    task.name = name;
                return task;
            });
            setTasks(newTasks); // re-render
            setIdEdit(0);       // re init idEdited
        }
    }

    const renderTask = () => {
        console.log(idEdit)
        return tasks.map((item, index) =>
        (<li key={index} className="relative m-4 border-2 border-dashed p-8">
            <div className="absolute bottom-0 right-0 text-xl mr-2 text-indigo-500">
                {index + 1}
            </div>
            {+idEdit !== +item.id ?
                <div className="text-3xl text-indigo-800 drop-shadow-lg drop-shadow-lg max-w-xs">{item.name}</div> :
                <input className="text-3xl text-indigo-800" type="task"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            }
            <div className="mt-8 flex justify-center">
                <button className="mr-4 p-2 bg-red-400 hover:text-indigo-500 rounded-lg drop-shadow-lg" onClick={() => deleteTask(item.id)}>Delete</button>
                <button className="p-2 bg-yellow-500 hover:text-indigo-500 rounded-lg drop-shadow-lg" onClick={() => editTask(item.id)}>Edit</button>
            </div>
        </li>))
    }

    return (<div className="h-screen bg-blue-300 border-2 flex flex-col items-center">
        <h1 className="flex justify-center m-8 text-indigo-800 text-4xl drop-shadow-lg">
            <img src={avatar_url} width="80" />
            <div className="flex flex-row ml-3 pt-5 justify-center text-indigo-800 text-3xl drop-shadow-lg">
                Todo for
                <span className="flex flex-row justify-center ml-2"> {login} </span>
            </div>
        </h1>

        <div className="flex w-2/3 justify-center mb-8">
            <input className="w-1/3 rounded-lg pl-2 ml-2 mr-4" type="text" name="task" onChange={e => setName(e.target.value)} />
            <button className="bg-green-600 text-indigo-200 hover:text-indigo-500 p-2 rounded-lg" onClick={addTask}>Add</button>
        </div>

        <ul className="flex flex-wrap mb-8">
            {renderTask()}
        </ul>
    </div>)
}
Todo.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/users/Iamok-cs')
    const json = await res.json()
    return { login: json.login, avatar_url: json.avatar_url }
}

export default Todo;

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

import React,{ useState  } from 'react';
import './App.css';
import Card from './components/Card';

const App=()=>{
    const [todosState,setTodosState] = useState(
        {
        todos:[
            {task:"Study React",done:false},
            {task:"Buy Groceries",done:true},
            {task:"Clean the Room",done:false},
            {task:"Take a Shower",done:true},
            {task:"Study Redux",done:false},
            {task:"Study Hooks",done:false},
            {task:"Stay safe",done:true}
             ],
    
        }
        )

        

const addTaskHander=()=>{
    
    let newTask=prompt('Add Task','Add Task');
    if(typeof newTask==='string'){
        newTask=newTask.trim()
    }
    if(newTask===null || newTask==='Add Task' || newTask===''){
        return;
    }
    else{
        let taskObj={task:newTask,done:false};
        setTodosState({todos:[...todosState.todos,taskObj]})
    }
  
   
  
}

const deleteHandler=(id)=>{
    let arr=[...todosState.todos];
    let bool=window.confirm("Are you that you want to delete this Task?")
    if(bool===true){arr=arr.filter((item,index)=> {
        if(index!==id){
            return item;
        }
        else{return;}
       return;
    }
     )
    
    setTodosState({todos:[...arr]});
}
}

const editHandler=(id)=>{
    let arr=[...todosState.todos];
    let str= arr[id].task;
    arr[id].task=prompt("Edit the thing",str)

    setTodosState({todos: [...arr]})
}

const completedHandler=(id)=>{

    let arr=[...todosState.todos];
    arr[id].done=!arr[id].done;
    setTodosState({todos:[...arr]});
}

const editHandler2=(id,event)=>{
    let arr=[...todosState.todos];
    arr[id].task=event.target.value;
    setTodosState({todos: [...arr]})

}

const filterTask=(str)=>{
    let arr=[...todosState.todos];
    
    let doneTrue=arr.filter((item)=>{if(item.done===true){return item} else{return;}});
    let doneFalse=arr.filter((item)=>{if(item.done===false){return item} else{return;}});
    console.log(arr)
    if(str==="incomplete"){
      setTodosState({todos:[...doneFalse,...doneTrue]})
    }
    else if(str==="completed"){
        setTodosState({todos:[...doneTrue,...doneFalse]})
    }
    else if(str==="nameAsc"){
        let newarr=arr.sort((a,b)=>{
            const nameA=(a.task).toUpperCase()
            const nameB=(b.task).toUpperCase()
            
          
            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;

        })
        setTodosState({todos:[...newarr]})
        console.log(todosState.todos)
    }
    else if(str==="nameDsc"){
        let newarr=arr.sort((a,b)=>{
            const nameA=(a.task).toUpperCase()
            const nameB=(b.task).toUpperCase()
            
          
            let comparison = 0;
            if (nameA < nameB) {
              comparison = 1;
            } else if (nameA > nameB) {
              comparison = -1;
            }
            return comparison;

        })
        setTodosState({todos:[...newarr]})
        
    }
   

}



 return( 
 
    <div className="app-class">
        
        <h1>To-Do</h1>
        <div className="dropdown">
            <span>Select Filtering</span>
            <div class="dropdown-content">
            <button onClick={()=>filterTask("completed")}> Completed first</button>
            <button onClick={()=>filterTask("incomplete")}> Incomplete first</button>
            <button onClick={()=>filterTask("nameAsc")}> Ascending By Name</button>
            <button onClick={()=>filterTask("nameDsc")}> Descending By Name</button>

            </div>
        </div>
        <button onClick={()=>addTaskHander()}>Add</button>

        {todosState.todos.map((item , index, arr)=><Card key={index} data={item.task} done={item.done} index={index} delete={deleteHandler} edit={editHandler} edit2={editHandler2} completed={completedHandler} />)}
  
        
        
    </div>
    
    );
}



export default App;

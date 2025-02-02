import React from "react";
import List from "./List";
import Forms from "./Forms";
import Counter from "./Counter";
import FilterTask from "./FilterTask";
import SearchBar from "./SearchBar";

const initialTasks = [
  { id: 1, text: "Drinking Coffee", completed: false, important:false },
  { id: 2, text: "Making Exercise", completed: false, important: false },
  { id: 3, text: "Reading Book", completed: false, important: false },
];

export default function Task() {
  const [tasks, setTasks] = React.useState(initialTasks);
  const [filter, setFilter]=React.useState("all")
  const [searchBar, setSearchbar]=React.useState("")



  function addNewTask(formData) {
    const newTaskText = formData.get("task");
    const newTask = {
      id: Date.now(), // Generate a unique ID for new tasks
      text: newTaskText,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  //important button function
  function handleImportant(id){
    setTasks(prevTasks=> 
      prevTasks.map((task)=>
        task.id===id? {...task, important: !task.important}: task
      )
    )
  }


  function handleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id){
    setTasks((prevTask)=>prevTask.filter((task)=>task.id!==id))
  }
 

  //filtering items
  const filterTask=tasks.filter(task => {
    if(filter==="active")
      return !task.completed 
    else if (filter==="completed")
      return task.completed
    else if (filter==="important")
      return task.important
    return true
    }) 
    .filter(task=>task.text.toLowerCase().includes(searchBar.toLowerCase()))
    
    
  



  return (
    <div>
      <Forms addItem={addNewTask} />
      <FilterTask 
      onFilterChange={setFilter}
      />
     
      <Counter 
       tasks={tasks}
      />

      <SearchBar 
        onSearch={setSearchbar}
      />

      <h1>List of the Tasks:</h1>
      {tasks.length===0?(
        <p className="display-noTask">No Tasks Left</p>
      ):  
      <List 
      tasks={filterTask} 
      complete={handleComplete}
      remove={deleteTask} 
      important={handleImportant}
      />
      }
      
    </div>
  );
}










  
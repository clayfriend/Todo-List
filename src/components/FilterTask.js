import React from "react"

export default function FilterTask({onFilterChange}){

//mapping filtering
function handleFilterChange(filterType) {
    onFilterChange(filterType); // Notify the parent component about the filter change
  }

  return (
    <div>
      <button onClick={() => handleFilterChange("all")}>All Tasks</button>
      <button onClick={() => handleFilterChange("active")}>Active</button>
      <button onClick={() => handleFilterChange("completed")}>Completed</button>
      <button onClick={()=>handleFilterChange("important")}>Important</button>
    </div>
  );
}
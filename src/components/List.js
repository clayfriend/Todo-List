import React from "react";
import ListItem from "./ListItems";

export default function List({ tasks, complete, remove, important }) {



  return (
    <div>
      <ul>
        {tasks.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            completed={complete}
            deleted={remove}
            important={important}
          />
        ))}
      </ul>
    </div>
  );
}








// import React from "react" 
// import ListItem from "./ListItems"

// export default function List({tasks, complete, deleted}){
  

//     return(
//         <div>
//             <h1>List of the Tasks:</h1>
//            <ul>
//             {tasks.map(item=>(
//                 <ListItem
//                 key={item.id}
//                 item={item}
//                 complete={complete}
//                 deleted={deleted}
//                 />
//             ))}
//            </ul>
             
          
//         </div>
//     )
// }
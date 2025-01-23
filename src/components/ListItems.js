


import React from "react";

export default function ListItem({ item, completed, deleted, important }) {
  return (
    
    <li style={{
         textDecoration: item.completed ? "line-through" : "none",
        fontWeight:item.important? "bold": "normal",
         }}>
      <span>
      <button className="btn-import" onClick={() => important(item.id)}></button>
        {item.text}</span>
      <div className="handle-button">
        <div className="button-column">
          <button onClick={() => completed(item.id)}>Complete</button>
          <button onClick={() => deleted(item.id)}>Delete</button>
         
        </div>
      </div>
    </li>
  );
}

//CHAT GPT

// import React from "react";

// export default function ListItem({ item, complete, deleted }) {
//   return (
//     <li style={{ textDecoration: item.completed ? "line-through" : "none" }}>
//       <span>{item.text}</span>
//       <div className="handle-button">
//         <div className="button-column">
//           <button onClick={() => complete(item.id)}>Complete</button>
//           <button onClick={() => deleted(item.id)}>Delete</button>
//         </div>
//       </div>
//     </li>   
//   );
// }




// // import React from "react";

// // export default function ListItem( {item, completed, deleted} ) {

// //     return (
// //       <li key={item.id} style={{ textDecoration: item.completed ? "line-through" : "none" } }>
// //             <span>{ item.text }</span> 
// //             <div className="handle-button">
// //                 <div className="button-column" >
// //                     <button onClick={()=>completed.complete(item.id)} >Complete</button>
// //                     <button onClick={()=>deleted.delete(item.id)} >Delete</button>
// //                 </div>
// //             </div>
// //         </li>
// //     )
// // }
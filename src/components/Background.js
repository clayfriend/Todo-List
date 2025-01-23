import React from "react";

export default function Background(){

    const[color, setColor]=React.useState("red")
    const[inputColor,setInputColor]=React.useState("")
  
    function defaultColor(){
    setColor("red")
   }
    
   function changeColor(newColor){
    setColor(newColor)
   }


   function handleChange(event){
    setInputColor(event.target.value)
   }

   function applyColor(){
    setColor(inputColor)
   }
  

    return(
        <div 
            className="content"
        style={{ 
            textAlign:"center",
            marginTop:"50px"  
            }}>
        <div style={{
            border:"1px solid black",
            backgroundColor:color,
            width: "200px",
            height: "200px",
            margin:"o auto",
            color:"grey",
            borderRadius:"50%"
            }}>
            </div>
            <div className="content-button">
            <button onClick={()=>changeColor("green")} style={{margin:"5px"}} >Change the color to green</button>
            <button onClick={()=>changeColor("yellow")} style={{margin:"5px"}}>Change the color to yellow</button>
            <button onClick={()=>changeColor("orange")} style={{margin:"5px"}}>Change the color to orange</button>
            <button onClick={defaultColor} style={{margin:"5px"}}>Make the color default</button>
            <br/>
            <input 
                type="text"
                value={inputColor}
                onChange={handleChange}
            />
            <button onClick={applyColor}>Add custom color</button>
            
            </div>

        </div>
    )
}
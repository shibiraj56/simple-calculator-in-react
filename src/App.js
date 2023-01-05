import React from "react";

class Exprsn extends React.Component{
    constructor(){
        super()
        this.textInput = React.createRef();
        this.state={
            res:''
        }
    }
    eqn=(event)=>{
        this.setState((prev)=>({res:prev.res+event.target.value}))
        
    }
    keyb=(event)=>{
        this.setState(()=>({res:event.target.value}))
    }
    del=()=>{
        this.setState(()=>({res:this.state.res.slice(0,-1)}))
       
    }
    clrall=()=>{
        this.setState(()=>({res:""}))
    }
    result(){
        this.setState(()=>({res:eval(this.state.res)}))
        document.getElementById("result").innerHTML=(eval(this.state.res))
    }
   
   onkeypress=()=>(
          document.getElementById("id_search").focus()
   )

  // onkeypress = () => {document.write("pressed")};
    
    render(){
        return(<><h1>Calculator</h1><h1><form><input type="text" id="id_search" onChange={this.keyb} value={this.state.res} autoFocus></input><br></br>
        <button type="button" value={1} onClick={this.eqn}>1</button> <button type="button" value={2} onClick={this.eqn}>2</button> <button type="button" value={3} onClick={this.eqn}>3</button> <button type="button" value={"+"} onClick={this.eqn}>+</button><br></br>
        <button type="button" value={4} onClick={this.eqn}>4</button> <button type="button" value={5} onClick={this.eqn}>5</button> <button type="button" value={6} onClick={this.eqn}>6</button> <button type="button" value={"-"} onClick={this.eqn}>-</button><br></br>
        <button type="button" value={7} onClick={this.eqn}>7</button> <button type="button" value={8} onClick={this.eqn}>8</button> <button type="button" value={9} onClick={this.eqn}>9</button> <button type="button" value={"*"} onClick={this.eqn}>*</button><br></br>
    <button type="button"  onClick={this.del}>Del</button> <button type="button" value={0} onClick={this.eqn}>0</button> <button type="button" value={"."} onClick={this.eqn}>.</button> <button type="button" value={"/"} onClick={this.eqn}>/</button> </form><button onClick={()=>{this.result()}}>Ans</button>   <button onClick={()=>{this.clrall()}}>Clear All</button><p id="result"></p></h1></>)
    }
    
}
export default Exprsn;
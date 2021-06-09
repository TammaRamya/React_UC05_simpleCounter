import React from 'react';
export default class Counter extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            count:0,
            colour:'black'
        }
    }
    increment(){
        this.setState(
            {
            count:this.state.count+1,
            colour:this.state.count>=0?this.state.colour='green':this.state.colour='red'
            }
            )
    }
    decrement(){
        this.setState(
            {
            count:this.state.count-1,
            colour:this.state.count<=0?this.state.colour='red':this.state.colour='green'
            }
        )
    }
    reset(){
        this.setState(
            {
            count:0,
            colour:this.state.colour='black'
            }
        )
    }
    render(){
        return(
            <div>
                <div style={{fontSize:'30px'}}>Counter</div>
                <div style={{fontSize:'70px',color:this.state.colour}}>{this.state.count}</div>
                
                <button onClick={()=>this.increment()}  >Increment</button>
                <button onClick={()=>this.decrement()}>Decrement</button>
                <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }
}
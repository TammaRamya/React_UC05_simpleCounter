import React from 'react';
export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            colour:'black'
        } }
    onClickButton=(event)=>{
        if(event.target.value==='Increase') {
            this.setState(
                {
               count:this.state.count+1,
                colour:this.state.count>=0?'green':'red'
                } )  }
        else if(event.target.value==='Decrease'){
            this.setState(
             {
                count:this.state.count-1,
                colour:this.state.count<=0?'red':'green'
            })}
        else if(event.target.value==='Reset'){
            this.setState(
            {
                count:0,
                colour:'black'
                })}
    }
    render(){
        const {count,colour}=this.state;
        return(
           
            <div>
                <div style={{fontSize:'30px'}}>Counter</div>
                <div style={{fontSize:'70px',color:colour}}>{count}</div>
                
                <button value="Increase" onClick={e=>this.onClickButton(e,'value')} >Increment</button>
                <button  value="Decrease"onClick={e=>this.onClickButton(e,'value')}>Decrement</button>
                <button value="Reset" onClick={e=>this.onClickButton(e,'value')}>Reset</button>
            </div>
        )
    }
}

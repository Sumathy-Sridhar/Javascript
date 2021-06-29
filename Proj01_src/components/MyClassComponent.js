import { Component } from 'react';

export class MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:"Thaara",
          age:10,
          count:0,
          ts:new Date(),
          location:"cons"
        };
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this);

    }
handleButtonOnClick=()=>{
    this.setState((prev)=>{
        return{
            ...prev,
            count:prev.count+1
    }
    },()=>{
        console.log("Count updated successfully..")
    }
    
    );
}

componentWillMount(){
    this.setState((prev)=>{
        return {
            ...prev,
            location:"Component Will Mount"
        }
    }
    );
  console.log("Component Will Mount Works....");
}

componentWillReceiveProps(nextProps) {
  console.log("==componentWillReceiveProps==" + this.props.color);
}

shouldComponentUpdate(nextProps, nextState) {
    console.log("==shouldComponentUpdate==" + this.props.color + "," + nextProps.color);
      if (this.props.color == nextProps.color){
        return false;
      } 
      else { return true;}
  }

    render() {
        const clr=this.props.color;
        return (
            <div>
            <h1 style={
                {color:clr}
            }> Lifecycle Hooks</h1>
                <h2> Data is {this.state.name}</h2>
                <h2> Data is {this.state.age}</h2>
                <h2> Data is {this.state.count}</h2>      
                <h2> Date is {this.state.ts.toString()}</h2>       
                <button onClick={()=>this.handleButtonOnClick()}>Update Count</button>
            </div>
        );
    }
}

export default MyClassComponent;

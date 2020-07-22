//import React from 'react';
import React, {Component} from 'react';
import './App.css';
import seat from './components/Seat/seat.js';
class App extends Component{
   state ={ seat:[
	   {seatno: '1',amount :'100'},
	   {seatno:' 2', amount :'100'},
       {seatno: '3' ,amount :'150'}
   
  ]
}
  selectseatHandler =()=>{
   
  
  }
  render(){
  return(
       <div className = "App">
	  <h1>Book your seats</h1>
	 <seat
	  seatno={this.state.seat[0].seatno}
      amount={this.state.seat[0].amount} 
	  onClick={selectseatHandler}
	/>
	
	<seat
	  seatno={this.state.seat[1].seatno}
      amount={this.state.seat[1].amount}
	  onClick={selectseatHandler}/>
	
	<seat
	  seatno={this.state.seat[2].seatno}
      amount={this.state.seat[2].amount} 
	  onClick ={this.selectseatHandler} />
</div>
		  
	  
	  
	  );
  
  
  }
}

export default App;

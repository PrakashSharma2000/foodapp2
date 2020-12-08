import React, { Component } from 'react'
import axios from 'axios'
import FoodItem from './Component.js/FoodItem';
import './App.css'
import Addeditems from './Component.js/Addeditems';
import PendingOrder from './Component.js/PendingOrder';
import Header from './Component.js/Header';

class App extends Component {



  state = {
      posts:[],
      data:[],
      fooditem:[],
      foodprice:[],
      total:[]
  }

  handleChange = ({target}) => {
    const {name,value}=target;

    this.setState({
      [name]: value
    })

    
  }

  getData = () =>{
    axios.get('/api/name')
    .then((response)=>{
      const data = response.data;
      this.setState({posts:data})
      console.log("data has been recived")
    })
    .catch(()=>{
      console.log("errror occured while retriving data")
    })
  }

  getData2 = () =>{
    axios.get('/api')
    .then((response)=>{
      const data = response.data;
      this.setState({data:data})
      console.log("data has been recived")
    })
    .catch(()=>{
      console.log("errror occured while retriving data")
    })
  }

  
  
componentDidMount =()=>{
this.getData()
this.getData2()
}
  

submit = (event) =>{
    event.preventDefault();
    const payload ={
      fooditem:this.state.fooditem,
      foodprice:this.state.foodprice,
      total:this.state.total
    }
    axios({
      url:'http://localhost:3000/api/save',
      method:'post',
      data:payload
    })

      .then(()=>{
        console.log("data has been to the server")
        this.resetData();
        this.getData2();
      })
      .catch(()=>{
        console.log("erorr occured")
      });
  };

  resetData = () =>{
    this.setState({
     fooditem:[],
     foodprice:[],
     total:null
    });
  };

  getname = (names,prices) =>{
      console.log(`name: ${names} , prices: ${prices}`)
      this.setState({
        fooditem:[...this.state.fooditem,names],
        foodprice:[...this.state.foodprice,prices]
      })
      
  }

  gettotal = (totalp) => {

      totalp=totalp+(totalp*(10/100))
      this.setState({
        total: totalp
      })
      return(
        <div>{this.state.total}</div>
      )
      
      
  }  

  // displayblogpost = (data) => {

  //   if (!data.length) return null;

    
  //     return data.map((post ,index) => (
  //     <div key={index}>
  //     <h3>{post.total}</h3>
  //     <p>{" "+post.fooditem+" " + " " +post.foodprice}</p>
      
  //     </div>
  //   ));
  // };

  render() {
    console.log(this.state)
    
    return (
      <div>
        <Header/>
        <div className="item display">
          <FoodItem posts={this.state.posts} getname={this.getname} />
        </div>
       
        <div>
          <Addeditems foodname={this.state.fooditem} foodprice={this.state.foodprice} gettotal={this.gettotal} itslenght={this.state.foodprice.length} total={this.state.total}/>
        </div>
        
        <div className="order">
        <form onSubmit={this.submit}>
            <button className="paybutton" >Pay</button>
        </form>
      </div>

        

       <div>
         <PendingOrder data={this.state.data}/>
       </div>
      </div>
    )
  }
}
export default App

// <div>
//           {this.displayblogpost(this.state.data)} how to render on call
//         </div>
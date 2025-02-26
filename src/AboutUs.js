import React from 'react'
import UserClass from './UserClass'


class AboutUs extends React.Component{

  constructor(props){
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount(){
    // console.log("parent component did mount");
}


  render(){

    // console.log("parent render")

    return(
      <div>
      <h1>About us</h1>
      <UserClass />
    </div>
    )
  }
}

export default AboutUs

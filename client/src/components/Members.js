import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './cssComponents/Members.css';
import Api from './MembersApi';


export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null
    }
    this.api = new Api();
  }

    componentDidMount() {
      this.api.allMembers()
      .then(members =>{
        console.log(members)
        this.setState({
          ...this.state,
          members: members
        })
      })
    }
    
    render() {
      if(this.state.members){
      return (
        <div className="container">
          {this.state.members.map((member,idx) => {
            if(typeof member.image === "string" && typeof member.name === "string" && typeof member.age === "number") {
            return (
              <div key={idx} className="contact">
            <div className="contact-a">
              <Link to={'/member'} onClick={() => this.props.oneMember(member)}>
              <img className="member-pic" alt="" src={member.image}></img>
              </Link>
              <div className="name-p-container">
              <p className="name-p">{member.name}</p> 
              </div> 
            </div>
              <div className="contact-b">
               <p className="age-p">{member.age} years old</p>
              </div>
              </div>
            )
            }else {
              return
            }
          })}
        </div>
      )
        }else{return<div>
          
            <p>loading</p>
        </div>
        }
      
    }
  
}

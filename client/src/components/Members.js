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
            return (
              <div key={idx} className="contact">
            <div className="contact-a">
              <Link className="" to={'/member'} onClick={() => this.props.oneMember(member)}>
              <img className="member-pic" alt="" src={member.image}></img>
              </Link>
              <p>{member.name}</p>  
              </div>
              <div className="contact-b">
               <p>{member.age} years old</p>
              </div>
              </div>
            )
          })}
        </div>
      )
        }else{return<div>
          
            <p>loading</p>
        </div>
        }
      
    }
  
}

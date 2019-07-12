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
            <div>
              <img className="member-pic" alt="" src={member.image}></img>
              </div>
              <p>{member.age}</p>
              <p>{member.name}</p>  
              <div>
              <Link className="" to={`/member`}>
                <button
                  onClick={() => this.props.oneMember(member)}>
                  {member.name}
                </button>
              </Link>
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

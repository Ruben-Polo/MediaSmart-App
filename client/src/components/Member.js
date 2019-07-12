import React, { Component } from 'react'
import Api from './MembersApi'
import './cssComponents/Member.css';

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null
    }
    this.api = new Api();
  }

  render() {
    if(this.props.member){
      const member = this.props.member
    return (
            <div className="one-contact-container">
              <div className="one-contact-a">
                <img className="member-pic" alt="funny-pic" src={member.image}></img>
                <div className="contact-profile">
                 <p>Name: {member.name}</p>
                 <p>Age: {member.age}</p>
                </div>
              </div>
            <div className="bio-container">
             <p className="bio-p">Bio:</p>
             <p className="bio-p">{member.bio}</p>
            </div>
            </div>
    )
      }else{return <div>
        <p>loading</p>
      </div>
      }
    
  }

}

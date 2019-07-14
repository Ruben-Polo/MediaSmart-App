import React, { Component } from 'react'
import Api from './MembersApi'
import './cssComponents/Member.css';
import { Link } from "react-router-dom";

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null
    }
    this.api = new Api();
  }

  render() {
    if (this.props.member) {
      const member = this.props.member
      return (
        <div className="one-contact-container">
          <div className="one-contact-a">
            <img className="one-member-pic" alt="funny-pic" src={member.image}></img>
            <div className="contact-profile">
              <p className="name-text"><span className="span-profile">Name:</span> {member.name}</p>
              <p><span className="span-profile">Age:</span> {member.age}</p>
            </div>
          </div>
          <div className="bio-container">
            <p className="bio-p"><span className="span-bio">Bio:</span></p>
            <p className="bio-p">{member.bio}</p>
          </div>
          <div className="close-button-container">
            <Link to={'/'}>
              <button>Close</button>
            </Link>
          </div>
        </div>
      )
    } else {
      return <div>
        <p>loading</p>
      </div>
    }

  }

}

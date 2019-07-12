import React, { Component } from 'react'
import Api from './MembersApi'
import './cssComponents/Members.css';

export default class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null
    }
    this.api = new Api();
  }

  // componentDidMount() {
  //   this.api.oneMember(this.props.match.params.id)
  //   .then(member =>{
  //     console.log(member)
  //     this.setState({
  //       ...this.state,
  //       member: member
  //     })
  //   })
  // }

  render() {
    if(this.props.member){
      const member = this.props.member
    return (
            <div className="contact">
          <div>
            <img className="member-pic" alt="funny-pic" src={member.image}></img>
            </div>
            <p>{member.age}</p>
            <p>{member.name}</p>
            <p>{member.bio}</p>

            <div>
            </div>
            </div>
        
    )
      }else{return<div>
        
          <p>loading</p>
      </div>
      }
    
  }

}

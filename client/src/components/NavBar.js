import React, { Component } from 'react'
import './cssComponents/NavBar.css'
import { Link } from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to={'/'}><img className="mediasmart-logo" src="../images/logo-mediasmart.png" alt="mediasmart-logo" /></Link>
        </div>
        <div className="nav">
          <h2 className="members-title">MEMBERS</h2>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './cssComponents/Members.css'

export default class member extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="photo-container">
            <img className="photo-list" src="https://www.mediasmart.io/assets/images/team/adriana.ullivari.funny.jpg" alt="funny-photo"/>
            <p>62 years old</p>
          </div>
          <div className="name-container">
            <p className="name">Do sunt ex consequat qui eu et incididunt adipisicing.</p>
          </div>
        </div>
        <div className="container">
        <div className="photo-container">
          <img className="photo-list" src="https://www.mediasmart.io/assets/images/team/adriana.ullivari.funny.jpg" alt="funny-photo"/>
          <p>62 years old</p>
        </div>
        <div className="name-container">
          <p className="name">Do sunt ex consequat qui eu et incididunt adipisicing.</p>
        </div>
      </div>
      <div className="container">
      <div className="photo-container">
        <img className="photo-list" src="https://www.mediasmart.io/assets/images/team/adriana.ullivari.funny.jpg" alt="funny-photo"/>
        <p>62 years old</p>
      </div>
      <div className="name-container">
        <p className="name">Do sunt ex consequat qui eu et incididunt adipisicing.</p>
      </div>
    </div>
    <div className="container">
    <div className="photo-container">
      <img className="photo-list" src="https://www.mediasmart.io/assets/images/team/adriana.ullivari.funny.jpg" alt="funny"/>
      <p>62 years old</p>
    </div>
    <div className="name-container">
      <p className="name">Do sunt ex consequat qui eu et incididunt adipisicing.</p>
    </div>
  </div>
  </div>
    )
  }
}

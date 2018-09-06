import React, { Component } from 'react'
import Text from '../Text'
import './UserCard.css'

export default class UserCard extends Component {
  renderLeftSide = () =>
    <div className="usercard__left">
      <div className="usercard__left-icon"></div>
    </div>

  renderRightSide = ({ username }) =>
    <div className="usercard__right">
      <Text>
        {username}
      </Text>
    </div>

  render() {
    const { user, mode } = this.props
    const isUserMode = mode === 'user'
    const isDefaultMode = mode === 'default'

    if (isDefaultMode) {

    }

    if (isUserMode) {
      return (
        <div className="usercard">
          {this.renderLeftSide(user)}
          {this.renderRightSide(user)}
        </div>
      )
    }

  }
}

import React from "react";

export default class UserCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.state.name}</h1>
        <p>{this.props.state.login}</p>
        <p>Location: {this.props.state.location}</p>
        <p>Bio: {this.props.state.bio}</p>
        <img src={this.props.state.avatar_url} alt={this.props.state.name} />
      </div>
    );
  }
}

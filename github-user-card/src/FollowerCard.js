import React from "react";

export default class FollowerCard extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <a href={this.props.state.html_url}>
            <img
              src={this.props.state.avatar_url}
              alt={this.props.state.login}
              className="profileImg"
            />
            <h3 className="followerName">{this.props.state.login}</h3>
          </a>
        </div>
      </div>
    );
  }
}

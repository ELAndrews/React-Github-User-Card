import React from "react";
import GitHubCalendar from "github-calendar";

export default class UserCard extends React.Component {
  render() {
    GitHubCalendar(".calendar", "ELAndrews", { responsive: true });
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
        />
        <a href={this.props.state.html_url}>
          <div className="container">
            <div className="right">
              <img
                src={this.props.state.avatar_url}
                alt={this.props.state.name}
                className="profileImg"
              />
            </div>
            <div className="left">
              <h1 className="name">{this.props.state.name}</h1>
              <p>{this.props.state.login}</p>
              <p>Location: {this.props.state.location}</p>
            </div>
            <p className="bio">Bio: {this.props.state.bio}</p>
            <div className="calendar"></div>
          </div>
        </a>
      </div>
    );
  }
}

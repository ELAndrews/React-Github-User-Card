import React from "react";

export default class FollowerCard extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="container">
          <img src={this.props.state.avatar_url} alt={this.props.state.name} />
          <h1>{this.props.state.name}</h1>
          <p>{this.props.state.login}</p>
          <p>Location: {this.props.state.location}</p>
          <p>Bio: {this.props.state.bio}</p>
        </div> */}
        <div className="container">
          <a target="_blank" href="#">
            <img
              src="https://www.dogideas.net/wp-content/uploads/Rottweiler-Names-Male-Female-Rottie-Puppy.jpg"
              alt="Doggo"
              className="profileImg"
            />
            <p className="followerName">EMMA ANDREWS</p>
          </a>
        </div>
      </div>
    );
  }
}

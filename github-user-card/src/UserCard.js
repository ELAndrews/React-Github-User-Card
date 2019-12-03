import React from "react";

export default class UserCard extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="container">
          <h1>{this.props.state.name}</h1>
          <p>{this.props.state.login}</p>
          <p>Location: {this.props.state.location}</p>
          <p>Bio: {this.props.state.bio}</p>
          <img src={this.props.state.avatar_url} alt={this.props.state.name} />
        </div> */}
        <a target="_blank" href="#">
          <div className="container">
            <div className="right">
              <img
                src="https://www.dogideas.net/wp-content/uploads/Rottweiler-Names-Male-Female-Rottie-Puppy.jpg"
                alt="Doggo"
                className="profileImg"
              />
            </div>
            <div className="left">
              <h1 className="name">EMMA ANDREWS</h1>
              <p>ELAndrews</p>
              <p>Location: norwich</p>
            </div>
            <p className="bio">Bio: I have one</p>
          </div>
        </a>
      </div>
    );
  }
}

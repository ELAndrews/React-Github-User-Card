import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      followers: [],
      error: ""
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://api.github.com/users/ELAndrews`)
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(err => {
        this.setState({ error: err.message });
      }, []);
    axios
      .get(`https://api.github.com/users/ELAndrews/followers`)
      .then(response => {
        this.setState({ followers: response.data });
      })
      .catch(err => {
        this.setState({ error: err.message });
      }, []);
  };

  componentDidUpdate = () => {};

  componentWillUnmount = () => {};

  render() {
    return (
      <div>
        <span>user component</span>
        <UserCard state={this.state.user} />
        <ul>
          {this.state.followers.map((curr, index) => {
            return (
              <li key={index}>
                <UserCard state={curr} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

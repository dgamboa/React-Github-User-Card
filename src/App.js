import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";
import Form from "./components/Form";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 40px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      user: {},
      followers: []
    }
  }

  setUsername = (newUsername) => {
    this.setState({
      username: newUsername
    })
  }

  getUsers() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getFollowers() {
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    if (this.state.username) {
      this.getUsers();
      this.getFollowers();
    }
  }

  componentDidUpdate() {
    if (this.state.username) {
      this.getUsers();
      this.getFollowers();
    }
  }
  
  render() {
    return (
      <StyledContainer className="container">
        <Form username={this.username} setUsername={this.setUsername}/>
        <UserCard user={this.state.user}/>
        {this.username
          ? <Followers followers={this.state.followers}/>
          : <div></div>}
      </StyledContainer>
    )
  }
}

export default App;
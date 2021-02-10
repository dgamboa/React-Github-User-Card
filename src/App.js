import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";
import Form from "./components/Form";
import styled from "styled-components";
import { initialFollowers, initialUser } from "./modules/UserData";

const StyledContainer = styled.div`
  margin-top: 40px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "octocat",
      user: {},
      followers: []
    }
  }

  setUsername = (newUsername) => {
    console.log(newUsername)
    this.setState({
      username: newUsername
    });
    this.getUsers();
    this.getFollowers();
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
    const baseUser = initialUser;
    const baseFollowers = initialFollowers;
    
    this.setState({
      user: baseUser,
      followers: baseFollowers
    })
  }
  
  render() {
    return (
      <StyledContainer className="container">
        <Form username={this.username} setUsername={this.setUsername}/>
        <UserCard user={this.state.user}/>
        <Followers followers={this.state.followers}/>
      </StyledContainer>
    )
  }
}

export default App;
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
    }, () => this.populateData());
  }

  populateData() {
    this.getUsers();
    this.getFollowers();
  }

  getUsers() {
    axios.get(`https://api.github.com/users/${this.state.username}`, {
      auth: process.env.REACT_APP_AUTH
    })
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getFollowers() {
    axios.get(`https://api.github.com/users/${this.state.username}/followers`, {
      auth: process.env.REACT_APP_AUTH
    })
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {    
    this.setState({
      username: "octocat"
    }, () => this.populateData())
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
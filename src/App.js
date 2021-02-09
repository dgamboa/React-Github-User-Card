import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import Followers from "./components/Followers";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: 40px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "dgamboa",
      user: {},
      followers: []
    }
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
    this.getUsers();
    this.getFollowers();
  }
  
  render() {
    return (
      <StyledContainer className="container">
        <UserCard user={this.state.user}/>
        <Followers followers={this.state.followers}/>
      </StyledContainer>
    )
  }
}

export default App;
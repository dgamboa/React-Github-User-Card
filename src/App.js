import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
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

  componentDidMount() {
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
  
  render() {
    return (
      <StyledContainer className="container">
        <UserCard user={this.state.user}/>
      </StyledContainer>
    )
  }
}

export default App;
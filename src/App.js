import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "dgamboa",
      user: {},
      followers: []
    }
  }
  
  render() {
    // axios.get(`https://api.github.com/users/${this.state.username}/followers`)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    return (
      <div>
        Hello
      </div>
    )
  }
}

export default App;
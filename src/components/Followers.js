import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Followers({ followers }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
      >
        Followers
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          followers.map(follower => {
            return (
              <Dropdown.Item
                key={follower.id}
                href={follower.html_url}
                target="_blank"
              >
                {follower.login}
              </Dropdown.Item>
            )
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
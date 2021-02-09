import React from "react";
import Card from "react-bootstrap/Card";

export default function UserCard({ user }) {
  const timeAgo = () => {
    const joinedDate = new Date(user.created_at);
    const daysSinceJoined = (Date.now() - joinedDate) / 1000 / 60 / 60 / 24;
    const roundedDays = Math.floor(daysSinceJoined);

    if (daysSinceJoined < 1) {
      return `today!`;
    } else if (roundedDays === 1) {
      return `yesterday!`;
    } else if (roundedDays < 31) {
      return `${roundedDays} days ago`;
    } else if (roundedDays < 61) {
      return `1 month ago`;
    } else if (roundedDays < 365) {
      return `${Math.floor(roundedDays/30.4)} months ago`;
    } else if (roundedDays < 365 * 2) {
      return `1 year ago`;
    } else {
      return `${Math.floor(roundedDays/365)} years ago`;
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.name || "Please enter a GitHub username"}</Card.Title>
        <Card.Text>{user.bio}</Card.Text>
        <Card.Link href={user.html_url} target="_blank">
          {user.name ? "GitHub Profile" : ""}
        </Card.Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {user.name ? `Joined ${timeAgo()}` : ""}
        </small>
      </Card.Footer>
    </Card>
  )
}
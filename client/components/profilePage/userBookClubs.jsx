import React from 'react';
import { Card, Col, Row, Tab, Tabs } from 'react-bootstrap';
import './profileStyles.css';

export default function UserBookClubs() {
  return (
    <div className="userBookClubsBody">
      {/* <div>User's Book Clubs</div> */}
      <div>
        <Card className="userBookClubItem">
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
        <Card className="userBookClubItem">
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
        <Card className="userBookClubItem">
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
        <Card className="userBookClubItem">
          <p>Book Club Name</p>
          <p>Book club description.</p>
        </Card>
      </div>
    </div>
  )
}
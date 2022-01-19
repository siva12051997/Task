import React from "react";
import { useLocation, useNavigate } from "react-router";

function UserDetailsPage(props) {
  const history = useNavigate();
  const state = useLocation();
  return (
    <div>
      <button onClick={() => history("../")}>Go BACK</button>
      <h1>This is Post details page</h1>
      <hr />

      <div>
        <p>
          <strong>Id:</strong> {state.state.id}
        </p>
        <p>
          <strong>Title:</strong>
          {state.state.title}
        </p>
        <p>
          <strong>Body:</strong>
          {state.state.body}
        </p>
      </div>
    </div>
  );
}

export default UserDetailsPage;

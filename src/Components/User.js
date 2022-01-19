import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "./withRouter";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      renderedUsers: [],
      prevId: 0,
      currentId: 10,
      nextId: 0,
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const users = response.data;
      this.setState({ users });
      this.setState({
        renderedUsers: users.slice(this.state.prevId, this.state.currentId),
      });
    });
    // console.log(this.state.currentId, this.state.prevId, this.state.nextId);
  }
  handlePrev = () => {
    let currId =
      this.state.renderedUsers[this.state.renderedUsers.length - 10].id - 1;
    let prevId = currId - 10;
    this.setState({
      renderedUsers: this.state.users.slice(prevId, currId),
      currentId: currId,
      prevId: prevId,
    });
  };
  handleNext = () => {
    let currId =
      this.state.renderedUsers[this.state.renderedUsers.length - 1].id;
    let nextId = currId + 10;
    this.setState({
      renderedUsers: this.state.users.slice(currId, nextId),
      nextId: nextId,
      currentId: currId,
    });
  };
  handleRowClick = (user) => {
    const { history } = this.props;
    history("./details", { state: user });
  };
  render() {
    const { history } = this.props;
    console.log(this.state.renderedUsers[0]?.id);
    console.log(
      this.state.renderedUsers[this.state.renderedUsers.length - 1]?.id
    );
    console.log(this.state.users[this.state.users.length - 1]?.id);
    return (
      <section>
        <div>
          <table className="user">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                {/* <th>Department</th>
                <th>Age</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.renderedUsers.map((users) => (
                <tr key={users.id} onClick={() => this.handleRowClick(users)}>
                  <td>{users.id}</td>
                  <td>{users.title}</td>
                  <td>{users.body}</td>
                  {/* <td>{users.email}</td>
                  <td>{users.address.city}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="arrow">
          <ul>
            <li
              className={`${
                this.state.renderedUsers[0]?.id === 1 ? `prev disabled` : `prev`
              }`}
              onClick={() => this.handlePrev()}
            >
              <span></span>
            </li>
            <li
              className={`${
                this.state.users[this.state.users.length - 1]?.id ===
                this.state.renderedUsers[this.state.renderedUsers.length - 1]
                  ?.id
                  ? `next disabled`
                  : `next`
              }`}
              onClick={() => this.handleNext()}
            >
              <span></span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default withRouter(User);

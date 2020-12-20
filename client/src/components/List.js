import React from "react";
import { connect } from "react-redux";

import { addNewMember } from "../actions/membersActions";

class List extends React.Component {
  state = {
    newMember: ""
  };

  handleChanges = (e) => {
    this.setState({ newMember: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.status && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button
          onClick={() => {
            this.props.addNewMember(this.state.newMember);
          }}
        >
          Add member
        </button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    members: state.membersReducer.members
  };
};

export default connect(mapStateToProps, { addNewMember })(List);

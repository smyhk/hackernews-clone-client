import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const postMutation = gql`
  mutation($url: String!, $description: String!) {
    post(url: $url, description: $description) {
      id
      createdAt
      url
      description
    }
  }
`;

class CreateLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: ''
    }
  }

  render() {
    const { description, url } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            type="text"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation mutation={postMutation} variables={{ description, url }}>
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
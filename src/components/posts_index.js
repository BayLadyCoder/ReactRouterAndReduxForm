import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount() {
      this.props.fetchPosts();
  }

  renderPost() {
    return _.map(this.props.posts, post => {
      //_.map is to map an object. just like JS .map to map an array
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {

    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
            {this.renderPost()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

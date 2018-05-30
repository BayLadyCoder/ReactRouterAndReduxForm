import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // get access to  the url route with :id
    // same as const id = this.props.match.params.id;

    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  };
}

// in mapStateToProps, the first argument must be the application newState
// and the second argument is referred to by convention as ownProps
// ownProps is the props object that is going to specifically this component(in this case is PostsShow)
// ownProps is like this.props
function mapStateToProps({ posts }, ownProps) {
  return { posts: posts[ownProps.match.params.id] };

}


export default connect(null, { fetchPost })(PostsShow);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // get access to  the url route with :id
    // same as const id = this.props.match.params.id;

    this.props.fetchPost(id);
  }

  onDeleteClick() {
      const { id } = this.props.match.params;
      this.props.deletePost(id, () =>  {
        this.props.history.push('/');
      });
  }

  render() {

    const { post } = this.props;

    //check if post is being fetched successfully
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Posts
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// in mapStateToProps, the first argument must be the application newState
// and the second argument is referred to by convention as ownProps
// ownProps is the props object that is going to specifically this component(in this case is PostsShow)
// ownProps is like this.props
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };

}


export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);

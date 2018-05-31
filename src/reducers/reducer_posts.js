import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload); // .omit use for object
      // return _.reject(state, post === action.payload);
      // if we have a state object of an array we would use .reject

    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state,  };
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data };
      // [action.payload.data.id] is not creating an array
      // it's making a new key in this object, key = id and value is the post data
    case FETCH_POSTS:
      // return console.log(action.payload.data); // [post1, post2]
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // renamed reducer(too generic) to formReducer
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer //key of form. important!
});

export default rootReducer;

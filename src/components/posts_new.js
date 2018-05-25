import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
      <label>{field.label}</label>
        <input className="form-control"
        type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

onSubmit(values) {
  // this === component
  // when we handle with this.onSubmit.bind(this) in the callback function
  console.log(values);
  // return object that contains values from the inputs
}

  render() {

    const { handleSubmit } = this.props;
    // pull off handleSubmit function
    // from additional properties that being passed to component
    // from Redux-Form when we use reduxForm to connect with PostsNew (at export)

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  //console.log(values) -> {title: "sdads", categories: "sdsdas", content: "sdasfdgfs"}
  const errors = {};

  //  validate the inputs from 'values'
  if(!values.title) {
    errors.title = "Enter a title";
    // title in errors.title above must be the same with
    // Field's props name. (For example, name="title")
    // in order to display the right name in {field.meta.error} in renderField
  }
  if(!values.categories) {
    errors.categories = "Enter some categories";
    // categories in errors.categories must be the same with
    // Field's props name. (For example, name="categories")
    // in order to display the right name in {field.meta.error} in renderField
  }
  if(!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, Redux Form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, //same as validate: validate,
  form: 'PostsNewForm'
})(PostsNew);

import React, { Component } from 'react';

import './NewItem.css';
import { connect } from 'react-redux';

import { addItem } from '../redux/actions';

class NewItem extends Component {
  state = { value: '' };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form className='NewItem' onSubmit={this.handleSubmit}>
        <input className='NewItem-input' type='text' value={value} onChange={this.handleChange} />
        <input className='NewItem-submit button' type='submit' />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(addItem(value)),
});

export default connect(null, mapDispatchToProps)(NewItem);

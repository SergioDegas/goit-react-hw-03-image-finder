import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, SearchBtn } from './Searchbar.styled';
import toast from 'react-hot-toast';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  onChangeInput = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    
  };

  handleSubmit = e => {
    e.preventDefault();
   
    if (this.state.searchQuery.trim() === '') {
      toast.error('write something' )
     return
      }
       this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
      e.target.reset();
  }
    
  render() {
    const { searchQuery } = this.state.searchQuery;
    return (
      <header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="searchQuery"
            value={searchQuery}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchBtn type="submit">
            <span>Search</span>
          </SearchBtn>
        </Form>
      </header>
    );
  }
}

export default Searchbar;
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
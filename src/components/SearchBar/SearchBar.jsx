import { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleInputChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase().trim() });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header className={css.SearchBar}>
        <form onSubmit={this.handleFormSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

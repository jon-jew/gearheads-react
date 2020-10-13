import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class = "searchbar-container">

          <input placeholder = "Enter search tags here and press enter" class = "searchbar" type="text" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
        </div>
      </form>
    );
  }
}

export default Searchbar;

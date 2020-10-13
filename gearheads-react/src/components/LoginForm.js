import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Username ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className = "login-form" onSubmit={this.handleSubmit}>
      <p class = "welcome"> Login into Gearheads </p>
          <input
            placeholder = "Username"
            name="username"
            autocomplete="off"
            value={this.state.value}
            onChange={this.handleInputChange}
            className = "login-input" />
            <br />
            <input
              placeholder = "Password"
              name="username"
              autocomplete="off"
              type="password"
              value={this.state.value}
              onChange={this.handleInputChange}
              className = "login-input" />
        <br />
        <input class = "button" type="submit" value="LOGIN" />
      </form>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react'; //!
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>Login page</h1>
        <form onSubmit={this.handleSumbit} style={styles.form}>
          <label style={styles.label}>
            <p>E-mail:</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            <p>Password:</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

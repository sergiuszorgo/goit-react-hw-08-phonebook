import { Component } from 'react';
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

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <>
        <h1>Register page</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          style={styles.form}
        >
          <label style={styles.label}>
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
          <button type="submit">Join</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};
const Navigation = ({ isAuthtenticated }) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>
    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>
    {/* {isAuthtenticated && (
      <NavLink
        to="/contacts"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    )} */}
  </nav>
);

// const mapStateToProps = state => ({
//   isAuthtenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
export default Navigation;

import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

/**
 * We use a stateless function for this bit of code here.
 * That's why the formatting looks a little different.
 * @constructor
 */
const Header = () => {
  return (
    <nav>
      {/** activeClassName applies a class when it's active. DUH **/}
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "} {/** Place a pipe between anchor layouts **/}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "} {/** Place a pipe between anchor layouts **/}
      <Link to="/pantry" activeClassName="active">Pantry</Link>
    </nav>
  );
};

export default Header;

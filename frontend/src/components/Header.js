import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import { capitalize } from '../utils/helpers';
import {
  Nav,
  Navbar,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class Header extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Readable</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown">
              {categories.length > 0 && categories.map((category, key) => (
                <MenuItem
                  key={key}
                  eventKey={key}
                  href={`/${category.name}`}
                >
                  {capitalize(category.name)}
                </MenuItem>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

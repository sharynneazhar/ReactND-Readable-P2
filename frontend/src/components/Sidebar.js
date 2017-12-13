import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import { capitalize } from '../utils/helpers';
import { Layout, Menu } from 'antd';

class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <Layout.Sider>
        <Layout.Header style={{
          paddingLeft: 16,
          fontSize: 22,
          color: '#fff'
        }}>
          <Link to="/" style={{ color: '#fff' }}>Readable</Link>
        </Layout.Header>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/">All</Link>
          </Menu.Item>
          {categories.length > 0 && categories.map((category, key) => (
            <Menu.Item key={key + 2}>
              <Link to={`/${category.name}`}>
                {capitalize(category.name)}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Sider>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories,
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

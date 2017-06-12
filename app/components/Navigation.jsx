var React = require('react');
var {Link, IndexLink} = require('react-router');

var MemoSearch = require('MemoSearch');

var Navigation = React.createClass({
  handleSearch: function(searchName) {
    this.setState({
      searchName: searchName.toLowerCase()
    });
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Memo App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Memo</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active-link">About</Link>
            </li>
            <li>
              <MemoSearch onSearch={this.handleSearch}/>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://www.mead.io" target="_blank">Crystal Lu</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});



module.exports = Navigation;

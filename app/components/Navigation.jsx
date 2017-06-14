var React = require('react');
var {Link, IndexLink} = require('react-router');

var MemoSearch = require('MemoSearch');
var MemoAPI = require('MemoAPI');
var MemoApp = require('MemoApp');

var Navigation = React.createClass({
  onSearch: function() {
    var name = this.refs.search.value;
    if(name.length > 0) {
      this.refs.search.value = '';
      this.setState({
        searchName: name.toLowerCase()
      })
    }
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
              <form onSubmit={this.onSearch}>
                <ul className='menu'>
                  <li>
                    <input type='search' ref='search' placeholder='Enter name'/>
                  </li>
                  <li>
                    <input type='submit' className='button' value='Search Memo'/>
                  </li>
                </ul>
              </form>
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

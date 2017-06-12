var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
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
            <form>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="Search memo by name"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Memo"/>
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
};

module.exports = Navigation;

var React = require('react');

var MemoSearch = React.createClass({
  handleSearch: function(e) {
    e.preventDefault();
    var searchName = this.refs.searchName.value;

    if(searchName.length > 0) {
      this.refs.searchName.value = '';
      this.props.onSearch(searchName);
    }
  },
  render: function() {
    return(
      <form onSubmit={this.handleSearch}>
        <ul className="menu">
          <li>
            <input type="search" ref="searchName" placeholder="Search memo by name"/>
          </li>
          <li>
            <input type="submit" className="button" value="Get Memo"/>
          </li>
        </ul>
      </form>
    )
  }
});

module.exports = MemoSearch;

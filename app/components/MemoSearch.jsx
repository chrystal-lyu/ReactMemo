var React = require('react');

var MemoSearch = React.createClass({
  handleSearch: function() {
    var searchName = this.refs.searchName.value;
    
    this.props.onSearch(searchName);
  },
  render: function() {
    return(
      <div>
        <div>
          <input type="search" ref="searchName" placeholder="Search by name" onChange={this.handleSearch}/>
        </div>
      </div>
    )
  }
});

module.exports = MemoSearch;

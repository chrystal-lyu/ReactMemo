var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var About = require('About');
var Main = require('main');
var MemoApp = require('MemoApp');
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <IndexRoute component={MemoApp}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

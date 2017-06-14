var $ = require('jquery');

module.exports = {
  setMemos: function(memos) {
    if($.isArray(memos)) {
      localStorage.setItem('memos', JSON.stringify(memos));
      return memos;
    }
  },
  getMemos: function() {
    var stringMemos = localStorage.getItem('memos');
    var memos = [];

    try {
      memos = JSON.parse(stringMemos);
    } catch(e) {

    }

    return $.isArray(memos) ? memos : [];
  }
};

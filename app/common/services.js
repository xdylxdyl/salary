// 更新页面Title
app.factory('titleService', function () {
  var title
  return {
    title: function () {
      if (arguments.length > 0) {
        document.title = arguments[0];
      }
      return document.title;
    }
  };

});
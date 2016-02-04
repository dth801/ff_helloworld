var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "my new test",
  icon: {
	"16": "./icon-16.png",
	"32": "./icon-32.png",
	"64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.tiger-be.com/");
}

var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
	label: "Log Selection",
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function () {' +
		'  var text = window.getSelection().toString();' +
		'  self.postMessage(text);' +
		'});',
	onMessage: function (selectionText) {
		console.log(selectionText);
	}
});
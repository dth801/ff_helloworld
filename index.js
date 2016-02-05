var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

// buttons
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

// context-menu
var contextMenu = require("sdk/context-menu");
var self = require("sdk/self");
var menuItem = contextMenu.Item({
	label: "Log Selection",
	image : self.data.url("./icon-16.png"),
	context: contextMenu.SelectionContext(),
	contentScript: 'self.on("click", function () {' +
		'  var text = window.getSelection().toString();' +
		'  self.postMessage(text);' +
		'});',
	onMessage: function (selectionText) {
		console.log(selectionText);
	}
});

// Sidebar
var ui = require("sdk/ui");
var sidebar = ui.Sidebar({
  id: 'my-sidebar',
  title: 'My sidebar',
  url: require("sdk/self").data.url("sidebar.html")
});

// ToggleButton
var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("sidebar.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

// testt

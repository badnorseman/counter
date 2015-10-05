(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var has = ({}).hasOwnProperty;

  var aliases = {};

  var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  var unalias = function(alias, loaderPath) {
    var start = 0;
    if (loaderPath) {
      if (loaderPath.indexOf('components/' === 0)) {
        start = 'components/'.length;
      }
      if (loaderPath.indexOf('/', start) > 0) {
        loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
      }
    }
    var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
    if (result) {
      return 'components/' + result.substring(0, result.length - '.js'.length);
    }
    return alias;
  };

  var expand = (function() {
    var reg = /^\.\.?(\/|$)/;
    return function(root, name) {
      var results = [], parts, part;
      parts = (reg.test(name) ? root + '/' + name : name).split('/');
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part === '..') {
          results.pop();
        } else if (part !== '.' && part !== '') {
          results.push(part);
        }
      }
      return results.join('/');
    };
  })();
  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    var path = expand(name, '.');
    if (loaderPath == null) loaderPath = '/';
    path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  globals.require = require;
})();
require.register("scripts/Calculator", function(exports, require, module) {
"use strict";
var React = require("react");

var Calculator = React.createClass({
	displayName: "Calculator",

	getInitialState: function getInitialState() {
		return { count: count };
	},
	_incrementHandler: function _incrementHandler() {
		this.setState({ count: count + 1 });
	},
	_decrementHandler: function _decrementHandler() {
		this.setState({ count: count - 1 });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			this.state.count,
			React.createElement(
				"button",
				{ onClick: this.incrementHandler },
				"+"
			),
			React.createElement(
				"button",
				{ onClick: this.decrementHandler },
				"-"
			)
		);
	}
});

module.exports = Calculator;
});

require.register("scripts/Incrementer", function(exports, require, module) {
"use strict";
var React = require("react");

var Incrementer = React.createClass({
  displayName: "Incrementer"
});
});

require.register("scripts/helpers/messages", function(exports, require, module) {
'use strict';

var messages = {
  getHello: function getHello() {
    return 'Hello World';
  }
};

module.exports = messages;
});

require.register("scripts/helpers/printMsg", function(exports, require, module) {
"use strict";

var printMsg = function printMsg(msg) {
  console.log(msg);
};
module.exports = printMsg;
});

require.register("scripts/main", function(exports, require, module) {
"use strict";

var printMsg = require("./helpers/printMsg");
var messages = require("./helpers/messages");
var Calculator = require("./Calculator");

var App = {
  init: function init() {
    console.log("App initialized.");
    printMsg(messages.getHello());
    React.createElement(Calculator, null);
  }
};

module.exports = App;
});


//# sourceMappingURL=app.js.map
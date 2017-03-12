module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _polyfill = __webpack_require__(1);
  
  var _polyfill2 = _interopRequireDefault(_polyfill);
  
  var _App = __webpack_require__(13);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _config = __webpack_require__(199);
  
  var _config2 = _interopRequireDefault(_config);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  (0, _polyfill2.default)();
  var app = new _App2.default({ config: _config2.default });
  app.run().then(function () {
    console.log('\uD83C\uDF83  The server is running at http://127.0.0.1:' + app.config.port + '/ [' + global.timing() + 'ms]');
  });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ready;
  if (true) {
    console.log('Compiling ...');
  }
  global.startedAt = Date.now();
  global.timing = function () {
    return Date.now() - global.startedAt;
  };
  // }
  __webpack_require__(2);
  __webpack_require__(3).default = __webpack_require__(4);
  // require('isomorphic-fetch');
  global.fetch = __webpack_require__(5).default;
  function ready() {
    if (true) {
      console.log('\uD83D\uDD25  Compiled [' + global.timing() + 'ms]');
    }
  }

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(4);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(6);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(7);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _config = __webpack_require__(8);
  
  var _config2 = _interopRequireDefault(_config);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _config2.default.server({
    client: __webpack_require__(11).default,
    port: process.env.PORT || 8080,
    host: 'localhost',
    db: {
      uri: 'mongodb://publicdb.mgbeta.ru/lsk'
    },
    jwt: {
      secret: 'replaceMyPlease'
    },
    // sockets: {
    //   transports: ['websocket'],
    // },
    middlewares: __webpack_require__(12).default
  });

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _toConsumableArray2 = __webpack_require__(9);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    server: function serverConfig() {
      for (var _len = arguments.length, configs = Array(_len), _key = 0; _key < _len; _key++) {
        configs[_key] = arguments[_key];
      }
  
      return _lodash2.default.defaultsDeep.apply(_lodash2.default, [{}].concat((0, _toConsumableArray3.default)(_lodash2.default.reverse(configs))));
    },
    client: function clientConfig() {
      for (var _len2 = arguments.length, configs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        configs[_key2] = arguments[_key2];
      }
  
      return _lodash2.default.defaultsDeep.apply(_lodash2.default, [{}].concat((0, _toConsumableArray3.default)(_lodash2.default.reverse(configs))));
    }
  };

/***/ },
/* 9 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _config = __webpack_require__(8);
  
  var _config2 = _interopRequireDefault(_config);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _config2.default.client({
    io: {
      url: 'localhost:5000',
      port: 5000
    }
  });

/***/ },
/* 12 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    accessLogger: true,
    bodyParser: {
      json: true,
      urlencoded: {
        limit: '50mb',
        extended: true
      }
    },
    reqData: true,
    cookieParser: true,
    cors: false
  };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _get2 = __webpack_require__(20);
  
  var _get3 = _interopRequireDefault(_get2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _class, _temp2; // eslint-disable-line
  
  
  var _ReactApp2 = __webpack_require__(23);
  
  var _ReactApp3 = _interopRequireDefault(_ReactApp2);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _api = __webpack_require__(106);
  
  var _api2 = _interopRequireDefault(_api);
  
  var _api3 = __webpack_require__(107);
  
  var _api4 = _interopRequireDefault(_api3);
  
  var _routes = __webpack_require__(108);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(84);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line
  
  
  function castTask(task) {
    if (!task.answers) return task;
  
    var values = _lodash2.default.shuffle(_lodash2.default.range(task.answers.length));
  
    return (0, _extends3.default)({}, task.toObject(), {
      answersView: undefined,
      answers: undefined,
      checker: {
        type: 'match',
        value: values[0]
      },
      decision: {
        type: 'button',
        view: '2column',
        options: _lodash2.default.shuffle(task.answers.map(function (answer, index) {
          var res = {
            value: values[index],
            title: answer.title
          };
          if (answer.text) {
            res.text = answer.text;
          }
          return res;
        }))
      }
    });
  }
  
  var App = (_temp2 = _class = function (_ReactApp) {
    (0, _inherits3.default)(App, _ReactApp);
  
    function App() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, App);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.Provider = __webpack_require__(181).default, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getModels',
      value: function getModels() {
        return (0, _extends3.default)({}, (0, _get3.default)(App.prototype.__proto__ || (0, _getPrototypeOf2.default)(App.prototype), 'getModels', this).call(this), __webpack_require__(189).default(this));
      }
    }, {
      key: 'useRoutes',
      value: function useRoutes() {
        var _this2 = this;
  
        this.app.enable('trust proxy');
        this.app.all('/api', function (req, res) {
          return res.json({ message: 'Current API version is here: /api/v1', url: '/api/v1' });
        });
        this.app.use('/api/v1', this.getDocsRouter(_api4.default, {
          v: 1,
          path: '/api/v1'
        }));
        this.app.use('/api/v1', (0, _api2.default)(this));
  
        this.app.get('/game/create', function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
            var categoryId, _models, Task, Game, tasks, game;
  
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    categoryId = req.query.categoryId;
                    _models = _this2.models, Task = _models.Task, Game = _models.Game;
                    _context.next = 4;
                    return Task.find({ categoryId: categoryId });
  
                  case 4:
                    tasks = _context.sent;
  
                    tasks = _lodash2.default.sampleSize(tasks, 7);
                    tasks = tasks.map(castTask);
                    // tasks.de = _.shuffle(tasks.answers)
  
                    // return res.json({tasks})
                    game = new Game({ tasks: tasks, categoryId: categoryId });
                    _context.next = 10;
                    return game.save();
  
                  case 10:
                    return _context.abrupt('return', res.redirect('/game/' + game.id));
  
                  case 11:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2);
          }));
  
          return function (_x, _x2) {
            return _ref2.apply(this, arguments);
          };
        }());
        this.app.post('/game/answer', function () {
          var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res) {
            var id, Game, game, result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    id = req.query.id;
                    Game = _this2.models.Game;
                    _context2.next = 4;
                    return Game.findById(id);
  
                  case 4:
                    game = _context2.sent;
  
                    game.answers = req.body.answers;
                    result = {
                      count: game.tasks.length,
                      correct: 0
                    };
  
  
                    game.answers.map(function (answer, index) {
                      result.correct += game.tasks[index].checker.value === answer;
                    });
                    result.score = result.correct / result.count;
                    game.result = result;
                    game.finishedAt = new Date();
                    _context2.next = 13;
                    return game.save();
  
                  case 13:
                    return _context2.abrupt('return', res.json(game));
  
                  case 14:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          }));
  
          return function (_x3, _x4) {
            return _ref3.apply(this, arguments);
          };
        }());
        this.app.post('/game/cert', function () {
          var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req, res) {
            var id, Game, game;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    id = req.query.id;
                    Game = _this2.models.Game;
                    _context3.next = 4;
                    return Game.findById(id);
  
                  case 4:
                    game = _context3.sent;
  
                    game.cert = req.body.cert;
                    _context3.next = 8;
                    return game.save();
  
                  case 8:
                    return _context3.abrupt('return', res.json(game));
  
                  case 9:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this2);
          }));
  
          return function (_x5, _x6) {
            return _ref4.apply(this, arguments);
          };
        }());
        this.app.get('/game/buy', function () {
          var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req, res) {
            var id, Game, game;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    id = req.query.id;
                    Game = _this2.models.Game;
                    _context4.next = 4;
                    return Game.findById(id);
  
                  case 4:
                    game = _context4.sent;
  
                    game.boughtAt = new Date();
                    _context4.next = 8;
                    return game.save();
  
                  case 8:
                    return _context4.abrupt('return', res.redirect('/game/' + game.id));
  
                  case 9:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee4, _this2);
          }));
  
          return function (_x7, _x8) {
            return _ref5.apply(this, arguments);
          };
        }());
      }
    }, {
      key: 'getStatics',
      value: function getStatics() {
        return (0, _extends3.default)({}, (0, _get3.default)(App.prototype.__proto__ || (0, _getPrototypeOf2.default)(App.prototype), 'getStatics', this).call(this), {
          '/': __dirname + '/../src/public'
        });
      }
    }, {
      key: 'getAssets',
      value: function getAssets() {
        return _assets2.default.main;
      } // eslint-disable-line
  
    }, {
      key: 'getUniversalRoutes',
      // eslint-disable-line
  
      value: function getUniversalRoutes() {
        return _routes2.default;
      }
    }]);
    return App;
  }(_ReactApp3.default), _class.Html = __webpack_require__(193).default, _temp2);
  exports.default = App;

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 15 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/get");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp2; // import ssr from './ssr'
  // eslint-disable-line import/no-unresolved
  
  
  var _universalRouter = __webpack_require__(24);
  
  var _universalRouter2 = _interopRequireDefault(_universalRouter);
  
  var _history = __webpack_require__(25);
  
  var _CoreApp2 = __webpack_require__(26);
  
  var _CoreApp3 = _interopRequireDefault(_CoreApp2);
  
  var _assets = __webpack_require__(84);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _routes = __webpack_require__(85);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Html = __webpack_require__(101);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _Provider = __webpack_require__(105);
  
  var _Provider2 = _interopRequireDefault(_Provider);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ReactApp = (_temp2 = _class = function (_CoreApp) {
    (0, _inherits3.default)(ReactApp, _CoreApp);
  
    function ReactApp() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, ReactApp);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReactApp.__proto__ || (0, _getPrototypeOf2.default)(ReactApp)).call.apply(_ref, [this].concat(args))), _this), _this.Provider = _Provider2.default, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(ReactApp, [{
      key: 'getAssets',
      value: function getAssets() {
        return _assets2.default.main;
      }
    }, {
      key: 'useDefaultRoute',
      value: function useDefaultRoute() {
        var _this2 = this;
  
        this.app.get('*', function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
            var htmlProps;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _this2.getHtmlProps(req);
  
                  case 3:
                    htmlProps = _context.sent;
  
                    if (!htmlProps.redirect) {
                      _context.next = 6;
                      break;
                    }
  
                    return _context.abrupt('return', res.redirect(htmlProps.redirect));
  
                  case 6:
                    res.status(htmlProps.status).send(new _this2.constructor.Html(htmlProps).render());
                    _context.next = 13;
                    break;
  
                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context['catch'](0);
  
                    console.log('err', _context.t0);
                    next(_context.t0);
  
                  case 13:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, _this2, [[0, 9]]);
          }));
  
          return function (_x, _x2, _x3) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }, {
      key: 'getUniversalRoutes',
      value: function getUniversalRoutes() {
        return _routes2.default;
      }
  
      // Synonims
  
    }, {
      key: 'getReqRootState',
      value: function getReqRootState(req) {
        return {
          token: req.token,
          user: req.user
        };
      }
    }, {
      key: 'createProvider',
      value: function createProvider(rootState, req) {
        return new this.Provider(rootState, req, this.config);
        // return new this.Provider(rootState, req)
      }
    }, {
      key: 'getReqCtx',
      value: function getReqCtx(req) {
        var rootState = this.getReqRootState(req);
        if (req.provider == null) {
          req.provider = this.createProvider(rootState, req);
        }
        var ctx = {
          req: req,
          config: this.config.client,
          rootState: rootState,
          provider: req.provider,
          history: (0, _history.createMemoryHistory)({
            initialEntries: [req.url]
          }),
          style: [],
          insertCss: function insertCss() {
            for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              styles[_key2] = arguments[_key2];
            }
  
            // console.log(ctx.style);
            // console.log('styles', styles);
            styles.forEach(function (style) {
              return ctx.style.push(style._getCss());
            });
          }
        };
        return ctx;
      }
      // ureq, ures
  
    }, {
      key: 'getReqProps',
      value: function getReqProps(req) {
        var reqCtx = this.getReqCtx(req);
        return {
          path: req.path,
          query: req.query,
          app: this,
          ctx: reqCtx,
          appStore: reqCtx && reqCtx.provider,
          assets: this.getAssets(),
          status: 200
        };
      }
    }, {
      key: 'getHtmlProps',
      value: function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req) {
          var reqProps, route;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.getReqProps(req);
  
                case 2:
                  reqProps = _context2.sent;
                  _context2.next = 5;
                  return _universalRouter2.default.resolve(this.getUniversalRoutes(), reqProps);
  
                case 5:
                  route = _context2.sent;
                  return _context2.abrupt('return', (0, _extends3.default)({}, reqProps, route, {
                    route: route,
                    children: route.component
                  }));
  
                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
  
        function getHtmlProps(_x4) {
          return _ref3.apply(this, arguments);
        }
  
        return getHtmlProps;
      }()
    }]);
    return ReactApp;
  }(_CoreApp3.default), _class.Html = _Html2.default, _temp2);
  exports.default = ReactApp;

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("history");

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _keys = __webpack_require__(28);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _get3 = __webpack_require__(20);
  
  var _get4 = _interopRequireDefault(_get3);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _express = __webpack_require__(29);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _path = __webpack_require__(30);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _ExpressApp2 = __webpack_require__(31);
  
  var _ExpressApp3 = _interopRequireDefault(_ExpressApp2);
  
  var _sockets = __webpack_require__(38);
  
  var _sockets2 = _interopRequireDefault(_sockets);
  
  var _getMongoose = __webpack_require__(44);
  
  var _getMongoose2 = _interopRequireDefault(_getMongoose);
  
  var _getDocsTemplate = __webpack_require__(46);
  
  var _getDocsTemplate2 = _interopRequireDefault(_getDocsTemplate);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var CoreApp = function (_ExpressApp) {
    (0, _inherits3.default)(CoreApp, _ExpressApp);
  
    function CoreApp() {
      (0, _classCallCheck3.default)(this, CoreApp);
      return (0, _possibleConstructorReturn3.default)(this, (CoreApp.__proto__ || (0, _getPrototypeOf2.default)(CoreApp)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(CoreApp, [{
      key: 'init',
      value: function init() {
        this.log.trace('CoreApp init');
  
        this.db = this.getDatabase();
        this.requests = this.getRequests();
        this.log.trace('requests', (0, _keys2.default)(this.requests));
        this.responses = this.getResponses();
        this.log.trace('responses', (0, _keys2.default)(this.responses));
        this.errors = this.getErrors();
        this.log.trace('errors', (0, _keys2.default)(this.errors));
        this.middlewares = this.getMiddlewares();
        this.log.trace('middlewares', (0, _keys2.default)(this.middlewares));
        this.models = this.getModels();
        this.log.trace('models', (0, _keys2.default)(this.models));
        this.resourses = this.getResourses();
        this.log.trace('resourses', (0, _keys2.default)(this.resourses));
        this.helpers = this.getHelpers();
        this.log.trace('helpers', (0, _keys2.default)(this.helpers));
        this.statics = this.getResolvedStatics();
        this.log.trace('statics', this.statics);
  
        (0, _get4.default)(CoreApp.prototype.__proto__ || (0, _getPrototypeOf2.default)(CoreApp.prototype), 'init', this).apply(this, arguments);
      }
    }, {
      key: 'getMiddlewares',
      value: function getMiddlewares() {
        return __webpack_require__(47).default(this); // eslint-disable-line
      }
    }, {
      key: 'getModels',
      value: function getModels() {
        return __webpack_require__(64).default(this); // eslint-disable-line
      }
    }, {
      key: 'getDatabase',
      value: function getDatabase() {
        return this.config.db && (0, _getMongoose2.default)(this, this.config.db);
      }
    }, {
      key: 'getErrors',
      value: function getErrors() {
        return __webpack_require__(70).default(this); // eslint-disable-line
      }
    }, {
      key: 'getResourses',
      value: function getResourses() {
        return __webpack_require__(72).default(this); // eslint-disable-line
      }
    }, {
      key: 'getRequests',
      value: function getRequests() {
        return __webpack_require__(74).default(this); // eslint-disable-line
      }
    }, {
      key: 'getResponses',
      value: function getResponses() {
        return __webpack_require__(75).default(this); // eslint-disable-line
      }
    }, {
      key: 'getHelpers',
      value: function getHelpers() {
        return __webpack_require__(79).default(this); // eslint-disable-line
      }
    }, {
      key: 'getStatics',
      value: function getStatics() {
        return {};
      }
    }, {
      key: 'getResolvedStatics',
      value: function getResolvedStatics() {
        return _lodash2.default.mapValues(this.getStatics() || {}, function (p) {
          return _path2.default.resolve(p);
        });
      }
    }, {
      key: 'useStatics',
      value: function useStatics() {
        var _this2 = this;
  
        _lodash2.default.forEach(this.getResolvedStatics(), function (path, url) {
          _this2.app.use(url, _express2.default.static(path));
        });
      }
    }, {
      key: 'useStaticPublic',
      value: function useStaticPublic(publicPath) {
        var urlPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  
        // if (!publicPath) {
        //   publicPath = path.join(__dirname, 'public');
        // } else {
        //   publicPath = path.join(publicPath);
        // }
        // if (urlPath == null) {
        //   urlPath = '/';
        // }
        // this.statics[urlPath] = publicPath
        this.log.trace('DEPRECATED');
        // this.log.trace(`Static attach ${urlPath} => ${publicPath}`);
        // this.app.use(urlPath, express.static(publicPath));
      }
    }, {
      key: 'getUsingMiddlewares',
      value: function getUsingMiddlewares() {
        return [this.middlewares.extendReqRes, this.middlewares.reqLog, this.middlewares.accessLogger, this.middlewares.reqParser, this.middlewares.reqData, this.middlewares.parseToken, this.middlewares.parseUser];
      }
    }, {
      key: 'acl',
      value: function acl() {
        return function (req, res, next) {
          next();
        };
      }
    }, {
      key: 'getDocsRouter',
      value: function getDocsRouter(getDocs, params) {
        var _this3 = this;
  
        var api = this.asyncRouter();
        var docsParams = (0, _assign2.default)({}, params, {
          docs: (params.path || '/api') + '/docs',
          docsJson: (params.path || '/api') + '/docs/json'
        });
        api.all('/', function (req, res) {
          return res.json(docsParams);
        });
        api.all('/docs', function (req, res) {
          return res.send((0, _getDocsTemplate2.default)(_this3, docsParams));
        });
        api.all('/docs/json', function (req, res) {
          return res.json(getDocs(_this3, docsParams));
        });
        return api;
      }
    }, {
      key: 'createExpressApp',
      value: function createExpressApp() {
        var app = (0, _get4.default)(CoreApp.prototype.__proto__ || (0, _getPrototypeOf2.default)(CoreApp.prototype), 'createExpressApp', this).call(this);
  
        // asdasdsa();
        this.config.sockets && this.useSockets(app);
        return app;
      }
    }, {
      key: 'useSockets',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(app) {
          var _this4 = this;
  
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.config.sockets) {
                    _context.next = 2;
                    break;
                  }
  
                  return _context.abrupt('return');
  
                case 2:
                  this.log.trace('CoreApp.useSockets');
                  // console.log(55555);
                  this.io = (0, _sockets2.default)(this);
                  // console.log(1111);
                  app.ws = function (route, callback) {
                    // console.log('app.ws this.io', this.io);
                    if (typeof callback !== 'function') throw '!ws callback(namespace)';
                    var namespace = _this4.io.of(route);
                    _this4.io.atachMiddlwares(namespace);
                    callback(namespace);
                  };
                  // console.log(4444);
                  // console.log('app', app, app.use, app.ws);
  
                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
  
        function useSockets(_x2) {
          return _ref.apply(this, arguments);
        }
  
        return useSockets;
      }()
    }, {
      key: 'runSockets',
      value: function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          var transports;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.config.sockets) {
                    _context2.next = 2;
                    break;
                  }
  
                  return _context2.abrupt('return');
  
                case 2:
                  this.io.serveClient(false);
                  this.io.attach(this.httpServer);
                  transports = this.config.sockets.transports || ['websocket'];
                  // console.log('transports', transports);
  
                  this.io.set('transports', transports);
  
                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
  
        function runSockets() {
          return _ref2.apply(this, arguments);
        }
  
        return runSockets;
      }()
    }, {
      key: 'useMiddlewares',
      value: function useMiddlewares() {
        var _this5 = this;
  
        this.beforeUseMiddlewares();
        var middlewares = _lodash2.default.flattenDeep(this.getUsingMiddlewares());
        middlewares.forEach(function (middleware) {
          middleware && typeof middleware === 'function' && _this5.app.use(middleware);
        });
      }
    }, {
      key: 'useDefaultRoute',
      value: function useDefaultRoute() {
        var _this6 = this;
  
        this.app.use(function (req, res, next) {
          var err = _this6.errors.e404('Route not found');
          next(err);
        });
      }
    }, {
      key: 'afterUseMiddlewares',
      value: function afterUseMiddlewares() {
        this.middlewares.catchError && this.app.use(this.middlewares.catchError);
      }
    }, {
      key: 'runDb',
      value: function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.db) {
                    _context3.next = 2;
                    break;
                  }
  
                  return _context3.abrupt('return');
  
                case 2:
                  this.log.trace('CoreApp.runDb');
                  _context3.prev = 3;
                  return _context3.abrupt('return', this.db.run());
  
                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3['catch'](3);
  
                  this.log.fatal(_context3.t0);
                  throw _context3.t0;
  
                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[3, 7]]);
        }));
  
        function runDb() {
          return _ref3.apply(this, arguments);
        }
  
        return runDb;
      }()
    }, {
      key: 'run',
      value: function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
          var _get2;
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
  
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  this.log.trace('CoreApp.run');
                  _context4.next = 3;
                  return this.runDb();
  
                case 3:
                  _context4.next = 5;
                  return (_get2 = (0, _get4.default)(CoreApp.prototype.__proto__ || (0, _getPrototypeOf2.default)(CoreApp.prototype), 'run', this)).call.apply(_get2, [this].concat(args));
  
                case 5:
                  _context4.t0 = this.config.sockets;
  
                  if (!_context4.t0) {
                    _context4.next = 9;
                    break;
                  }
  
                  _context4.next = 9;
                  return this.runSockets();
  
                case 9:
                  _context4.next = 11;
                  return this.afterRun();
  
                case 11:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));
  
        function run() {
          return _ref4.apply(this, arguments);
        }
  
        return run;
      }()
    }, {
      key: 'afterRun',
      value: function afterRun() {}
    }]);
    return CoreApp;
  }(_ExpressApp3.default);
  
  exports.default = CoreApp;

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _promise = __webpack_require__(3);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _class, _temp;
  
  var _bunyan = __webpack_require__(32);
  
  var _bunyan2 = _interopRequireDefault(_bunyan);
  
  var _express = __webpack_require__(29);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _http = __webpack_require__(33);
  
  var _mixin = __webpack_require__(34);
  
  var _mixin2 = _interopRequireDefault(_mixin);
  
  var _AsyncRouter = __webpack_require__(36);
  
  var _AsyncRouter2 = _interopRequireDefault(_AsyncRouter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ExpressApp = (_temp = _class = function () {
    function ExpressApp() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck3.default)(this, ExpressApp);
      this.asyncRouter = _AsyncRouter2.default;
  
      (0, _assign2.default)(this, params);
      if (!this.log) this.log = this.getLogger(); // because CoreApp.log() before init
      try {
        this.init();
      } catch (err) {
        this.log.fatal('init err', err);
      }
    }
  
    (0, _createClass3.default)(ExpressApp, [{
      key: 'createExpressApp',
      value: function createExpressApp() {
        return (0, _express2.default)();
      }
    }, {
      key: 'getLogger',
      value: function getLogger(params) {
        var options = (0, _assign2.default)({
          name: 'app',
          src: (true),
          level: 'trace'
        }, this.config.logger || {});
        return _bunyan2.default.createLogger(options, params);
      }
    }, {
      key: 'init',
      value: function init() {
        this.log.trace('ExpressApp init');
        this.app = this.createExpressApp();
        this.httpServer = (0, _http.Server)(this.app);
  
        this.beforeUseMiddlewares();
        this.useMiddlewares();
        this.useRoutes();
        this.useStatics();
        this.useDefaultRoute();
        this.afterUseMiddlewares();
      }
    }, {
      key: 'beforeUseMiddlewares',
      value: function beforeUseMiddlewares() {}
    }, {
      key: 'useMiddlewares',
      value: function useMiddlewares() {}
    }, {
      key: 'useStatics',
      value: function useStatics() {}
    }, {
      key: 'useRoutes',
      value: function useRoutes() {}
    }, {
      key: 'useDefaultRoute',
      value: function useDefaultRoute() {
        var _this = this;
  
        this.app.use(function (req, res) {
          return res.send('Hello World from "' + _this.config.name + '"');
        });
      }
    }, {
      key: 'afterUseMiddlewares',
      value: function afterUseMiddlewares() {}
    }, {
      key: 'run',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          var _this2 = this;
  
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.log.trace('ExpressApp run');
  
                  return _context.abrupt('return', new _promise2.default(function (resolve) {
                    _this2.httpInstance = _this2.httpServer.listen(_this2.config.port, function () {
                      _this2.log.info('App running on port ' + _this2.config.port + '!');
                      resolve(_this2);
                    });
                  }));
  
                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
  
        function run() {
          return _ref.apply(this, arguments);
        }
  
        return run;
      }()
    }]);
    return ExpressApp;
  }(), _class.mixin = _mixin2.default, _temp);
  exports.default = ExpressApp;

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("bunyan");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("http");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getIterator2 = __webpack_require__(35);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  exports.default = function (Parent) {
    var Mixed = function (_Parent) {
      (0, _inherits3.default)(Mixed, _Parent);
  
      function Mixed() {
        (0, _classCallCheck3.default)(this, Mixed);
        return (0, _possibleConstructorReturn3.default)(this, (Mixed.__proto__ || (0, _getPrototypeOf2.default)(Mixed)).apply(this, arguments));
      }
  
      return Mixed;
    }(Parent);
  
    for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      mixins[_key - 1] = arguments[_key];
    }
  
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(mixins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mixin = _step.value;
  
        for (var prop in mixin) {
          Mixed.prototype[prop] = mixin[prop];
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  
    return Mixed;
  };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _expressAsyncRouter = __webpack_require__(37);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (params) {
    var paramsWithDefaultSender = (0, _assign2.default)({
      sender: function sender(req, res, val) {
        return res.ok(val);
      }
    }, params);
  
    return (0, _expressAsyncRouter.AsyncRouter)(paramsWithDefaultSender);
  };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _promise = __webpack_require__(3);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _toConsumableArray2 = __webpack_require__(9);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var express = __webpack_require__(29);
  var consolevoid = {
    log: function log() {}
  };
  // var consolevoid = console
  var exp = {};
  // #endregion
  // #region Types and Constants
  var DEFAULT_SENDER = function DEFAULT_SENDER(req, res, val) {
    res.send(val);
  },
      SHORTCUTS_METHODS = ['all', 'get', 'post', 'put', 'delete', 'patch', 'options', 'head'];
  // #endregion
  // #region Public
  function AsyncRouter(options) {
    var sender = getSender(options),
        innerRouter = express.Router(options),
        asyncRouter = function asyncRouter() {
      return innerRouter.apply(this, arguments);
    };
    asyncRouter.__asyncRouter = true;
    asyncRouter.useRouter = function () {
      var r = express.Router();
      r.use.apply(r, arguments);
      this.use(r);
      return this;
    };
    wrapAllMatchers(asyncRouter, sender, innerRouter);
    asyncRouter.param = function param() {
      if (typeof arguments[1] === 'function' && arguments[1].length === 3) {
        innerRouter.param(arguments[0], wrapParamHandler(arguments[1]));
        return this;
      }
      innerRouter.param.apply(innerRouter, arguments);
      return this;
    };
    asyncRouter.route = function route(path) {
      var r = innerRouter.route(path);
      wrapAllMatchers(r, sender);
      return r;
    };
    asyncRouter.use = function use() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
        // if (arguments[_i] && arguments[_i].__asyncRouter) {
        //   return this.useRouter.apply(this, arguments);
        // }
      }
  
      innerRouter.use.apply(innerRouter, (0, _toConsumableArray3.default)(args.map(function (arg) {
        return typeof arg === 'function' && !arg.__asyncRouter ? wrapHandlerOrErrorHandler(arg) : arg;
      })));
      return this;
    };
    return asyncRouter;
  }
  exp.AsyncRouter = AsyncRouter;
  function create(options) {
    return AsyncRouter(options);
  }
  exp.create = create;
  // #endregion
  // #region Private Methods
  function getSender(options) {
    if (!options) {
      return DEFAULT_SENDER;
    }
    var send = options.send,
        sender = options.sender;
    delete options.send;
    delete options.sender;
    if (send !== false) {
      return sender || DEFAULT_SENDER;
    }
  }
  function wrapAllMatchers(route, sender, router) {
    consolevoid.log('wrapAllMatchers');
  
    router = router || route;
    SHORTCUTS_METHODS.forEach(function (method) {
      route[method] = wrapMatcher(router, router[method], sender);
    });
  }
  function wrapMatcher(router, routerMatcher, sender) {
    consolevoid.log('wrapMatcher');
  
    var _this = this;
    return function (name) {
      consolevoid.log('@wrapMatcher');
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var last = args.length - 1,
          mappedArgs = args.map(function (a, i) {
        return i === last ? wrapHandler(a, sender) : wrapHandlerOrErrorHandler(a);
      });
      routerMatcher.apply(router, [name].concat(mappedArgs));
      return _this;
    };
  }
  function wrapHandler(handler, sender) {
    consolevoid.log('wrapHandler');
  
    return function (req, res, next) {
      consolevoid.log('@wrapHandler');
  
      try {
        next = once(next);
        toCallback(handler.call(this, req, res, next), next, req, res, function (result) {
          if (sender && !res.headersSent) {
            return sender(req, res, result);
          }
        });
      } catch (err) {
        next(err);
      }
    };
  }
  function wrapParamHandler(handler) {
    consolevoid.log('wrapParamHandler');
  
    return function (req, res, next, param) {
      consolevoid.log('@wrapParamHandler');
      try {
        next = once(next);
        toCallback(handler.call(this, req, res, param), next, req, res);
      } catch (err) {
        next(err);
      }
    };
  }
  function wrapHandlerOrErrorHandler(handler) {
    consolevoid.log('wrapHandlerOrErrorHandler');
    if (handler.length === 4) {
      return function (err, req, res, next) {
        consolevoid.log('@wrapHandlerOrErrorHandler 4');
        try {
          next = once(next);
          toCallback(handler.call(this, err, req, res, next), next, req, res);
        } catch (err) {
          next(err);
        }
      };
    }
    return function (req, res, next) {
      consolevoid.log('@wrapHandlerOrErrorHandler !=4');
  
      try {
        next = once(next);
        toCallback(handler.call(this, req, res, next), next, req, res, handler.length === 3);
      } catch (err) {
        next(err);
      }
    };
  }
  function toCallback(thenable, next, req, res, end) {
    consolevoid.log('toCallback');
    if (!thenable || typeof thenable.then !== 'function') {
      consolevoid.log('tc 1', thenable);
  
      thenable = _promise2.default.resolve(thenable);
    }
    if (typeof end === 'function') {
      consolevoid.log('tc 2');
  
      thenable = thenable.then(end);
    }
    thenable.then(function () {
      consolevoid.log('tc 3 = !!next , !end , !res.headersSent', !!next, !end, !res.headersSent);
      // consolevoid.log(end);
      // next()
      if (next && !end && !res.headersSent) {
        next();
      }
    }, function (err) {
      consolevoid.log('tc 4');
      if (typeof err === 'string') {
        err = new Error(err);
      }
      next(err);
    });
  }
  function once(fn) {
    consolevoid.log('once');
    var called = false;
    return function () {
      consolevoid.log('@once');
      if (called) {
        return;
      }
      called = true;
      fn.apply(this, arguments);
    };
  }
  
  module.exports = exp;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _typeof2 = __webpack_require__(39);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _parseUser = __webpack_require__(40);
  
  var _parseUser2 = _interopRequireDefault(_parseUser);
  
  var _reqData = __webpack_require__(41);
  
  var _reqData2 = _interopRequireDefault(_reqData);
  
  var _socket = __webpack_require__(42);
  
  var _socket2 = _interopRequireDefault(_socket);
  
  var _socket3 = __webpack_require__(43);
  
  var _socket4 = _interopRequireDefault(_socket3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import addChatNamespace from './namespaces/chat'
  exports.default = function (ctx) {
    try {
      var _ret = function () {
        var io = (0, _socket4.default)();
        // console.log({io}, ctx.httpServer);
        // io.serveClient(false);
        // io.attach(ctx.httpServer);
        io.middlewares = {
          parseUser: (0, _parseUser2.default)(ctx),
          reqData: (0, _reqData2.default)(ctx),
          socketAsPromised: (0, _socket2.default)()
        };
        io.usedMiddlewares = [io.middlewares.parseUser, io.middlewares.reqData, io.middlewares.socketAsPromised];
        io.atachMiddlwares = function (namespace) {
          io.usedMiddlewares.map(function (middleware) {
            namespace.use(middleware);
          });
        };
        return {
          v: io
        };
      }();
  
      if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    } catch (err) {
      console.log('err', err);
    }
  };
  // import isAuth from './middleware/isAuth'

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function (socket, next) {
      var query = socket.handshake.query;
  
      var req = socket.request;
      var res = req.res;
  
      if (!req.query) {
        req.query = {};
      }
      (0, _assign2.default)(req.query, query);
  
      var parseUser = ctx.middlewares.parseUser;
  
      parseUser(req, res, function () {
        socket.user = req.user;
        return next();
      });
    };
  };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    return function (socket, next) {
      var query = socket.handshake.query;
  
      var req = socket.request;
      if (!req.query) {
        req.query = {};
      }
      socket.data = {};
      (0, _assign2.default)(socket.data, query, req.query);
      return next();
    };
  };

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("socket.io-as-promised");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("socket.io");

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _mongoose = __webpack_require__(45);
  
  var _mongoose2 = _interopRequireDefault(_mongoose);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx, params) {
    ctx.log.trace('mongoose init');
  
    var mongoose = new _mongoose2.default.Mongoose();
    var defaultOptions = { server: { socketOptions: { keepAlive: 1 } } };
    var options = _lodash2.default.defaultsDeep({}, defaultOptions, params.options || {});
  
    mongoose.Promise = ctx.Promise || global.Promise;
  
    mongoose.run = function () {
      ctx.log.trace('mongoose run');
      return mongoose.connect(params.uri, options);
    };
    mongoose.reconnect = function () {
      ctx.log.trace('mongoose reconnect');
      mongoose.disconnect();
      mongoose.run();
    };
  
    var reconnectIteration = 0;
    mongoose.connection.on('connected', function () {
      ctx.log.info('mongoose connected');
      reconnectIteration = 0;
    });
    mongoose.connection.on('error', function (err) {
      ctx.log.error('mongoose error', err);
      var interval = reconnectIteration++ * 2000 + 1000;
      ctx.log.trace('mongoose reconnect after ' + interval + ' ms');
      setTimeout(mongoose.reconnect, interval);
    });
    mongoose.connection.on('disconnected', function () {
      ctx.log.trace('mongoose disconnected');
    });
  
    return mongoose;
  };

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("mongoose");

/***/ },
/* 46 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (params) {
    if (typeof params === 'string') {
      params = {
        url: params
      };
    }
    return '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>' + params.name + ' API docs</title>\n  <link rel="icon" type="image/png" href="//cdn.mgbeta.ru/swagger/images/favicon-32x32.png" sizes="32x32" />\n  <link rel="icon" type="image/png" href="//cdn.mgbeta.ru/swagger/images/favicon-16x16.png" sizes="16x16" />\n  <link href=\'//cdn.mgbeta.ru/swagger/css/typography.css\' media=\'screen\' rel=\'stylesheet\' type=\'text/css\'/>\n  <link href=\'//cdn.mgbeta.ru/swagger/css/reset.css\' media=\'screen\' rel=\'stylesheet\' type=\'text/css\'/>\n  <link href=\'//cdn.mgbeta.ru/swagger/css/screen.css\' media=\'screen\' rel=\'stylesheet\' type=\'text/css\'/>\n  <link href=\'//cdn.mgbeta.ru/swagger/css/reset.css\' media=\'print\' rel=\'stylesheet\' type=\'text/css\'/>\n  <link href=\'//cdn.mgbeta.ru/swagger/css/print.css\' media=\'print\' rel=\'stylesheet\' type=\'text/css\'/>\n  <link href=\'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\' media=\'print\' rel=\'stylesheet\' type=\'text/css\'/>\n  <style>\n    .token{\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n    }\n    .token__input{\n      width: 100%;\n      margin-top: 5px;\n    }\n    .text-center{\n      text-align: center;\n    }\n  </style>\n\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/object-assign-pollyfill.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/jquery-1.8.0.min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/jquery.slideto.min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/jquery.wiggle.min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/jquery.ba-bbq.min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/handlebars-4.0.5.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/lodash.min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/backbone-min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/swagger-ui.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/highlight.9.1.0.pack.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/highlight.9.1.0.pack_extended.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/jsoneditor.min.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/marked.js\' type=\'text/javascript\'></script>\n  <script src=\'//cdn.mgbeta.ru/swagger/lib/swagger-oauth.js\' type=\'text/javascript\'></script>\n\n  <!-- Some basic translations -->\n  <!-- <script src=\'//cdn.mgbeta.ru/swagger/lang/translator.js\' type=\'text/javascript\'></script> -->\n  <!-- <script src=\'//cdn.mgbeta.ru/swagger/lang/ru.js\' type=\'text/javascript\'></script> -->\n  <!-- <script src=\'//cdn.mgbeta.ru/swagger/lang/en.js\' type=\'text/javascript\'></script> -->\n\n  <script type="text/javascript">\n    $(function () {\n      var url = window.location.search.match(/url=([^&]+)/);\n      if (url && url.length > 1) {\n        url = decodeURIComponent(url[1]);\n      } else {\n        // \u041F\u0443\u0442\u044C\n        url = "' + params.url + '";\n      }\n\n      hljs.configure({\n        highlightSizeThreshold: 5000\n      });\n\n      // Pre load translate...\n      if(window.SwaggerTranslator) {\n        window.SwaggerTranslator.translate();\n      }\n      window.swaggerUi = new SwaggerUi({\n        url: url,\n        dom_id: "swagger-ui-container",\n        supportedSubmitMethods: [\'get\', \'post\', \'put\', \'delete\', \'patch\'],\n        onComplete: function(swaggerApi, swaggerUi){\n          if(typeof initOAuth == "function") {\n            initOAuth({\n              clientId: "your-client-id",\n              clientSecret: "your-client-secret-if-required",\n              realm: "your-realms",\n              appName: "your-app-name",\n              scopeSeparator: " ",\n              additionalQueryStringParams: {}\n            });\n          }\n\n          if(window.SwaggerTranslator) {\n            window.SwaggerTranslator.translate();\n          }\n        },\n        onFailure: function(data) {\n          log("Unable to Load SwaggerUI");\n        },\n        docExpansion: "none",\n        jsonEditor: false,\n        defaultModelRendering: \'schema\',\n        showRequestHeaders: false\n      });\n\n      window.swaggerUi.load();\n\n      function log() {\n        if (\'console\' in window) {\n          console.log.apply(console, arguments);\n        }\n      }\n  });\n  </script>\n</head>\n\n<body class="swagger-section">\n<div id=\'header\'>\n  <div class="swagger-ui-wrap">\n    <a id="logo" href="/"><img class="logo__img" alt="swagger" height="30" width="30" src="//cdn.mgbeta.ru/swagger/images/logo_small.png" /><span class="logo__title">' + params.name + '</span></a>\n    <form id=\'api_selector\'>\n      <div class=\'input\'><input placeholder="//example.com/api" id="input_baseUrl" name="baseUrl" type="text"/></div>\n      <div id=\'auth_container\'></div>\n      <div class=\'input\'><a id="explore" class="header__btn" href="#" data-sw-translate>Explore</a></div>\n    </form>\n  </div>\n</div>\n<div class = "token swagger-section swagger-ui-wrap">\n  <h2 class = "text-center">Token</h2>\n  <input type = "text" name = "token form-control" class = "token__input" value = "' + (params.devToken || '') + '">\n</div>\n<div id="message-bar" class="swagger-ui-wrap" data-sw-translate>&nbsp;</div>\n<div id="swagger-ui-container" class="swagger-ui-wrap"></div>\n<script type = "text/javascript">\n  $(document).ready(function(){\n    var localStorage = window.localStorage;\n    $(\'.token__input\').change(function(){\n      var el = $(this);\n      var token = el.val();\n      localStorage.setItem(\'token\', token);\n      swaggerUi.api.clientAuthorizations.add("x-access-token", new SwaggerClient.ApiKeyAuthorization("x-access-token", token, "header"));\n    })\n    var _token = localStorage.getItem(\'token\');\n    console.log(_token);\n    if(_token) {\n      $(\'.token__input\').val(_token);\n    }\n    swaggerUi.api.clientAuthorizations.add("x-access-token", new SwaggerClient.ApiKeyAuthorization("x-access-token", $(\'.token__input\').val(), "header"));\n  })\n</script>\n</body>\n</html>';
  };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function () {
    var _require, _require2, _require3, _require4, _require5, _require6, _require7, _require8, _require9;
  
    // eslint-disable-line
    return {
      accessLogger: (_require = __webpack_require__(48)).default.apply(_require, arguments), // eslint-disable-line
      reqParser: (_require2 = __webpack_require__(50)).default.apply(_require2, arguments), // eslint-disable-line
      catchError: (_require3 = __webpack_require__(55)).default.apply(_require3, arguments), // eslint-disable-line
      isAuth: (_require4 = __webpack_require__(56)).default.apply(_require4, arguments), // eslint-disable-line
      parseUser: (_require5 = __webpack_require__(57)).default.apply(_require5, arguments), // eslint-disable-line
      parseToken: (_require6 = __webpack_require__(59)).default.apply(_require6, arguments), // eslint-disable-line
      reqData: (_require7 = __webpack_require__(60)).default.apply(_require7, arguments), // eslint-disable-line
      reqLog: (_require8 = __webpack_require__(61)).default.apply(_require8, arguments), // eslint-disable-line
      extendReqRes: (_require9 = __webpack_require__(63)).default.apply(_require9, arguments) };
  };

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _stringify = __webpack_require__(49);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var cache = ['', ' ', '  ', '   ', '    ', '     ', '      ', '       ', '        ', '         '];
  
  function leftPad(str, len, ch) {
    // convert `str` to `string`
    str = '' + str;
    // `len` is the `pad`'s length now
    //
    var reverse = 0;
    if (len < 0) {
      len *= -1;
      reverse = 1;
    }
    len -= str.length;
    // doesn't need to pad
    if (len <= 0) return str;
    // `ch` defaults to `' '`
    if (!ch && ch !== 0) ch = ' ';
    // convert `ch` to `string`
    ch = '' + ch;
    // cache common use cases
    if (ch === ' ' && len < 10) return reverse ? str + cache[len] : cache[len] + str;
    // `pad` starts with an empty string
    var pad = '';
    // loop
    while (true) {
      // add `ch` to `pad` if `len` is odd
      if (len & 1) pad += ch;
      // divide `len` by 2, ditch the remainder
      len >>= 1;
      // "double" the `ch` so this operation count grows logarithmically on `len`
      // each time `ch` is "doubled", the `len` would need to be "doubled" too
      // similar to finding a value in binary search tree, hence O(log(n))
      if (len) ch += ch;
      // `len` is 0, exit the loop
      else break;
    }
    // pad `str`!
  
    return reverse ? str + pad : pad + str;
  }
  
  // "asd \x1b[41m \e[0;34m asdas" +
  
  function levelFn(data) {
    if (data.err || data.status >= 500 || data.duration > 10000) {
      // server internal error or error
      return 'error';
    } else if (data.status >= 400 || data.duration > 3000) {
      // client error
      return 'warn';
    }
    return 'info';
  }
  
  var urlPad = -20;
  
  function logStart(data) {
    return leftPad(data.method, 4) + ' ' + leftPad(data.url, urlPad) + ' #' + data.reqId; // + '\x1b[33mYAUEBAN\x1b[0m AZAZA'
  }
  
  function logFinish(data) {
    var time = (data.duration || 0).toFixed(3);
    var method = leftPad(data.method, 4);
    var length = data.length || 0;
    return method + ' ' + leftPad(data.url, urlPad) + ' #' + data.reqId + ' ' + leftPad(data.status, 3) + ' ' + leftPad(time, 7) + 'ms ' + length + 'b ';
  }
  
  exports.default = function (ctx) {
    if (!_lodash2.default.has(ctx, 'config.middlewares.accessLogger')) return null;
    return function (req, res, next) {
      var data = {};
      var log = req.log.child({
        component: 'req'
      });
  
      data.reqId = req.reqId;
      data.method = req.method;
      if (req.ws) data.method = 'WS';
      data.host = req.headers.host;
      data.url = (req.baseUrl || '') + (req.url || '-');
      data.referer = req.header('referer') || req.header('referrer');
      data.ua = req.header('user-agent');
      data.ip = req.ip || req.connection.remoteAddress || req.socket && req.socket.remoteAddress || req.socket.socket && req.socket.socket.remoteAddress || '127.0.0.1';
  
      if (true) {
        log.debug(data, logStart(data));
        if (req.body) {
          log.trace((0, _stringify2.default)(req.body));
        }
      }
  
      var hrtime = process.hrtime();
      function logging() {
        data.status = res.statusCode;
        data.length = res.getHeader('Content-Length');
  
        var diff = process.hrtime(hrtime);
        data.duration = diff[0] * 1e3 + diff[1] * 1e-6;
  
        log[levelFn(data)](data, logFinish(data));
      }
      res.on('finish', logging);
      res.on('close', logging);
      next();
    };
  };

/***/ },
/* 49 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _slicedToArray2 = __webpack_require__(51);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _cookieParser = __webpack_require__(52);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(53);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _cors = __webpack_require__(54);
  
  var _cors2 = _interopRequireDefault(_cors);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    var middlewares = [];
    var preMiddlewares = [[_bodyParser2.default.json, _lodash2.default.get(ctx, 'config.middlewares.bodyParser.json'), _lodash2.default.get(ctx, 'defaultOptions.bodyParser.json')], [_bodyParser2.default.urlencoded, _lodash2.default.get(ctx, 'config.middlewares.bodyParser.urlencoded'), _lodash2.default.get(ctx, 'defaultOptions.bodyParser.urlencoded')], [_cookieParser2.default, _lodash2.default.get(ctx, 'config.middlewares.cookieParser'), _lodash2.default.get(ctx, 'defaultOptions.cookieParser')], [_cors2.default, _lodash2.default.get(ctx, 'config.middlewares.cors'), _lodash2.default.get(ctx, 'defaultOptions.cors')]];
    preMiddlewares.forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
          middleware = _ref2[0],
          options1 = _ref2[1],
          options2 = _ref2[2];
  
      if (options1 === true && options2 !== false) {
        middlewares.push(middleware(options2));
      } else if (options1) {
        middlewares.push(middleware(options1));
      }
      // else ignore if (null, false, undefined)
    });
    return middlewares;
  };

/***/ },
/* 51 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("cors");

/***/ },
/* 55 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function (err, req, res, next) {
      // eslint-disable-line
      if (req && req.log && req.log.error) {
        req.log.error({
          err: err,
          query: req.query,
          body: req.body,
          headers: req.headers
        }, (err || {}).stack);
      } else {
        console.log(err);
      }
      res.status(err.status || 500);
      if (res.err) return res.err(err);
      return res.json(err);
    };
  };

/***/ },
/* 56 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function isAuth(req, res, next) {
      if (req._errJwt) return next(req._errJwt);
      if (!req.user || !req.user._id) throw ctx.errors.e401('!req.user');
      next();
    };
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _expressJwt = __webpack_require__(58);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function parseUser(req, res, next) {
      if (!ctx.config.jwt) {
        // req.user = {}
        return next();
      }
      var options = {
        secret: ctx.config.jwt.secret,
        getToken: function getToken(req) {
          return req.token;
        }
      };
      (0, _expressJwt2.default)(options)(req, res, function (err) {
        if (err) req._errJwt = err;
        next();
      });
    };
  };

/***/ },
/* 58 */
/***/ function(module, exports) {

  module.exports = require("express-jwt");

/***/ },
/* 59 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function parseToken(req, res, next) {
      var token = ctx.helpers.getToken(req);
      req.token = token;
      next();
    };
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    if (!_lodash2.default.has(ctx, 'config.middlewares.reqData')) return null;
    return function reqData(req, res, next) {
      req.data = req.allParams();
      next();
    };
  };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _uuid = __webpack_require__(62);
  
  var _uuid2 = _interopRequireDefault(_uuid);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function (req, res, next) {
      if (false) {
        req.reqId = _uuid2.default.v4();
      } else {
        global.reqId = 1 + (global.reqId || 0);
        req.reqId = global.reqId;
      }
      if (ctx.log) {
        req.log = ctx.log.child({
          reqId: req.reqId
        });
      }
      next();
    };
  };

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("uuid");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function (req, res, next) {
      if (ctx.requests) {
        _lodash2.default.forEach(ctx.requests, function (val, key) {
          req[key] = val.bind(req);
        });
      }
      if (ctx.responses) {
        _lodash2.default.forEach(ctx.responses, function (val, key) {
          res[key] = val.bind(res);
        });
      }
      next();
    };
  };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function () {
    var _require;
  
    return {
      User: (_require = __webpack_require__(65)).default.apply(_require, arguments)
    };
  };

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _promise = __webpack_require__(3);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  exports.getSchema = getSchema;
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _jsonwebtoken = __webpack_require__(66);
  
  var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
  
  var _bcryptjs = __webpack_require__(67);
  
  var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
  
  var _nodemailer = __webpack_require__(68);
  
  var _nodemailer2 = _interopRequireDefault(_nodemailer);
  
  var _UniversalSchema = __webpack_require__(69);
  
  var _UniversalSchema2 = _interopRequireDefault(_UniversalSchema);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var bcryptGenSalt = _promise2.default.promisify(_bcryptjs2.default.genSalt);
  var bcryptHash = _promise2.default.promisify(_bcryptjs2.default.hash);
  var bcryptCompare = _promise2.default.promisify(_bcryptjs2.default.compare);
  function getSchema(ctx) {
    // const mongoose = ctx.db
  
    var transporter = ctx.config.mail && ctx.config.mail.transport && _promise2.default.promisifyAll(_nodemailer2.default.createTransport(ctx.config.mail.transport));
  
    var schema = new _UniversalSchema2.default({
      username: {
        type: String,
        required: true,
        index: { unique: true },
        tolowercase: true,
        trim: true
      },
      password: {
        type: String,
        ref: function ref() {
          return ctx.models.v2.Profile.getMongooseName();
        }
      },
      name: {
        type: String
      },
      role: {
        type: String
      }
    }, {
  
      collection: 'user',
      timestamps: true
    });
  
    schema.statics.isValidEmail = function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };
    schema.statics.generatePassword = function () {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  
      return Math.random().toString(36).substr(2, length);
    };
    schema.methods.toJSON = function () {
      return _lodash2.default.omit(this.toObject(), ['password']);
    };
    schema.methods.getIdentity = function (params) {
      var object = _lodash2.default.pick(this.toObject(), ['_id', 'username', 'name', 'avatar', 'role']);
      if (!params) return object;
      return (0, _assign2.default)(object, params);
    };
    schema.methods.generateAuthToken = function (params) {
      return _jsonwebtoken2.default.sign(this.getIdentity(params), ctx.config.jwt.secret);
    };
    schema.methods.verifyPassword = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(password) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return bcryptCompare(password, this.password);
  
              case 2:
                return _context.abrupt('return', _context.sent);
  
              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
  
      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }();
    schema.methods.getEmail = function () {
      return this.email || this.toJSON().email || this.username || this.toJSON().username;
    };
    schema.methods.sendEmail = function (inputParams) {
      if (!transporter) throw '!transporter';
      var params = inputParams;
      if (typeof params === 'string') {
        params = { text: params };
      }
  
      var email = this.getEmail();
      var options = (0, _assign2.default)({ to: email }, ctx.config.mail.options, params);
      // console.log({options});
      return transporter.sendMailAsync(options);
    };
  
    // schema.methods.toJSON = function () {
    //   return _.omit(this.toObject(), ['password'])
    // }
    // schema.methods.getIdentity = function () {
    //   return _.pick(this.toObject(), ['_id', 'username', 'name', 'avatar', 'role'])
    // }
    // schema.methods.genAuthToken = function () {
    //   return jwt.sign(this.getIdentity(), ctx.config.jwt.secret)
    // }
    // schema.methods.verifyPassword = function (password) {
    //   return this.password === password
    // }
  
    var SALT_WORK_FACTOR = 10;
    schema.pre('save', function (next) {
      var _this = this;
  
      if (!this.isModified('password')) return next();
      return bcryptGenSalt(SALT_WORK_FACTOR).then(function (salt) {
        bcryptHash(_this.password, salt).then(function (hash) {
          _this.password = hash;
          next();
        });
      }).catch(next);
    });
  
    return schema;
  }
  
  exports.default = function (ctx) {
    var schema = getSchema(ctx);
    return ctx.db && ctx.db.model(schema.generateMongooseName('User'), schema.getMongooseSchema());
  };

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("jsonwebtoken");

/***/ },
/* 67 */
/***/ function(module, exports) {

  module.exports = require("bcryptjs");

/***/ },
/* 68 */
/***/ function(module, exports) {

  module.exports = require("nodemailer");

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _toConsumableArray2 = __webpack_require__(9);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _slicedToArray2 = __webpack_require__(51);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _mongoose = __webpack_require__(45);
  
  var _mongoose2 = _interopRequireDefault(_mongoose);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var defaultParams = {
    filter: {},
    sort: {},
    limit: 20,
    populate: []
  };
  var defaultOptions = {
    timestamps: true
  };
  
  var UniversalSchema = function () {
    function UniversalSchema() {
      var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      (0, _classCallCheck3.default)(this, UniversalSchema);
  
      this.schema = schema;
      this.options = (0, _assign2.default)({}, defaultOptions, options);
      this.statics = {
        findByParams: function findByParams(incomeParams) {
          var params = (0, _assign2.default)({}, defaultParams, incomeParams);
          return this.find(params.filter).sort(params.sort).limit(params.limit);
        }
      };
      this.methods = {};
      this.preMethods = {};
      this.postMethods = {};
      this.indexes = [];
      this.virtuals = [];
      // this.indexes = {}
    }
  
    (0, _createClass3.default)(UniversalSchema, [{
      key: 'extend',
      value: function extend(schema, options) {
        var _this = this;
  
        var object = new UniversalSchema();
        var fields = ['schema', 'options', 'statics', 'methods', 'preMethods', 'postMethods'];
        fields.forEach(function (key) {
          object[key] = (0, _assign2.default)({}, _this[key]);
        });
        (0, _assign2.default)(object.schema, schema);
        (0, _assign2.default)(object.options, options);
        return object;
      }
    }, {
      key: 'generateMongooseName',
      value: function generateMongooseName() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Model';
  
        return name + '_' + Date.now();
      }
    }, {
      key: 'getMongooseSchema',
      value: function getMongooseSchema() {
        var schema = new _mongoose2.default.Schema(this.schema, this.options);
        schema.statics = this.statics;
        schema.methods = this.methods;
        _lodash2.default.forEach(this.preMethods, function (val, key) {
          schema.pre(key, val);
        });
        _lodash2.default.forEach(this.postMethods, function (val, key) {
          schema.post(key, val);
        });
        _lodash2.default.forEach(this.virtuals, function (_ref) {
          var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
              args1 = _ref2[0],
              method = _ref2[1],
              args2 = _ref2[2];
  
          console.log('virtuals', method, args1);
          if (method == 'init') {
            schema.virtual.apply(schema, (0, _toConsumableArray3.default)(args1));
          } else {
            var _schema$virtual;
  
            (_schema$virtual = schema.virtual.apply(schema, (0, _toConsumableArray3.default)(args1)))[method].apply(_schema$virtual, (0, _toConsumableArray3.default)(args2));
          }
        });
        _lodash2.default.forEach(this.indexes, function (args) {
          schema.index.apply(schema, (0, _toConsumableArray3.default)(args));
        });
        return schema;
      }
    }, {
      key: 'pre',
      value: function pre(key, val) {
        this.preMethods[key] = val;
      }
    }, {
      key: 'post',
      value: function post(key, val) {
        this.postMethods[key] = val;
      }
    }, {
      key: 'virtual',
      value: function virtual() {
        var _this2 = this;
  
        for (var _len = arguments.length, args1 = Array(_len), _key = 0; _key < _len; _key++) {
          args1[_key] = arguments[_key];
        }
  
        if (args1.length > 1) {
          this.virtuals.push([args1, 'init']);
        }
        return {
          set: function set() {
            for (var _len2 = arguments.length, args2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args2[_key2] = arguments[_key2];
            }
  
            _this2.virtuals.push([args1, 'set', args2]);
          },
          get: function get() {
            for (var _len3 = arguments.length, args2 = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args2[_key3] = arguments[_key3];
            }
  
            _this2.virtuals.push([args1, 'get', args2]);
          }
        };
      }
    }, {
      key: 'index',
      value: function index() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
  
        this.indexes.push(args);
      }
    }]);
    return UniversalSchema;
  }();
  
  exports.default = UniversalSchema;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _AppError = __webpack_require__(71);
  
  var _AppError2 = _interopRequireDefault(_AppError);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return {
      e: function e(code, message, status) {
        return new _AppError2.default(code, message, status);
      },
      e500: function e500(message) {
        return new _AppError2.default(500, message, 500);
      },
      e404: function e404(message) {
        return new _AppError2.default(404, message, 404);
      },
      e403: function e403(message) {
        return new _AppError2.default(403, message, 403);
      },
      e401: function e401(message) {
        return new _AppError2.default(401, message, 401);
      }, // unauth
      e400: function e400(message) {
        return new _AppError2.default(400, message, 400);
      }
    };
  };

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var AppError = function (_Error) {
    (0, _inherits3.default)(AppError, _Error);
  
    function AppError() {
      var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var message = arguments[1];
      var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
      (0, _classCallCheck3.default)(this, AppError);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (AppError.__proto__ || (0, _getPrototypeOf2.default)(AppError)).call(this, message));
  
      _this.name = _this.constructor.name;
      _this.code = code;
      _this.status = status;
      _this.message = message;
      if (typeof Error.captureStackTrace === 'function') {
        Error.captureStackTrace(_this, _this.constructor);
      } else {
        _this.stack = new Error(message).stack;
      }
      return _this;
    }
  
    return AppError;
  }(Error);
  
  exports.default = AppError;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function () {
    var _require;
  
    return {
      Auth: (_require = __webpack_require__(73)).default.apply(_require, arguments)
    };
  };

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  exports.canonize = canonize;
  
  var _expressJwt = __webpack_require__(58);
  
  var _expressJwt2 = _interopRequireDefault(_expressJwt);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function canonize(str) {
    return str.toLowerCase().trim();
  }
  
  exports.default = function (ctx) {
    var User = ctx.models.User;
    var resourse = {};
  
    resourse.validate = function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req) {
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return User.findById(req.user._id);
  
              case 2:
                user = _context.sent;
  
                if (user) {
                  _context.next = 5;
                  break;
                }
  
                throw ctx.errors.e404('Не найден user в базе');
  
              case 5:
                return _context.abrupt('return', {
                  __pack: 1,
                  jwt: req.user,
                  user: user
                });
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
  
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  
    resourse.silent = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req) {
        var params, username, user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = req.allParams();
  
                if (params.username) params.username = canonize(params.username);
                if (params.email) params.email = canonize(params.email);
                username = '__s' + Date.now() + '__';
                user = new User((0, _assign2.default)({
                  username: username,
                  type: 'silent'
                }, params));
                _context2.next = 7;
                return user.save();
  
              case 7:
                return _context2.abrupt('return', {
                  __pack: 1,
                  signup: true,
                  user: user,
                  token: user.generateAuthToken()
                });
  
              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
  
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();
    resourse.getUserFields = function (req) {
      var params = req.allParams();
      if (params.login) {
        if (!params.username) params.username = params.login;
        if (!params.email && User.isValidEmail(params.login)) params.email = params.login; // if email
      }
      if (params.username) params.username = canonize(params.username);
      if (params.email) params.email = canonize(params.email);
      return params;
    };
    resourse.getUserCriteria = function (req) {
      var params = req.allParams();
      if (params.username) {
        return {
          username: canonize(params.username)
        };
      }
      if (params.email) {
        return {
          email: canonize(params.email)
        };
      }
      if (params.login) {
        return {
          $or: [{
            username: canonize(params.login)
          }, {
            email: canonize(params.login)
          }]
        };
      }
      throw ctx.errors.e400('Параметр username, email, login не передан');
    };
    resourse.signup = function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(req) {
        var userFields, criteria, existUser, user, emailOptions, sended;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userFields = resourse.getUserFields(req);
                criteria = resourse.getUserCriteria(req);
                _context3.next = 4;
                return User.findOne(criteria);
  
              case 4:
                existUser = _context3.sent;
  
                if (!existUser) {
                  _context3.next = 7;
                  break;
                }
  
                throw ctx.errors.e400('Username with this email or username is registered');
  
              case 7:
                user = new User(userFields);
                _context3.next = 10;
                return user.save();
  
              case 10:
                emailOptions = {
                  subject: 'Регистрация на сайте',
                  text: 'Поздравляем с регистрацией'
                };
                sended = void 0;
                _context3.prev = 12;
                _context3.next = 15;
                return user.sendEmail(emailOptions);
  
              case 15:
                sended = true;
                _context3.next = 22;
                break;
  
              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3['catch'](12);
  
                ctx.log.warn(_context3.t0);
                sended = false;
  
              case 22:
                return _context3.abrupt('return', {
                  __pack: 1,
                  signup: true,
                  emailSended: sended,
                  user: user,
                  token: user.generateAuthToken()
                });
  
              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[12, 18]]);
      }));
  
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();
  
    resourse.login = function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(req) {
        var params, criteria, user;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                params = req.allParams();
  
                if (params.password) {
                  _context4.next = 3;
                  break;
                }
  
                throw ctx.errors.e400('Параметр password не передан');
  
              case 3:
                criteria = resourse.getUserCriteria(req);
                _context4.next = 6;
                return User.findOne(criteria);
  
              case 6:
                user = _context4.sent;
  
                if (user) {
                  _context4.next = 9;
                  break;
                }
  
                throw ctx.errors.e404('Такой пользователь не найден');
  
              case 9:
                _context4.next = 11;
                return user.verifyPassword(params.password);
  
              case 11:
                if (_context4.sent) {
                  _context4.next = 13;
                  break;
                }
  
                throw ctx.errors.e400('Переданный пароль не подходит');
  
              case 13:
                return _context4.abrupt('return', {
                  __pack: 1,
                  user: user,
                  token: user.generateAuthToken()
                });
  
              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
  
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();
    resourse.recovery = function () {
      var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(req) {
        var criteria, user, password, emailOptions, sended;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // const params = req.allParams();
  
                criteria = resourse.getUserCriteria(req);
                _context5.next = 3;
                return User.findOne(criteria);
  
              case 3:
                user = _context5.sent;
  
                if (user) {
                  _context5.next = 6;
                  break;
                }
  
                throw ctx.errors.e404('Такой пользователь не найден');
  
              case 6:
                password = User.generatePassword();
  
                user.password = password;
                _context5.next = 10;
                return user.save();
  
              case 10:
                console.log('user', user);
                emailOptions = {
                  subject: 'Восстановление пароля на сайте',
                  text: '\u0412\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C: ' + password
                };
                sended = void 0;
                _context5.prev = 13;
                _context5.next = 16;
                return user.sendEmail(emailOptions);
  
              case 16:
                sended = true;
                _context5.next = 23;
                break;
  
              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5['catch'](13);
  
                ctx.log.warn(_context5.t0);
                sended = false;
  
              case 23:
                return _context5.abrupt('return', {
                  __pack: 1,
                  emailSended: sended
                });
  
              case 24:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[13, 19]]);
      }));
  
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }();
  
    return resourse;
  };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  exports.default = function (ctx) {
    // eslint-disable-line
    return {
      allParams: function allParams() {
        var params = {};
        (0, _assign2.default)(params, this.params);
        (0, _assign2.default)(params, this.body);
        (0, _assign2.default)(params, this.query);
  
        return params;
      }
    };
  };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function () {
    var _require, _require2, _require3;
  
    // eslint-disable-line
    return {
      err: (_require = __webpack_require__(76)).default.apply(_require, arguments), // eslint-disable-line
      ok: (_require2 = __webpack_require__(77)).default.apply(_require2, arguments), // eslint-disable-line
      pack: (_require3 = __webpack_require__(78)).default.apply(_require3, arguments) };
  };

/***/ },
/* 76 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function err(err) {
      if (!err) {
        err = {
          code: 1,
          message: 'Неизвестная ошибка'
        };
      }
      if (typeof err === 'string') {
        err = {
          code: 1,
          message: err
        };
      }
      if (!err.code) {
        err.code = 1;
      }
      if (this.statusCode < 400) {
        this.status(500);
      }
      return this.pack(null, err);
    };
  };

/***/ },
/* 77 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function ok(data) {
      console.log('ok', data);
      var info = {
        code: 0,
        message: 'ok'
      };
      return this.pack(data, info);
    };
  };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function pack(data, info) {
      var pck = {
        code: info.code,
        message: info.message
      };
      if (data) {
        if (data.__pack) {
          console.log('__pack! !!!');
  
          (0, _assign2.default)(pck, _lodash2.default.omit(data, ['__pack']));
        } else {
          pck.data = data;
        }
      }
      if ((true) && info.err) {
        pck.err = info.err;
      }
      console.log('json', data);
      return this.json(pck);
    };
  };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function () {
    var _require, _require2, _require3, _require4;
  
    return {
      checkNotFound: (_require = __webpack_require__(80)).default.apply(_require, arguments), // eslint-disable-line
      createResourse: (_require2 = __webpack_require__(81)).default.apply(_require2, arguments), // eslint-disable-line
      getToken: (_require3 = __webpack_require__(82)).default.apply(_require3, arguments), // eslint-disable-line
      wrapResourse: (_require4 = __webpack_require__(83)).default.apply(_require4, arguments) };
  };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _promise = __webpack_require__(3);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function checkNotFound(data) {
      if (!data) throw ctx.errors.e404('Object not found');
      return _promise2.default.resolve(data);
    };
  };

/***/ },
/* 81 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function createResourse(Model) {
      return {
        list: function list() {
          return Model.find({});
        },
        create: function create(req) {
          var data = req.allParams();
          return Model.create(data);
        },
        get: function get(req) {
          var id = req.params.id;
          return Model.findById(id).then(ctx.helpers.checkNotFound);
        },
        update: function update(req) {
          var id = req.allParams().id;
          var data = req.allParams();
          return Model.findByIdAndUpdate(id, data, { new: true }).then(ctx.helpers.checkNotFound);
        },
        remove: function remove(req) {
          var id = req.allParams().id;
          return Model.findByIdAndRemove(id).then(ctx.helpers.checkNotFound);
        }
      };
    };
  };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function (ctx) {
    return function getToken(req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      } else if (req.headers['x-access-token']) {
        return req.headers['x-access-token'];
      } else if (req.query && req.query.token) {
        return req.query.token;
      } else if (req.cookies && req.cookies.token) {
        return req.cookies.token;
      }
      if ((true) && ctx.config.jwt && ctx.config.jwt.devToken) return ctx.config.jwt.devToken;
      return null;
    };
  };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _AsyncRouter = __webpack_require__(36);
  
  var _AsyncRouter2 = _interopRequireDefault(_AsyncRouter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function (ctx) {
    return function wrapResourse(resourse) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
      var api = params.api || params.router || (0, _AsyncRouter2.default)();
      var prefix = params.prefix || '';
      var middleware = params.middleware || function () {};
      api.get(prefix + '/', middleware, resourse.list);
      api.post(prefix + '/', middleware, resourse.create);
      api.get(prefix + '/:id', middleware, resourse.get);
      api.all(prefix + '/:id/create', middleware, resourse.create);
      api.put(prefix + '/:id', middleware, resourse.update);
      api.all(prefix + '/:id/update', middleware, resourse.update);
      api.delete(prefix + '/:id', middleware, resourse.remove);
      api.all(prefix + '/:id/remove', middleware, resourse.remove);
      return api;
    };
  };

/***/ },
/* 84 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _HomePage = __webpack_require__(87);
  
  var _HomePage2 = _interopRequireDefault(_HomePage);
  
  var _CounterPage = __webpack_require__(98);
  
  var _CounterPage2 = _interopRequireDefault(_CounterPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import InitPage from './InitPage'
  // import IndexPage from './IndexPage'
  // import { LoginPage, RegisterPage } from './AuthPage'
  // import ErrorPage from './ErrorPage'
  // import App from '../App'
  exports.default = {
  
    path: '/',
  
    // Keep in mind, routes are evaluated in order
    children: [{
      path: '/',
      action: function action() {
        var _this = this;
  
        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', {
                    title: 'HomePage',
                    component: _react2.default.createElement(_HomePage2.default, null)
                  });
  
                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      }
    }, {
      path: '/static',
      action: function action() {
        var _this2 = this;
  
        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt('return', {
                    title: 'StaticPage',
                    component: _react2.default.createElement(
                      'div',
                      null,
                      'static'
                    )
                  });
  
                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }))();
      }
    }, {
      path: '/counter',
      action: function action() {
        var _this3 = this;
  
        return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt('return', {
                    title: 'CounterPage',
                    component: _react2.default.createElement(_CounterPage2.default, null)
                  });
  
                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }))();
      }
    },
    // require('./home').default,
    // require('./contact').default,
    // require('./login').default,
    // require('./register').default,
    //
    // // place new routes before...
    // require('./content').default,
  
    {
  
      path: '*',
  
      action: function action() {
        return {
          title: "Page Not Found",
          component: _react2.default.createElement(
            'div',
            null,
            'Page Not Found'
          ),
          status: 404
        };
      }
    }],
  
    action: function action(_ref) {
      var _this4 = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
        var route;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                route = void 0;
  
                // Execute each child route until one of them return the result
                // TODO: move this logic to the `next` function
                // console.log('action');
  
              case 1:
                _context4.next = 3;
                return next();
  
              case 3:
                route = _context4.sent;
  
              case 4:
                if (!route) {
                  _context4.next = 1;
                  break;
                }
  
              case 5:
  
                // Provide default values for title, description etc.
                route.title = (route.title || 'Untitled Page') + ' - Lego Starter Kit';
                route.description = route.description || '';
  
                return _context4.abrupt('return', route);
  
              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    }
  };
  
  // export default {
  //   path: '/',
  //   children: [
  //     {
  //       path: '/',
  //       action() {
  //         return <div>
  //           Main Page
  //         </div>
  //       },
  //     },
  //   ],
  //   async action({ next, render, context }) {
  //     const component = await next();
  //     if (component === undefined) return component;
  //     return render(component)
  //     //   <App context={context}>
  //     //     {component}
  //     //   </App>
  //     // );
  //   },
  // };

/***/ },
/* 86 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _A = __webpack_require__(89);
  
  var _A2 = _interopRequireDefault(_A);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HomePage = (_dec = (0, _importcss2.default)(__webpack_require__(96)), _dec(_class = function (_Component) {
    (0, _inherits3.default)(HomePage, _Component);
  
    function HomePage() {
      (0, _classCallCheck3.default)(this, HomePage);
      return (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(HomePage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { styleName: 'root' },
          'Welcome to HomePageasdas',
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            _A2.default,
            { href: '/counter' },
            'Go to CounterPage'
          )
        );
      }
    }]);
    return HomePage;
  }(_react.Component)) || _class);
  exports.default = HomePage;

/***/ },
/* 88 */
/***/ function(module, exports) {

  module.exports = require("importcss");

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Link = __webpack_require__(90);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var A = (_dec = (0, _importcss2.default)(__webpack_require__(92)), _dec(_class = function (_Component) {
    (0, _inherits3.default)(A, _Component);
  
    function A() {
      (0, _classCallCheck3.default)(this, A);
      return (0, _possibleConstructorReturn3.default)(this, (A.__proto__ || (0, _getPrototypeOf2.default)(A)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(A, [{
      key: 'render',
      value: function render() {
        var bsStyle = this.props.bsStyle || 'primary';
        var className = [this.props.className, this.props.styles && this.props.styles.A, this.props.styles && this.props.styles['A_style_' + bsStyle]].filter(function (a) {
          return a;
        }).join(' ');
        return _react2.default.createElement(_Link2.default, (0, _extends3.default)({}, this.props, { className: className, href: this.props.href || this.props.to }));
      }
    }]);
    return A;
  }(_react.Component)) || _class);
  exports.default = A;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(91);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp2;
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
        _this.context.history.push(_this.props.to || _this.props.href);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'children']);
  
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to || this.props.href }, props, { onClick: this.handleClick }),
          children
        );
      }
    }]);
    return Link;
  }(_react.Component), _class.propTypes = {
    // to: PropTypes.string.isRequired,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  }, _class.contextTypes = {
    history: _react.PropTypes.object.isRequired
  }, _temp2);
  exports.default = Link;

/***/ },
/* 91 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(93);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../postcss-loader/index.js?pack=default!./A.css", function() {
          content = require("!!./../../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../postcss-loader/index.js?pack=default!./A.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".A_A_2kz {\n  text-decoration: underline;\n}\n\n.A_A_style_primary_37z {\n  color: #da3b37;\n}\n\n.A_A_style_secondary_E2F {\n  color: #c4c4c4;\n}\n", "", {"version":3,"sources":["/../node_modules/lego-starter-kit/src/ReactApp/components/A/A.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;CAC5B;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAe;CAChB","file":"A.css","sourcesContent":[".A {\n  text-decoration: underline;\n}\n\n.A_style_primary {\n  color: #da3b37;\n}\n\n.A_style_secondary {\n  color: #c4c4c4;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"A": "A_A_2kz",
  	"A_style_primary": "A_A_style_primary_37z",
  	"A_style_secondary": "A_A_style_secondary_E2F"
  };

/***/ },
/* 94 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _stringify = __webpack_require__(49);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(51);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(35);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$replace = _ref.replace,
        replace = _ref$replace === undefined ? false : _ref$replace,
        _ref$prepend = _ref.prepend,
        prepend = _ref$prepend === undefined ? false : _ref$prepend;
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
          moduleId = _styles$i[0],
          css = _styles$i[1],
          media = _styles$i[2],
          sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap && btoa) {
        // skip IE9 and below, see http://caniuse.com/atob-btoa
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(97);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../postcss-loader/index.js?pack=default!./HomePage.css", function() {
          content = require("!!./../../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../postcss-loader/index.js?pack=default!./HomePage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".HomePage_root_HAL{\n  text-align: center;\n  font-size: 24pt;\n}\n", "", {"version":3,"sources":["/../node_modules/lego-starter-kit/src/ReactApp/routes/HomePage/HomePage.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gBAAgB;CACjB","file":"HomePage.css","sourcesContent":[".root{\n  text-align: center;\n  font-size: 24pt;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "HomePage_root_HAL"
  };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _A = __webpack_require__(89);
  
  var _A2 = _interopRequireDefault(_A);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var CounterPage = (_dec = (0, _importcss2.default)(__webpack_require__(99)), _dec(_class = function (_Component) {
    (0, _inherits3.default)(CounterPage, _Component);
  
    function CounterPage() {
      (0, _classCallCheck3.default)(this, CounterPage);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (CounterPage.__proto__ || (0, _getPrototypeOf2.default)(CounterPage)).call(this));
  
      _this.state = {
        counter: 10
      };
      return _this;
    }
  
    (0, _createClass3.default)(CounterPage, [{
      key: 'handleChange',
      value: function handleChange(change) {
        var _this2 = this;
  
        return function () {
          _this2.setState({
            counter: _this2.state.counter + change
          });
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { styleName: 'root' },
          'Welcome to CounterPage',
          _react2.default.createElement(
            'h1',
            null,
            this.state.counter
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleChange(-1) },
            '-1'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleChange(1) },
            '+1'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            _A2.default,
            { href: '/' },
            'Go to HomePage'
          )
        );
      }
    }]);
    return CounterPage;
  }(_react.Component)) || _class);
  exports.default = CounterPage;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(100);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../postcss-loader/index.js?pack=default!./CounterPage.css", function() {
          content = require("!!./../../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../postcss-loader/index.js?pack=default!./CounterPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".CounterPage_root_2XB{\n  text-align: center;\n  font-size: 18pt;\n}\n", "", {"version":3,"sources":["/../node_modules/lego-starter-kit/src/ReactApp/routes/CounterPage/CounterPage.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gBAAgB;CACjB","file":"CounterPage.css","sourcesContent":[".root{\n  text-align: center;\n  font-size: 18pt;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "CounterPage_root_2XB"
  };

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Root = undefined;
  
  var _stringify = __webpack_require__(49);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp, _class2, _temp2;
  // import useragent from 'useragent'
  
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactTunnel = __webpack_require__(102);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _util = __webpack_require__(103);
  
  var _util2 = _interopRequireDefault(_util);
  
  var _server = __webpack_require__(104);
  
  var _server2 = _interopRequireDefault(_server);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Root = exports.Root = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Root, _Component);
  
    function Root(props) {
      (0, _classCallCheck3.default)(this, Root);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).call(this, props));
  
      _this.state = props.ctx.rootState || {};
      return _this;
    }
  
    (0, _createClass3.default)(Root, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var html = document.getElementsByTagName("html")[0];
        html.className = html.className.replace('ua_js_no', 'ua_js_yes');
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        var _this2 = this;
  
        return {
          history: this.props.ctx && this.props.ctx.history || function () {},
          insertCss: this.props.ctx && this.props.ctx.insertCss || function () {},
          rootState: this.state,
          setRootState: function setRootState() {
            _this2.setState.apply(_this2, arguments);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        var provider = this.props.ctx.provider;
        return _react2.default.createElement(
          _reactTunnel.Provider,
          { provide: provider.provide.bind(provider) },
          function () {
            return _this3.props.component;
          }
        );
      }
    }]);
    return Root;
  }(_react.Component), _class.childContextTypes = {
    history: _react.PropTypes.object.isRequired,
    insertCss: _react.PropTypes.func.isRequired,
    rootState: _react.PropTypes.object.isRequired,
    setRootState: _react.PropTypes.func.isRequired
  }, _temp);
  var Html = (_temp2 = _class2 = function () {
    function Html(props) {
      (0, _classCallCheck3.default)(this, Html);
  
      this.props = props || {};
    }
  
    (0, _createClass3.default)(Html, [{
      key: 'getHtmlClass',
      value: function getHtmlClass(req) {
        var ua = {}; //useragent.is(req.headers['user-agent'])
        ua.js = false;
        return _lodash2.default.map(ua, function (val, key) {
          return 'ua_' + key + '_' + (val ? 'yes' : 'no');
        }).join(' ') || '';
      }
    }, {
      key: 'getRootState',
      value: function getRootState() {
        return this.props.ctx.rootState;
      }
    }, {
      key: 'renderStyle',
      value: function renderStyle() {
        // console.log('this.props.ctx', this.props.ctx);
        var styles = this.props.ctx.style || [];
        return '<style id="css">' + styles.join("\n") + '</style>';
      }
    }, {
      key: 'renderHead',
      value: function renderHead() {
        return '<title>' + this.props.title + '</title>\n<meta charset="utf-8">\n<meta http-equiv="x-ua-compatible" content="ie=edge" />\n<meta name="viewport" content="width=device-width, initial-scale=1" />\n' + this.renderAssets('css') + '\n' + this.renderStyle() + '\n';
      }
    }, {
      key: 'renderRoot',
      value: function renderRoot() {
        var Root = this.constructor.Root;
        var component = _react2.default.createElement(
          Root,
          (0, _extends3.default)({}, this.props, { rootState: this.getRootState() }),
          this.props.children
        );
        return _server2.default.renderToStaticMarkup(component);
      }
    }, {
      key: 'renderAssets',
      value: function renderAssets(type) {
        var props = this.props;
  
        if (type === 'css' && props.assets && props.assets.css) {
          return '<link rel="stylesheet" href="' + props.assets.css + '">';
        }
        if (type === 'js' && props.assets && props.assets.js) {
          return '<script id="js" src="' + props.assets.js + '"></script>';
        }
        return '';
      }
    }, {
      key: 'renderFooter',
      value: function renderFooter() {
        var debug =  true ? '<!-- ' + _util2.default.inspect((0, _extends3.default)({}, this.props, { style: undefined, req: undefined, ctx: null })) + ' -->' : '';
        return (this.props.footerHtml || '') + '\n' + debug + '\n    ';
      }
    }, {
      key: 'render',
      value: function render() {
        var root = this.renderRoot(); // because async style render
        return '<!doctype html>\n<html class="' + this.getHtmlClass(this.props.req) + '">\n  <head>\n    ' + this.renderHead() + '\n  </head>\n  <body>\n    <div id="root"/>\n      ' + root + '\n    </div>\n    <script>\n      window.__ROOT_STATE__ = ' + (0, _stringify2.default)(this.getRootState()) + ';\n    </script>\n    ' + this.renderAssets('js') + '\n    ' + this.renderFooter() + '\n  </body>\n</html>\n    ';
      }
    }]);
    return Html;
  }(), _class2.Root = Root, _class2.Root = Root, _temp2);
  exports.default = Html;

/***/ },
/* 102 */
/***/ function(module, exports) {

  module.exports = require("react-tunnel");

/***/ },
/* 103 */
/***/ function(module, exports) {

  module.exports = require("util");

/***/ },
/* 104 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import UserStore from './stores/UserStore';
  // import ProfileStore from './stores/ProfileStore';
  // import ApiClient from './api/api.client';
  
  var Provider = function () {
    // user = null;
    // api = null;
    function Provider() {
      // const token = props.token || (props.user && props.user.token)
      // // console.log('AppStore constructor token', token);
      // this.api = new ApiClient({ base: '/api/v1' });
      // if (token) {
      //   this.api.setAuthToken(token)
      // }
      // const userData = {
      //   token: props.token,
      //   user: props.user,
      // }
      // this.user = new UserStore(this, userData);
      // this.profile = new ProfileStore(this);
      // this.app = this;
      // if (__CLIENT__) {
      //   global.api = this.api
      // }
  
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck3.default)(this, Provider);
    }
  
    (0, _createClass3.default)(Provider, [{
      key: "provide",
      value: function provide() {
        return {
          asd: 123
        };
      }
    }]);
    return Provider;
  }();
  
  exports.default = Provider;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getApi;
  
  var _AsyncRouter = __webpack_require__(36);
  
  var _AsyncRouter2 = _interopRequireDefault(_AsyncRouter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function getApi(ctx, params) {
    var api = ctx.asyncRouter();
  
    // api.all('/universal', createRoute({ ...ctx, models }));
    // ctx.app.ws('/universal', createSocketNamespace({ ...ctx, models }))
  
    // api.all('/universal-socket', createRoute({...ctx, models, socket: true}));
    api.all('/auth/login', ctx.resourses.Auth.login);
    api.all('/auth/signup', ctx.resourses.Auth.signup);
    api.all('/auth/recovery', ctx.resourses.Auth.recovery);
    api.all('/auth/recovery', ctx.resourses.Auth.recovery);
    // api.all('/rpc', createRpcRoute(ctx.models))
  
  
    api.all('*', function () {
      return 'Mobx API working';
    });
    return api;
  } // import { createRoute, createSocketNamespace } from 'universal-model';

/***/ },
/* 107 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getDocs;
  // import api from 'lego-starter-kit/api/api.client'
  // export default api
  
  function getDocs() {
    return {};
  }

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ErrorPage = __webpack_require__(109);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  var _client = __webpack_require__(121);
  
  var _client2 = _interopRequireDefault(_client);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import HomePage from './HomeWWS'
  exports.default = {
    path: '/',
    children: [(0, _extends3.default)({
      path: '/'
    }, __webpack_require__(122).default), (0, _extends3.default)({
      path: '/admin'
    }, __webpack_require__(131).default), (0, _extends3.default)({
      path: '/auth'
    }, __webpack_require__(158).default), (0, _extends3.default)({
      path: '/cabinet'
    }, __webpack_require__(179).default), (0, _extends3.default)({
      path: '/task1'
    }, __webpack_require__(200).default), {
      path: '*',
      action: function action() {
        throw 'Not found';
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          ctx = _ref.ctx;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                route = void 0;
                _context.prev = 1;
                _context.next = 4;
                return next();
  
              case 4:
                route = _context.sent;
                _context.next = 11;
                break;
  
              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](1);
  
                console.log('err!!!!!!!!!!!!!!!!!!!!!!!!!!!!', _context.t0);
                route = {
                  title: '!!!Error: ' + _context.t0,
                  component: _react2.default.createElement(
                    _ErrorPage2.default,
                    null,
                    'Error: ' + _context.t0
                  )
                };
  
              case 11:
                if (!route) route = {};
                route.title = (route.title || 'Home') + ' - ' + _client2.default.siteTitle;
                route.description = route.description || _client2.default.siteTitle;
                return _context.abrupt('return', route);
  
              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 7]]);
      }))();
    }
  };

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactstrap = __webpack_require__(110);
  
  var _reactBootstrap = __webpack_require__(111);
  
  var _refresh = __webpack_require__(112);
  
  var _refresh2 = _interopRequireDefault(_refresh);
  
  var _clear = __webpack_require__(113);
  
  var _clear2 = _interopRequireDefault(_clear);
  
  var _check = __webpack_require__(114);
  
  var _check2 = _interopRequireDefault(_check);
  
  var _Slide = __webpack_require__(115);
  
  var _Slide2 = _interopRequireDefault(_Slide);
  
  var _Link = __webpack_require__(120);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // @inject('app')
  var ErrorPage = function (_Component) {
    (0, _inherits3.default)(ErrorPage, _Component);
  
    function ErrorPage() {
      (0, _classCallCheck3.default)(this, ErrorPage);
      return (0, _possibleConstructorReturn3.default)(this, (ErrorPage.__proto__ || (0, _getPrototypeOf2.default)(ErrorPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ErrorPage, [{
      key: 'render',
      value: function render() {
        var type = this.props.type;
  
        console.log(this.props);
        return _react2.default.createElement(
          _Slide2.default,
          {
            full: true,
            video: 'http://skill-branch.ru/video-background.webm',
            overlay: true
          },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 4, mdOffset: 4 },
                _react2.default.createElement(
                  _reactstrap.Card,
                  null,
                  _react2.default.createElement(
                    _reactstrap.CardBlock,
                    null,
                    _react2.default.createElement(
                      _reactstrap.CardTitle,
                      null,
                      this.props.title || 'Ошибка'
                    ),
                    _react2.default.createElement(
                      _reactstrap.CardText,
                      null,
                      this.props.children
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Card,
                  null,
                  _react2.default.createElement(
                    _reactstrap.CardBlock,
                    { className: 'text-xs-center', style: { textAlign: 'center' } },
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        componentClass: _Link2.default,
                        href: '/',
                        block: true
                      },
                      '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return ErrorPage;
  }(_react.Component);
  // import importcss from 'importcss';
  // import { autobind } from 'core-decorators';
  // import { inject } from 'mobx-react';
  
  
  exports.default = ErrorPage;

/***/ },
/* 110 */
/***/ function(module, exports) {

  module.exports = require("reactstrap");

/***/ },
/* 111 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 112 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/md/refresh");

/***/ },
/* 113 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/md/clear");

/***/ },
/* 114 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/md/check");

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class, _class2, _temp;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _reactDriveIn = __webpack_require__(116);
  
  var _reactDriveIn2 = _interopRequireDefault(_reactDriveIn);
  
  var _classnames = __webpack_require__(117);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Slide = (_dec = (0, _importcss2.default)(__webpack_require__(118)), _dec(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(Slide, _Component);
  
    function Slide() {
      (0, _classCallCheck3.default)(this, Slide);
      return (0, _possibleConstructorReturn3.default)(this, (Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Slide, [{
      key: 'renderVideo',
      value: function renderVideo(video) {
        // https://www.youtube.com/asdasd/asd/asd/watch?v=c-shIOFYCRU
        // https://youtu.be/C8PYHjRj-zk
        // https://www.youtube.com/embed/C8PYHjRj-zk
        // https://youtu.be/c-shIOFYCRU?t=3m26s
        //
        if (video.indexOf('youtube.com') !== -1 || video.indexOf('youtu.be') !== -1) {
          var code = video.split('watch?v=').pop().split('/').pop().split('?')[0];
          var playlist = 'https://www.youtube.com/embed/' + code + '?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=' + code;
          return _react2.default.createElement(
            'div',
            { styleName: 'Slide__video Slide__video_youtube' },
            _react2.default.createElement(
              'div',
              { styleName: 'Slide__videoForeground' },
              _react2.default.createElement('iframe', {
                styleName: 'video',
                frameBorder: '0',
                allowFullScreen: '1',
                width: '640',
                height: '360',
                src: playlist
              })
            )
          );
        }
        return _react2.default.createElement(
          'div',
          { styleName: 'Slide__video' },
          _react2.default.createElement(_reactDriveIn2.default, {
            show: video
          })
        );
      }
    }, {
      key: 'renderBg',
      value: function renderBg() {
        var overlay = this.props.overlay;
        var _props = this.props,
            video = _props.video,
            image = _props.image;
  
        if (overlay === true) {
          overlay = 'rgba(0,0,0,0.5)';
        }
  
        return _react2.default.createElement(
          'div',
          { styleName: 'Slide__bg' },
          _react2.default.createElement('div', { styleName: 'Slide__noclick' }),
          this.props.overlay ? _react2.default.createElement('div', { styleName: 'Slide__overlay', style: { backgroundColor: overlay } }) : null,
          video ? this.renderVideo(video) : null,
          image ? _react2.default.createElement('div', {
            styleName: 'Slide__image',
            style: { backgroundImage: 'url(' + image + ')' }
          }) : null
        );
      }
    }, {
      key: 'renderInner',
      value: function renderInner() {
        var height = this.props.height;
        var _props2 = this.props,
            width = _props2.width,
            top = _props2.top,
            left = _props2.left,
            right = _props2.right,
            bottom = _props2.bottom,
            content = _props2.content,
            children = _props2.children,
            full = _props2.full;
  
        var style = {};
        if (full && !height) {
          height = '100vh';
        }
        if (height) {
          style.minHeight = height;
        }
        if (width) {
          style.minWidth = width;
        }
        return _react2.default.createElement(
          'div',
          { styleName: 'Slide__inner', style: style },
          top ? _react2.default.createElement(
            'div',
            { styleName: 'Slide__top' },
            top
          ) : null,
          _react2.default.createElement(
            'div',
            { styleName: 'Slide__middle' },
            left ? _react2.default.createElement(
              'div',
              { styleName: 'Slide__left' },
              left
            ) : null,
            _react2.default.createElement(
              'div',
              { styleName: 'Slide__center' },
              _react2.default.createElement(
                'div',
                { styleName: 'Slide__content' },
                content,
                children
              )
            ),
            right ? _react2.default.createElement(
              'div',
              { styleName: 'Slide__right' },
              right
            ) : null
          ),
          bottom ? _react2.default.createElement(
            'div',
            { styleName: 'Slide__bottom' },
            bottom
          ) : null
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props,
            style = _props3.style,
            color = _props3.color,
            className = _props3.className,
            fixed = _props3.fixed,
            center = _props3.center,
            stretch = _props3.stretch;
  
        style.backgroundColor = color;
        return _react2.default.createElement(
          'div',
          {
            styleName: (0, _classnames2.default)({
              Slide: true,
              Slide_stretch: stretch,
              Slide_fixed: fixed,
              Slide_center: center
            }),
            className: className,
            style: style
          },
          this.renderBg(),
          this.renderInner()
        );
      }
    }]);
    return Slide;
  }(_react.Component), _class2.defaultProps = {
    color: 'transparent',
    overlay: false,
    video: null,
    stretch: false,
    full: false,
    image: null,
    width: null,
    height: null,
    top: null,
    left: null,
    right: null,
    bottom: null,
    content: null,
    children: null,
    className: '',
    style: {},
    fixed: false,
    center: false
  }, _class2.propTypes = {
    overlay: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
    video: _react.PropTypes.string,
    stretch: _react.PropTypes.bool,
    full: _react.PropTypes.bool,
    color: _react.PropTypes.string,
    image: _react.PropTypes.string,
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    top: _react.PropTypes.any,
    left: _react.PropTypes.any,
    right: _react.PropTypes.any,
    bottom: _react.PropTypes.any,
    content: _react.PropTypes.any,
    children: _react.PropTypes.any,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    fixed: _react.PropTypes.bool,
    center: _react.PropTypes.bool
  }, _temp)) || _class);
  exports.default = Slide;

/***/ },
/* 116 */
/***/ function(module, exports) {

  module.exports = require("react-drive-in");

/***/ },
/* 117 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(119);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../postcss-loader/index.js?pack=default!./Slide.css", function() {
          content = require("!!./../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../postcss-loader/index.js?pack=default!./Slide.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".Slide_Slide_fn9 {\n  position: relative;\n}\n.Slide_Slide_center_1hq {\n  text-align: center;\n  z-index: 110;\n}\n.Slide_Slide_stretch_3ud .Slide_Slide__middle_7h1 {\n  -webkit-box-align: stretch !important;\n  -webkit-align-items: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important;\n}\n.Slide_Slide_stretch_3ud .Slide_Slide__content_QPV {\n  height: 100%;\n}\n/*.Slide__inner {*/\n.Slide_Slide_fixed_3K9 .Slide_Slide__content_QPV {\n  /*@mixin gridColors;*/\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .Slide_Slide_fixed_3K9 .Slide_Slide__content_QPV {\n    width: 750px;\n    /*width: 768px;*/\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .Slide_Slide_fixed_3K9 .Slide_Slide__content_QPV {\n    width: 970px;\n    /*width: 992px;*/\n  }\n}\n@media (min-width: 1200px) and (max-width: 9998px) {\n  .Slide_Slide_fixed_3K9 .Slide_Slide__content_QPV {\n    width: 1170px;\n    /*width: 1200px;*/\n  }\n}\n.Slide_Slide__inner_1rq {\n  z-index: 110;\n\n  display: -webkit-box;\n\n  display: -webkit-flex;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n.Slide_Slide__top_ySf {\n  padding-top: 40px;\n}\n.Slide_Slide__middle_7h1 {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 20px 10px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  z-index: 110;\n}\n.Slide_Slide__bottom_1MT {\n  padding-bottom: 40px;\n}\n.Slide_Slide__left_2sL {\n}\n.Slide_Slide__center_29x {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.Slide_Slide__right_3GE {\n}\n.Slide_Slide__noclick_1Bx {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 103;\n}\n.Slide_Slide__overlay_2ma {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 102;\n}\n.Slide_Slide__video_3cH {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 101;\n}\n.Slide_Slide__videoForeground_13a {\n  /*@mixin bg;\n  height: 300%;\n   top: -100%;*/\n   position: absolute; display: block; -webkit-transform: translate3d(-50%, -50%, 0px); transform: translate3d(-50%, -50%, 0px); left: 50%; top: 50%;\n\n  width: 1650px; height: 930px;\n}\n.Slide_Slide__video_youtube_sNV iframe{\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n.Slide_Slide__image_3ts {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 100;\n\n  -webkit-background-size: cover;\n\n          background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n/////////////////\n\n.Slide_video_3bq {\n  position: absolute;\n  /*z-index: 0;*/\n  width: 1888px;\n  height: 1347.44px;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n  opacity: 1;\n  margin-top: -170.72px;\n  margin-left: -558px;\n  -webkit-transition-property: opacity;\n  -o-transition-property: opacity;\n  transition-property: opacity;\n  -webkit-transition-duration: 1000ms;\n       -o-transition-duration: 1000ms;\n          transition-duration: 1000ms;\n}\n// Youtube\n\n\n.Slide_Slide__bg-video_G5L {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: -2;\n  top: 0;\n  left: 0;\n\n  -webkit-background-size: cover;\n\n          background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.Slide_Slide__bg-video-inner_1TI {\n  width: 100%;\n  height: 100%;\n\n  background-attachment: scroll;\n  background-position: 50% 0;\n  background-repeat: no-repeat;\n  -webkit-background-size: cover;\n          background-size: cover;\n}\n", "", {"version":3,"sources":["/../node_modules/lsk-general/src/General/Slide/Slide.css","/../node_modules/lsk-general/src/General/_vars.css"],"names":[],"mappings":"AAEA;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,aAAa;CACd;AAEC;EACE,sCAAgC;EAAhC,wCAAgC;MAAhC,mCAAgC;UAAhC,gCAAgC;CACjC;AACD;EACE,aAAa;CACd;AAGD,mBAAmB;AACnB;EACE,sBAAsB;ECMxB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;CDNX;ACOD;EDVA;ICWE,aAAa;IACb,iBAAiB;GDTlB;CCUA;AACD;EDdA;ICeE,aAAa;IACb,iBAAiB;GDblB;CCcA;AACD;EDlBA;ICmBE,cAAc;IACd,kBAAkB;GDjBnB;CCkBA;ADfH;EACE,aAAa;;EAEb,qBAAc;;EAAd,sBAAc;;EAAd,qBAAc;;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,yBAAwB;EAAxB,gCAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,2BAAqB;EAArB,6BAAqB;MAArB,wBAAqB;UAArB,qBAAqB;CACtB;AAED;EACE,kBAAkB;CACnB;AACD;EACE,oBAAQ;EAAR,gBAAQ;MAAR,YAAQ;UAAR,QAAQ;EACR,mBAAmB;EACnB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,aAAa;EACb,0BAA+B;EAA/B,uCAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,aAAa;CACd;AACD;EACE,qBAAqB;CACtB;AAED;CACC;AACD;EACE,oBAAa;EAAb,qBAAa;MAAb,qBAAa;UAAb,aAAa;CACd;AACD;CACC;AAYD;EATE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,OAAO;EACP,QAAQ;EAMR,aAAa;CACd;AAED;EAdE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,OAAO;EACP,QAAQ;EAWR,aAAa;CACd;AAED;EAnBE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,OAAO;EACP,QAAQ;EAgBR,aAAa;CACd;AACD;EACE;;gBAEc;GACb,mBAAmB,CAAC,eAAe,CAAC,gDAAwC,CAAxC,wCAAwC,CAAC,UAAU,CAAC,SAAS;;EAElG,cAAc,CAAC,cAAc;CAC9B;AACD;EA/BE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,OAAO;EACP,QAAQ;CA4BT;AAED;EAnCE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,OAAO;EACP,QAAQ;EAgCR,aAAa;;EAEb,+BAAuB;;UAAvB,uBAAuB;EACvB,4BAA4B;EAC5B,6BAA6B;CAC9B;AAED;;;EAGE,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,WAAW;EACX,sBAAsB;EACtB,oBAAoB;EACpB,qCAA6B;EAA7B,gCAA6B;EAA7B,6BAA6B;EAC7B,oCAA4B;OAA5B,+BAA4B;UAA5B,4BAA4B;CAC7B;AAID;;;;EAIE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,OAAO;EACP,QAAQ;;EAER,+BAAuB;;UAAvB,uBAAuB;EACvB,4BAA4B;EAC5B,6BAA6B;CAC9B;AAED;EACE,YAAY;EACZ,aAAa;;EAEb,8BAA8B;EAC9B,2BAA2B;EAC3B,6BAA6B;EAC7B,+BAAuB;UAAvB,uBAAuB;CACxB","file":"Slide.css","sourcesContent":["@import url('&General/_vars.css');\n\n.Slide {\n  position: relative;\n}\n.Slide_center {\n  text-align: center;\n  z-index: 110;\n}\n.Slide_stretch {\n  .Slide__middle {\n    align-items: stretch !important;\n  }\n  .Slide__content {\n    height: 100%;\n  }\n}\n.Slide_fixed {\n  /*.Slide__inner {*/\n  .Slide__content {\n    /*@mixin gridColors;*/\n    @mixin gridContainer;\n  }\n}\n\n.Slide__inner {\n  z-index: 110;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.Slide__top {\n  padding-top: 40px;\n}\n.Slide__middle {\n  flex: 1;\n  padding: 20px 10px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-between;\n  z-index: 110;\n}\n.Slide__bottom {\n  padding-bottom: 40px;\n}\n\n.Slide__left {\n}\n.Slide__center {\n  flex-grow: 1;\n}\n.Slide__right {\n}\n\n@define-mixin bg {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n\n.Slide__noclick {\n  @mixin bg;\n  z-index: 103;\n}\n\n.Slide__overlay {\n  @mixin bg;\n  z-index: 102;\n}\n\n.Slide__video {\n  @mixin bg;\n  z-index: 101;\n}\n.Slide__videoForeground {\n  /*@mixin bg;\n  height: 300%;\n   top: -100%;*/\n   position: absolute; display: block; transform: translate3d(-50%, -50%, 0px); left: 50%; top: 50%;\n\n  width: 1650px; height: 930px;\n}\n.Slide__video_youtube iframe{\n  @mixin bg;\n}\n\n.Slide__image {\n  @mixin bg;\n  z-index: 100;\n\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/////////////////\n\n.video {\n  position: absolute;\n  /*z-index: 0;*/\n  width: 1888px;\n  height: 1347.44px;\n  top: 0px;\n  left: 0px;\n  overflow: hidden;\n  opacity: 1;\n  margin-top: -170.72px;\n  margin-left: -558px;\n  transition-property: opacity;\n  transition-duration: 1000ms;\n}\n\n\n\n// Youtube\n\n\n.Slide__bg-video {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: -2;\n  top: 0;\n  left: 0;\n\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.Slide__bg-video-inner {\n  width: 100%;\n  height: 100%;\n\n  background-attachment: scroll;\n  background-position: 50% 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n","@custom-media --xs (width  < 544px);\n@custom-media --sm (544px  <= width < 768px);\n@custom-media --md (768px  <= width < 992px);\n@custom-media --lg (992px  <= width < 1200px);\n@custom-media --xl (1200px <= width < 9999px);\n\n@define-mixin gridColors {\n  background: #fc8ffb;\n  @media (--xs) {\n    background: green;\n  }\n  @media (--sm) {\n    background: blue;\n  }\n  @media (--md) {\n    background: red;\n  }\n  @media (--lg) {\n    background: yellow;\n  }\n  @media (--xl) {\n    background: #01ffe1;\n  }\n}\n\n@define-mixin gridContainer {\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  @media (--md) {\n    width: 750px;\n    /*width: 768px;*/\n  }\n  @media (--lg) {\n    width: 970px;\n    /*width: 992px;*/\n  }\n  @media (--xl) {\n    width: 1170px;\n    /*width: 1200px;*/\n  }\n}\n\n$color-default: #404040;\n\n$color-primary: #108ee9;\n$color-primary-hovered: #49a9ee;\n\n$color-secondary: #d9d9d9;\n$color-secondary-hovered: #656565;\n\n$color-lightgray: #acacac;\n$color-darkgray: #222222;\n\n$color-clay: #c3c7cf;\n\n$color-background: #f2f2f2;\n$color-border: #ebebeb;\n$color-shadow: rgba(0, 0, 0, 0.2);\n\n$color-transparent: rgba(0, 0, 0, 0);\n$color-overlay: rgba(132, 132, 132, .7);\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"Slide": "Slide_Slide_fn9",
  	"Slide_center": "Slide_Slide_center_1hq",
  	"Slide_stretch": "Slide_Slide_stretch_3ud",
  	"Slide__middle": "Slide_Slide__middle_7h1",
  	"Slide__content": "Slide_Slide__content_QPV",
  	"Slide_fixed": "Slide_Slide_fixed_3K9",
  	"Slide__inner": "Slide_Slide__inner_1rq",
  	"Slide__top": "Slide_Slide__top_ySf",
  	"Slide__bottom": "Slide_Slide__bottom_1MT",
  	"Slide__left": "Slide_Slide__left_2sL",
  	"Slide__center": "Slide_Slide__center_29x",
  	"Slide__right": "Slide_Slide__right_3GE",
  	"Slide__noclick": "Slide_Slide__noclick_1Bx",
  	"Slide__overlay": "Slide_Slide__overlay_2ma",
  	"Slide__video": "Slide_Slide__video_3cH",
  	"Slide__videoForeground": "Slide_Slide__videoForeground_13a",
  	"Slide__video_youtube": "Slide_Slide__video_youtube_sNV",
  	"Slide__image": "Slide_Slide__image_3ts",
  	"video": "Slide_video_3bq",
  	"Slide__bg-video": "Slide_Slide__bg-video_G5L",
  	"Slide__bg-video-inner": "Slide_Slide__bg-video-inner_1TI"
  };

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _objectWithoutProperties2 = __webpack_require__(91);
  
  var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp2;
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function isLeftClickEvent(event) {
    return event.button === 0;
  }
  
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  
  var Link = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(Link, _Component);
  
    function Link() {
      var _ref;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, Link);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
  
        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }
  
        if (event.defaultPrevented === true) {
          return;
        }
  
        event.preventDefault();
        _this.context.history.push(_this.props.to || _this.props.href);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            to = _props.to,
            href = _props.href,
            children = _props.children,
            props = (0, _objectWithoutProperties3.default)(_props, ['to', 'href', 'children']);
  
        return _react2.default.createElement(
          'a',
          (0, _extends3.default)({ href: to || href }, props, { onClick: this.handleClick }),
          children
        );
      }
    }]);
    return Link;
  }(_react.Component), _class.defaultProps = {
    children: null,
    onClick: null,
    to: null,
    href: null
  }, _class.propTypes = {
    to: _react.PropTypes.string,
    href: _react.PropTypes.string,
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  }, _class.contextTypes = {
    history: _react.PropTypes.object.isRequired
  }, _temp2);
  exports.default = Link;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _config = __webpack_require__(8);
  
  var _config2 = _interopRequireDefault(_config);
  
  var _client = __webpack_require__(11);
  
  var _client2 = _interopRequireDefault(_client);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _config2.default.client(_client2.default, {
    siteTitle: 'The Cool Blog',
    api: {
      base: '/api/v1'
    },
    host:  true ? 'http://localhost:3000' : 'http://localhost:3000'
  });

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _HomePage = __webpack_require__(123);
  
  var _HomePage2 = _interopRequireDefault(_HomePage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    action: function action() {
      return {
        component: _react2.default.createElement(_HomePage2.default, null)
      };
    }
  };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _reactstrap = __webpack_require__(110);
  
  var _reactBootstrap = __webpack_require__(111);
  
  var _Component2 = __webpack_require__(124);
  
  var _Component3 = _interopRequireDefault(_Component2);
  
  var _Slide = __webpack_require__(115);
  
  var _Slide2 = _interopRequireDefault(_Slide);
  
  var _A = __webpack_require__(125);
  
  var _A2 = _interopRequireDefault(_A);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var HomePage = (_dec = (0, _importcss2.default)(__webpack_require__(129)), _dec(_class = function (_Component) {
    (0, _inherits3.default)(HomePage, _Component);
  
    function HomePage() {
      (0, _classCallCheck3.default)(this, HomePage);
      return (0, _possibleConstructorReturn3.default)(this, (HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(HomePage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Slide2.default,
          {
            full: true,
            video: 'http://skill-branch.ru/video-background.webm',
            overlay: true
          },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 4, mdOffset: 4 },
                _react2.default.createElement(
                  _reactstrap.Card,
                  null,
                  _react2.default.createElement(
                    _reactstrap.CardBlock,
                    null,
                    _react2.default.createElement(
                      _reactstrap.CardTitle,
                      null,
                      'Hello, XXI Century World!'
                    ),
                    '\u042D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440, \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C lego-starter-kit'
                  ),
                  _react2.default.createElement(
                    _reactstrap.CardFooter,
                    { className: 'text-xs-center' },
                    _react2.default.createElement(
                      _A2.default,
                      { href: 'https://github.com/makushatnik/skb-react' },
                      '\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return HomePage;
  }(_Component3.default)) || _class);
  exports.default = HomePage;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _promise = __webpack_require__(3);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Component = (_temp = _class = function (_React$Component) {
    (0, _inherits3.default)(Component, _React$Component);
  
    function Component() {
      (0, _classCallCheck3.default)(this, Component);
      return (0, _possibleConstructorReturn3.default)(this, (Component.__proto__ || (0, _getPrototypeOf2.default)(Component)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Component, [{
      key: 'setStateAsync',
      value: function setStateAsync(state) {
        var _this2 = this;
  
        return new _promise2.default(function (resolve) {
          return _this2.setState(state, resolve);
        });
      }
    }, {
      key: 'getStatePath',
      value: function getStatePath(path) {
        return _lodash2.default.get(this.state, path);
      }
    }, {
      key: 'setStatePath',
      value: function setStatePath(path, value) {
        var state = _lodash2.default.cloneDeep(this.state);
        _lodash2.default.set(state, path, value);
        return this.setStateAsync(state);
      }
    }, {
      key: 'redirect',
      value: function redirect() {
        var _context$history;
  
        (_context$history = this.context.history).push.apply(_context$history, arguments);
      }
    }]);
    return Component;
  }(_react2.default.Component), _class.contextTypes = {
    history: _react.PropTypes.object.isRequired
  }, _temp);
  exports.default = Component;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _defineProperty2 = __webpack_require__(126);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class, _class2, _temp;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _classnames = __webpack_require__(117);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Link = __webpack_require__(120);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var A = (_dec = (0, _importcss2.default)(__webpack_require__(127)), _dec(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(A, _Component);
  
    function A() {
      (0, _classCallCheck3.default)(this, A);
      return (0, _possibleConstructorReturn3.default)(this, (A.__proto__ || (0, _getPrototypeOf2.default)(A)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(A, [{
      key: 'render',
      value: function render() {
        var _cx;
  
        var _props = this.props,
            bsStyle = _props.bsStyle,
            className = _props.className,
            href = _props.href,
            to = _props.to;
  
        return _react2.default.createElement(_Link2.default, (0, _extends3.default)({}, this.props, {
          styleName: (0, _classnames2.default)((_cx = {}, (0, _defineProperty3.default)(_cx, className, className), (0, _defineProperty3.default)(_cx, 'A', true), (0, _defineProperty3.default)(_cx, 'A_style_' + bsStyle, bsStyle), _cx)),
          href: href || to
        }));
      }
    }]);
    return A;
  }(_react.Component), _class2.defaultProps = {
    bsStyle: 'primary',
    className: null,
    href: null,
    to: null
  }, _class2.propTypes = {
    bsStyle: _react.PropTypes.string,
    className: _react.PropTypes.string,
    href: _react.PropTypes.string,
    to: _react.PropTypes.string
  }, _temp)) || _class);
  exports.default = A;

/***/ },
/* 126 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/defineProperty");

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(128);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../postcss-loader/index.js?pack=default!./A.css", function() {
          content = require("!!./../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../postcss-loader/index.js?pack=default!./A.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".A_A_12q {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.A_A_style_primary_qO6 {\n  color: #108ee9;\n}\n.A_A_style_primary_qO6:hover {\n  color: #49a9ee;\n}\n.A_A_style_secondary_4AX {\n  color: #d9d9d9;\n}\n.A_A_style_secondary_4AX:hover {\n  color: #656565;\n}\n", "", {"version":3,"sources":["/../node_modules/lsk-general/src/General/A/A.css"],"names":[],"mappings":"AAEA;EACE,2BAA2B;EAC3B,gBAAgB;CACjB;AAED;EACE,eAAsB;CAIvB;AAHC;EACE,eAA8B;CAC/B;AAGH;EACE,eAAwB;CAIzB;AAHC;EACE,eAAgC;CACjC","file":"A.css","sourcesContent":["@import url('&General/_vars.css');\n\n.A {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.A_style_primary {\n  color: $color-primary;\n  &:hover {\n    color: $color-primary-hovered;\n  }\n}\n\n.A_style_secondary {\n  color: $color-secondary;\n  &:hover {\n    color: $color-secondary-hovered;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"A": "A_A_12q",
  	"A_style_primary": "A_A_style_primary_qO6",
  	"A_style_secondary": "A_A_style_secondary_4AX"
  };

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(130);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./HomePage.css", function() {
          content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js?pack=default!./HomePage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"HomePage.css","sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _getData = __webpack_require__(132);
  
  var _getData2 = _interopRequireDefault(_getData);
  
  var _reactBootstrap = __webpack_require__(111);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _reactBootstrapTable = __webpack_require__(133);
  
  var _AdminLayout = __webpack_require__(134);
  
  var _AdminLayout2 = _interopRequireDefault(_AdminLayout);
  
  var _reactstrap = __webpack_require__(110);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    action: function action(_ref) {
      var _this = this;
  
      var app = _ref.app,
          ctx = _ref.ctx,
          next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data, categories, games, children;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _getData2.default)(ctx, app);
  
              case 2:
                data = _context.sent;
                categories = _lodash2.default.keyBy(data.categories, 'categoryId');
  
                console.log('data', data);
                games = data.games.map(function (game) {
                  var fullname = ['lastname', 'firstname', 'middlename'].map(function (k) {
                    return game.cert && game.cert[k];
                  }).filter(function (k) {
                    return k;
                  }).join(' ');
                  return {
                    id: game._id,
                    fullname: fullname,
                    category: categories[game.categoryId] && categories[game.categoryId].title,
                    result: game.result && Math.round(game.result.score * 100) + '%',
                    correct: game.result && game.result.correct + '/' + game.result.count
                  };
                });
                children = _react2.default.createElement(
                  _AdminLayout2.default,
                  null,
                  _react2.default.createElement(
                    'h1',
                    null,
                    '\u0418\u0433\u0440\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439'
                  ),
                  _react2.default.createElement(
                    _reactBootstrapTable.BootstrapTable,
                    { data: games, striped: true, hover: true },
                    _react2.default.createElement(
                      _reactBootstrapTable.TableHeaderColumn,
                      { isKey: true, dataField: 'id' },
                      'ID'
                    ),
                    _react2.default.createElement(
                      _reactBootstrapTable.TableHeaderColumn,
                      { dataField: 'fullname' },
                      '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C'
                    ),
                    _react2.default.createElement(
                      _reactBootstrapTable.TableHeaderColumn,
                      { dataField: 'category' },
                      '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F'
                    ),
                    _react2.default.createElement(
                      _reactBootstrapTable.TableHeaderColumn,
                      { dataField: 'result' },
                      'result'
                    ),
                    _react2.default.createElement(
                      _reactBootstrapTable.TableHeaderColumn,
                      { dataField: 'correct' },
                      'correct'
                    )
                  )
                );
  
                // const res = {
                //   _type: 'response',
                //   layout: AdminLayout,
                //   children,
                //   component: children,
                // }
  
                return _context.abrupt('return', {
                  component: _react2.default.createElement(
                    _AdminLayout2.default,
                    null,
                    _react2.default.createElement(
                      _reactBootstrap.Row,
                      null,
                      _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 4 },
                        _react2.default.createElement(
                          _reactstrap.Card,
                          null,
                          _react2.default.createElement(_reactstrap.CardImg, { top: true, width: '100%', src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180', alt: 'Card image cap' }),
                          _react2.default.createElement(
                            _reactstrap.CardBlock,
                            null,
                            _react2.default.createElement(
                              _reactstrap.CardTitle,
                              null,
                              'Card title'
                            ),
                            _react2.default.createElement(
                              _reactstrap.CardSubtitle,
                              null,
                              'Card subtitle'
                            ),
                            _react2.default.createElement(
                              _reactstrap.CardText,
                              null,
                              'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                            ),
                            _react2.default.createElement(
                              _reactBootstrap.Button,
                              null,
                              'Button2'
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 4 },
                        _react2.default.createElement(
                          _reactstrap.Card,
                          null,
                          _react2.default.createElement(_reactstrap.CardImg, { top: true, width: '100%', src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180', alt: 'Card image cap' }),
                          _react2.default.createElement(
                            _reactstrap.CardBlock,
                            null,
                            _react2.default.createElement(
                              _reactstrap.CardTitle,
                              null,
                              'Card title'
                            ),
                            _react2.default.createElement(
                              _reactstrap.CardSubtitle,
                              null,
                              'Card subtitle'
                            ),
                            _react2.default.createElement(
                              _reactstrap.CardText,
                              null,
                              'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                            ),
                            _react2.default.createElement(
                              _reactBootstrap.Button,
                              null,
                              'Button2'
                            ),
                            _react2.default.createElement(
                              _reactstrap.Button,
                              null,
                              'Button'
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactBootstrap.Col,
                        { md: 4 },
                        _react2.default.createElement(
                          _reactstrap.Card,
                          null,
                          _react2.default.createElement(_reactstrap.CardImg, { top: true, width: '100%', src: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180', alt: 'Card image cap' }),
                          _react2.default.createElement(
                            _reactstrap.CardBlock,
                            null,
                            _react2.default.createElement(
                              _reactstrap.CardTitle,
                              null,
                              'Card title'
                            ),
                            _react2.default.createElement(
                              _reactstrap.CardSubtitle,
                              null,
                              'Card subtitle'
                            ),
                            _react2.default.createElement(
                              _reactstrap.CardText,
                              null,
                              'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                            ),
                            _react2.default.createElement(
                              _reactstrap.Button,
                              null,
                              'Button'
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'h1',
                      null,
                      '\u0418\u0433\u0440\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439'
                    ),
                    _react2.default.createElement(
                      _reactBootstrapTable.BootstrapTable,
                      { data: games, striped: true, hover: true },
                      _react2.default.createElement(
                        _reactBootstrapTable.TableHeaderColumn,
                        { isKey: true, dataField: 'id' },
                        'ID'
                      ),
                      _react2.default.createElement(
                        _reactBootstrapTable.TableHeaderColumn,
                        { dataField: 'fullname' },
                        '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C'
                      ),
                      _react2.default.createElement(
                        _reactBootstrapTable.TableHeaderColumn,
                        { dataField: 'category' },
                        '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F'
                      ),
                      _react2.default.createElement(
                        _reactBootstrapTable.TableHeaderColumn,
                        { dataField: 'result' },
                        'result'
                      ),
                      _react2.default.createElement(
                        _reactBootstrapTable.TableHeaderColumn,
                        { dataField: 'correct' },
                        'correct'
                      )
                    )
                  )
                });
  
              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, app) {
      var _app$models, Category, Game, categories, games, data;
  
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!ctx.rootState) ctx.rootState = {};
  
              _app$models = app.models, Category = _app$models.Category, Game = _app$models.Game;
              _context.next = 4;
              return Category.find();
  
            case 4:
              categories = _context.sent;
              _context.next = 7;
              return Game.find();
  
            case 7:
              games = _context.sent;
              data = {
                games: games,
                categories: categories
              };
  
  
              ctx.rootState.pageData = data;
              return _context.abrupt("return", ctx.rootState.pageData);
  
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));
  
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

/***/ },
/* 133 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap-table");

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _dashboard = __webpack_require__(135);
  
  var _dashboard2 = _interopRequireDefault(_dashboard);
  
  var _LayoutWrapper = __webpack_require__(136);
  
  var _LayoutWrapper2 = _interopRequireDefault(_LayoutWrapper);
  
  var _PageWrapper = __webpack_require__(137);
  
  var _PageWrapper2 = _interopRequireDefault(_PageWrapper);
  
  var _PageHeader = __webpack_require__(138);
  
  var _PageHeader2 = _interopRequireDefault(_PageHeader);
  
  var _Breadcrumb = __webpack_require__(139);
  
  var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
  
  var _PageContent = __webpack_require__(141);
  
  var _PageContent2 = _interopRequireDefault(_PageContent);
  
  var _HeaderWrapper = __webpack_require__(142);
  
  var _HeaderWrapper2 = _interopRequireDefault(_HeaderWrapper);
  
  var _Logo = __webpack_require__(143);
  
  var _Logo2 = _interopRequireDefault(_Logo);
  
  var _MiniLogo = __webpack_require__(144);
  
  var _MiniLogo2 = _interopRequireDefault(_MiniLogo);
  
  var _LargeLogo = __webpack_require__(145);
  
  var _LargeLogo2 = _interopRequireDefault(_LargeLogo);
  
  var _Navbar = __webpack_require__(146);
  
  var _Navbar2 = _interopRequireDefault(_Navbar);
  
  var _UserMenu = __webpack_require__(149);
  
  var _UserMenu2 = _interopRequireDefault(_UserMenu);
  
  var _SidebarWrapper = __webpack_require__(154);
  
  var _SidebarWrapper2 = _interopRequireDefault(_SidebarWrapper);
  
  var _UserPanel = __webpack_require__(155);
  
  var _UserPanel2 = _interopRequireDefault(_UserPanel);
  
  var _FooterWrapper = __webpack_require__(157);
  
  var _FooterWrapper2 = _interopRequireDefault(_FooterWrapper);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import 'lsk-admin/Admin/sass/AdminLTE.g.scss';
  
  var AdminLayout = function (_Component) {
    (0, _inherits3.default)(AdminLayout, _Component);
  
    function AdminLayout() {
      (0, _classCallCheck3.default)(this, AdminLayout);
      return (0, _possibleConstructorReturn3.default)(this, (AdminLayout.__proto__ || (0, _getPrototypeOf2.default)(AdminLayout)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AdminLayout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _LayoutWrapper2.default,
          { color: 'black' },
          _react2.default.createElement(
            _HeaderWrapper2.default,
            null,
            _react2.default.createElement(
              _Logo2.default,
              null,
              _react2.default.createElement(
                _MiniLogo2.default,
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'S'
                ),
                'b'
              ),
              _react2.default.createElement(
                _LargeLogo2.default,
                null,
                _react2.default.createElement(
                  'b',
                  null,
                  'Skill'
                ),
                'Branch'
              )
            ),
            _react2.default.createElement(
              _Navbar2.default,
              { controlbar: false },
              _react2.default.createElement(_UserMenu2.default
              // onLinkClick={action('onLinkClick')}
              // onButtonClick={action('onButtonClick')}
              , { image: 'https://remont3.ru/templates/umedia/dleimages/noavatar.png',
                name: 'John Doe',
                title: 'Mr. John Doe',
                description: 'Javascript Full Stack Software Engineer',
                links: [{ key: 1, text: 'Link 1' }, { key: 2, text: 'Link 2' }, { key: 3, text: 'Link 3' }],
                buttons: [{ key: 1, text: 'Profile', align: 'left' }, { key: 2, text: 'Logout' }]
              })
            )
          ),
          _react2.default.createElement(
            _SidebarWrapper2.default,
            null,
            _react2.default.createElement(_UserPanel2.default, {
              image: 'https://remont3.ru/templates/umedia/dleimages/noavatar.png',
              name: 'John Doe'
            })
          ),
          _react2.default.createElement(
            _PageWrapper2.default,
            null,
            _react2.default.createElement(
              _PageHeader2.default,
              {
                title: 'Simple page',
                description: 'description about the simple page'
              },
              _react2.default.createElement(_Breadcrumb2.default, {
                items: [{ key: 1, icon: _react2.default.createElement(_dashboard2.default, null), title: 'Home', url: '/' }, { key: 2, title: 'Pages' }, { key: 3, title: 'Simple' }]
              })
            ),
            _react2.default.createElement(
              _PageContent2.default,
              null,
              this.props.children
            )
          ),
          _react2.default.createElement(
            _FooterWrapper2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'pull-right hidden-xs' },
              _react2.default.createElement(
                'b',
                null,
                'Version'
              ),
              ' 0.0.1'
            ),
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'span',
                null,
                'Copyright \xA9 2016-2017 '
              ),
              _react2.default.createElement(
                'a',
                { href: 'http://github.com/isuvorov/lego-starter-kit' },
                'Lego-starter-kit'
              ),
              '.'
            ),
            ' All rights reserved.'
          )
        );
      }
    }]);
    return AdminLayout;
  }(_react.Component);
  
  exports.default = AdminLayout;

/***/ },
/* 135 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/dashboard");

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(117);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    color: _react.PropTypes.string,
    fixed: _react.PropTypes.bool,
    children: _react.PropTypes.node
  };
  
  var defaultProps = {
    color: 'black',
    fixed: false
  };
  
  var LayoutWrapper = function (_Component) {
    (0, _inherits3.default)(LayoutWrapper, _Component);
  
    function LayoutWrapper() {
      (0, _classCallCheck3.default)(this, LayoutWrapper);
      return (0, _possibleConstructorReturn3.default)(this, (LayoutWrapper.__proto__ || (0, _getPrototypeOf2.default)(LayoutWrapper)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(LayoutWrapper, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          this.props.children,
          _react2.default.createElement('div', { className: 'control-sidebar-bg' })
        );
      }
    }]);
    return LayoutWrapper;
  }(_react.Component);
  
  LayoutWrapper.propTypes = propTypes;
  LayoutWrapper.defaultProps = defaultProps;
  
  exports.default = LayoutWrapper;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  var PageWrapper = function (_Component) {
    (0, _inherits3.default)(PageWrapper, _Component);
  
    function PageWrapper() {
      (0, _classCallCheck3.default)(this, PageWrapper);
      return (0, _possibleConstructorReturn3.default)(this, (PageWrapper.__proto__ || (0, _getPrototypeOf2.default)(PageWrapper)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(PageWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (window.$ && window.$.AdminLTE) {
          // window.$.AdminLTE.layout.fix();
          /* eslint-disable */
          window.$('.layout-boxed > .wrapper').css('overflow', 'hidden');
          var a = window.$('.main-footer').outerHeight() || 0,
              b = window.$('.main-header').outerHeight() + a,
              c = window.$(window).height(),
              d = window.$('.sidebar').height() || 0;
  
          if (window.$('body').hasClass('fixed')) {
            window.$('.content-wrapper, .right-side').css('min-height', c - a);
          } else {
            var e = void 0;
            c >= d ? (window.$('.content-wrapper, .right-side').css('min-height', c - b), e = c - b) : (window.$('.content-wrapper, .right-side').css('min-height', d), e = d);
  
            var f = window.$(window.$.AdminLTE.options.controlSidebarOptions.selector);
            typeof f !== 'undefined' && f.height() > e && window.$('.content-wrapper, .right-side').css('min-height', f.height());
          }
          /* eslint-enable */
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: 'content-wrapper' },
          this.props.children
        );
      }
    }]);
    return PageWrapper;
  }(_react.Component);
  
  PageWrapper.propTypes = propTypes;
  
  exports.default = PageWrapper;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    title: _react.PropTypes.string,
    description: _react.PropTypes.string,
    children: _react.PropTypes.node
  };
  
  function PageHeader(_ref) {
    var title = _ref.title,
        description = _ref.description,
        children = _ref.children;
  
    return _react2.default.createElement(
      'section',
      { className: 'content-header' },
      _react2.default.createElement(
        'h1',
        null,
        title,
        ' ',
        _react2.default.createElement(
          'small',
          null,
          description
        )
      ),
      children
    );
  }
  
  PageHeader.propTypes = propTypes;
  
  exports.default = PageHeader;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _BreadcrumbItem = __webpack_require__(140);
  
  var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    items: _react.PropTypes.array
  };
  
  var Breadcrumb = function (_Component) {
    (0, _inherits3.default)(Breadcrumb, _Component);
  
    function Breadcrumb(props) {
      (0, _classCallCheck3.default)(this, Breadcrumb);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Breadcrumb.__proto__ || (0, _getPrototypeOf2.default)(Breadcrumb)).call(this, props));
  
      _this.renderItems = _this.renderItems.bind(_this);
      return _this;
    }
  
    (0, _createClass3.default)(Breadcrumb, [{
      key: 'renderItems',
      value: function renderItems() {
        return this.props.items.map(function (item) {
          return _react2.default.createElement(_BreadcrumbItem2.default, item);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'ol',
          { className: 'breadcrumb' },
          this.renderItems()
        );
      }
    }]);
    return Breadcrumb;
  }(_react.Component);
  
  Breadcrumb.propTypes = propTypes;
  
  exports.default = Breadcrumb;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = __webpack_require__(117);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    icon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    title: _react.PropTypes.string,
    url: _react.PropTypes.string
  };
  
  function renderIcon(icon) {
    if (typeof icon === 'string') {
      return _react2.default.createElement('i', { className: icon });
    }
    return icon;
  }
  
  function BreadcrumbItem(_ref) {
    var icon = _ref.icon,
        title = _ref.title,
        url = _ref.url;
  
    return _react2.default.createElement(
      'li',
      { className: (0, _classnames2.default)({ active: !url }) },
      url ? _react2.default.createElement(
        'a',
        { href: url },
        icon ? renderIcon(icon) : '',
        ' ',
        title
      ) : title
    );
  }
  
  BreadcrumbItem.propTypes = propTypes;
  
  exports.default = BreadcrumbItem;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  function PageContent(_ref) {
    var children = _ref.children;
  
    return _react2.default.createElement(
      "section",
      { className: "content" },
      children
    );
  }
  
  PageContent.propTypes = propTypes;
  
  exports.default = PageContent;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  function HeaderWrapper(_ref) {
    var children = _ref.children;
  
    return _react2.default.createElement(
      "header",
      { className: "main-header" },
      children
    );
  }
  
  HeaderWrapper.propTypes = propTypes;
  
  exports.default = HeaderWrapper;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
  
  function Logo(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
  
    return _react2.default.createElement(
      'a',
      { className: 'logo', style: { cursor: 'pointer' }, onClick: onClick },
      children
    );
  }
  
  Logo.propTypes = propTypes;
  
  exports.default = Logo;

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
  
  function MiniLogo(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
  
    return _react2.default.createElement(
      "span",
      { className: "logo-mini", onClick: onClick },
      children
    );
  }
  
  MiniLogo.propTypes = propTypes;
  
  exports.default = MiniLogo;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node,
    onClick: _react.PropTypes.func
  };
  
  function LargeLogo(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
  
    return _react2.default.createElement(
      "span",
      { className: "logo-lg", onClick: onClick },
      children
    );
  }
  
  LargeLogo.propTypes = propTypes;
  
  exports.default = LargeLogo;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _bars = __webpack_require__(147);
  
  var _bars2 = _interopRequireDefault(_bars);
  
  var _sliders = __webpack_require__(148);
  
  var _sliders2 = _interopRequireDefault(_sliders);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    controlbarIcon: _react.PropTypes.node,
    children: _react.PropTypes.node
  };
  
  var defaultProps = {
    controlbarIcon: _react2.default.createElement(_sliders2.default, null),
    controlbar: true
  };
  
  function renderIcon(icon) {
    if (typeof icon === 'string') {
      return _react2.default.createElement('i', { className: icon });
    }
    return icon;
  }
  
  function Navbar(_ref) {
    var controlbarIcon = _ref.controlbarIcon,
        children = _ref.children,
        controlbar = _ref.controlbar;
  
    return _react2.default.createElement(
      'nav',
      { className: 'navbar navbar-static-top', role: 'navigation' },
      _react2.default.createElement(
        'a',
        {
          className: 'sidebar-toggle',
          'data-toggle': 'offcanvas',
          role: 'button',
          style: { cursor: 'pointer' }
        },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Toggle navigation'
        ),
        _react2.default.createElement(_bars2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'navbar-custom-menu' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav' },
          children,
          controlbar ? _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { 'data-toggle': 'control-sidebar', style: { cursor: 'pointer' } },
              renderIcon(controlbarIcon)
            )
          ) : null
        )
      )
    );
  }
  
  Navbar.propTypes = propTypes;
  Navbar.defaultProps = defaultProps;
  
  exports.default = Navbar;

/***/ },
/* 147 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/bars");

/***/ },
/* 148 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/sliders");

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _UserMenuBody = __webpack_require__(150);
  
  var _UserMenuBody2 = _interopRequireDefault(_UserMenuBody);
  
  var _UserMenuLink = __webpack_require__(151);
  
  var _UserMenuLink2 = _interopRequireDefault(_UserMenuLink);
  
  var _UserMenuFooter = __webpack_require__(152);
  
  var _UserMenuFooter2 = _interopRequireDefault(_UserMenuFooter);
  
  var _UserMenuButton = __webpack_require__(153);
  
  var _UserMenuButton2 = _interopRequireDefault(_UserMenuButton);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    image: _react.PropTypes.string,
    name: _react.PropTypes.string,
    title: _react.PropTypes.string,
    description: _react.PropTypes.string,
    links: _react.PropTypes.array,
    buttons: _react.PropTypes.array,
    onLinkClick: _react.PropTypes.func,
    onButtonClick: _react.PropTypes.func
  };
  
  var defaultProps = {
    image: '/images/no-avatar.png',
    name: 'Full Name',
    title: 'Title',
    description: 'Description',
    links: [],
    buttons: []
  };
  
  function UserMenu(_ref) {
    var image = _ref.image,
        name = _ref.name,
        title = _ref.title,
        description = _ref.description,
        links = _ref.links,
        buttons = _ref.buttons,
        onLinkClick = _ref.onLinkClick,
        onButtonClick = _ref.onButtonClick;
  
    return _react2.default.createElement(
      'li',
      { className: 'dropdown user user-menu' },
      _react2.default.createElement(
        'a',
        {
          className: 'dropdown-toggle',
          'data-toggle': 'dropdown',
          style: { cursor: 'pointer' }
        },
        _react2.default.createElement('img', { src: image, className: 'user-image', alt: 'User' }),
        _react2.default.createElement(
          'span',
          { className: 'hidden-xs' },
          name
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'dropdown-menu' },
        _react2.default.createElement(
          'li',
          { className: 'user-header' },
          _react2.default.createElement('img', { src: image, className: 'img-circle', alt: 'User' }),
          _react2.default.createElement(
            'p',
            null,
            title,
            _react2.default.createElement(
              'small',
              null,
              description
            )
          )
        ),
        _react2.default.createElement(
          _UserMenuBody2.default,
          null,
          links.map(function (link) {
            return _react2.default.createElement(_UserMenuLink2.default, (0, _extends3.default)({}, link, {
              onClick: function onClick() {
                return onLinkClick(link);
              }
            }));
          })
        ),
        _react2.default.createElement(
          _UserMenuFooter2.default,
          null,
          buttons.map(function (button) {
            return _react2.default.createElement(_UserMenuButton2.default, (0, _extends3.default)({}, button, {
              onClick: function onClick() {
                return onButtonClick(button);
              }
            }));
          })
        )
      )
    );
  }
  
  UserMenu.propTypes = propTypes;
  UserMenu.defaultProps = defaultProps;
  
  exports.default = UserMenu;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  function UserMenuBody(_ref) {
    var children = _ref.children;
  
    return _react2.default.createElement(
      "li",
      { className: "user-body" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        children
      )
    );
  }
  
  UserMenuBody.propTypes = propTypes;
  
  exports.default = UserMenuBody;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    text: _react.PropTypes.string,
    onClick: _react.PropTypes.func
  };
  
  function UserMenuLink(_ref) {
    var text = _ref.text,
        onClick = _ref.onClick;
  
    return _react2.default.createElement(
      'div',
      { className: 'col-xs-4 text-center' },
      _react2.default.createElement(
        'a',
        { style: { cursor: 'pointer' }, onClick: onClick },
        text
      )
    );
  }
  
  UserMenuLink.propTypes = propTypes;
  
  exports.default = UserMenuLink;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  function UserMenuFooter(_ref) {
    var children = _ref.children;
  
    return _react2.default.createElement(
      "li",
      { className: "user-footer" },
      children
    );
  }
  
  UserMenuFooter.propTypes = propTypes;
  
  exports.default = UserMenuFooter;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    text: _react.PropTypes.string,
    align: _react.PropTypes.string,
    onClick: _react.PropTypes.func
  };
  
  var defaultProps = {
    text: 'Button',
    align: 'right'
  };
  
  function UserMenuButton(_ref) {
    var text = _ref.text,
        align = _ref.align,
        onClick = _ref.onClick;
  
    return _react2.default.createElement(
      'div',
      { className: 'pull-' + align },
      _react2.default.createElement(
        'a',
        {
          className: 'btn btn-default btn-flat',
          onClick: onClick
        },
        text
      )
    );
  }
  
  UserMenuButton.propTypes = propTypes;
  UserMenuButton.defaultProps = defaultProps;
  
  exports.default = UserMenuButton;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  function SidebarWrapper(_ref) {
    var children = _ref.children;
  
    return _react2.default.createElement(
      "aside",
      { className: "main-sidebar" },
      _react2.default.createElement(
        "section",
        { className: "sidebar" },
        children
      )
    );
  }
  
  SidebarWrapper.propTypes = propTypes;
  
  exports.default = SidebarWrapper;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _circle = __webpack_require__(156);
  
  var _circle2 = _interopRequireDefault(_circle);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    image: _react.PropTypes.string,
    name: _react.PropTypes.string,
    statusIcon: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    statusText: _react.PropTypes.string
  };
  
  var defaultProps = {
    image: '/images/no-avatar.png',
    name: 'Full Name',
    statusIcon: _react2.default.createElement(
      'i',
      { className: 'text-success' },
      _react2.default.createElement(_circle2.default, null)
    ),
    statusText: 'Online'
  };
  
  function renderIcon(icon) {
    if (typeof icon === 'string') {
      return _react2.default.createElement('i', { className: icon });
    }
    return icon;
  }
  
  function UserPanel(_ref) {
    var image = _ref.image,
        name = _ref.name,
        statusIcon = _ref.statusIcon,
        statusText = _ref.statusText;
  
    return _react2.default.createElement(
      'div',
      { className: 'user-panel' },
      _react2.default.createElement(
        'div',
        { className: 'pull-left image' },
        _react2.default.createElement('img', { src: image, className: 'img-circle', alt: 'User' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'pull-left info' },
        _react2.default.createElement(
          'p',
          null,
          name
        ),
        _react2.default.createElement(
          'a',
          null,
          renderIcon(statusIcon),
          ' ',
          statusText
        )
      )
    );
  }
  
  UserPanel.propTypes = propTypes;
  UserPanel.defaultProps = defaultProps;
  
  exports.default = UserPanel;

/***/ },
/* 156 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/circle");

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var propTypes = {
    children: _react.PropTypes.node
  };
  
  function FooterWrapper(_ref) {
    var children = _ref.children;
  
    return _react2.default.createElement(
      "footer",
      { className: "main-footer" },
      children
    );
  }
  
  FooterWrapper.propTypes = propTypes;
  
  exports.default = FooterWrapper;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _AuthPage = __webpack_require__(159);
  
  var _AuthPage2 = _interopRequireDefault(_AuthPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    children: [{
      path: '/(login|)',
      action: function action(_ref) {
        var appStore = _ref.appStore;
  
        console.log('appStore', appStore.auth);
        return {
          title: 'Cabinet',
          component: _react2.default.createElement(_AuthPage2.default, { type: 'login' })
        };
      }
    }, {
      path: '/recovery',
      action: function action() {
        return {
          title: 'recovery',
          component: _react2.default.createElement(_AuthPage2.default, { type: 'recovery' })
        };
      }
    }, {
      path: '/signup',
      action: function action() {
        return {
          title: 'signup',
          component: _react2.default.createElement(_AuthPage2.default, { type: 'signup' })
        };
      }
    }, {
      path: '/logout',
      action: function action(_ref2) {
        var appStore = _ref2.appStore;
  
        if (true) return {
          component: _react2.default.createElement(
            'div',
            null,
            'Loading'
          )
        };
        appStore.auth.logout();
        //  console.log('appStore', appStore);
        return { redirect: '/' };
        //  return {
        //    title: 'signup',
        //    component: <AuthPage type="signup" />,
        //  };
      }
    }]
  };

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getOwnPropertyDescriptor = __webpack_require__(160);
  
  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _dec2, _class, _desc, _value, _class2;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _coreDecorators = __webpack_require__(161);
  
  var _mobxReact = __webpack_require__(162);
  
  var _sample = __webpack_require__(163);
  
  var _sample2 = _interopRequireDefault(_sample);
  
  var _reactstrap = __webpack_require__(110);
  
  var _reactBootstrap = __webpack_require__(111);
  
  var _envelope = __webpack_require__(164);
  
  var _envelope2 = _interopRequireDefault(_envelope);
  
  var _lock = __webpack_require__(165);
  
  var _lock2 = _interopRequireDefault(_lock);
  
  var _vk = __webpack_require__(166);
  
  var _vk2 = _interopRequireDefault(_vk);
  
  var _odnoklassniki = __webpack_require__(167);
  
  var _odnoklassniki2 = _interopRequireDefault(_odnoklassniki);
  
  var _facebook = __webpack_require__(168);
  
  var _facebook2 = _interopRequireDefault(_facebook);
  
  var _twitter = __webpack_require__(169);
  
  var _twitter2 = _interopRequireDefault(_twitter);
  
  var _twitch = __webpack_require__(170);
  
  var _twitch2 = _interopRequireDefault(_twitch);
  
  var _tumblr = __webpack_require__(171);
  
  var _tumblr2 = _interopRequireDefault(_tumblr);
  
  var _instagram = __webpack_require__(172);
  
  var _instagram2 = _interopRequireDefault(_instagram);
  
  var _refresh = __webpack_require__(112);
  
  var _refresh2 = _interopRequireDefault(_refresh);
  
  var _clear = __webpack_require__(113);
  
  var _clear2 = _interopRequireDefault(_clear);
  
  var _check = __webpack_require__(114);
  
  var _check2 = _interopRequireDefault(_check);
  
  var _Component2 = __webpack_require__(124);
  
  var _Component3 = _interopRequireDefault(_Component2);
  
  var _Slide = __webpack_require__(115);
  
  var _Slide2 = _interopRequireDefault(_Slide);
  
  var _Link = __webpack_require__(120);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _A = __webpack_require__(125);
  
  var _A2 = _interopRequireDefault(_A);
  
  var _Form = __webpack_require__(173);
  
  var _Form2 = _interopRequireDefault(_Form);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  var AuthPage = (_dec = (0, _mobxReact.inject)('app'), _dec2 = (0, _importcss2.default)(__webpack_require__(177)), _dec(_class = _dec2(_class = (_class2 = function (_Component) {
    (0, _inherits3.default)(AuthPage, _Component);
  
    function AuthPage() {
      (0, _classCallCheck3.default)(this, AuthPage);
      return (0, _possibleConstructorReturn3.default)(this, (AuthPage.__proto__ || (0, _getPrototypeOf2.default)(AuthPage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AuthPage, [{
      key: 'handleSubmit',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
          var auth, res, _res, _res2;
  
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  auth = this.props.app.auth;
                  // try {
  
                  if (!(this.props.type === 'login')) {
                    _context.next = 6;
                    break;
                  }
  
                  _context.next = 4;
                  return auth.login(data);
  
                case 4:
                  res = _context.sent;
  
                  this.redirect('/');
  
                case 6:
                  if (!(this.props.type === 'signup')) {
                    _context.next = 11;
                    break;
                  }
  
                  _context.next = 9;
                  return auth.signup(data);
  
                case 9:
                  _res = _context.sent;
  
                  this.redirect('/');
  
                case 11:
                  if (!(this.props.type === 'recovery')) {
                    _context.next = 16;
                    break;
                  }
  
                  _context.next = 14;
                  return auth.recovery(data);
  
                case 14:
                  _res2 = _context.sent;
  
                  global.toast({
                    type: 'success',
                    title: 'Письмо с восстановлением пароля отправлено на почту.'
                  });
  
                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
  
        function handleSubmit(_x) {
          return _ref.apply(this, arguments);
        }
  
        return handleSubmit;
      }()
    }, {
      key: 'render',
      value: function render() {
        var type = this.props.type;
  
        if (!type) type = 'login';
        var status = null;
        var fields = [{
          name: 'login',
          title: 'Email',
          control: {
            placeholder: 'Например, utkin@mail.ru'
          }
        }, {
          name: 'password',
          title: 'Пароль',
          control: {
            type: 'password'
          }
        }, {
          name: 'name',
          title: 'Имя',
          control: {
            placeholder: 'Например, Василий'
          }
        }];
        if (type === 'login') {
          fields = fields.slice(0, 2);
          fields[1].help = _react2.default.createElement(
            'div',
            { style: { textAlign: 'right' } },
            _react2.default.createElement(
              _A2.default,
              { href: '/auth/recovery' },
              '\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?'
            )
          );
        }
        if (type === 'recovery') {
          fields = fields.slice(0, 1);
        }
  
        return _react2.default.createElement(
          _Slide2.default,
          {
            full: true,
            video: 'http://skill-branch.ru/video-background.webm',
            overlay: true
            // overlay='rgba()'
          },
          _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 4, mdOffset: 4 },
                _react2.default.createElement(
                  _reactstrap.Card,
                  null,
                  _react2.default.createElement(
                    _reactstrap.CardBlock,
                    null,
                    _react2.default.createElement(
                      _reactstrap.CardTitle,
                      null,
                      type === 'login' ? '\u0412\u0445\u043E\u0434' : null,
                      type === 'signup' ? '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F' : null,
                      type === 'recovery' ? '\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C' : null
                    ),
                    _react2.default.createElement(_Form2.default, {
                      fields: fields,
                      validators: {
                        login: {
                          presence: {
                            message: 'Поле не должно быть пустым.'
                          },
                          email: {
                            message: 'Введите корректный адрес почты.'
                          }
                        },
                        password: {
                          presence: {
                            message: 'Поле не должно быть пустым'
                          },
                          length: {
                            minimum: 6,
                            message: 'Пароль должен быть больше 6 символов.'
                          }
                        },
                        name: {
                          presence: {
                            message: 'Поле не должно быть пустым'
                          }
                        }
                      },
                      onSubmit: this.handleSubmit
                      // onError={this.handleSubmit}
                      , submitButton: _react2.default.createElement(
                        _reactBootstrap.Button,
                        {
                          type: 'submit',
                          bsStyle: 'primary',
                          disabled: !!status,
                          style: {
                            position: 'relative'
                          }
                        },
                        _react2.default.createElement(
                          'span',
                          { style: { visibility: !status ? 'visible' : 'hidden' } },
                          type === 'login' ? '\u0412\u043E\u0439\u0442\u0438' : null,
                          type === 'signup' ? '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442' : null,
                          type === 'recovery' ? '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C' : null
                        ),
                        status ? _react2.default.createElement(
                          'div',
                          { styleName: 'button-icon-status' },
                          status === 'wait' ? _react2.default.createElement(_refresh2.default, null) : null,
                          status === 'ok' ? _react2.default.createElement(_check2.default, null) : null,
                          status === 'error' ? _react2.default.createElement(_clear2.default, null) : null
                        ) : null
                      )
                    })
                  )
                ),
                type === 'signup' ? _react2.default.createElement(
                  _reactstrap.Card,
                  null,
                  _react2.default.createElement(
                    _reactstrap.CardBlock,
                    { className: 'text-xs-center', style: { textAlign: 'center' } },
                    _react2.default.createElement(
                      _reactstrap.CardText,
                      null,
                      '\u0423 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        componentClass: _Link2.default,
                        href: '/auth',
                        block: true
                      },
                      '\u0412\u043E\u0439\u0442\u0438'
                    )
                  )
                ) : null,
                type !== 'signup' ? _react2.default.createElement(
                  _reactstrap.Card,
                  null,
                  _react2.default.createElement(
                    _reactstrap.CardBlock,
                    { className: 'text-xs-center', style: { textAlign: 'center' } },
                    _react2.default.createElement(
                      _reactstrap.CardText,
                      null,
                      '\u0412\u044B \u0435\u0448\u0435 \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B?'
                    ),
                    _react2.default.createElement(
                      _reactBootstrap.Button,
                      {
                        componentClass: _Link2.default,
                        href: '/auth/signup',
                        block: true
                      },
                      '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442'
                    )
                  )
                ) : null
              )
            )
          )
        );
      }
    }]);
    return AuthPage;
  }(_Component3.default), (_applyDecoratedDescriptor(_class2.prototype, 'handleSubmit', [_coreDecorators.autobind], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSubmit'), _class2.prototype)), _class2)) || _class) || _class);
  exports.default = AuthPage;

/***/ },
/* 160 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ },
/* 161 */
/***/ function(module, exports) {

  module.exports = require("core-decorators");

/***/ },
/* 162 */
/***/ function(module, exports) {

  module.exports = require("mobx-react");

/***/ },
/* 163 */
/***/ function(module, exports) {

  module.exports = require("lodash/sample");

/***/ },
/* 164 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/envelope");

/***/ },
/* 165 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/lock");

/***/ },
/* 166 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/vk");

/***/ },
/* 167 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/odnoklassniki");

/***/ },
/* 168 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/facebook");

/***/ },
/* 169 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/twitter");

/***/ },
/* 170 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/twitch");

/***/ },
/* 171 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/tumblr");

/***/ },
/* 172 */
/***/ function(module, exports) {

  module.exports = require("react-icons/lib/fa/instagram");

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getOwnPropertyDescriptor = __webpack_require__(160);
  
  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
  
  var _defineProperty2 = __webpack_require__(126);
  
  var _defineProperty3 = _interopRequireDefault(_defineProperty2);
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _slicedToArray2 = __webpack_require__(51);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _extends2 = __webpack_require__(22);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _class, _desc, _value, _class2, _class3, _temp;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _coreDecorators = __webpack_require__(161);
  
  var _importcss = __webpack_require__(88);
  
  var _importcss2 = _interopRequireDefault(_importcss);
  
  var _classnames = __webpack_require__(117);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _validate = __webpack_require__(174);
  
  var _validate2 = _interopRequireDefault(_validate);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _reactBootstrap = __webpack_require__(111);
  
  var _Component2 = __webpack_require__(124);
  
  var _Component3 = _interopRequireDefault(_Component2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  // eslint-disable-line
  var Form = (_dec = (0, _importcss2.default)(__webpack_require__(175)), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
    (0, _inherits3.default)(Form, _Component);
  
    function Form(props) {
      (0, _classCallCheck3.default)(this, Form);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));
  
      var data = props.data;
      if (!data) {
        data = {};
        _this.getFields(props.fields).forEach(function (field) {
          data[field.name] = field.value;
        });
      }
      _this.state = {
        data: data,
        errors: props.errors || {} };
      return _this;
    }
  
    (0, _createClass3.default)(Form, [{
      key: 'getFields',
      value: function getFields(fields) {
        if (!fields) fields = this.props.fields; // eslint-disable-line
        return fields.map(function (field) {
          if (typeof field === 'string') {
            return {
              name: field,
              title: field
            };
          }
          return (0, _extends3.default)({
            name: field.name || field.path
          }, field);
        });
      }
    }, {
      key: 'getFieldNames',
      value: function getFieldNames() {
        this.getFields();
      }
    }, {
      key: 'getError',
      value: function getError(name) {
        var errors = this.state.errors;
  
        return errors && errors[name] || {};
      }
    }, {
      key: 'getData',
      value: function getData() {
        return this.state.data;
      }
    }, {
      key: 'getValidatorResults',
      value: function getValidatorResults() {
        var validators = this.props.validators;
  
        return (0, _validate2.default)(this.state.data, validators);
      }
    }, {
      key: 'validate',
      value: function validate() {
        var results = this.getValidatorResults();
        var errors = {};
        for (var item in results) {
          var re = new RegExp('^' + item + ' (.+)$', 'i');
  
          var _re$exec = re.exec(results[item][0]),
              _re$exec2 = (0, _slicedToArray3.default)(_re$exec, 2),
              message = _re$exec2[1];
  
          errors[item] = {
            state: 'error',
            message: message
          };
        }
        if (_lodash2.default.size(errors) > 0) {
          this.onError(errors);
          return false;
        }
        return true;
      }
    }, {
      key: 'onError',
      value: function onError(errors) {
        var onError = this.props.onError;
  
        this.setState({ errors: errors });
        if (onError) onError(errors);
      }
    }, {
      key: 'onSubmit',
      value: function onSubmit(data) {
        var onSubmit = this.props.onSubmit;
  
        this.setState({ errors: {} });
        if (onSubmit) onSubmit(this.getData());
      }
    }, {
      key: 'handleSubmit',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(e) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  if (this.validate()) {
                    this.onSubmit();
                  }
  
                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
  
        function handleSubmit(_x) {
          return _ref.apply(this, arguments);
        }
  
        return handleSubmit;
      }()
    }, {
      key: 'handleChangeField',
      value: function handleChangeField(path) {
        var _this2 = this;
  
        var onChange = this.props.onChange;
  
        return function () {
          var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(e) {
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.setStatePath(path, e.target.value);
  
                  case 2:
                    if (onChange) {
                      onChange(_this2.getData());
                    }
  
                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          }));
  
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }();
      }
    }, {
      key: 'renderFieldInner',
      value: function renderFieldInner(item) {
        var control = _react2.default.createElement(_reactBootstrap.FormControl, (0, _extends3.default)({
          type: 'text',
          value: this.getStatePath('data.' + item.name) || '',
          onChange: this.handleChangeField('data.' + item.name)
        }, item.control));
        return _react2.default.createElement(
          'div',
          null,
          item.icon ? _react2.default.createElement(
            _reactBootstrap.InputGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.InputGroup.Addon,
              null,
              item.icon
            ),
            control
          ) : null,
          !item.icon ? control : null,
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          item.help ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            item.help
          ) : null,
          this.getError(item.name).state ? _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            this.getError(item.name).message
          ) : null
        );
      }
    }, {
      key: 'renderField',
      value: function renderField(item, i) {
        var horizontal = this.props.horizontal;
  
        if (horizontal) {
          return _react2.default.createElement(
            _reactBootstrap.FormGroup,
            {
              key: i,
              controlId: item.name,
              validationState: this.getError(item.name).state
            },
            _react2.default.createElement(
              _reactBootstrap.Col,
              { componentClass: _reactBootstrap.ControlLabel, sm: 2 },
              item.title
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 10 },
              this.renderFieldInner(item)
            )
          );
        }
        return _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            key: i,
            controlId: item.name,
            validationState: this.getError(item.name).state
          },
          item.title ? _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            item.title
          ) : null,
          this.renderFieldInner(item)
        );
      }
    }, {
      key: 'renderFields',
      value: function renderFields(fields) {
        return fields.map(this.renderField);
      }
    }, {
      key: 'renderSubmitButton',
      value: function renderSubmitButton() {
        var _props = this.props,
            submitButton = _props.submitButton,
            align = _props.align,
            bsStyle = _props.bsStyle;
  
        var style = (0, _classnames2.default)((0, _defineProperty3.default)({}, 'align-' + align, align));
        if (typeof submitButton === 'string') {
          return _react2.default.createElement(
            'div',
            { styleName: style },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { type: 'submit', bsStyle: bsStyle },
              submitButton
            )
          );
        }
        return _react2.default.createElement(
          'div',
          { styleName: style },
          submitButton
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            form = _props2.form,
            horizontal = _props2.horizontal,
            fields = _props2.fields;
  
        if (form) {
          return _react2.default.createElement(
            'div',
            null,
            this.renderFields(this.getFields(fields)),
            this.renderSubmitButton()
          );
        }
        return _react2.default.createElement(
          _reactBootstrap.Form,
          { horizontal: horizontal, onSubmit: this.handleSubmit },
          this.renderFields(this.getFields(fields)),
          this.renderSubmitButton()
        );
      }
    }]);
    return Form;
  }(_Component3.default), _class3.defaultProps = {
    data: null,
    errors: null,
    fields: null,
    validators: null,
    onError: null,
    onSubmit: null,
    onChange: null,
    horizontal: false,
    submitButton: 'Отправить',
    form: false,
    align: 'center',
    bsStyle: 'primary'
  }, _class3.propTypes = {
    data: _react.PropTypes.object,
    errors: _react.PropTypes.object,
    fields: _react.PropTypes.array,
    validators: _react.PropTypes.object,
    onSubmit: _react.PropTypes.func,
    onError: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    horizontal: _react.PropTypes.bool,
    submitButton: _react.PropTypes.any,
    form: _react.PropTypes.bool,
    bsStyle: _react.PropTypes.string,
    align: _react.PropTypes.oneOf(['left', 'right', 'center'])
  }, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'getData', [_coreDecorators.autobind], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getData'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleSubmit', [_coreDecorators.autobind], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleSubmit'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'handleChangeField', [_coreDecorators.autobind], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleChangeField'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'renderField', [_coreDecorators.autobind], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'renderField'), _class2.prototype)), _class2)) || _class);
  exports.default = Form;

/***/ },
/* 174 */
/***/ function(module, exports) {

  module.exports = require("validate.js");

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(176);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../postcss-loader/index.js?pack=default!./Form.css", function() {
          content = require("!!./../../../../css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../postcss-loader/index.js?pack=default!./Form.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".Form_align-right_2pl {\n  text-align: right;\n}\n\n.Form_align-left_2jX {\n  text-align: left;\n}\n\n.Form_align-center_2ch {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/../node_modules/lsk-general/src/General/Form/Form.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;CACnB;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;CACpB","file":"Form.css","sourcesContent":[".align-right {\n  text-align: right;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-center {\n  text-align: center;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"align-right": "Form_align-right_2pl",
  	"align-left": "Form_align-left_2jX",
  	"align-center": "Form_align-center_2ch"
  };

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(178);
      var insertCss = __webpack_require__(95);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../node_modules/postcss-loader/index.js?pack=default!./AuthPage.css", function() {
          content = require("!!./../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../../../node_modules/postcss-loader/index.js?pack=default!./AuthPage.css");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".input-group-addon svg {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n}\n.AuthPage_recovery-password_2nP {\n  float: right;\n  font-size: .85em;\n  padding: 5px 0;\n}\n.AuthPage_button-icon-status_7VS {\n  width: 54px;\n  height: 25px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1.3em;\n  -webkit-animation-name: AuthPage_flipInX_5hr;\n       -o-animation-name: AuthPage_flipInX_5hr;\n          animation-name: AuthPage_flipInX_5hr;\n  -webkit-animation-duration: .5s;\n       -o-animation-duration: .5s;\n          animation-duration: .5s;\n}\n.AuthPage_button-icon-status_7VS svg {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.AuthPage_button-icon-status_7VS.AuthPage_spin_KfA svg {\n  -webkit-animation:AuthPage_spin_KfA .8s linear infinite;\n       -o-animation:AuthPage_spin_KfA .8s linear infinite;\n          animation:AuthPage_spin_KfA .8s linear infinite;\n}\n.AuthPage_btn-social_12U,\n.AuthPage_btn-social_12U svg {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.AuthPage_btn-social_12U {\n  padding: 11.2px 14.4px;\n  padding: .7rem .9rem;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n}\n.AuthPage_btn-social_12U.AuthPage_is-twitch_b9v {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-twitch_b9v:hover {\n    background-color: #6441a4;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n.AuthPage_btn-social_12U.AuthPage_is-twitter_ygu {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-twitter_ygu:hover {\n    background-color: #41abe0;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n.AuthPage_btn-social_12U.AuthPage_is-odnoklassniki_1Z3 {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-odnoklassniki_1Z3:hover {\n    background-color: #ee8208;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n.AuthPage_btn-social_12U.AuthPage_is-vkontakte_116 {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-vkontakte_116:hover {\n    background-color: #507299;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n.AuthPage_btn-social_12U.AuthPage_is-tumblr_30s {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-tumblr_30s:hover {\n    background-color: #36465d;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n.AuthPage_btn-social_12U.AuthPage_is-instagram_QUj {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-instagram_QUj:hover {\n    background-color: #262626;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n.AuthPage_btn-social_12U.AuthPage_is-facebook_1_r {\n    background-color: transparent;\n    border: none;\n    -webkit-transition: .2s ease-in-out;\n    -o-transition: .2s ease-in-out;\n    transition: .2s ease-in-out;\n}\n.AuthPage_btn-social_12U.AuthPage_is-facebook_1_r:hover {\n    background-color: #4867aa;\n    border: none;\n    color: white;\n    z-index: inherit;\n}\n@-webkit-keyframes AuthPage_spin_KfA { 100% { -webkit-transform:rotate(360deg); transform:rotate(360deg); } }\n@-o-keyframes AuthPage_spin_KfA { 100% { -o-transform:rotate(360deg); transform:rotate(360deg); } }\n@keyframes AuthPage_spin_KfA { 100% { -webkit-transform:rotate(360deg); -o-transform:rotate(360deg); transform:rotate(360deg); } }\n@-webkit-keyframes AuthPage_flipInX_5hr {\n    from {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n        -webkit-animation-timing-function: ease-in;\n                animation-timing-function: ease-in;\n        opacity: 0;\n    }\n    40% {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n        -webkit-animation-timing-function: ease-in;\n                animation-timing-function: ease-in;\n    }\n    60% {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n        opacity: 1;\n    }\n    80% {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n    to {\n        -webkit-transform: perspective(400px);\n                transform: perspective(400px);\n    }\n}\n@-o-keyframes AuthPage_flipInX_5hr {\n    from {\n        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n        -o-animation-timing-function: ease-in;\n           animation-timing-function: ease-in;\n        opacity: 0;\n    }\n    40% {\n        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n        -o-animation-timing-function: ease-in;\n           animation-timing-function: ease-in;\n    }\n    60% {\n        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n        opacity: 1;\n    }\n    80% {\n        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n    to {\n        transform: perspective(400px);\n    }\n}\n@keyframes AuthPage_flipInX_5hr {\n    from {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n        -webkit-animation-timing-function: ease-in;\n             -o-animation-timing-function: ease-in;\n                animation-timing-function: ease-in;\n        opacity: 0;\n    }\n    40% {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n        -webkit-animation-timing-function: ease-in;\n             -o-animation-timing-function: ease-in;\n                animation-timing-function: ease-in;\n    }\n    60% {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n        opacity: 1;\n    }\n    80% {\n        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n                transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n    to {\n        -webkit-transform: perspective(400px);\n                transform: perspective(400px);\n    }\n}\n", "", {"version":3,"sources":["/./App/routes/auth/AuthPage/AuthPage.css","/./App/routes/auth/AuthPage/<no source>"],"names":[],"mappings":"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","file":"AuthPage.css","sourcesContent":["$twitch: #6441a4;\n$vkontakte: #507299;\n$odnoklassniki: #ee8208;\n$tumblr: #36465d;\n$twitter: #41abe0;\n$instagram: #262626;\n$facebook: #4867aa;\n\n:global .input-group-addon svg {\n    display: flex;\n}\n\n.recovery-password {\n  float: right;\n  font-size: .85em;\n  padding: 5px 0;\n}\n\n.button-icon-status {\n  width: 54px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.3em;\n  animation-name: flipInX;\n  animation-duration: .5s;\n}\n.button-icon-status svg {\n  display: flex;\n}\n.button-icon-status.spin svg {\n  animation:spin .8s linear infinite;\n}\n.btn-social,\n.btn-social svg {\n  display: flex;\n}\n\n.btn-social {\n  padding: .7rem .9rem;\n  font-size: 1.2rem;\n}\n\n@define-mixin socialButtons $network {\n  .btn-social.is-$(network) {\n    background-color: transparent;\n    border: none;\n    transition: .2s ease-in-out;\n  }\n  .btn-social.is-$(network):hover {\n    background-color: $($network);\n    border: none;\n    color: white;\n    z-index: inherit;\n  }\n}\n\n@mixin socialButtons twitch {}\n@mixin socialButtons twitter {}\n@mixin socialButtons odnoklassniki {}\n@mixin socialButtons vkontakte {}\n@mixin socialButtons tumblr {}\n@mixin socialButtons instagram {}\n@mixin socialButtons facebook {}\n\n@keyframes spin { 100% { transform:rotate(360deg); } }\n",null],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"recovery-password": "AuthPage_recovery-password_2nP",
  	"button-icon-status": "AuthPage_button-icon-status_7VS",
  	"flipInX": "AuthPage_flipInX_5hr",
  	"spin": "AuthPage_spin_KfA",
  	"btn-social": "AuthPage_btn-social_12U",
  	"is-twitch": "AuthPage_is-twitch_b9v",
  	"is-twitter": "AuthPage_is-twitter_ygu",
  	"is-odnoklassniki": "AuthPage_is-odnoklassniki_1Z3",
  	"is-vkontakte": "AuthPage_is-vkontakte_116",
  	"is-tumblr": "AuthPage_is-tumblr_30s",
  	"is-instagram": "AuthPage_is-instagram_QUj",
  	"is-facebook": "AuthPage_is-facebook_1_r"
  };

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _ProfilePage = __webpack_require__(180);
  
  var _ProfilePage2 = _interopRequireDefault(_ProfilePage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
    // path: '/',
    children: [{
      path: '/',
      action: function action() {
        return {
          title: 'Cabinet',
          component: _react2.default.createElement(_ProfilePage2.default, null)
        };
      }
    }, {
      path: '/profile',
      action: function action() {
        return {
          title: 'profile',
          component: _react2.default.createElement(_ProfilePage2.default, null)
        };
      }
    }, {
      path: '*',
      action: function action() {
        throw 'Not found in cabinet';
      }
    }],
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                route = _context.sent;
                return _context.abrupt('return', route);
  
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _stringify = __webpack_require__(49);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _dec, _dec2, _class;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _coreDecorators = __webpack_require__(161);
  
  var _mobxReact = __webpack_require__(162);
  
  var _reactBootstrap = __webpack_require__(111);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // @importcss(require('./HomePage.css'))
  var ProfilePage = (_dec = (0, _mobxReact.inject)('app'), _dec2 = (0, _mobxReact.inject)('user'), _dec(_class = _dec2(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    (0, _inherits3.default)(ProfilePage, _Component);
  
    function ProfilePage() {
      (0, _classCallCheck3.default)(this, ProfilePage);
      return (0, _possibleConstructorReturn3.default)(this, (ProfilePage.__proto__ || (0, _getPrototypeOf2.default)(ProfilePage)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ProfilePage, [{
      key: 'render',
      //eslint-disable-line
  
      value: function render() {
        var user = this.props.user;
  
        return _react2.default.createElement(
          _reactBootstrap.Grid,
          null,
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 4, sm: 6, xs: 12 },
              (0, _stringify2.default)(user),
              (0, _stringify2.default)(this.props.app.auth.user)
            )
          )
        );
      }
    }]);
    return ProfilePage;
  }(_react.Component)) || _class) || _class) || _class);
  exports.default = ProfilePage;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _defineProperty = __webpack_require__(182);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _desc, _value, _class, _descriptor;
  
  var _mobx = __webpack_require__(183);
  
  var _AuthStore = __webpack_require__(184);
  
  var _AuthStore2 = _interopRequireDefault(_AuthStore);
  
  var _api = __webpack_require__(187);
  
  var _api2 = _interopRequireDefault(_api);
  
  var _reactCookie = __webpack_require__(185);
  
  var _reactCookie2 = _interopRequireDefault(_reactCookie);
  
  var _client = __webpack_require__(121);
  
  var _client2 = _interopRequireDefault(_client);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  // TODO fix
  
  var AppStore = (_class = function () {
    (0, _createClass3.default)(AppStore, [{
      key: 'update',
      value: function update() {
        this.updateCount += 1;
        // console.log('this.updateCount', this.updateCount);
      }
    }]);
  
    function AppStore(rootState, req) {
      (0, _classCallCheck3.default)(this, AppStore);
      this.user = null;
      this.api = null;
      this.config = _client2.default;
  
      _initDefineProp(this, 'updateCount', _descriptor, this);
  
      this.api = new _api2.default({ base: '/api/v1' });
      this.auth = new _AuthStore2.default(this);
      // console.log({req, rootState});
  
      if (true) {
        if (!req._errJwt && req.user && req.user._id) {
          this.auth.init({
            token: req.token,
            user: req.user
          });
        }
      } else {
        this.auth.init({
          token: _reactCookie2.default.load('token'),
          user: rootState.user
        });
      }
    }
  
    (0, _createClass3.default)(AppStore, [{
      key: 'provide',
      value: function provide() {
        return {
          app: this,
          auth: this.auth,
          user: this.auth && this.auth.user,
          api: this.api
        };
      }
    }]);
    return AppStore;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'updateCount', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  })), _class);
  exports.default = AppStore;

/***/ },
/* 182 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/define-property");

/***/ },
/* 183 */
/***/ function(module, exports) {

  module.exports = require("mobx");

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _defineProperty = __webpack_require__(182);
  
  var _defineProperty2 = _interopRequireDefault(_defineProperty);
  
  var _getOwnPropertyDescriptor = __webpack_require__(160);
  
  var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;
  
  var _mobx = __webpack_require__(183);
  
  var _reactCookie = __webpack_require__(185);
  
  var _reactCookie2 = _interopRequireDefault(_reactCookie);
  
  var _coreDecorators = __webpack_require__(161);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  var _User = __webpack_require__(186);
  
  var _User2 = _interopRequireDefault(_User);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    (0, _defineProperty2.default)(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }
  
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
  
    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }
  
    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  
    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }
  
    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }
  
    return desc;
  }
  
  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }
  
  var AuthStore = (_class = function () {
    function AuthStore(app) {
      (0, _classCallCheck3.default)(this, AuthStore);
  
      _initDefineProp(this, 'token', _descriptor, this);
  
      _initDefineProp(this, 'user', _descriptor2, this);
  
      _initDefineProp(this, 'isAuth', _descriptor3, this);
  
      this.promise = null;
  
      this.app = app;
    }
  
    (0, _createClass3.default)(AuthStore, [{
      key: 'init',
      value: function init(data) {
        // console.log('AuthStore.init', data);
        if (data.token === 'undefined' || !data.token || !data.user || !data.user._id) {
          this.logout();
          return null;
        }
        this.save(data);
        // const token = cookie.load('authToken')
        // if (token) {
        //   this.promise = this.login({token}).catch(err => {
        //     console.log('AuthStore.init', err);
        //     return {}
        //   })
        // } else {
        //   this.promise = Promise.resolve()
        // }
        // return {}
      }
    }, {
      key: 'isAuthAsync',
      value: function isAuthAsync() {
        var _this = this;
  
        return this.promise.then(function () {
          return !!_this.isAuth;
        }).catch(function () {
          return !!_this.isAuth;
        });
      }
    }, {
      key: 'signup',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(data) {
          var res;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.promise = this.app.api.authSignup(data);
                  _context.next = 3;
                  return this.promise;
  
                case 3:
                  res = _context.sent;
                  _context.next = 6;
                  return this.save(res);
  
                case 6:
                  return _context.abrupt('return', res);
  
                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
  
        function signup(_x) {
          return _ref.apply(this, arguments);
        }
  
        return signup;
      }()
    }, {
      key: 'login',
      value: function () {
        var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
          var res;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.promise = this.app.api.authLogin(data);
                  _context2.next = 3;
                  return this.promise;
  
                case 3:
                  res = _context2.sent;
                  _context2.next = 6;
                  return this.save(res);
  
                case 6:
                  return _context2.abrupt('return', res);
  
                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
  
        function login(_x2) {
          return _ref2.apply(this, arguments);
        }
  
        return login;
      }()
    }, {
      key: 'recovery',
      value: function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(data) {
          var res;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  this.promise = this.app.api.authRecovery(data);
                  _context3.next = 3;
                  return this.promise;
  
                case 3:
                  res = _context3.sent;
                  return _context3.abrupt('return', res);
  
                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
  
        function recovery(_x3) {
          return _ref3.apply(this, arguments);
        }
  
        return recovery;
      }()
    }, {
      key: 'logout',
      value: function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _reactCookie2.default.remove('token');
                  // console.log('logout', cookie.get('token'));
                  this.app.api.setAuthToken(null);
                  this.user = null;
                  this.token = null;
                  this.isAuth = null;
                  this.app.update();
  
                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));
  
        function logout() {
          return _ref4.apply(this, arguments);
        }
  
        return logout;
      }()
    }, {
      key: 'save',
      value: function () {
        var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(data) {
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(data.token === 'undefined' || !data.token || !data.user || !data.user._id)) {
                    _context5.next = 3;
                    break;
                  }
  
                  this.logout();
                  return _context5.abrupt('return', null);
  
                case 3:
                  _reactCookie2.default.save('token', data.token);
                  this.app.api.setAuthToken(data.token);
  
                  if (this.user) {
                    this.user.set(data.user);
                  } else {
                    this.user = new _User2.default(data.user);
                  }
  
                  this.token = data.token;
                  this.isAuth = true;
                  this.app.update();
  
                case 9:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));
  
        function save(_x4) {
          return _ref5.apply(this, arguments);
        }
  
        return save;
      }()
    }]);
    return AuthStore;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'token', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'user', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'isAuth', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, 'init', [_coreDecorators.autobind], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'init'), _class.prototype)), _class);
  exports.default = AuthStore;

/***/ },
/* 185 */
/***/ function(module, exports) {

  module.exports = require("react-cookie");

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import { observable, action } from 'mobx';
  
  var User = function () {
    function User(data) {
      (0, _classCallCheck3.default)(this, User);
  
      this.set(data);
    }
  
    (0, _createClass3.default)(User, [{
      key: "set",
      value: function set() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
        (0, _assign2.default)(this, data);
      }
    }, {
      key: "getProfileLink",
      value: function getProfileLink() {
        return "/user/" + this._id;
      }
    }]);
    return User;
  }();
  
  exports.default = User;

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _stringify = __webpack_require__(49);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _api = __webpack_require__(188);
  
  var _api2 = _interopRequireDefault(_api);
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ApiClient = function (_ApiClientBase) {
    (0, _inherits3.default)(ApiClient, _ApiClientBase);
  
    function ApiClient() {
      (0, _classCallCheck3.default)(this, ApiClient);
      return (0, _possibleConstructorReturn3.default)(this, (ApiClient.__proto__ || (0, _getPrototypeOf2.default)(ApiClient)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(ApiClient, [{
      key: 'throwError',
      value: function throwError(_ref) {
        var err = _ref.err;
  
        console.log('throwError', err);
        var message = err && err.message || err;
        var error = new Error(_lodash2.default.isPlainObject(message) ? (0, _stringify2.default)(message) : message);
  
        var title = err && err.statusText || 'Ошибка';
        var text = err && err.data && err.data.message || error.message;
  
        global.toast({
          title: title,
          text: text
        });
  
        // throw error;
      }
  
      // async authSignup(params) {
      //   const body = {
      //     first_name: params.name,
      //     email: params.email,
      //     password: params.password,
      //   };
      //   const res = await this.fetch('/users/registration/post/', {
      //     method: 'POST',
      //     body,
      //   });
      //   return this.authLogin({
      //     token: res.token,
      //   });
      // }
      //
      // async authLogin(params) {
      //   let token;
      //   if (!params.token) {
      //     const body = {
      //       username: params.email,
      //       password: params.password,
      //     };
      //     // console.log({body});
      //     const data = await this.fetch('/users/token/post/', {
      //       method: 'POST',
      //       body,
      //     });
      //     token = data.token;
      //   } else {
      //     token = params.token;
      //   }
      //
      //   // const data2 = await this.fetch('/users/login/post/', {
      //   //   method: 'POST',
      //   //   headers: {
      //   //     Authorization:`Token ${token}`
      //   //   },
      //   //   body,
      //   // })
      //   // console.log({data2});
      //   //
      //   const user = await this.fetch('/users/me/', {
      //     method: 'GET',
      //     headers: {
      //       Authorization: `Token ${token}`,
      //     },
      //   });
      //   return {
      //     token,
      //     user,
      //   };
      //   // console.log({data2});
      //
      //   // data.token =
      //   // const res = await this.fetch('/users/registration/post/', {
      //   //   method: 'POST',
      //   //   body,
      //   // })
      //   // const json = await res.json()
      //   // return json
      // }
  
    }]);
    return ApiClient;
  }(_api2.default);
  
  exports.default = ApiClient;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _assign = __webpack_require__(27);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _regenerator = __webpack_require__(14);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _stringify = __webpack_require__(49);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _asyncToGenerator2 = __webpack_require__(15);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _promise = __webpack_require__(3);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _keys = __webpack_require__(28);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  exports.trim = trim;
  
  var _lodash = __webpack_require__(10);
  
  var _lodash2 = _interopRequireDefault(_lodash);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function trim(initialStr) {
    var begin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var symbol = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  
    if (initialStr == null) return initialStr;
    var str = initialStr;
    if (end && str[str.length - 1] === symbol) {
      str = str.substr(0, str.length - 1);
    }
    if (begin && str[0] === symbol) {
      str = str.substr(1);
    }
    if (str !== initialStr) return trim(str, begin, end, symbol);
    return str;
  } // import fetch from 'node-fetch';
  
  
  function queryParams(params) {
    return (0, _keys2.default)(params).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&');
  }
  
  var ApiClient = function () {
    function ApiClient(params) {
      (0, _classCallCheck3.default)(this, ApiClient);
  
      this.base = trim(params.base, false);
      this.prefix = trim(params.prefix);
      if (params.auth) {
        this.setAuth(params.auth);
      }
    }
  
    (0, _createClass3.default)(ApiClient, [{
      key: 'setAuthToken',
      value: function setAuthToken(authToken) {
        this.authToken = authToken;
      }
    }, {
      key: 'setAuth',
      value: function setAuth(authParams) {
        this.authParams = authParams;
        if (this.authParams.token) {
          this.authToken = this.authParams.token;
        }
      }
    }, {
      key: 'authFetch',
      value: function authFetch() {
        if (!this.authToken) {
          return _promise2.default.reject('!this.authToken');
        }
        return this.fetch.apply(this, arguments);
      }
    }, {
      key: 'authLogin',
      value: function authLogin(data) {
        return this.fetch('auth/login', {
          method: 'POST',
          body: data
        });
      }
    }, {
      key: 'authSignup',
      value: function authSignup(data) {
        return this.fetch('auth/signup', {
          method: 'POST',
          body: data
        });
      }
    }, {
      key: 'authValidate',
      value: function authValidate(data) {
        return this.fetch('auth/validate', {
          method: 'GET',
          body: data
        });
      }
    }, {
      key: 'authRecovery',
      value: function authRecovery(data) {
        return this.fetch('auth/recovery', {
          method: 'POST',
          body: data
        });
      }
    }, {
      key: 'getUser',
      value: function getUser(id) {
        return this.fetch('user/' + id, {
          method: 'GET'
        });
      }
  
      // onError(err) {
      //   console.log('pack.err', err)
      //   throw err
      // }
  
    }, {
      key: 'throwError',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
          var err = _ref2.err;
          var message;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log('throwError', err);
                  message = err && err.message || err;
                  throw new Error(_lodash2.default.isPlainObject(message) ? (0, _stringify2.default)(message) : message);
  
                case 3:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
  
        function throwError(_x4) {
          return _ref.apply(this, arguments);
        }
  
        return throwError;
      }()
    }, {
      key: 'afterFetch',
      value: function () {
        var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(_ref4) {
          var json = _ref4.json,
              res = _ref4.res;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(res.status >= 400)) {
                    _context2.next = 3;
                    break;
                  }
  
                  _context2.next = 3;
                  return this.throwError({
                    err: {
                      status: res.status,
                      statusText: res.statusText,
                      data: json
                    },
                    res: res
                  });
  
                case 3:
                  if (!json.err) {
                    _context2.next = 6;
                    break;
                  }
  
                  _context2.next = 6;
                  return this.throwError({
                    err: json.err,
                    json: json,
                    res: res
                  });
  
                case 6:
                  return _context2.abrupt('return', json);
  
                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
  
        function afterFetch(_x5) {
          return _ref3.apply(this, arguments);
        }
  
        return afterFetch;
      }()
    }, {
      key: 'createUrl',
      value: function createUrl(path) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        // console.log('createUrl', path);
        var prefix = options.prefix || this.prefix || '';
        if (path.substr(0, 5) === 'http:' || path.substr(0, 6) === 'https:') {
          return path;
        }
        var url = void 0;
        if (path[0] === '/' && !prefix) {
          url = [this.base, path.substr(1)];
        } else if (prefix) {
          url = [this.base, prefix, path];
        } else {
          url = [this.base, path];
        }
        // console.log('url', url);
        return url.join('/');
      }
    }, {
      key: 'getFetch',
      value: function getFetch(url) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        var options = (0, _assign2.default)({}, params);
  
        if (options.data && !options.body) {
          options.body = options.data;
        }
        if (_lodash2.default.isPlainObject(options.body)) {
          options.body = (0, _stringify2.default)(options.body);
        }
        if (!options.headers) options.headers = {};
        if (!options.headers.Accept) options.headers.Accept = 'application/json';
        if (!options.headers['Content-Type']) options.headers['Content-Type'] = 'application/json; charset=utf-8';
        if (options.headers['Content-Type'] === '!') {
          delete options.headers['Content-Type'];
        }
        if (!options.headers.Authorization && this.authToken) {
          options.headers.Authorization = 'Bearer ' + this.authToken;
        }
  
        if (options.queryParams || options.qs) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams || options.qs);
        }
  
        return fetch(this.createUrl(url), options);
      }
    }, {
      key: 'fetch',
      value: function fetch() {
        var _this = this;
  
        return this.getFetch.apply(this, arguments).then(function () {
          var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(res) {
            var text, json;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    text = void 0;
                    json = void 0;
                    _context3.prev = 2;
                    _context3.next = 5;
                    return res.text();
  
                  case 5:
                    text = _context3.sent;
  
                    json = JSON.parse(text);
                    _context3.next = 13;
                    break;
  
                  case 9:
                    _context3.prev = 9;
                    _context3.t0 = _context3['catch'](2);
                    _context3.next = 13;
                    return _this.throwError({
                      err: {
                        status: res.status,
                        statusText: res.statusText,
                        // text: text,
                        message: text
                      },
                      res: res
                    });
  
                  case 13:
                    return _context3.abrupt('return', _this.afterFetch({
                      json: json,
                      text: text,
                      res: res
                    }));
  
                  case 14:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee3, _this, [[2, 9]]);
          }));
  
          return function (_x8) {
            return _ref5.apply(this, arguments);
          };
        }());
      }
    }]);
    return ApiClient;
  }();
  
  exports.default = ApiClient;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  exports.default = function () {
    var _require, _require2, _require3;
  
    return {
      Category: (_require = __webpack_require__(190)).default.apply(_require, arguments),
      // Tag: require('./Tag').default(...arguments),
      // Pet: require('./Pet').default(...arguments),
      // Counter: require('./Counter').default(...arguments),
      Task: (_require2 = __webpack_require__(191)).default.apply(_require2, arguments),
      Game: (_require3 = __webpack_require__(192)).default.apply(_require3, arguments)
    };
  };

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSchema = getSchema;
  
  var _UniversalSchema = __webpack_require__(69);
  
  var _UniversalSchema2 = _interopRequireDefault(_UniversalSchema);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line
  
  function getSchema(ctx) {
    // eslint-disable-line
    // const mongoose = ctx.db;
    var schema = new _UniversalSchema2.default({
      categoryId: {
        type: String
      },
      tags: {
        type: [String]
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      },
      image: {
        type: String
      }
    });
  
    return schema;
  }
  
  exports.default = function (ctx) {
    var schema = getSchema(ctx);
    return ctx.db.model('Category', schema.getMongooseSchema(), 'category');
  };

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSchema = getSchema;
  
  var _UniversalSchema = __webpack_require__(69);
  
  var _UniversalSchema2 = _interopRequireDefault(_UniversalSchema);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line
  
  function getSchema(ctx) {
    // eslint-disable-line
    // const mongoose = ctx.db;
    var schema = new _UniversalSchema2.default({
      platform: {
        type: String
      },
      categoryId: {
        type: String
      },
      question: {
        type: Object
      },
      answers: {
        type: Array
      },
      title: {
        type: String
      }
    }, {
      strict: false
    });
  
    return schema;
  }
  
  exports.default = function (ctx) {
    var schema = getSchema(ctx);
    return ctx.db.model('Task', schema.getMongooseSchema(), 'task');
  };

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSchema = getSchema;
  
  var _UniversalSchema = __webpack_require__(69);
  
  var _UniversalSchema2 = _interopRequireDefault(_UniversalSchema);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // eslint-disable-line
  
  
  function getSchema(ctx) {
    // eslint-disable-line
    // const mongoose = ctx.db;
    var schema = new _UniversalSchema2.default({
      userId: {
        type: String
      },
      categoryId: {
        type: String
      },
      tasks: {
        type: Array
      },
      answers: {
        type: Array
      },
      result: {
        type: Object
      },
      boughtAt: {
        type: Date
      },
      finishedAt: {
        type: Date
      },
      cert: {
        type: Object
      }
    });
  
    return schema;
  }
  
  exports.default = function (ctx) {
    var schema = getSchema(ctx);
    return ctx.db.model('Game', schema.getMongooseSchema(), 'game');
  };

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.Root = undefined;
  
  var _get2 = __webpack_require__(20);
  
  var _get3 = _interopRequireDefault(_get2);
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _class, _temp;
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Html = __webpack_require__(101);
  
  var _Html2 = _interopRequireDefault(_Html);
  
  var _mobxReact = __webpack_require__(162);
  
  var _ToastContainer = __webpack_require__(194);
  
  var _ToastContainer2 = _interopRequireDefault(_ToastContainer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  __webpack_require__(196);
  __webpack_require__(197);
  
  var Root = exports.Root = function (_HtmlBase$Root) {
    (0, _inherits3.default)(Root, _HtmlBase$Root);
  
    function Root() {
      (0, _classCallCheck3.default)(this, Root);
      return (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Root, [{
      key: 'render',
      value: function render() {
        var stores = this.props.ctx.provider && this.props.ctx.provider.provide() || this.props.ctx.stores || {};
        return _react2.default.createElement(
          _mobxReact.Provider,
          stores,
          _react2.default.createElement(
            'div',
            null,
            this.props.component,
            _react2.default.createElement(_ToastContainer2.default, null)
          )
        );
      }
    }]);
    return Root;
  }(_Html2.default.Root);
  
  var Html = (_temp = _class = function (_HtmlBase) {
    (0, _inherits3.default)(Html, _HtmlBase);
  
    function Html() {
      (0, _classCallCheck3.default)(this, Html);
      return (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Html, [{
      key: 'renderHead',
  
      // renderStyle() {
      //   return `<style id="css"></style>`
      // }
  
      value: function renderHead() {
        // <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet"/>
        // <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap-flex.min.css" rel="stylesheet"/>
        // <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
        return (0, _get3.default)(Html.prototype.__proto__ || (0, _getPrototypeOf2.default)(Html.prototype), 'renderHead', this).call(this) + '\n\n';
      }
    }, {
      key: 'renderFooter',
      value: function renderFooter() {
        return (0, _get3.default)(Html.prototype.__proto__ || (0, _getPrototypeOf2.default)(Html.prototype), 'renderFooter', this).call(this) + '\n' + __webpack_require__(198) + '\n';
      }
    }]);
    return Html;
  }(_Html2.default), _class.Root = Root, _temp);
  exports.default = Html;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  
  var _getPrototypeOf = __webpack_require__(16);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(17);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(18);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(19);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(21);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(86);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactToastr = __webpack_require__(195);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ToastMessageFactory = (0, _react.createFactory)(_reactToastr.ToastMessage.animation);
  
  var ToastContainer2 = function (_Component) {
    (0, _inherits3.default)(ToastContainer2, _Component);
  
    function ToastContainer2() {
      (0, _classCallCheck3.default)(this, ToastContainer2);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (ToastContainer2.__proto__ || (0, _getPrototypeOf2.default)(ToastContainer2)).call(this));
  
      global.errors = [];
      // global.throwError = global.errors.push;
      global.toast = function () {
        var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  
        console.log('throwError', err);
        if (!err.type) err.type = 'error';
        if (!err.title) {
          if (err.type === 'error') {
            err.title = 'Ошибка';
          } else {
            err.title = 'Успех';
          }
        }
        if (!err.text) {
          if (err.type === 'error') {
            err.text = 'Что-то пошло не так';
          } else {
            err.text = 'Успех';
          }
        }
        global.errors.push(err);
      };
      return _this;
    }
  
    (0, _createClass3.default)(ToastContainer2, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        this.interval = setInterval(function () {
          while (_this2.check()) {}
        }, 1000);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.interval);
      }
    }, {
      key: 'check',
      value: function check() {
        if (!global.errors.length) return false;
        var error = global.errors[0];
        global.errors = global.errors.slice(1);
        this.addAlert(error);
        return true;
      }
    }, {
      key: 'addAlert',
      value: function addAlert(_ref) {
        var title = _ref.title,
            text = _ref.text,
            type = _ref.type;
  
        this.toast[type](title, text, {
          preventDuplicates: false,
          closeButton: true
        });
      }
    }, {
      key: 'clearAlert',
      value: function clearAlert() {
        this.toast.clear();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        return _react2.default.createElement(_reactToastr.ToastContainer, {
          ref: function ref(e) {
            return _this3.toast = e;
          },
          toastMessageFactory: ToastMessageFactory,
          className: 'toast-bottom-right'
        });
      }
    }]);
    return ToastContainer2;
  }(_react.Component);
  
  exports.default = ToastContainer2;

/***/ },
/* 195 */
/***/ function(module, exports) {

  module.exports = require("react-toastr");

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic);", ""]);
  
  // module
  exports.push([module.id, "@charset \"UTF-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n* {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #2C3E50;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #18BC9C;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #18BC9C;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 21px;\n  margin-bottom: 21px;\n  border: 0;\n  border-top: 1px solid #ecf0f1; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #b4bcc2; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 21px;\n  margin-bottom: 10.5px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10.5px;\n  margin-bottom: 10.5px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 39px; }\n\nh2, .h2 {\n  font-size: 32px; }\n\nh3, .h3 {\n  font-size: 26px; }\n\nh4, .h4 {\n  font-size: 19px; }\n\nh5, .h5 {\n  font-size: 15px; }\n\nh6, .h6 {\n  font-size: 13px; }\n\np {\n  margin: 0 0 10.5px; }\n\n.lead {\n  margin-bottom: 21px;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 22.5px; } }\n\nsmall,\n.small {\n  font-size: 86%; }\n\nmark,\n.mark {\n  background-color: #F39C12;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #b4bcc2; }\n\n.text-primary {\n  color: #2C3E50; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #1a252f; }\n\n.text-success {\n  color: #fff; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #e6e6e6; }\n\n.text-info {\n  color: #fff; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #e6e6e6; }\n\n.text-warning {\n  color: #fff; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #e6e6e6; }\n\n.text-danger {\n  color: #fff; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #e6e6e6; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #2C3E50; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #1a252f; }\n\n.bg-success {\n  background-color: #18BC9C; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #128f76; }\n\n.bg-info {\n  background-color: #3498DB; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #217dbb; }\n\n.bg-warning {\n  background-color: #F39C12; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #c87f0a; }\n\n.bg-danger {\n  background-color: #E74C3C; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #d62c1a; }\n\n.page-header {\n  padding-bottom: 9.5px;\n  margin: 42px 0 21px;\n  border-bottom: 1px solid transparent; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10.5px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 21px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #b4bcc2; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10.5px 21px;\n  margin: 0 0 21px;\n  font-size: 18.75px;\n  border-left: 5px solid #ecf0f1; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #b4bcc2; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #ecf0f1;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\n\naddress {\n  margin-bottom: 21px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n\npre {\n  display: block;\n  padding: 10px;\n  margin: 0 0 10.5px;\n  font-size: 14px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #7b8a8b;\n  background-color: #ecf0f1;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #b4bcc2;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 21px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ecf0f1; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ecf0f1; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ecf0f1; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ecf0f1; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ecf0f1; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #ecf0f1; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #ecf0f1; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #dde4e6; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #18BC9C; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #15a589; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #3498DB; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #258cd1; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #F39C12; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #e08e0b; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #E74C3C; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #e43725; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15.75px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ecf0f1; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 21px;\n  font-size: 22.5px;\n  line-height: inherit;\n  color: #2C3E50;\n  border: 0;\n  border-bottom: 1px solid transparent; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 11px;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #2C3E50; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 45px;\n  padding: 10px 15px;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #2C3E50;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dce4ec;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #2C3E50;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(44, 62, 80, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(44, 62, 80, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #acb6c0;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #acb6c0; }\n  .form-control::-webkit-input-placeholder {\n    color: #acb6c0; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #ecf0f1;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 45px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 35px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 66px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 21px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-bottom: 0;\n  min-height: 36px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 35px;\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 35px;\n  line-height: 35px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 35px;\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 35px;\n  line-height: 35px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 35px;\n  min-height: 34px;\n  padding: 7px 9px;\n  font-size: 13px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 66px;\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 66px;\n  line-height: 66px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 66px;\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 66px;\n  line-height: 66px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 66px;\n  min-height: 40px;\n  padding: 19px 27px;\n  font-size: 19px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 56.25px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 66px;\n  height: 66px;\n  line-height: 66px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 35px;\n  height: 35px;\n  line-height: 35px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #fff; }\n\n.has-success .form-control {\n  border-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #e6e6e6;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n\n.has-success .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #18BC9C; }\n\n.has-success .form-control-feedback {\n  color: #fff; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #fff; }\n\n.has-warning .form-control {\n  border-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #e6e6e6;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n\n.has-warning .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #F39C12; }\n\n.has-warning .form-control-feedback {\n  color: #fff; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #fff; }\n\n.has-error .form-control {\n  border-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #e6e6e6;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n\n.has-error .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #E74C3C; }\n\n.has-error .form-control-feedback {\n  color: #fff; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 26px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #597ea2; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 11px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 32px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 11px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 19px;\n    font-size: 19px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 7px;\n    font-size: 13px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 10px 15px;\n  font-size: 15px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #fff;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #fff;\n  background-color: #95a5a6;\n  border-color: #95a5a6; }\n  .btn-default:focus, .btn-default.focus {\n    color: #fff;\n    background-color: #798d8f;\n    border-color: #566566; }\n  .btn-default:hover {\n    color: #fff;\n    background-color: #798d8f;\n    border-color: #74898a; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #fff;\n    background-color: #798d8f;\n    border-color: #74898a; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #687b7c;\n      border-color: #566566; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #95a5a6;\n    border-color: #95a5a6; }\n  .btn-default .badge {\n    color: #95a5a6;\n    background-color: #fff; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #1a252f;\n    border-color: black; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #1a252f;\n    border-color: #161f29; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #1a252f;\n    border-color: #161f29; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #0d1318;\n      border-color: black; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #2C3E50;\n    border-color: #2C3E50; }\n  .btn-primary .badge {\n    color: #2C3E50;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #18BC9C;\n  border-color: #18BC9C; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #128f76;\n    border-color: #0a4b3e; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #128f76;\n    border-color: #11866f; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #128f76;\n    border-color: #11866f; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #0e6f5c;\n      border-color: #0a4b3e; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #18BC9C;\n    border-color: #18BC9C; }\n  .btn-success .badge {\n    color: #18BC9C;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #3498DB;\n  border-color: #3498DB; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #217dbb;\n    border-color: #16527a; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #217dbb;\n    border-color: #2077b2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #217dbb;\n    border-color: #2077b2; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #1c699d;\n      border-color: #16527a; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #3498DB;\n    border-color: #3498DB; }\n  .btn-info .badge {\n    color: #3498DB;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #F39C12;\n  border-color: #F39C12; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #c87f0a;\n    border-color: #7f5006; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #c87f0a;\n    border-color: #be780a; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #c87f0a;\n    border-color: #be780a; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #a66908;\n      border-color: #7f5006; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #F39C12;\n    border-color: #F39C12; }\n  .btn-warning .badge {\n    color: #F39C12;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #E74C3C;\n  border-color: #E74C3C; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #d62c1a;\n    border-color: #921e12; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #d62c1a;\n    border-color: #cd2a19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #d62c1a;\n    border-color: #cd2a19; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #b62516;\n      border-color: #921e12; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #E74C3C;\n    border-color: #E74C3C; }\n  .btn-danger .badge {\n    color: #E74C3C;\n    background-color: #fff; }\n\n.btn-link {\n  color: #18BC9C;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #18BC9C;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #b4bcc2;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  -o-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  -o-transition-duration: 0.35s;\n     transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  -o-transition-timing-function: ease;\n     transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 15px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9.5px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #7b8a8b;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #fff;\n  background-color: #2C3E50; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #2C3E50; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #b4bcc2; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 13px;\n  line-height: 1.42857;\n  color: #b4bcc2;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 10px 15px;\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 1;\n  color: #2C3E50;\n  text-align: center;\n  background-color: #ecf0f1;\n  border: 1px solid #dce4ec;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 6px 9px;\n    font-size: 13px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 18px 27px;\n    font-size: 19px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #ecf0f1; }\n    .nav > li.disabled > a {\n      color: #b4bcc2; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #b4bcc2;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #ecf0f1;\n    border-color: #18BC9C; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9.5px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ecf0f1; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #ecf0f1 #ecf0f1 #ecf0f1; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #2C3E50;\n      background-color: #fff;\n      border: 1px solid #ecf0f1;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #2C3E50; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ecf0f1; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ecf0f1;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 21px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 19.5px 15px;\n  font-size: 19px;\n  line-height: 21px;\n  height: 60px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 9.75px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 21px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 21px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 19.5px;\n          padding-bottom: 19.5px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 7.5px;\n  margin-bottom: 7.5px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 7.5px;\n  margin-bottom: 7.5px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 12.5px;\n    margin-bottom: 12.5px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 19px;\n    margin-bottom: 19px; }\n\n.navbar-text {\n  margin-top: 19.5px;\n  margin-bottom: 19.5px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #2C3E50;\n  border-color: transparent; }\n  .navbar-default .navbar-brand {\n    color: #fff; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #18BC9C;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #fff; }\n  .navbar-default .navbar-nav > li > a {\n    color: #fff; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #18BC9C;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #1a252f; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #1a252f; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #1a252f; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: transparent; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #1a252f;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #fff; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #18BC9C;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #1a252f; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #fff; }\n    .navbar-default .navbar-link:hover {\n      color: #18BC9C; }\n  .navbar-default .btn-link {\n    color: #fff; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #18BC9C; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #18BC9C;\n  border-color: transparent; }\n  .navbar-inverse .navbar-brand {\n    color: #fff; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #2C3E50;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #fff; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #fff; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #2C3E50;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #15a589; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #128f76; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #128f76; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #149c82; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #15a589;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #fff; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #2C3E50;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #15a589; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #fff; }\n    .navbar-inverse .navbar-link:hover {\n      color: #2C3E50; }\n  .navbar-inverse .btn-link {\n    color: #fff; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #2C3E50; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #ccc; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 21px;\n  list-style: none;\n  background-color: #ecf0f1;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #95a5a6; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 21px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 10px 15px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #fff;\n      background-color: #18BC9C;\n      border: 1px solid transparent;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #fff;\n    background-color: #0f7864;\n    border-color: transparent; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #0f7864;\n    border-color: transparent;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #ecf0f1;\n    background-color: #3be6c4;\n    border-color: transparent;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 21px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #18BC9C;\n      border: 1px solid transparent;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #0f7864; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #fff;\n    background-color: #18BC9C;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #95a5a6; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #798d8f; }\n\n.label-primary {\n  background-color: #2C3E50; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #1a252f; }\n\n.label-success {\n  background-color: #18BC9C; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #128f76; }\n\n.label-info {\n  background-color: #3498DB; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #217dbb; }\n\n.label-warning {\n  background-color: #F39C12; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #c87f0a; }\n\n.label-danger {\n  background-color: #E74C3C; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #d62c1a; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 13px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #2C3E50;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #2C3E50;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #ecf0f1; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 23px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #cfd9db; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 68px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 21px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #2C3E50; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #18BC9C; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 21px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #18BC9C;\n  border-color: #18BC9C;\n  color: #fff; }\n  .alert-success hr {\n    border-top-color: #15a589; }\n  .alert-success .alert-link {\n    color: #e6e6e6; }\n\n.alert-info {\n  background-color: #3498DB;\n  border-color: #3498DB;\n  color: #fff; }\n  .alert-info hr {\n    border-top-color: #258cd1; }\n  .alert-info .alert-link {\n    color: #e6e6e6; }\n\n.alert-warning {\n  background-color: #F39C12;\n  border-color: #F39C12;\n  color: #fff; }\n  .alert-warning hr {\n    border-top-color: #e08e0b; }\n  .alert-warning .alert-link {\n    color: #e6e6e6; }\n\n.alert-danger {\n  background-color: #E74C3C;\n  border-color: #E74C3C;\n  color: #fff; }\n  .alert-danger hr {\n    border-top-color: #e43725; }\n  .alert-danger .alert-link {\n    color: #e6e6e6; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 21px;\n  margin-bottom: 21px;\n  background-color: #ecf0f1;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 13px;\n  line-height: 21px;\n  color: #fff;\n  text-align: center;\n  background-color: #2C3E50;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #18BC9C; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #3498DB; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #F39C12; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #E74C3C; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ecf0f1; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #ecf0f1; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #ecf0f1;\n  color: #b4bcc2;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #b4bcc2; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #8aa4be; }\n\n.list-group-item-success {\n  color: #fff;\n  background-color: #18BC9C; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #fff; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #fff;\n    background-color: #15a589; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-info {\n  color: #fff;\n  background-color: #3498DB; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #fff; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #fff;\n    background-color: #258cd1; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-warning {\n  color: #fff;\n  background-color: #F39C12; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #fff; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #fff;\n    background-color: #e08e0b; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-danger {\n  color: #fff;\n  background-color: #E74C3C; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #fff; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #fff;\n    background-color: #e43725; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 21px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 17px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-top: 1px solid #ecf0f1;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ecf0f1; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 21px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ecf0f1; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ecf0f1; }\n\n.panel-default {\n  border-color: #ecf0f1; }\n  .panel-default > .panel-heading {\n    color: #2C3E50;\n    background-color: #ecf0f1;\n    border-color: #ecf0f1; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ecf0f1; }\n    .panel-default > .panel-heading .badge {\n      color: #ecf0f1;\n      background-color: #2C3E50; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ecf0f1; }\n\n.panel-primary {\n  border-color: #2C3E50; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #2C3E50;\n    border-color: #2C3E50; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #2C3E50; }\n    .panel-primary > .panel-heading .badge {\n      color: #2C3E50;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #2C3E50; }\n\n.panel-success {\n  border-color: #18BC9C; }\n  .panel-success > .panel-heading {\n    color: #fff;\n    background-color: #18BC9C;\n    border-color: #18BC9C; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #18BC9C; }\n    .panel-success > .panel-heading .badge {\n      color: #18BC9C;\n      background-color: #fff; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #18BC9C; }\n\n.panel-info {\n  border-color: #3498DB; }\n  .panel-info > .panel-heading {\n    color: #fff;\n    background-color: #3498DB;\n    border-color: #3498DB; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #3498DB; }\n    .panel-info > .panel-heading .badge {\n      color: #3498DB;\n      background-color: #fff; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #3498DB; }\n\n.panel-warning {\n  border-color: #F39C12; }\n  .panel-warning > .panel-heading {\n    color: #fff;\n    background-color: #F39C12;\n    border-color: #F39C12; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #F39C12; }\n    .panel-warning > .panel-heading .badge {\n      color: #F39C12;\n      background-color: #fff; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #F39C12; }\n\n.panel-danger {\n  border-color: #E74C3C; }\n  .panel-danger > .panel-heading {\n    color: #fff;\n    background-color: #E74C3C;\n    border-color: #E74C3C; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #E74C3C; }\n    .panel-danger > .panel-heading .badge {\n      color: #E74C3C;\n      background-color: #fff; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #E74C3C; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #ecf0f1;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 22.5px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: none;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.card {\n  position: relative;\n  display: block;\n  margin-bottom: 21px;\n  background-color: #fff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px; }\n\n.card-block {\n  padding: 15px; }\n  .card-block:before, .card-block:after {\n    content: \" \";\n    display: table; }\n  .card-block:after {\n    clear: both; }\n\n.card-title {\n  margin-top: 0;\n  margin-bottom: 10.5px; }\n\n.card-subtitle {\n  margin-top: -10.5px;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 15px; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.card-header {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-bottom: 1px solid #ecf0f1; }\n  .card-header:before, .card-header:after {\n    content: \" \";\n    display: table; }\n  .card-header:after {\n    clear: both; }\n  .card-header:first-child {\n    border-radius: 4px 4px 0 0; }\n\n.card-footer {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-top: 1px solid #ecf0f1; }\n  .card-footer:before, .card-footer:after {\n    content: \" \";\n    display: table; }\n  .card-footer:after {\n    clear: both; }\n  .card-footer:last-child {\n    border-radius: 0 0 4px 4px; }\n\n.card-header-tabs {\n  margin-right: -5px;\n  margin-bottom: -10px;\n  margin-left: -5px;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -5px;\n  margin-left: -5px; }\n\n.card-primary {\n  background-color: #2C3E50;\n  border-color: #2C3E50; }\n  .card-primary .card-header,\n  .card-primary .card-footer {\n    background-color: transparent; }\n\n.card-success {\n  background-color: #18BC9C;\n  border-color: #18BC9C; }\n  .card-success .card-header,\n  .card-success .card-footer {\n    background-color: transparent; }\n\n.card-info {\n  background-color: #3498DB;\n  border-color: #3498DB; }\n  .card-info .card-header,\n  .card-info .card-footer {\n    background-color: transparent; }\n\n.card-warning {\n  background-color: #F39C12;\n  border-color: #F39C12; }\n  .card-warning .card-header,\n  .card-warning .card-footer {\n    background-color: transparent; }\n\n.card-danger {\n  background-color: #E74C3C;\n  border-color: #E74C3C; }\n  .card-danger .card-header,\n  .card-danger .card-footer {\n    background-color: transparent; }\n\n.card-outline-primary {\n  background-color: transparent;\n  border-color: #2C3E50; }\n\n.card-outline-secondary {\n  background-color: transparent;\n  border-color: #95a5a6; }\n\n.card-outline-info {\n  background-color: transparent;\n  border-color: #3498DB; }\n\n.card-outline-success {\n  background-color: transparent;\n  border-color: #18BC9C; }\n\n.card-outline-warning {\n  background-color: transparent;\n  border-color: #F39C12; }\n\n.card-outline-danger {\n  background-color: transparent;\n  border-color: #E74C3C; }\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-color: rgba(255, 255, 255, 0.2); }\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff; }\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-subtitle,\n.card-inverse .card-blockquote .blockquote-footer {\n  color: rgba(255, 255, 255, 0.65); }\n\n.card-inverse .card-link:hover, .card-inverse .card-link:focus {\n  color: #fff; }\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0; }\n\n.card-img {\n  border-radius: .25em; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 15px; }\n\n.card-img-top {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px; }\n\n.card-img-bottom {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -o-transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 20px; }\n\n.modal-footer {\n  padding: 20px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 13px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 15px;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 15px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: fadein(rgba(0, 0, 0, 0.2), 5%);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: fadein(rgba(0, 0, 0, 0.2), 5%); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: fadein(rgba(0, 0, 0, 0.2), 5%);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: fadein(rgba(0, 0, 0, 0.2), 5%); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: -webkit-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out, -o-transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.0001)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.0001)), to(rgba(0, 0, 0, 0.5)));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203A'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.navbar {\n  border-width: 0; }\n  .navbar-default .badge {\n    background-color: #fff;\n    color: #2C3E50; }\n  .navbar-inverse .badge {\n    background-color: #fff;\n    color: #18BC9C; }\n  .navbar-brand {\n    line-height: 1; }\n\n.btn {\n  border-width: 2px; }\n\n.btn:active {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.text-primary,\n.text-primary:hover {\n  color: #2C3E50; }\n\n.text-success,\n.text-success:hover {\n  color: #18BC9C; }\n\n.text-danger,\n.text-danger:hover {\n  color: #E74C3C; }\n\n.text-warning,\n.text-warning:hover {\n  color: #F39C12; }\n\n.text-info,\n.text-info:hover {\n  color: #3498DB; }\n\ntable a:not(.btn),\n.table a:not(.btn) {\n  text-decoration: underline; }\n\ntable .dropdown-menu a,\n.table .dropdown-menu a {\n  text-decoration: none; }\n\ntable .success,\ntable .warning,\ntable .danger,\ntable .info,\n.table .success,\n.table .warning,\n.table .danger,\n.table .info {\n  color: #fff; }\n  table .success > th > a,\n  table .success > td > a,\n  table .success > a,\n  table .warning > th > a,\n  table .warning > td > a,\n  table .warning > a,\n  table .danger > th > a,\n  table .danger > td > a,\n  table .danger > a,\n  table .info > th > a,\n  table .info > td > a,\n  table .info > a,\n  .table .success > th > a,\n  .table .success > td > a,\n  .table .success > a,\n  .table .warning > th > a,\n  .table .warning > td > a,\n  .table .warning > a,\n  .table .danger > th > a,\n  .table .danger > td > a,\n  .table .danger > a,\n  .table .info > th > a,\n  .table .info > td > a,\n  .table .info > a {\n    color: #fff; }\n\ntable > thead > tr > th,\ntable > tbody > tr > th,\ntable > tfoot > tr > th,\ntable > thead > tr > td,\ntable > tbody > tr > td,\ntable > tfoot > tr > td,\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border: none; }\n\ntable-bordered > thead > tr > th,\ntable-bordered > tbody > tr > th,\ntable-bordered > tfoot > tr > th,\ntable-bordered > thead > tr > td,\ntable-bordered > tbody > tr > td,\ntable-bordered > tfoot > tr > td,\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ecf0f1; }\n\n.form-control,\ninput {\n  border-width: 2px;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n  .form-control:focus,\n  input:focus {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label,\n.has-warning .form-control-feedback {\n  color: #F39C12; }\n\n.has-warning .form-control,\n.has-warning .form-control:focus {\n  border: 2px solid #F39C12; }\n\n.has-warning .input-group-addon {\n  border-color: #F39C12; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label,\n.has-error .form-control-feedback {\n  color: #E74C3C; }\n\n.has-error .form-control,\n.has-error .form-control:focus {\n  border: 2px solid #E74C3C; }\n\n.has-error .input-group-addon {\n  border-color: #E74C3C; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label,\n.has-success .form-control-feedback {\n  color: #18BC9C; }\n\n.has-success .form-control,\n.has-success .form-control:focus {\n  border: 2px solid #18BC9C; }\n\n.has-success .input-group-addon {\n  border-color: #18BC9C; }\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  border-color: transparent; }\n\n.pager a,\n.pager a:hover {\n  color: #fff; }\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  background-color: #3be6c4; }\n\n.close {\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.4; }\n  .close:hover, .close:focus {\n    color: #fff;\n    opacity: 1; }\n\n.alert .alert-link {\n  color: #fff;\n  text-decoration: underline; }\n\n.progress {\n  height: 10px;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n  .progress .progress-bar {\n    font-size: 10px;\n    line-height: 10px; }\n\n.well {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\na.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus {\n  border-color: #ecf0f1; }\n\na.list-group-item-success.active {\n  background-color: #18BC9C; }\n\na.list-group-item-success.active:hover, a.list-group-item-success.active:focus {\n  background-color: #15a589; }\n\na.list-group-item-warning.active {\n  background-color: #F39C12; }\n\na.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus {\n  background-color: #e08e0b; }\n\na.list-group-item-danger.active {\n  background-color: #E74C3C; }\n\na.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus {\n  background-color: #e43725; }\n\n.panel-default .close {\n  color: #2C3E50; }\n\n.modal .close {\n  color: #2C3E50; }\n\n.popover {\n  color: #2C3E50; }\n\n.navbar {\n  margin-bottom: 0px; }\n", "", {"version":3,"sources":["/./App/Html/bootstrap.g.scss"],"names":[],"mappings":"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","file":"bootstrap.g.scss","sourcesContent":["@charset \"UTF-8\";\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700,400italic\");\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #2C3E50;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #18BC9C;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #18BC9C;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 21px;\n  margin-bottom: 21px;\n  border: 0;\n  border-top: 1px solid #ecf0f1; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #b4bcc2; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 21px;\n  margin-bottom: 10.5px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10.5px;\n  margin-bottom: 10.5px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 39px; }\n\nh2, .h2 {\n  font-size: 32px; }\n\nh3, .h3 {\n  font-size: 26px; }\n\nh4, .h4 {\n  font-size: 19px; }\n\nh5, .h5 {\n  font-size: 15px; }\n\nh6, .h6 {\n  font-size: 13px; }\n\np {\n  margin: 0 0 10.5px; }\n\n.lead {\n  margin-bottom: 21px;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 22.5px; } }\n\nsmall,\n.small {\n  font-size: 86%; }\n\nmark,\n.mark {\n  background-color: #F39C12;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #b4bcc2; }\n\n.text-primary {\n  color: #2C3E50; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #1a252f; }\n\n.text-success {\n  color: #fff; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #e6e6e6; }\n\n.text-info {\n  color: #fff; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #e6e6e6; }\n\n.text-warning {\n  color: #fff; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #e6e6e6; }\n\n.text-danger {\n  color: #fff; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #e6e6e6; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #2C3E50; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #1a252f; }\n\n.bg-success {\n  background-color: #18BC9C; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #128f76; }\n\n.bg-info {\n  background-color: #3498DB; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #217dbb; }\n\n.bg-warning {\n  background-color: #F39C12; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #c87f0a; }\n\n.bg-danger {\n  background-color: #E74C3C; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #d62c1a; }\n\n.page-header {\n  padding-bottom: 9.5px;\n  margin: 42px 0 21px;\n  border-bottom: 1px solid transparent; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10.5px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 21px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #b4bcc2; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10.5px 21px;\n  margin: 0 0 21px;\n  font-size: 18.75px;\n  border-left: 5px solid #ecf0f1; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #b4bcc2; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014 \\00A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #ecf0f1;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\00A0 \\2014'; }\n\naddress {\n  margin-bottom: 21px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 10px;\n  margin: 0 0 10.5px;\n  font-size: 14px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #7b8a8b;\n  background-color: #ecf0f1;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #b4bcc2;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 21px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ecf0f1; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ecf0f1; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ecf0f1; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ecf0f1; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ecf0f1; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #ecf0f1; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #ecf0f1; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #dde4e6; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #18BC9C; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #15a589; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #3498DB; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #258cd1; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #F39C12; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #e08e0b; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #E74C3C; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #e43725; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15.75px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ecf0f1; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 21px;\n  font-size: 22.5px;\n  line-height: inherit;\n  color: #2C3E50;\n  border: 0;\n  border-bottom: 1px solid transparent; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 11px;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #2C3E50; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 45px;\n  padding: 10px 15px;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #2C3E50;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dce4ec;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #2C3E50;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(44, 62, 80, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(44, 62, 80, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #acb6c0;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #acb6c0; }\n  .form-control::-webkit-input-placeholder {\n    color: #acb6c0; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #ecf0f1;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 45px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 35px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 66px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 21px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-bottom: 0;\n  min-height: 36px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 35px;\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 35px;\n  line-height: 35px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 35px;\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 35px;\n  line-height: 35px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 35px;\n  min-height: 34px;\n  padding: 7px 9px;\n  font-size: 13px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 66px;\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 66px;\n  line-height: 66px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 66px;\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 66px;\n  line-height: 66px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 66px;\n  min-height: 40px;\n  padding: 19px 27px;\n  font-size: 19px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 56.25px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 66px;\n  height: 66px;\n  line-height: 66px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 35px;\n  height: 35px;\n  line-height: 35px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #fff; }\n\n.has-success .form-control {\n  border-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #e6e6e6;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n\n.has-success .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #18BC9C; }\n\n.has-success .form-control-feedback {\n  color: #fff; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #fff; }\n\n.has-warning .form-control {\n  border-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #e6e6e6;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n\n.has-warning .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #F39C12; }\n\n.has-warning .form-control-feedback {\n  color: #fff; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #fff; }\n\n.has-error .form-control {\n  border-color: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #e6e6e6;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n\n.has-error .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #E74C3C; }\n\n.has-error .form-control-feedback {\n  color: #fff; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 26px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #597ea2; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 11px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 32px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 11px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 19px;\n    font-size: 19px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 7px;\n    font-size: 13px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 10px 15px;\n  font-size: 15px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #fff;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #fff;\n  background-color: #95a5a6;\n  border-color: #95a5a6; }\n  .btn-default:focus, .btn-default.focus {\n    color: #fff;\n    background-color: #798d8f;\n    border-color: #566566; }\n  .btn-default:hover {\n    color: #fff;\n    background-color: #798d8f;\n    border-color: #74898a; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #fff;\n    background-color: #798d8f;\n    border-color: #74898a; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #687b7c;\n      border-color: #566566; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #95a5a6;\n    border-color: #95a5a6; }\n  .btn-default .badge {\n    color: #95a5a6;\n    background-color: #fff; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #1a252f;\n    border-color: black; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #1a252f;\n    border-color: #161f29; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #1a252f;\n    border-color: #161f29; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #0d1318;\n      border-color: black; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #2C3E50;\n    border-color: #2C3E50; }\n  .btn-primary .badge {\n    color: #2C3E50;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #18BC9C;\n  border-color: #18BC9C; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #128f76;\n    border-color: #0a4b3e; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #128f76;\n    border-color: #11866f; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #128f76;\n    border-color: #11866f; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #0e6f5c;\n      border-color: #0a4b3e; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #18BC9C;\n    border-color: #18BC9C; }\n  .btn-success .badge {\n    color: #18BC9C;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #3498DB;\n  border-color: #3498DB; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #217dbb;\n    border-color: #16527a; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #217dbb;\n    border-color: #2077b2; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #217dbb;\n    border-color: #2077b2; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #1c699d;\n      border-color: #16527a; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #3498DB;\n    border-color: #3498DB; }\n  .btn-info .badge {\n    color: #3498DB;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #F39C12;\n  border-color: #F39C12; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #c87f0a;\n    border-color: #7f5006; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #c87f0a;\n    border-color: #be780a; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #c87f0a;\n    border-color: #be780a; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #a66908;\n      border-color: #7f5006; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #F39C12;\n    border-color: #F39C12; }\n  .btn-warning .badge {\n    color: #F39C12;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #E74C3C;\n  border-color: #E74C3C; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #d62c1a;\n    border-color: #921e12; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #d62c1a;\n    border-color: #cd2a19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #d62c1a;\n    border-color: #cd2a19; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #b62516;\n      border-color: #921e12; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #E74C3C;\n    border-color: #E74C3C; }\n  .btn-danger .badge {\n    color: #E74C3C;\n    background-color: #fff; }\n\n.btn-link {\n  color: #18BC9C;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #18BC9C;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #b4bcc2;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 15px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9.5px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #7b8a8b;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #fff;\n  background-color: #2C3E50; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #2C3E50; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #b4bcc2; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 13px;\n  line-height: 1.42857;\n  color: #b4bcc2;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 10px 15px;\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 1;\n  color: #2C3E50;\n  text-align: center;\n  background-color: #ecf0f1;\n  border: 1px solid #dce4ec;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 6px 9px;\n    font-size: 13px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 18px 27px;\n    font-size: 19px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #ecf0f1; }\n    .nav > li.disabled > a {\n      color: #b4bcc2; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #b4bcc2;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #ecf0f1;\n    border-color: #18BC9C; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9.5px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ecf0f1; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #ecf0f1 #ecf0f1 #ecf0f1; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #2C3E50;\n      background-color: #fff;\n      border: 1px solid #ecf0f1;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #2C3E50; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ecf0f1; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ecf0f1;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 60px;\n  margin-bottom: 21px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 19.5px 15px;\n  font-size: 19px;\n  line-height: 21px;\n  height: 60px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 13px;\n  margin-bottom: 13px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 9.75px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 21px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 21px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 19.5px;\n          padding-bottom: 19.5px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 7.5px;\n  margin-bottom: 7.5px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 7.5px;\n  margin-bottom: 7.5px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 12.5px;\n    margin-bottom: 12.5px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 19px;\n    margin-bottom: 19px; }\n\n.navbar-text {\n  margin-top: 19.5px;\n  margin-bottom: 19.5px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #2C3E50;\n  border-color: transparent; }\n  .navbar-default .navbar-brand {\n    color: #fff; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #18BC9C;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #fff; }\n  .navbar-default .navbar-nav > li > a {\n    color: #fff; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #18BC9C;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #1a252f; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #1a252f; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #1a252f; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: transparent; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #1a252f;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #fff; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #18BC9C;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #1a252f; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #fff; }\n    .navbar-default .navbar-link:hover {\n      color: #18BC9C; }\n  .navbar-default .btn-link {\n    color: #fff; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #18BC9C; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #18BC9C;\n  border-color: transparent; }\n  .navbar-inverse .navbar-brand {\n    color: #fff; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #2C3E50;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #fff; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #fff; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #2C3E50;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #15a589; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #128f76; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #128f76; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #149c82; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #15a589;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #fff; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #2C3E50;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #15a589; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #fff; }\n    .navbar-inverse .navbar-link:hover {\n      color: #2C3E50; }\n  .navbar-inverse .btn-link {\n    color: #fff; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #2C3E50; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #ccc; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 21px;\n  list-style: none;\n  background-color: #ecf0f1;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/ \";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #95a5a6; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 21px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 10px 15px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #fff;\n      background-color: #18BC9C;\n      border: 1px solid transparent;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #fff;\n    background-color: #0f7864;\n    border-color: transparent; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #0f7864;\n    border-color: transparent;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #ecf0f1;\n    background-color: #3be6c4;\n    border-color: transparent;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 18px 27px;\n  font-size: 19px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 6px 9px;\n  font-size: 13px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 21px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #18BC9C;\n      border: 1px solid transparent;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #0f7864; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #fff;\n    background-color: #18BC9C;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #95a5a6; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #798d8f; }\n\n.label-primary {\n  background-color: #2C3E50; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #1a252f; }\n\n.label-success {\n  background-color: #18BC9C; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #128f76; }\n\n.label-info {\n  background-color: #3498DB; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #217dbb; }\n\n.label-warning {\n  background-color: #F39C12; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #c87f0a; }\n\n.label-danger {\n  background-color: #E74C3C; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #d62c1a; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 13px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #2C3E50;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #2C3E50;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #ecf0f1; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 23px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #cfd9db; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 68px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 21px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #2C3E50; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #18BC9C; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 21px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #18BC9C;\n  border-color: #18BC9C;\n  color: #fff; }\n  .alert-success hr {\n    border-top-color: #15a589; }\n  .alert-success .alert-link {\n    color: #e6e6e6; }\n\n.alert-info {\n  background-color: #3498DB;\n  border-color: #3498DB;\n  color: #fff; }\n  .alert-info hr {\n    border-top-color: #258cd1; }\n  .alert-info .alert-link {\n    color: #e6e6e6; }\n\n.alert-warning {\n  background-color: #F39C12;\n  border-color: #F39C12;\n  color: #fff; }\n  .alert-warning hr {\n    border-top-color: #e08e0b; }\n  .alert-warning .alert-link {\n    color: #e6e6e6; }\n\n.alert-danger {\n  background-color: #E74C3C;\n  border-color: #E74C3C;\n  color: #fff; }\n  .alert-danger hr {\n    border-top-color: #e43725; }\n  .alert-danger .alert-link {\n    color: #e6e6e6; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 21px;\n  margin-bottom: 21px;\n  background-color: #ecf0f1;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 13px;\n  line-height: 21px;\n  color: #fff;\n  text-align: center;\n  background-color: #2C3E50;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #18BC9C; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #3498DB; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #F39C12; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #E74C3C; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ecf0f1; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #ecf0f1; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #ecf0f1;\n  color: #b4bcc2;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #b4bcc2; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #2C3E50;\n  border-color: #2C3E50; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #8aa4be; }\n\n.list-group-item-success {\n  color: #fff;\n  background-color: #18BC9C; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #fff; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #fff;\n    background-color: #15a589; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-info {\n  color: #fff;\n  background-color: #3498DB; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #fff; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #fff;\n    background-color: #258cd1; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-warning {\n  color: #fff;\n  background-color: #F39C12; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #fff; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #fff;\n    background-color: #e08e0b; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-danger {\n  color: #fff;\n  background-color: #E74C3C; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #fff; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #fff;\n    background-color: #e43725; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 21px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 17px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-top: 1px solid #ecf0f1;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ecf0f1; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 21px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ecf0f1; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ecf0f1; }\n\n.panel-default {\n  border-color: #ecf0f1; }\n  .panel-default > .panel-heading {\n    color: #2C3E50;\n    background-color: #ecf0f1;\n    border-color: #ecf0f1; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ecf0f1; }\n    .panel-default > .panel-heading .badge {\n      color: #ecf0f1;\n      background-color: #2C3E50; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ecf0f1; }\n\n.panel-primary {\n  border-color: #2C3E50; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #2C3E50;\n    border-color: #2C3E50; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #2C3E50; }\n    .panel-primary > .panel-heading .badge {\n      color: #2C3E50;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #2C3E50; }\n\n.panel-success {\n  border-color: #18BC9C; }\n  .panel-success > .panel-heading {\n    color: #fff;\n    background-color: #18BC9C;\n    border-color: #18BC9C; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #18BC9C; }\n    .panel-success > .panel-heading .badge {\n      color: #18BC9C;\n      background-color: #fff; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #18BC9C; }\n\n.panel-info {\n  border-color: #3498DB; }\n  .panel-info > .panel-heading {\n    color: #fff;\n    background-color: #3498DB;\n    border-color: #3498DB; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #3498DB; }\n    .panel-info > .panel-heading .badge {\n      color: #3498DB;\n      background-color: #fff; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #3498DB; }\n\n.panel-warning {\n  border-color: #F39C12; }\n  .panel-warning > .panel-heading {\n    color: #fff;\n    background-color: #F39C12;\n    border-color: #F39C12; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #F39C12; }\n    .panel-warning > .panel-heading .badge {\n      color: #F39C12;\n      background-color: #fff; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #F39C12; }\n\n.panel-danger {\n  border-color: #E74C3C; }\n  .panel-danger > .panel-heading {\n    color: #fff;\n    background-color: #E74C3C;\n    border-color: #E74C3C; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #E74C3C; }\n    .panel-danger > .panel-heading .badge {\n      color: #E74C3C;\n      background-color: #fff; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #E74C3C; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #ecf0f1;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 22.5px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: none;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.card {\n  position: relative;\n  display: block;\n  margin-bottom: 21px;\n  background-color: #fff;\n  border: 1px solid #ecf0f1;\n  border-radius: 4px; }\n\n.card-block {\n  padding: 15px; }\n  .card-block:before, .card-block:after {\n    content: \" \";\n    display: table; }\n  .card-block:after {\n    clear: both; }\n\n.card-title {\n  margin-top: 0;\n  margin-bottom: 10.5px; }\n\n.card-subtitle {\n  margin-top: -10.5px;\n  margin-bottom: 0; }\n\n.card-text:last-child {\n  margin-bottom: 0; }\n\n.card-link:hover {\n  text-decoration: none; }\n\n.card-link + .card-link {\n  margin-left: 15px; }\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px; }\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.card-header {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-bottom: 1px solid #ecf0f1; }\n  .card-header:before, .card-header:after {\n    content: \" \";\n    display: table; }\n  .card-header:after {\n    clear: both; }\n  .card-header:first-child {\n    border-radius: 4px 4px 0 0; }\n\n.card-footer {\n  padding: 10px 15px;\n  background-color: #ecf0f1;\n  border-top: 1px solid #ecf0f1; }\n  .card-footer:before, .card-footer:after {\n    content: \" \";\n    display: table; }\n  .card-footer:after {\n    clear: both; }\n  .card-footer:last-child {\n    border-radius: 0 0 4px 4px; }\n\n.card-header-tabs {\n  margin-right: -5px;\n  margin-bottom: -10px;\n  margin-left: -5px;\n  border-bottom: 0; }\n\n.card-header-pills {\n  margin-right: -5px;\n  margin-left: -5px; }\n\n.card-primary {\n  background-color: #2C3E50;\n  border-color: #2C3E50; }\n  .card-primary .card-header,\n  .card-primary .card-footer {\n    background-color: transparent; }\n\n.card-success {\n  background-color: #18BC9C;\n  border-color: #18BC9C; }\n  .card-success .card-header,\n  .card-success .card-footer {\n    background-color: transparent; }\n\n.card-info {\n  background-color: #3498DB;\n  border-color: #3498DB; }\n  .card-info .card-header,\n  .card-info .card-footer {\n    background-color: transparent; }\n\n.card-warning {\n  background-color: #F39C12;\n  border-color: #F39C12; }\n  .card-warning .card-header,\n  .card-warning .card-footer {\n    background-color: transparent; }\n\n.card-danger {\n  background-color: #E74C3C;\n  border-color: #E74C3C; }\n  .card-danger .card-header,\n  .card-danger .card-footer {\n    background-color: transparent; }\n\n.card-outline-primary {\n  background-color: transparent;\n  border-color: #2C3E50; }\n\n.card-outline-secondary {\n  background-color: transparent;\n  border-color: #95a5a6; }\n\n.card-outline-info {\n  background-color: transparent;\n  border-color: #3498DB; }\n\n.card-outline-success {\n  background-color: transparent;\n  border-color: #18BC9C; }\n\n.card-outline-warning {\n  background-color: transparent;\n  border-color: #F39C12; }\n\n.card-outline-danger {\n  background-color: transparent;\n  border-color: #E74C3C; }\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-color: rgba(255, 255, 255, 0.2); }\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff; }\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-subtitle,\n.card-inverse .card-blockquote .blockquote-footer {\n  color: rgba(255, 255, 255, 0.65); }\n\n.card-inverse .card-link:hover, .card-inverse .card-link:focus {\n  color: #fff; }\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0; }\n\n.card-img {\n  border-radius: .25em; }\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 15px; }\n\n.card-img-top {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px; }\n\n.card-img-bottom {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 20px; }\n\n.modal-footer {\n  padding: 20px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 13px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 15px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 15px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: fadein(rgba(0, 0, 0, 0.2), 5%);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: fadein(rgba(0, 0, 0, 0.2), 5%); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: fadein(rgba(0, 0, 0, 0.2), 5%);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: fadein(rgba(0, 0, 0, 0.2), 5%); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203a'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\n.navbar {\n  border-width: 0; }\n  .navbar-default .badge {\n    background-color: #fff;\n    color: #2C3E50; }\n  .navbar-inverse .badge {\n    background-color: #fff;\n    color: #18BC9C; }\n  .navbar-brand {\n    line-height: 1; }\n\n.btn {\n  border-width: 2px; }\n\n.btn:active {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.text-primary,\n.text-primary:hover {\n  color: #2C3E50; }\n\n.text-success,\n.text-success:hover {\n  color: #18BC9C; }\n\n.text-danger,\n.text-danger:hover {\n  color: #E74C3C; }\n\n.text-warning,\n.text-warning:hover {\n  color: #F39C12; }\n\n.text-info,\n.text-info:hover {\n  color: #3498DB; }\n\ntable a:not(.btn),\n.table a:not(.btn) {\n  text-decoration: underline; }\n\ntable .dropdown-menu a,\n.table .dropdown-menu a {\n  text-decoration: none; }\n\ntable .success,\ntable .warning,\ntable .danger,\ntable .info,\n.table .success,\n.table .warning,\n.table .danger,\n.table .info {\n  color: #fff; }\n  table .success > th > a,\n  table .success > td > a,\n  table .success > a,\n  table .warning > th > a,\n  table .warning > td > a,\n  table .warning > a,\n  table .danger > th > a,\n  table .danger > td > a,\n  table .danger > a,\n  table .info > th > a,\n  table .info > td > a,\n  table .info > a,\n  .table .success > th > a,\n  .table .success > td > a,\n  .table .success > a,\n  .table .warning > th > a,\n  .table .warning > td > a,\n  .table .warning > a,\n  .table .danger > th > a,\n  .table .danger > td > a,\n  .table .danger > a,\n  .table .info > th > a,\n  .table .info > td > a,\n  .table .info > a {\n    color: #fff; }\n\ntable > thead > tr > th,\ntable > tbody > tr > th,\ntable > tfoot > tr > th,\ntable > thead > tr > td,\ntable > tbody > tr > td,\ntable > tfoot > tr > td,\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border: none; }\n\ntable-bordered > thead > tr > th,\ntable-bordered > tbody > tr > th,\ntable-bordered > tfoot > tr > th,\ntable-bordered > thead > tr > td,\ntable-bordered > tbody > tr > td,\ntable-bordered > tfoot > tr > td,\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ecf0f1; }\n\n.form-control,\ninput {\n  border-width: 2px;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n  .form-control:focus,\n  input:focus {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label,\n.has-warning .form-control-feedback {\n  color: #F39C12; }\n\n.has-warning .form-control,\n.has-warning .form-control:focus {\n  border: 2px solid #F39C12; }\n\n.has-warning .input-group-addon {\n  border-color: #F39C12; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label,\n.has-error .form-control-feedback {\n  color: #E74C3C; }\n\n.has-error .form-control,\n.has-error .form-control:focus {\n  border: 2px solid #E74C3C; }\n\n.has-error .input-group-addon {\n  border-color: #E74C3C; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label,\n.has-success .form-control-feedback {\n  color: #18BC9C; }\n\n.has-success .form-control,\n.has-success .form-control:focus {\n  border: 2px solid #18BC9C; }\n\n.has-success .input-group-addon {\n  border-color: #18BC9C; }\n\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  border-color: transparent; }\n\n.pager a,\n.pager a:hover {\n  color: #fff; }\n\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  background-color: #3be6c4; }\n\n.close {\n  color: #fff;\n  text-decoration: none;\n  opacity: 0.4; }\n  .close:hover, .close:focus {\n    color: #fff;\n    opacity: 1; }\n\n.alert .alert-link {\n  color: #fff;\n  text-decoration: underline; }\n\n.progress {\n  height: 10px;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n  .progress .progress-bar {\n    font-size: 10px;\n    line-height: 10px; }\n\n.well {\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\na.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus {\n  border-color: #ecf0f1; }\n\na.list-group-item-success.active {\n  background-color: #18BC9C; }\n\na.list-group-item-success.active:hover, a.list-group-item-success.active:focus {\n  background-color: #15a589; }\n\na.list-group-item-warning.active {\n  background-color: #F39C12; }\n\na.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus {\n  background-color: #e08e0b; }\n\na.list-group-item-danger.active {\n  background-color: #E74C3C; }\n\na.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus {\n  background-color: #e43725; }\n\n.panel-default .close {\n  color: #2C3E50; }\n\n.modal .close {\n  color: #2C3E50; }\n\n.popover {\n  color: #2C3E50; }\n\n.navbar {\n  margin-bottom: 0px; }\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(94)();
  // imports
  
  
  // module
  exports.push([module.id, ".toast-title{font-weight:700}.toast-message{-ms-word-wrap:break-word;word-wrap:break-word}.toast-message a,.toast-message label{color:#FFF}.toast-message a:hover{color:#CCC;text-decoration:none}.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1}.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}.rtl .toast-close-button{left:-.3em;float:left;right:.3em}button.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.toast-top-center{top:0;right:0;width:100%}.toast-bottom-center{bottom:0;right:0;width:100%}.toast-top-full-width{top:0;right:0;width:100%}.toast-bottom-full-width{bottom:0;right:0;width:100%}.toast-top-left{top:12px;left:12px}.toast-top-right{top:12px;right:12px}.toast-bottom-right{right:12px;bottom:12px}.toast-bottom-left{bottom:12px;left:12px}#toast-container{position:fixed;z-index:999999;pointer-events:none}#toast-container *{-webkit-box-sizing:border-box;box-sizing:border-box}#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;-webkit-box-shadow:0 0 12px #999;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)}#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}#toast-container>div:hover{-webkit-box-shadow:0 0 12px #000;box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer}#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto}#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto}.toast{background-color:#030303}.toast-success{background-color:#51A351}.toast-error{background-color:#BD362F}.toast-info{background-color:#2F96B4}.toast-warning{background-color:#F89406}.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}@media all and (max-width:240px){#toast-container>div{padding:8px 8px 8px 50px;width:11em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:241px) and (max-width:480px){#toast-container>div{padding:8px 8px 8px 50px;width:18em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:481px) and (max-width:768px){#toast-container>div{padding:15px 15px 15px 50px;width:25em}#toast-container>div.rtl{padding:15px 50px 15px 15px}}html {\n  min-height: 100%;\n  margin: 0px;\n}body {\n  height: 100%;\n  min-height: 100vh;\n  min-width: 320px;\n}#root, #root>* {\n  height: 100%;\n  min-height: 100vh;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n", "", {"version":3,"sources":["/./App/Html/toaster.min.css","/./App/Html/Html.global.css"],"names":[],"mappings":"AAAA,aAAa,eAAe,CAAC,eAAe,yBAAyB,oBAAoB,CAAC,sCAAsC,UAAU,CAAC,uBAAuB,WAAW,oBAAoB,CAAC,oBAAoB,kBAAkB,YAAY,UAAU,YAAY,eAAe,gBAAgB,WAAW,iCAAiC,yBAAyB,WAAW,+DAA+D,yBAAyB,aAAa,CAAC,oDAAoD,WAAW,qBAAqB,eAAe,WAAW,+DAA+D,wBAAwB,CAAC,yBAAyB,WAAW,WAAW,UAAU,CAAC,0BAA0B,UAAU,eAAe,eAAe,SAAS,uBAAuB,CAAC,kBAAkB,MAAM,QAAQ,UAAU,CAAC,qBAAqB,SAAS,QAAQ,UAAU,CAAC,sBAAsB,MAAM,QAAQ,UAAU,CAAC,yBAAyB,SAAS,QAAQ,UAAU,CAAC,gBAAgB,SAAS,SAAS,CAAC,iBAAiB,SAAS,UAAU,CAAC,oBAAoB,WAAW,WAAW,CAAC,mBAAmB,YAAY,SAAS,CAAC,iBAAiB,eAAe,eAAe,mBAAmB,CAAC,mBAA8C,8BAA8B,qBAAqB,CAAC,qBAAqB,kBAAkB,oBAAoB,gBAAgB,eAAe,4BAA4B,YAAY,kBAAmE,gCAAgC,4BAA4B,iCAA+D,yBAAyB,WAAW,WAAW,+DAA+D,wBAAwB,CAAC,yBAAyB,cAAc,4BAA4B,qCAAqC,CAAC,2BAAyD,iCAAiC,yBAAyB,UAAU,gEAAgE,0BAA0B,cAAc,CAAC,6BAA6B,swBAAswB,CAAC,8BAA8B,8yBAA8yB,CAAC,gCAAgC,kgBAAkgB,CAAC,gCAAgC,suBAAsuB,CAAC,+EAA+E,YAAY,iBAAiB,iBAAiB,CAAC,uFAAuF,UAAU,iBAAiB,iBAAiB,CAAC,OAAO,wBAAwB,CAAC,eAAe,wBAAwB,CAAC,aAAa,wBAAwB,CAAC,YAAY,wBAAwB,CAAC,eAAe,wBAAwB,CAAC,gBAAgB,kBAAkB,OAAO,SAAS,WAAW,sBAAsB,WAAW,+DAA+D,wBAAwB,CAAC,iCAAiC,qBAAqB,yBAAyB,UAAU,CAAC,yBAAyB,wBAAwB,CAAC,qCAAqC,YAAY,SAAS,CAAC,0CAA0C,WAAW,UAAU,CAAC,CAAC,uDAAuD,qBAAqB,yBAAyB,UAAU,CAAC,yBAAyB,wBAAwB,CAAC,qCAAqC,YAAY,SAAS,CAAC,0CAA0C,WAAW,UAAU,CAAC,CAAC,uDAAuD,qBAAqB,4BAA4B,UAAU,CAAC,yBAAyB,2BAA2B,CAAC,CAAC;ECEpzM,iBAAiB;EACjB,YAAY;CACb;EAGC,aAAa;EACb,kBAAkB;EAClB,iBAAiB;CAClB;EAGC,aAAa;EACb,kBAAkB;EAClB,+BAAuB;UAAvB,uBAAuB;CACxB","file":"Html.global.css","sourcesContent":[".toast-title{font-weight:700}.toast-message{-ms-word-wrap:break-word;word-wrap:break-word}.toast-message a,.toast-message label{color:#FFF}.toast-message a:hover{color:#CCC;text-decoration:none}.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:20px;font-weight:700;color:#FFF;-webkit-text-shadow:0 1px 0 #fff;text-shadow:0 1px 0 #fff;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80);line-height:1}.toast-close-button:focus,.toast-close-button:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}.rtl .toast-close-button{left:-.3em;float:left;right:.3em}button.toast-close-button{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.toast-top-center{top:0;right:0;width:100%}.toast-bottom-center{bottom:0;right:0;width:100%}.toast-top-full-width{top:0;right:0;width:100%}.toast-bottom-full-width{bottom:0;right:0;width:100%}.toast-top-left{top:12px;left:12px}.toast-top-right{top:12px;right:12px}.toast-bottom-right{right:12px;bottom:12px}.toast-bottom-left{bottom:12px;left:12px}#toast-container{position:fixed;z-index:999999;pointer-events:none}#toast-container *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}#toast-container>div{position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:15px 15px 15px 50px;width:300px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;-moz-box-shadow:0 0 12px #999;-webkit-box-shadow:0 0 12px #999;box-shadow:0 0 12px #999;color:#FFF;opacity:.8;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=80);filter:alpha(opacity=80)}#toast-container>div.rtl{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}#toast-container>div:hover{-moz-box-shadow:0 0 12px #000;-webkit-box-shadow:0 0 12px #000;box-shadow:0 0 12px #000;opacity:1;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);filter:alpha(opacity=100);cursor:pointer}#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}#toast-container.toast-bottom-center>div,#toast-container.toast-top-center>div{width:300px;margin-left:auto;margin-right:auto}#toast-container.toast-bottom-full-width>div,#toast-container.toast-top-full-width>div{width:96%;margin-left:auto;margin-right:auto}.toast{background-color:#030303}.toast-success{background-color:#51A351}.toast-error{background-color:#BD362F}.toast-info{background-color:#2F96B4}.toast-warning{background-color:#F89406}.toast-progress{position:absolute;left:0;bottom:0;height:4px;background-color:#000;opacity:.4;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=40);filter:alpha(opacity=40)}@media all and (max-width:240px){#toast-container>div{padding:8px 8px 8px 50px;width:11em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:241px) and (max-width:480px){#toast-container>div{padding:8px 8px 8px 50px;width:18em}#toast-container>div.rtl{padding:8px 50px 8px 8px}#toast-container .toast-close-button{right:-.2em;top:-.2em}#toast-container .rtl .toast-close-button{left:-.2em;right:.2em}}@media all and (min-width:481px) and (max-width:768px){#toast-container>div{padding:15px 15px 15px 50px;width:25em}#toast-container>div.rtl{padding:15px 50px 15px 15px}}\n","@import \"./toaster.min.css\";\nhtml {\n  min-height: 100%;\n  margin: 0px;\n}\n\nbody {\n  height: 100%;\n  min-height: 100vh;\n  min-width: 320px;\n}\n\n#root, #root>* {\n  height: 100%;\n  min-height: 100vh;\n  box-sizing: border-box;\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 198 */
/***/ function(module, exports) {

  module.exports = "<!—- Yandex.Metrika counter --> <script type=\"text/javascript\"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.counter.add(\"yandex\", new Ya.Metrika({\"id\":34970175,\"clickmap\":true,\"trackLinks\":true,\"accurateTrackBounce\":true,\"webvisor\":true,\"trackHash\":true})); } catch(e) { } }); var n = d.getElementsByTagName(\"script\")[0], s = d.createElement(\"script\"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = \"text/javascript\"; s.async = true; s.src = \"https://mc.yandex.ru/metrika/watch.js\"; if (w.opera == \"[object Opera]\") { d.addEventListener(\"DOMContentLoaded\", f, false); } else { f(); } })(document, window, \"yandex_metrika_callbacks\"); </script> <noscript><div><img src=\"https://mc.yandex.ru/watch/34970175\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript> <!-- /Yandex.Metrika counter -->\n<!—- Google counter --> <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');  ga('create', 'UA-51665590-2', 'auto');  ga('send', 'pageview');</script> <!—- /Google counter -—>\n<!-- Yandex.Metrika counter --> <script type=\"text/javascript\"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter26302521 = new Ya.Metrika({ id:26302521, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName(\"script\")[0], s = d.createElement(\"script\"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = \"text/javascript\"; s.async = true; s.src = \"https://mc.yandex.ru/metrika/watch.js\"; if (w.opera == \"[object Opera]\") { d.addEventListener(\"DOMContentLoaded\", f, false); } else { f(); } })(document, window, \"yandex_metrika_callbacks\");</script><noscript><div><img src=\"https://mc.yandex.ru/watch/26302521\" style=\"position:absolute; left:-9999px;\" alt=\"\" /></div></noscript> <!-- /Yandex.Metrika counter -->\n"

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _config = __webpack_require__(8);
  
  var _config2 = _interopRequireDefault(_config);
  
  var _config3 = __webpack_require__(7);
  
  var _config4 = _interopRequireDefault(_config3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = _config2.default.server(_config4.default, {
    client: __webpack_require__(121).default, // eslint-disable-line
  
    env: ("development") || process.env.ENV || 'development',
    port: process.env.PORT || 8080,
  
    protocol: 'https',
    db: {
      uri: process.env.DB || 'mongodb://lsk-example1:lsk-example1-pass@publicdb.mgbeta.ru:27000/lsk-example1'
    },
    jwt: {
      secret: 'REPLACE_ME_PLEASE'
    }
  });

/***/ },
/* 200 */
/***/ function(module, exports) {

  "use strict";

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map
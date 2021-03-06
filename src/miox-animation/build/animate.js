'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _transition = require('./transition');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animationNames = ['slide', 'push'];
var directionMap = { '0': 'none', '-1': 'backward', '1': 'forward' };
var times = { 'push': 300, 'slide': 300 };

var Animate = function () {
    function Animate(app, name) {
        (0, _classCallCheck3.default)(this, Animate);

        this.app = app;
        this.animateName = name || 'slide';
        this.time = times[this.animateName] || 300;
    }

    (0, _createClass3.default)(Animate, [{
        key: 'leave',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(node, name, direction) {
                var cls;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (node) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 2:
                                _context.next = 4;
                                return this.app.emit('animate:leave:before', node);

                            case 4:
                                cls = 'page-' + (name || this.animateName) + '-out-' + directionMap[direction];

                                node.classList.add(cls);
                                _context.next = 8;
                                return this.animated(node, cls);

                            case 8:
                                _context.next = 10;
                                return this.app.emit('animate:leave:after', node);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function leave(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return leave;
        }()
    }, {
        key: 'enter',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(node, name, direction) {
                var cls;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (node) {
                                    _context2.next = 2;
                                    break;
                                }

                                return _context2.abrupt('return');

                            case 2:
                                _context2.next = 4;
                                return this.app.emit('animate:enter:before', node);

                            case 4:
                                cls = 'page-' + (name || this.animateName) + '-in-' + directionMap[direction];

                                node.classList.add(cls);
                                _context2.next = 8;
                                return this.animated(node, cls);

                            case 8:
                                _context2.next = 10;
                                return this.app.emit('animate:enter:after', node);

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function enter(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return enter;
        }()
    }, {
        key: 'animated',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(node, cls) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return (0, _transition2.default)(node, this.time, 'animate');

                            case 2:
                                node.classList.remove(cls);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function animated(_x7, _x8) {
                return _ref3.apply(this, arguments);
            }

            return animated;
        }()
    }]);
    return Animate;
}();

exports.default = Animate;
module.exports = exports['default'];
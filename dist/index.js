'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactDOM = require('react-dom');
var GeminiScrollbar = require('gemini-scrollbar');
var PropTypes = require('prop-types');

var ReactGeminiScrollbar = function (_React$Component) {
    _inherits(ReactGeminiScrollbar, _React$Component);

    function ReactGeminiScrollbar() {
        _classCallCheck(this, ReactGeminiScrollbar);

        return _possibleConstructorReturn(this, (ReactGeminiScrollbar.__proto__ || Object.getPrototypeOf(ReactGeminiScrollbar)).apply(this, arguments));
    }

    _createClass(ReactGeminiScrollbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scrollbar = new GeminiScrollbar({
                element: ReactDOM.findDOMNode(this),
                autoshow: this.props.autoshow,
                forceGemini: this.props.forceGemini,
                createElements: false,
                onResize: this.props.onResize,
                minThumbSize: this.props.minThumbSize
            }).create();
        }

        /**
         * Holds the reference to the GeminiScrollbar instance.
         * @property scrollbar <public> [Object]
         */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.scrollbar.update();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.scrollbar) {
                this.scrollbar.destroy();
            }
            this.scrollbar = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                autoshow = _props.autoshow,
                forceGemini = _props.forceGemini,
                onResize = _props.onResize,
                minThumbSize = _props.minThumbSize,
                other = _objectWithoutProperties(_props, ['className', 'children', 'autoshow', 'forceGemini', 'onResize', 'minThumbSize']),
                classes = '';

            if (className) {
                classes += ' ' + className;
            }

            return React.createElement(
                'div',
                _extends({}, other, { className: classes }),
                React.createElement(
                    'div',
                    { className: 'gm-scrollbar -vertical' },
                    React.createElement('div', { className: 'thumb' })
                ),
                React.createElement(
                    'div',
                    { className: 'gm-scrollbar -horizontal' },
                    React.createElement('div', { className: 'thumb' })
                ),
                React.createElement(
                    'div',
                    { className: 'gm-scroll-view' },
                    children
                )
            );
        }
    }]);

    return ReactGeminiScrollbar;
}(React.Component);

ReactGeminiScrollbar.propTypes = {
    autoshow: PropTypes.bool,
    forceGemini: PropTypes.bool,
    onResize: PropTypes.func,
    minThumbSize: PropTypes.number
};

ReactGeminiScrollbar.defaultProps = {
    autoshow: false,
    forceGemini: false,
    minThumbSize: 20
};

module.exports = ReactGeminiScrollbar;

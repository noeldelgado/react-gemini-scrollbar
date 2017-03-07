'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var ReactDOM = require('react-dom');
var GeminiScrollbar = require('gemini-scrollbar');

module.exports = React.createClass({
    displayName: 'GeminiScrollbar',

    propTypes: {
        autoshow: React.PropTypes.bool,
        forceGemini: React.PropTypes.bool,
        onResize: React.PropTypes.func,
        minThumbSize: React.PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            autoshow: false,
            forceGemini: false,
            minThumbSize: 20
        };
    },


    /**
     * Holds the reference to the GeminiScrollbar instance.
     * @property scrollbar <public> [Object]
     */
    scrollbar: null,

    componentDidMount: function componentDidMount() {
        this.scrollbar = new GeminiScrollbar({
            element: ReactDOM.findDOMNode(this),
            autoshow: this.props.autoshow,
            forceGemini: this.props.forceGemini,
            createElements: false,
            onResize: this.props.onResize,
            minThumbSize: this.props.minThumbSize
        }).create();
    },
    componentDidUpdate: function componentDidUpdate() {
        this.scrollbar.update();
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.scrollbar) {
            this.scrollbar.destroy();
        }
        this.scrollbar = null;
    },
    render: function render() {
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
});

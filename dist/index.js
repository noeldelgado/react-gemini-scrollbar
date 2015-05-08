'use strict';

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var GeminiScrollbar = require('gemini-scrollbar');

module.exports = React.createClass({
    displayName: 'GeminiScrollbar',

    propTypes: {
        autoshow: React.PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
        return {
            autoshow: false
        };
    },

    /**
     * Holds the reference to the GeminiScrollbar instance.
     * @property scrollbar <public> [Object]
     */
    scrollbar: null,

    componentDidMount: function componentDidMount() {
        this.scrollbar = new GeminiScrollbar({
            element: this.getDOMNode(),
            autoshow: this.props.autoshow,
            createElements: false
        }).create();
    },

    componentDidUpdate: function componentDidUpdate() {
        this.scrollbar.update();
    },

    componentWillUnmount: function componentWillUnmount() {
        this.scrollbar.destroy();
        this.scrollbar = null;
    },

    render: function render() {
        var _props = this.props;
        var className = _props.className;
        var children = _props.children;
        var other = _objectWithoutProperties(_props, ['className', 'children']);
        var classes = '';

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
                { className: 'gm-scroll-view', ref: 'scroll-view' },
                children
            )
        );
    }
});

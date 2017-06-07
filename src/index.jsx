const React = require('react');
const ReactDOM = require('react-dom');
const GeminiScrollbar = require('gemini-scrollbar');
const PropTypes = require('prop-types');

class ReactGeminiScrollbar extends React.Component {
    displayName: 'GeminiScrollbar'

    /**
     * Holds the reference to the GeminiScrollbar instance.
     * @property scrollbar <public> [Object]
     */
    scrollbar: null

    componentDidMount() {
        this.scrollbar = new GeminiScrollbar({
            element: ReactDOM.findDOMNode(this),
            autoshow: this.props.autoshow,
            forceGemini: this.props.forceGemini,
            createElements: false,
            onResize: this.props.onResize,
            minThumbSize: this.props.minThumbSize
        }).create();
    }

    componentDidUpdate() {
        this.scrollbar.update();
    }

    componentWillUnmount() {
        if (this.scrollbar) {
            this.scrollbar.destroy();
        }
        this.scrollbar = null;
    }

    render() {
        const {className, children, autoshow, forceGemini, onResize, minThumbSize, ...other} = this.props,
            classes = '';

        if (className) {
            classes += ' ' + className;
        }

        return (
            <div {...other} className={classes}>
                <div className='gm-scrollbar -vertical'>
                    <div className='thumb'></div>
                </div>
                <div className='gm-scrollbar -horizontal'>
                    <div className='thumb'></div>
                </div>
                <div className='gm-scroll-view'>
                    {children}
                </div>
            </div>
        );
    }
}

ReactGeminiScrollbar.propTypes = {
    autoshow: PropTypes.bool,
    forceGemini: PropTypes.bool,
    onResize: PropTypes.func,
    minThumbSize: PropTypes.number
}

ReactGeminiScrollbar.defaultProps = {
    autoshow: false,
    forceGemini: false,
    minThumbSize: 20
}

module.exports = ReactGeminiScrollbar;

import React from 'react';

export class Router extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            route: window.location.pathname
        };
    }

    onUrlChange = () => {
        this.setState({route: window.location.hash});
    };

    componentDidMount() {
        window.addEventListener('popstate', this.onUrlChange);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.onUrlChange);
    }

    render() {
        return this.props.children({
            route: this.state.route,
            changeRoute: path => {
                window.history.pushState(null, '', path);
                this.setState({route: path});
            }
        });
    }
}

import * as React from 'react';

export default class App extends React.Component<React.Props<{}>, {}> {
    render() {
        return (
            <div>
                <h1>react-router-redux sample app</h1>
                <hr />
                {this.props.children}
            </div>
        );
    }
}

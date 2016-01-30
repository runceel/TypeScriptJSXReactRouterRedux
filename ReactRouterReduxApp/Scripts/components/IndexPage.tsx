import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as ReactRedux from 'react-redux';
import * as reducers from '../reducers';
import * as ReactRouterRedux from 'react-router-redux';
import * as counterActions from '../actions/counterActions';

interface IndexPageProps extends ReactRouter.RouteComponentProps<{}, {}> {
    push?: ReactRouterRedux.PushAction;
    increment?: (x: number) => void;
    decrement?: (x: number) => void;
    count?: number;
}

class IndexPage extends React.Component<IndexPageProps, {}> {
    render() {
        const {
            count,
            increment,
            decrement,
            push
        } = this.props;

        return (
            <div>
                <span>{count}</span>
                <br />
                <button onClick={() => increment(1)}>INC</button>
                <button onClick={() => decrement(1)}>DEC</button>
                <hr />
                <button onClick={() => push('/next?count=' + count)}>Go to next page</button>
            </div>
        );
    }
}

function select(state: reducers.AppState): IndexPageProps {
    return {
        count: state.counter.count
    };
}

export default ReactRedux.connect(select, {
    push: ReactRouterRedux.push,
    increment: counterActions.increment,
    decrement: counterActions.decrement
})(IndexPage);
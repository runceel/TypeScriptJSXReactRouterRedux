import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';
import * as ReactRouterRedux from 'react-router-redux';
import * as reducers from '../reducers';

interface NextPageProps extends ReactRouter.RouteComponentProps<{}, {}> {
    goBack?: ReactRouterRedux.GoBackAction;
}

class NextPage extends React.Component<NextPageProps, {}> {
    render() {
        const {
            goBack
        } = this.props;
        const query = this.props.location.query as { count: string };
        return (
            <div>
                <span>{query.count}</span>
                <br/>
                <button onClick={() => goBack()}>GoBack</button>
            </div>
        );
    }
}

function select(state: reducers.AppState): NextPageProps {
    return {
    };
}

export default ReactRedux.connect(select, {
    goBack: ReactRouterRedux.goBack
})(NextPage);
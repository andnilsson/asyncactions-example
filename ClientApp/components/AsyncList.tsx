import { IAsyncPayload } from '../domain/store';
import { IApplicationState } from '../store';
import * as React from 'react';
import { connect } from "react-redux";

type Props = IApplicationState;
class AsyncList extends React.Component<Props, {}>{
    render() {
        return (
            <div>
                {this.props.async.asyncactions.map((a,i) => {
                    return (
                        <div style={{borderBottom: "1px solid #ccc", padding: "5px"}} key={i}>{`${a.type}: ${a.asyncExecTime} ms`}</div>
                    )
                })}
            </div>
        );
    }
}

export default connect(
    (state: IApplicationState) => state,
    {}
)(AsyncList)
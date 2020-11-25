import React from 'react';
import { connect } from 'react-redux';
import CreateForm from './CreateForm';
import { editText } from "../../_action/text";

const Edit = (props) => {
    return (
        <div>
            <label>Edit Form</label>
            <CreateForm
                textReducer={props.textReducer}
                onSubmit={(textReducer) => {
                    props.dispatch(editText(props.textReducer.id, textReducer));
                    props.history.push("/");
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        textReducer: state.textReducer.find((text) => text.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(Edit);

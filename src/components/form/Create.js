import React from 'react';
import { connect } from 'react-redux';
import CreateForm from './CreateForm';
import { addText } from "../../_action/text";

const Create = (props) => {
    return (
        <CreateForm
            onSubmit={(text) => {
                props.dispatch(addText(text));
                props.history.push("/");
            }}
        />
    );
};

export default connect()(Create);

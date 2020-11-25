import React, { Component } from 'react';
import { Form } from "semantic-ui-react";


class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.textReducer,
            text: props.textReducer ? props.textReducer.text : '',
            error: '',
            textInput: null
        };
    }

    componentDidMount() {
        this.textInput.focus();
    }

    onTextChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({ text }));
    };



    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.trim()) {
            this.setState(() => ({ error: " please enter your text" }));
        }
        else {
            this.props.onSubmit({
                text: this.state.text.trim()
            });
        }
    };


    render() {
        return (
            <>
                {this.state.error && <p>{this.state.error}</p>}
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Enter Something:</label>
                        <input
                            type="text"
                            placeholder="vd: milk"
                            value={this.state.text}
                            onChange={this.onTextChange}
                            ref={(e) => (this.textInput = e)}
                        />
                    </Form.Field>
                </Form>
            </>
        );
    }
}



export default (CreateForm);
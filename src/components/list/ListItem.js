import React from 'react';
import { connect } from 'react-redux';
import { removeText } from "../../_action/text";
import { Icon, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const ListItem = ({ dispatch, id, text, count }) => {
    return (
        <>
            <List divided verticalAlign='middle'>
                <List.Item>
                    <List.Content floated='right'>
                        <p style={{ cursor: "pointer" }} onClick={() => {
                            dispatch(removeText({ id }));
                        }}><Icon name="trash alternate outline" /></p>
                    </List.Content>
                    <List.Content>
                        <NavLink to={`/edit/${id}`}>
                            {count}. {text}
                        </NavLink>
                    </List.Content>
                </List.Item>
            </List>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        textReducer: state.textReducer
    };
};

export default connect(mapStateToProps)(ListItem);

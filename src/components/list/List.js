/* eslint-disable no-mixed-operators */
import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const List = (props) => {
    const here = <NavLink to="/create">Create Note</NavLink>;

    // This option already exits

    return (
        <div>


            {props.textReducer.length === 0 && <p>Let's {here} Your Notes Here </p>}
            {props.textReducer.length > 0 &&
                <Segment>
                    {props.textReducer.map((text, index) => {
                        return <ListItem key={text.id} {...text} count={index + 1} />;
                    })
                    }
                </Segment>
            }
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        textReducer: state.textReducer

    };
};

export default connect(mapStateToProps)(List);

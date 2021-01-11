import React from 'react';
import classes from './ActivitySummary.module.css'
import ActivityContainer from './ActivityContainer';


const Activitysummary = props => {
    
    const result = [
        { color: '#A3D16EFF', type: "active"},
        { color: '#ED6C59FF', type: "passed"},
        { color: '#FEF781FF', type: "scheduled"}
    ]

    return (
        <React.Fragment>
            <div className={classes.ActivitySummary}>
                {result.map(a => {
                    return (
                        <ActivityContainer
                            tasks={props.tasks}
                            key={a.type}
                            type={a.type}
                            color={a.color} 
                            status={props.type}
                            selectType={props.selectType}
                            />
                    )
                })}
            </div>
        </React.Fragment>
    );
};

export default Activitysummary;
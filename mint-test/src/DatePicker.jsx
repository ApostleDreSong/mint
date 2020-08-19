import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@material-ui/core';

const minTwoDigits = (val) => {
    return ('0' + val).slice(-2);
}

const dayAfter = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate() + 1;
    return `${year}-${minTwoDigits(month)}-${minTwoDigits(day)}`
}

const dayBefore = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate() - 1;
    return `${year}-${minTwoDigits(month)}-${minTwoDigits(day)}`
}

let yesterday = dayBefore();
let tomorrow = dayAfter();

export default function DatePicker(props) {
    const [startDate, setStartDate] = useState(yesterday);
    const [endDate, setEndDate] = useState(tomorrow);

    // useEffect(() => {
    //     // props.setQueryParams({startDate, endDate, queryString});
    // }, [startDate, endDate, queryString])

    const changeStartDate = e => {
        setStartDate(e.target.value)
    }

    const changeEndDate = e => {
        setEndDate(e.target.value)
    }

    return (
        <div>
            <Grid container justify="space-between" style={{ marginBottom: "10px" }}>
                <Grid item>
                    <TextField label="Start Date" type="date" value={startDate} onChange={changeStartDate} />
                </Grid>
                <Grid item>
                    <TextField label="End Date" type="date" value={endDate} onChange={changeEndDate} />
                </Grid>
            </Grid>
        </div>
    )
}

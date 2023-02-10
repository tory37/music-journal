import { Paper, Typography } from '@mui/material'
import React from 'react'
import LogRecordModel from '../models/LogRecord'

interface Props {
    record: LogRecordModel
}

export default function LogRecord(props: Props) {
  return (
    <Paper style={{ padding: "16px" }} variant="outlined">
        <Typography variant='overline' gutterBottom>
            {Date.parse(props.record.dateLogged).toString()}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
            BPM Achieved: {props.record.bpmAchieved}
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
            Notes
        </Typography>
        <Typography variant='body2' gutterBottom>
            {props.record.notes}
        </Typography>
    </Paper>
  )
}

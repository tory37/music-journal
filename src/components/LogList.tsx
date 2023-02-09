import React from 'react';
import Grid from '@mui/material/Grid';
import LogModel from '../models/Log';
import Log from './Log';

interface Props {
    logsPerPage: Number,
    logs: LogModel[]
}

export default function LogList(props: Props) {
  return (
    <Grid container spacing={2}>
      {props.logs.map((log) => (
        <Grid item xs={12}>
          <Log log={log} />
        </Grid>
      ))}
    </Grid>
  )
}

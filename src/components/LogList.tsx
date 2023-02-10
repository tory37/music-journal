import React from 'react';
import Grid from '@mui/material/Grid';
// Models
import LogModel from '../models/Log';
import TagModel from '../models/Tag';
// Components
import LogPreview from './LogPreview';

interface Props {
    logsPerPage: Number,
    logs: LogModel[],
    allTags: TagModel[],
}

export default function LogList(props: Props) {
  return (
    <Grid container spacing={2}>
      {props.logs.map((log) => (
        <Grid item xs={12} key={log.id}>
          <LogPreview log={log} allTags={props.allTags} />
        </Grid>
      ))}
    </Grid>
  )
}

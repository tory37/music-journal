import React from 'react'
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LogModel from '../models/Log';
import { Grid } from '@mui/material';

interface Props {
  log: LogModel
}

export default function Log(props: Props) {
  return (
    <Card
      sx={{
        width: '100%'
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h5' gutterBottom>
              {props.log.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' gutterBottom>
              {props.log.type}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

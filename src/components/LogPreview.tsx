import React, { useState } from 'react';
// MUI 
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Chip, Divider, Grid, Pagination, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// Components
import LogRecord from './LogRecord';
// Models
import LogModel from '../models/Log';
import TagModel from '../models/Tag';
import TagChip from './TagChip';

interface Props {
  log: LogModel,
  allTags: TagModel[]
}

export default function LogPreview(props: Props) {
  const [recordIndex, setRecordIndex] = useState<number>(0);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const handleRecordPageChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setRecordIndex(p - 1);
  }
  
  return (
    <Card
      sx={{
        width: '100%'
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant='h5'>
              {props.log.title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' align="right">
              Target BPM: {props.log.targetBpm}
            </Typography>
          </Grid>
          <Grid container spacing={1} item xs={12}>
            {props.log.tags.map((tag) => (
              <Grid item key={tag}>
                <TagChip tagId={tag} allTags={props.allTags} />
              </Grid>
            ))}
          </Grid>
          {props.log.records && props.log.records.length > 0 && (
            <Grid item container spacing={2} direction="row" xs={12}>
                <Grid item xs={12} key={props.log.records[recordIndex].dateLogged}>
                  <LogRecord record={props.log.records[recordIndex]} />
                </Grid>
            </Grid>
          )}
          <Grid 
            container 
            item 
            xs={12} 
            justifyContent="space-between"
            alignItems="center"
          >
            {props.log.records && props.log.records.length > 0 && (
              <Grid item xs={6}>
                <Pagination 
                  count={props.log.records.length} 
                  onChange={handleRecordPageChange}
                />
              </Grid>
            )}
            {!props.log.records || props.log.records.length === 0 && (
              <Grid item xs={6}>
                <Typography variant="subtitle1">
                  No Records Yet
                </Typography>
              </Grid>
            )}
            <Grid item>
              <Button variant="outlined">
                <AddIcon sx={{
                  mr: 1
                }} />
                New Record
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

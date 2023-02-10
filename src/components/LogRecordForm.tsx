import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, Paper, TextField } from '@mui/material'
import React from 'react'
import SaveIcon from '@mui/icons-material/Save';

interface Props {
  // onClickSave: (logs)
}

export default function LogRecordForm() {
  return (
    <Paper style={{ padding: "16px", width: '100%' }} variant="outlined">
      <FormControl sx={{width: '100%'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField id="achieved-bpm" label="BPM Achieved" type='number' aria-describedby="max-bpm-achieved" />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id="notes" label="Notes" 
              type='multiline' aria-describedby="notes" 
              multiline
              sx={{
                width: '100%',
                minHeight: '100px'
              }}
            />
          </Grid>
          <Grid item>
            <Button variant="outlined"> {/*onClick={handleClickNewRecord}>*/}
              <SaveIcon sx={{
                mr: 1
              }} />
              Save
            </Button>
          </Grid>
        </Grid>
      </FormControl>
  </Paper>
  )
}

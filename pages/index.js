import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/styles'
import SEO from '../seo/index-seo'
import NextSeo from 'next-seo';
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))
const index = props => {
  const classes = useStyles();
 
  return(
    <>
    <NextSeo config={SEO}/>
       <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
    </>
  )
};
export default index

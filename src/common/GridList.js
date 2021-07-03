import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import logo from './../assets/logo.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    //backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    //color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


export default function SingleLineGridList() {
  const classes = useStyles();

  const [upcomingMovieList, setstate] = useState([])



  function loadData() {
    fetch("http://localhost:8085/api/v1/movies")
      .then(input => input.json())
      .then(data => setstate(data))
  }
  useEffect(() => {
  
    loadData();
    console.log('success');
    
  })
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
        {upcomingMovieList.map(tile => {
          <GridListTile key={tile.id}>
            <img src={tile.poster_url} alt={tile.code} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
})}
      </GridList>
    </div>
      
   )
}
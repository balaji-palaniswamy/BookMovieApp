import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import FilterCard from './FilterCard';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        
        //backgroundColor: theme.palette.background.paper,
    },
    gridList: {
         width: '100',   
        margin: '16px',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    button:{
        cursor:'pointer',
    },
    topPane:{
        flex:'3',
        margin:'16px',

    },
    bottomPane:{
        flex:'1',
        margin:'16px',
    }
}));


export default function ShowingReleasedMovies() {
    const classes = useStyles();

    const [tileData, setstate] = useState([])



    function loadData() {
        fetch("http://localhost:8085/api/v1/movies")
            .then(input => input.json())
            .then(data => setstate(data.movies))
    }
    useEffect(() => {
        loadData();
    }, [1])

    return (
        <div className={classes.root}>
            <div className={classes.topPane}>
            <GridList cellHeight={350} className={classes.gridList} cols={3} spacing='16'>
                
                {tileData.map((tile) => (
                    <GridListTile key={tile.id}>
                        <img src={tile.poster_url} alt={tile.title} className={classes.button} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Release Date: {tile.release_date}</span>}
                            
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
        <div className={classes.bottomPane}>
            <FilterCard />
        </div>
            
        </div>
    );
}
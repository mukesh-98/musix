/**
 * Created by ovesh on 25/8/20.
 */
import React from 'react';
import {useState , useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import {fade,makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';
import fire from 'firebase';
import Button from "@material-ui/core/Button";
import history from './history';
import  InputBase from  '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import Chip from "@material-ui/core/Chip";
import AlbumOutlinedIcon from '@material-ui/icons/AlbumOutlined';
import Badge from "@material-ui/core/es/Badge/Badge";
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
const useStyles = makeStyles ((theme) => ({
    card:{
        width: 'auto',
        minWidth: 120,
        margin: 10

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        color: theme.palette.common.black,
    },
    appBar:{
        padding: 10,
        backgroundColor: theme.palette.common.white,
        display:"flex",
        flexDirection: 'row'
    },
    mainArea:{
        marginTop:theme.spacing(10),
    },
    signOut:{
        border:'1px solid grey',
    },
    grow: {
        flexGrow: 1,
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        border:'1px solid grey',
        borderRadius: 100,
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '300%',

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',

    },
    chip:{
        margin:10,
    },
    large:{
        width:200,
        height:200,
        boxShadow:'13px 11px 7px #9E9E9C',
    }


}));


function Home(){
const  classes = useStyles();

    const [artist, setArtist] = useState({});


    const fetchData = async () => {
       const songs = await fetch("https://spotify-api-wrapper.appspot.com/artist/bruno");
       const songData =  await songs.json();
       setArtist(data => data = songData.artists.items[0]);

    };


const signOut =() => {
    fire.auth().signOut();
    localStorage.clear();
    history.push("/");

};



    useEffect( () => {
        fetchData();
    },[]);

    return (
        <div>
            <AppBar className={classes.appBar}>
                <Grid  container
                       direction="row"
                       alignItems="center"
                >
                    <Typography variant="h4" color="inherit" className={classes.title}>
                        Musix
                    </Typography>
                    <div className={classes.grow} />
                    <Button variant="outlined" color="secondary" onClick={signOut}>
                        Sign Out
                    </Button>
                </Grid>

            </AppBar>
            <Container>
                <div className={classes.mainArea}>
                    <Grid
                        spacing={2}
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item  xs={12}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <Search />
                                </div>
                                <InputBase
                                    fullWidth
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Grid>
                    <Artist artist={{artist}}/>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}


function Artist({artist}) {
    const  classes = useStyles();
    const {followers , genres ,images, name} = artist.artist;
    var prof =[];
    images ? prof = images[0]: prof= "";
    return(
        <div>
            <Avatar alt='Avatar' src={prof.url? prof.url : ""} className={classes.large} />
            <Typography variant='h3'> {name}</Typography>
             {
                 genres ? genres.map((val) =>
                     <Chip key={val}
                        variant="outlined"
                        color="secondary"
                        icon={<AlbumOutlinedIcon />}
                        size="small"
                        label={val}
                        className={classes.chip}
                     /> )
                     : ""}
            <Badge badgeContent={ followers ? followers.total : 0 } max={999}color="secondary">

                { followers && followers.total  ? <FavoriteBorderOutlined  /> : '' }
            </Badge>
        </div>
    );
}
export default Home;


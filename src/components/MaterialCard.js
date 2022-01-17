import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { useDispatch } from 'react-redux';
import { Movies } from '../redux/actions';


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "20px 20px 20px 10px",
    "&:hover":{
      cursor:"pointer",
      boxShadow: "rgba(255, 254, 255, 0.9) 0px 5px 15px"
    }
  },
  media: {
    height: "300px",
    objectFit: "contain",
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MaterialCard = (props) => {
  const classes = useStyles();
  console.log(props, "props")
  const [favourite, setFavourite] = React.useState(<FavoriteIcon />)
  const handleFavourite = () =>{
    setFavourite(<FavoriteIcon style={{color:"#DC143C"}}/>);
    // getMovies();
  }
  const dispatch = useDispatch();
  const handleModal = () =>{
    dispatch({type:Movies.OPEN_MODAL})
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image= {`${IMG_BASE_URL}${props.poster_path}`}
        title={props.original_title}
      />
      <CardContent>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <p style={{fontWeight:700, marginBottom:"10px", textTransform:"capitalize"}}>
            {props.original_title.split(" ")[0]}
          </p>
          <div>
          <IconButton onClick={()=> handleFavourite()} aria-label="add to favorites" style={{marginTop:"-8px"}}>
            {favourite}
          </IconButton>
          <IconButton  onClick={() => handleModal()} aria-label="add to favorites" style={{marginTop:"-8px"}}>
            <PlayCircleOutlineIcon />
          </IconButton>
          </div>  
        </div>
        
        <Typography variant="body2" color="textSecondary" component="p">
          {props.overview.substr(0,105)}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default MaterialCard;
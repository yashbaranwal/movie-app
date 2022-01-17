import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Movies } from '../redux/actions';
import ReactPlayer from 'react-player/lazy'


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

const CustomModal = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { modalState } = useSelector(state => state.movieData)
  const dispatch = useDispatch();

  

  const handleClose = () => {
    dispatch({type:Movies.CLOSE_MODAL})
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  );

  return (
    <div>
      
      <Modal
        open={modalState}
        onClose={handleClose}
        aria-labelledby="modal"
        aria-describedby="modal"
      >
        {body}
      </Modal>
    </div>
  );
}


export default CustomModal;
import {Button, makeStyles} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useEffect, useState } from "react";
import {useWindowScroll} from "react-use";

const handleScroll = () =>{
    window.scrollTo({top:0, behavior:"smooth"})
};

const useStyle = makeStyles({
    scrollToTopBtn:{
        // backgroundColor:"#F3582B",
        backgroundColor:"#74e7bc",
        color:"#fff",
        height:"60px",
        width:"20px",
        position:"fixed",
        bottom:"32px",
        right:"20px",
        borderRadius:"100%",
        zIndex:"1",
        "&:hover":{
            backgroundColor:"#334366",
            color:"#fff", 
        }
    }
});
const ScrollToTop = () =>{
    const  {y:pageYOffset} = useWindowScroll();
    const [visible, setVisibility] = useState(false);
    const classes = useStyle();

    useEffect(() =>{
        if(pageYOffset > 400){
            setVisibility(true);
        }
        else{
            setVisibility(false);
        }
    },[pageYOffset]);

    if(!visible){
        return false;
    }

    return(
    <Button onClick={handleScroll} className={classes.scrollToTopBtn}><ArrowUpwardIcon/></Button>
    );

};

export default ScrollToTop;
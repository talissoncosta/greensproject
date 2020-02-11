import React,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Modal, Fade, Backdrop,Typography,Button,TextField,Grid,CardMedia,CardHeader,InputLabel,MenuItem,InputAdornment} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {fetcher,update} from '../services/api'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }, 
  root: {
        minWidth: 400,
    },
  input: {
        margin:10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 12,
    },media: {
        margin:'auto',
        height: 200,
        width:200
    },
}));

const styleInput = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
export default function ModalEdit({open,setOpen,types,item,setUpdateTable}) {
 const classes = useStyles();
  const [openSnackSuccess, setOpenSnackSuccess] = useState(false);
  const [openSnackError, setOpenSnackError] = useState(false);
  const [openSnackRequired, setOpenSnackRequired] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState(0);
  const [img, setImg] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorPrice, setErrorPrice] = useState(false);


    const checkRequiredFields = async (product) => {
        if(product.title == ''){
            setErrorTitle(true);
            return false;
        }
        if(product.price == ''){
            setErrorPrice(true);
            return false;
        }
        return true;
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseSnackRequired = () => {
        setOpenSnackRequired(false);
    };
    const handleCloseSnackSuccess = () => {
        setOpenSnackSuccess(false);
    };
    const handleCloseSnackError = () => {
        setOpenSnackError(false);
    };
    const saveChanges = async () => {
        let product = {
            title,
            type,
            description,
            height,
            width,
            price,
            rating
        }
        if(!await checkRequiredFields(product)){
            setOpenSnackRequired(true);
            return;
        }


        const response = await update(`/products/${item}`,product)
        if(response.success){
            setOpenSnackSuccess(true);
            setOpen(false);
            setUpdateTable();
        }else{
            setOpenSnackError(true);
            setOpen(false);
        }
    };


    function renderTypes(type, index) {
        return (
            <MenuItem key={type} value={type}>{Capitalize(type)}</MenuItem>
        )
    }
    async function fetchData() {
        const response = await fetcher(`/products/${item}`);
        setTitle(response.title);
        setImg(response.filename);
        setDescription(response.description);
        setType(response.type);
        setHeight(response.height);
        setWidth(response.width);
        setPrice(response.price);
        setRating(response.rating);
    }
    const handleChange = event => {
        setType(event.target.value);
    };
    const handleTitle = event => {
        if(event.target.value.length > 0 && event.target.value.length < 2)
            setErrorTitle(false);
        setTitle(event.target.value);
    };
    const handleHeight = event => {
        setHeight(event.target.value);
    };
    const handleWidth = event => {
        setWidth(event.target.value);
    };
    const handlePrice = event => {
        if(event.target.value.length > 0 && event.target.value.length < 2)
            setErrorPrice(false);
        setPrice(event.target.value);
    };
    const handleDescription = event => {
        setDescription(event.target.value);
    };
  return (
   <div>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onRendered={()=>fetchData() }
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <Card className={classes.root}>
                  <CardHeader title="Edit product" />
                  <Avatar className={classes.media} src={`/images/${img}`} />
                <CardContent style={{padding:'30px'}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    error={errorTitle}            
                                    required
                                    fullWidth
                                    autoFocus
                                    value={title}
                                    onChange={handleTitle}
                                    label="Title" 
                                    variant="outlined" />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
 
                            <Grid item xs={9}>
                                <TextField  
                                    fullWidth 
                                    value={description} 
                                    label="Description" 
                                    variant="outlined" 
                                    onChange={handleDescription}
                                />
                            </Grid>
                           <Grid item  xs>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select labelId="demo-simple-select-label"
                                    required
                                    id="demo-simple-select"
                                    autoWidth={true}
                                    value={type}
                                    onChange={handleChange}
                                    >
                                    {
                                        types.map(renderTypes)
                                    }
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs>
                            <TextField
                                label="Height"
                                value={height}
                                onChange={handleHeight}
                                variant="outlined"
                                type="number"
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField 
                                    value={width} 
                                    onChange={handleWidth} 
                                    label="Width" 
                                    variant="outlined" 
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField                                     
                                    required
                                    error={errorPrice}            
                                    fullWidth
                                    value={price}
                                    onChange={handlePrice}
                                    label="Price" 
                                    variant="outlined" 
                                    type="number"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">U$</InputAdornment>,
                                    }}
                                />

                            </Grid>


                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography style={styleInput} component="legend">Rating</Typography>
                                <Rating
                                    style={styleInput}
                                    name="simple-controlled"
                                    size = "large"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
                <CardActions  style={styleInput}>
                    <Button variant="contained" onClick={()=>setOpen(false)} size="large" color="secondary">
                        Cancel
                    </Button>
                    <Button variant="contained"  onClick={()=>saveChanges()} size="large" color="primary">
                        Confirm changes
                    </Button>
           
                </CardActions>
            </Card>
        </Fade>
      </Modal>
        <Snackbar open={openSnackSuccess} autoHideDuration={3000} onClose={handleCloseSnackSuccess} >
            <Alert  severity="success">
                Sucess! The product was succesfully updated!
            </Alert>
        </Snackbar>
        <Snackbar open={openSnackError} autoHideDuration={3000} onClose={handleCloseSnackError} >
            <Alert  severity="error">
                Failed! There was an error when tried to update the product!
            </Alert>
        </Snackbar>
        <Snackbar open={openSnackRequired} autoHideDuration={3000} onClose={handleCloseSnackRequired} >
            <Alert  severity="error">
                Check all required fields!
            </Alert>
        </Snackbar>     
    </div>
  )
};


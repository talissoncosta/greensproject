import React, {useCallback,useState} from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import {Container,Paper,Button,FormGroup,Backdrop,CircularProgress} from '@material-ui/core';
import {useDropzone} from 'react-dropzone'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {post} from '../services/api'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const inputStyle = {

    padding: '100px',
    cursor: 'pointer'

}

const styleForm = {
    padding: '10px',
    margin: 'auto',
    alignContent: 'center',
}
const stylePaper = {
    flex:1,
    flexDirection: 'row',
    cursor: 'pointer',
    padding: '10px',
    margin: 'auto',
    alignContent: 'center'
    
}
const styleInput = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
const styleBack = {
    zIndex: 9999,
    color: '#fff'
}
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Upload({updateTable}){

    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [fileName, setFileName] = useState('');
    const [contentFile, setContentFile] = useState([]);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [contentError, setContentError] = useState("Failed to upload file!");
    const [contentSuccess, setContentSuccess] = useState("File upload successfully!");
    const classes = useStyles();

    const uploadProducts = async () => {
        handleToggleBackdrop();
        let response = await post('/products',contentFile);

        if(response.success){
            setOpenSuccess(true);
            updateTable();
            setContentFile([]);
        }else{
            setOpenError(true);
        }
        setFileName('');
        handleCloseBackdrop();

    };
    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSuccess(false);
    };
    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            if(file.type != 'application/json'){
                setContentError("Failed to upload file! The selected file is not a JSON!")
                setOpenError(true);
                return;
            }
            setFileName(file.name)
            const reader = new FileReader()

            reader.onabort = () => {
                setContentError('File reading was aborted!');
                setOpenError(true);
            }
            reader.onerror = () => {
                setContentError('File reading has failed!');
                setOpenError(true);
            }
            reader.onload = () => {
                const binaryStr = reader.result;
                setContentFile(binaryStr);
            }
            reader.readAsText(file)
        })

    }, [])
    const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})

    return (
            <Container styles={inputStyle}>

                <FormGroup style={styleForm} className="App">
                            <input
                    type="file"
                    name="file-5[]"
                    id="file-5"
                    className="inputfile inputfile-4"
                    hidden
                />
                <Paper style={stylePaper} {...getRootProps()}>
                    <Container style={styleInput}>
                    <input style={styleInput}{...getInputProps()} />
                    <CloudUploadIcon  style={{ fontSize: 100}}  color="primary" />
                    </Container>
                    {
                        fileName ?
                        <Container style={{ fontSize: 20,textAlign:'center'}}>
                            <CheckCircleOutlineIcon style={{ fontSize: 20,color:'green'}} />  {fileName}
                        </Container> : ""
                    }

                    <Container>
                    {
                        isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop or click to select your JSON file</p>
                    }
                    </Container>
    
                </Paper>
                    {
                        fileName ?
                        <Container style={{textAlign:'center'}}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => uploadProducts()}
                                startIcon={<CloudUploadIcon />}
                            >
                                Upload
                            </Button>
                        </Container>  : ""
                    } 
                </FormGroup>

                <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError} >
                    <Alert  severity="error">
                        {contentError}
                    </Alert>
                </Snackbar>

                <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess} >
                    <Alert  severity="success">
                        {contentSuccess}
                    </Alert>
                </Snackbar>
                <Backdrop style={styleBack} open={openBackdrop} onClick={handleCloseBackdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Container>

    )

};
  
  

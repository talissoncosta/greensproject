import React, {useEffect,useState} from 'react'
import {Button,ButtonGroup,Container,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Snackbar} from '@material-ui/core';
import { Delete,Edit } from '@material-ui/icons';
import MUIDataTable from "mui-datatables";
import {MuiThemeProvider } from '@material-ui/core/styles';
import ModalEdit from './ModalEdit';
import moment from 'moment'
import MuiAlert from '@material-ui/lab/Alert';
import {fetcher,remove} from '../services/api'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const options = {
  print:false,
  selectableRows:false,
  responsive:'stacked'
};
 
export default function TableProducts({updateTable}){
  const [tableData, setTableData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [itemSelected, setItemSelected] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [types, setTypes] = useState([]);
  const [openSnackSuccess, setOpenSnack] = useState(false);
  const [openSnackError, setOpenSnackError] = useState(false);
  const [tableUpdate,setTableUpdate] = useState(false);
      async function handleData(data) {
        
        let arr = [];
        let arrType = [];

        data.forEach(el => {
          arrType.push(el.type);
          arr.push([
            el._id,
            el.title,
            el.type,
            el.rating,
            el.price,
            moment(el.createdAt).format('YYYY-MM-DD HH:mm:ss'),
            el.height,
            el.width,
            el.description,
          ])
        });
        setTypes([...new Set(arrType)])
        return arr;
      }
      async function handleUpdateTable(){
        setTableUpdate(!tableUpdate)
      };
      async function confirmDelete(id){
        setItemSelected(id);
        setOpenDialog(true);
      };
      const handleCloseSnackError = () => {
        setOpenSnackError(false);
    };
      const handleCloseSnackSuccess = () => {
          setOpenSnack(false);
      };
      async function editProduct(id) {
        setItemSelected(id);
        setOpenModal(true);

      };
      async function handleCloseDialog(){
        setOpenDialog(false);
      };
      async function deleteProduct(){
        const response = await remove(`/products/${itemSelected}`);
        if(response.success){
          setOpenSnack(true)
          handleUpdateTable();
        }else{
          setOpenSnackError(true)
        }
        setOpenDialog(false);
      };
     const columns = [

      {
        name: "Id",
        options: {
          display: false,
          download:false
        }
      },
      {
        name: "Title",
        options: {
          filter: true,
        }
      },
      {
        name: "Type",
        options: {
          filter: true,
        }
      },
      {
        name: "Rating",
        options: {
          filter: true,
        }
      },
      {
        name: "Price",
        options: {
          filter: true,
        }
      },
      {
        name: "Created",
        options: {
          filter: true,
          sort: true,
        }
      },{
        name: "Height",
        options: {
          filter: true,
          sorte:true,
          display:false
        }
      }, {
        name: "Width",
        options: {
          filter: true,
          sorte:true,
          display:false
        }
      }, {
        name: "Description",
        options: {
          filter: true,
          sort: true,
          display:false
        }
      },
      {
        name: "Action",
        options: {
          filter: false,
          sort: false,
          empty: true,
          download:false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <ButtonGroup color="primary" aria-label="outlined button group">
                <Button onClick={() => editProduct(tableMeta.rowData[0])} > <Edit/>Edit</Button>
                <Button onClick={() => confirmDelete(tableMeta.rowData[0])} color="secondary"><Delete/>Delete</Button>
              </ButtonGroup>

            );
          }
        }
      },
    ];
  async function fetchData() {
    const response = await fetcher(`/products`);
    if(response.length > 0)
      setTableData(await handleData(response));
  }
  useEffect(() => {
      fetchData();
  }, [updateTable || tableUpdate]);

  // useEffect(() => {
  //     fetchData();
  // }, []);
  return (
    
    <Container>
      <ModalEdit open={openModal} setOpen={setOpenModal} types={types} item={itemSelected} setUpdateTable={handleUpdateTable}/>
        <MUIDataTable 
          title={"Products List"} 
          data={tableData} 
          columns={columns} 
          options={options} 
        />

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle >
         Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" autoFocus onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button color="success" onClick={deleteProduct} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openSnackSuccess} autoHideDuration={3000} onClose={handleCloseSnackSuccess} >
          <Alert  severity="success">
              Sucess! The product was succesfully deleted!
          </Alert>
      </Snackbar>
      <Snackbar open={openSnackError} autoHideDuration={3000} onClose={handleCloseSnackError} >
          <Alert  severity="error">
              Failed to delete the product!
          </Alert>
      </Snackbar>
    </Container>
  )
};


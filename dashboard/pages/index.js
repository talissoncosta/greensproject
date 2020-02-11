
import React, {useCallback,useState} from 'react'
import Layout from '../components/Layout';
import Upload from '../components/Upload';
import Menu from '../components/Menu';
import TableProducts from '../components/Table';
import {Container,Paper} from '@material-ui/core';

const boxStyle = {
    margin: 'auto',
    padding: '30px',
    marginTop: '30px',
    width: '50%'
}


export default function Index() {
  const [updateTable, setUpdateTable] = useState(false);

  const update = () => {
      setUpdateTable(true);
  };

  return (
    <Layout  >
        <Container>
            <Menu/>
            <Paper style={boxStyle} square>
              Phasellus et magna nec ipsum maximus scelerisque eget ut dui. Nam feugiat, mi vitae mattis semper, magna augue fermentum massa, ac ultricies eros odio et velit. Proin in enim tempor odio posuere dignissim non at neque. Proin vel ligula pellentesque, gravida eros volutpat, mollis mauris. Sed tincidunt odio odio, sit amet interdum nulla condimentum in.  </Paper>
            <Upload updateTable={()=>update()}/>
            <TableProducts updateTable={updateTable}/>

        </Container>
    </Layout>
  );
}
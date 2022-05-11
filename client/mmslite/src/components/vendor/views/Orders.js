// import * as React from 'react';
// instal dependencies:
// npm i @mui/x-data-grid
// npm i axios
import { useState, useEffect} from 'react'
// import { DataGrid, GridActionsCellItem, GridToolbar} from '@mui/x-data-grid';
// import { GridColDef } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import {red, amber} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import axios from 'axios'
import Title from '../components/Title';


/*********************Start of function Order Table*************************** */
export default function OrderTable() {
  //button colors used in Status column
  const theme = createTheme({
    palette: {
      cancelColor: {
        // light: '#757ce8',
        //deepOrange
        main: red[500],
        // dark: '#002884',
        contrastText: '#fff',
      },
      pendingColor: {
        // light: '#ff7961',
        main: amber[600],
        // dark: '#ba000d',
        // contrastText: '#000',
      },
    },
  });


  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pageSize, setPageSize] = useState(5);
  //store order data list
  const [orders, setOrder] = useState([])
  // const [status, setStatus] = useState('');
 
  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = async () => {
    const res = await axios.get('http://localhost:3001/api/orders')    
    setOrder(res.data)
  }

  // const toggleAdmin = useCallback(
  //   (id) => () => {
  //     console.log(id)
  //     setOrder((prevRows) =>
  //       prevRows.map((orders) =>
  //         orders.id === id ? orders.status ='Pending' : orders,
  //       ),
  //     );
  //   },
  //   [],
  // );

  //retrieve row id and new status value after update
  const updateOrder = async(id, stat) => { 
    //send updates to database with item id and item value 
    await axios.put(`http://localhost:3001/api/orders/${id}`, {status: stat})    
    //refresh order data list
    getOrders()      
  }

  //retrieve data after editing status column in table
  const handleCommmit = (e) =>{    
    updateOrder(e.id, e.value)
    // orders.map(r=>{
    //   if(r.id === e.id){
    //     // console.log(e.value)        
    //     updateOrder(e.id, e.value)
    //   }      
    // })    
  };  
  
  //when delete icon is clicked, delete row
  const deleteOrder = async(id) => {
    //send changes to database
    await axios.delete(`http://localhost:3001/api/orders/${id}`)
      getOrders()
  } 

  //column headers and column format
  const columns = [  
      { field: 'product_id', headerName: 'Product ID', minWidth: 100, 
        align: 'center', headerAlign: 'center'
      },
      { field: 'name', headerName: 'Person Name', minWidth: 130 },
      { field: 'contact_no', headerName: 'Contact', minWidth: 100 },
      { field: 'quantity', headerName: 'Quantity', minWidth: 30, 
        align: 'center', headerAlign: 'center' 
      },
      {
        field: 'total', headerName: 'Total', minWidth: 30,
        align: 'center', headerAlign: 'center'        
      },
      {
        field: 'mode', headerName: 'Delivery Mode', minWidth: 125,
        align: 'center', headerAlign: 'center', type: 'string',
      },
      {
        field: 'date2', headerName: 'Date', minWidth: 150,
        align: 'center', headerAlign: 'center', type: 'date',        
      },
      {
        field: 'message', headerName: 'Message', minWidth: 170,
        align: 'left', type: 'string',
      },
      {
        field: 'status', headerName: 'Status', minWidth: 150,
        align: 'right', headerAlign: 'center', type: 'singleSelect',
        description: "Double click to edit",        
        valueOptions:['Confirmed', 'Cancelled', 'Pending'],
        renderCell: (params) => (
          <ThemeProvider theme={theme}> 
            {params.value}         
            <IconButton
              variant="contained"
              
              color={params.value ==="Confirmed" ? "success": params.value ==="Cancelled" ? "cancelColor": "pendingColor"}
              size="small"
              style={{ marginLeft: 16 }}
              // onClick={(editStatus(params.id))}
            >
             <EditLocationRoundedIcon/>
            </IconButton>
          </ThemeProvider>
        ),        
        editable: true,         
      },
      {
        field: 'actions', minWidth: 20, align: 'left',
        type: 'actions',
        getActions: (params) => [          
          // <GridActionsCellItem
          //   icon={<EditLocationRoundedIcon/>}
          //   label="Double click to update"            
          //   showInMenu
          // />,          
          // <GridActionsCellItem
          //   icon={<DeleteIcon />}
          //   label="Delete"
          //   onClick={()=>deleteOrder(params.id)}
          // />,          
        ],
      },
  ]  
  
  //Table contain order data
  return (    
    <div style={{ height: 400, width: '90%' }}>
      <Title>Orders</Title>
      {/* <DataGrid
        rows={orders}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}        
        localeText={{
          toolbarDensity: 'Size',
          toolbarDensityLabel: 'Size',
          toolbarDensityCompact: 'Small',
          toolbarDensityStandard: 'Medium',
          toolbarDensityComfortable: 'Large',
        }}
        components={{Toolbar: GridToolbar}}        
        onCellEditCommit={handleCommmit}
        initialState={{ pinnedColumns: {right: ['actions'] } }}
        // disableColumnSelector
        disableColumnMenu
        
        // disableSelectionOnClick
      >         
      </DataGrid> */}
     
    </div>
  )
}

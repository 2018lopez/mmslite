import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import {  invoicePending, viewInvoiceByNo} from '../../../../service/call';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import PreviewIcon from '@mui/icons-material/Preview';
import Grid from '@mui/material/Grid';
import { SeverityPill } from './util';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';

import {
  Box,
 
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
export default function PendingTable() {
    
    const [invoices, setInvoice] = React.useState([])
    const [search, setSearch] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [viewInvoices, setViewInvoice] = React.useState([])

    

    React.useEffect(()=>{
  
        
        getInvoices()
       
      }, []);

      const getInvoices = async () =>{
        
    
        const res = await invoicePending()
      
        setInvoice(res.data)
        
     }

     const handleSearch = () =>{

        const filteredRows = invoices.filter((row) => {
            return row.Invoice.toLowerCase().includes(search.toLowerCase());
          });
          setInvoice(filteredRows);
        
        console.log(search)
     }
    const cancelSearch = () =>{
        setSearch("")
        getInvoices()
    }
    const handleClose = (event) => {
      setOpen(false);
      
    };
    const handleClickOpen = () => {
      setOpen(true);
    }
   
    const viewInvoice = async (invoice) =>{

      handleClickOpen()
      const res = await viewInvoiceByNo(invoice)
      setViewInvoice(res)
      console.log(res)

    }
  
    return (
      <div>
          <Grid container justifyContent="flex-start"> 
            <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Search by Invoice No. </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                value={search}
                    onChange={ (e) => setSearch(e.target.value) }
                   
            
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleSearch}
                    edge="end"
                    >
                        <SearchIcon/>
                    </IconButton>
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={cancelSearch}
                   
                    >
                    <CloseIcon/>
                    </IconButton>
                </InputAdornment>
                }
                label="Search By Invoice No"
            />
            </FormControl>
        </Grid>        
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Invoice No</StyledTableCell>
                <StyledTableCell align="left">Due date</StyledTableCell>
                <StyledTableCell align="left">Total</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="left">Actions</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {invoices.map((invoice,index) => (
                <StyledTableRow key={invoice.id}>
                <StyledTableCell component="th" scope="row">
                    {invoice.Invoice}
                </StyledTableCell>
                <StyledTableCell align="left">{invoice.Date}</StyledTableCell>
                <StyledTableCell align="left">{invoice.total}</StyledTableCell>
                
                <StyledTableCell align="left"><SeverityPill
                    color={(invoice.Status === 'Paid' && 'success')
                    || (invoice.Status === 'Pending' && 'error')
                    || 'warning'}
                  >{invoice.Status}</SeverityPill></StyledTableCell>
                <StyledTableCell align="left"> <Button spacing="2" color="info" variant="contained"><EditIcon/></Button><Button color="warning" variant="contained" onClick={() => viewInvoice(invoice.Invoice)}><PreviewIcon/></Button>
              </StyledTableCell>
                
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>

    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Card>
                <CardHeader
               
                title = {'Invoice View'}
                />
                <Divider />
                <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                   <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Invoice No. 
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                          -   {viewInvoices.InvoiceNo}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Status:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                           <SeverityPill
                              color={(viewInvoices.Status === 'Paid' && 'success')
                              || (viewInvoices.Status === 'Pending' && 'error')
                              || 'warning'}
                            >{viewInvoices.Status}</SeverityPill>
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Total:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                       ${viewInvoices.Total}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Due:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                            {viewInvoices.DueDate}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Rent:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        ${viewInvoices.Rent}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Electricity:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                        ${viewInvoices.Light}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Water:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                          ${viewInvoices.Water}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Other:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                          ${viewInvoices.Other}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Stall:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                         {viewInvoices.Stall}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <Grid item>
                       <Typography display="inline"variant="h6" gutterBottom component="div">
                       Market:
                      </Typography>
                      <Typography display="inline" variant="subtitle1" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                          {viewInvoices.Market}
                      </Typography>
                      
                       </Grid>
                     
                     
                    </Grid>
                </Grid>
                </CardContent>
                <Divider />
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
                >
               
                <Button
                    color="error"
                    variant="contained"
                    onClick={handleClose}
                >
                    Close
                </Button>
                </Box>
                </Card>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
      
      </div>
    );
  }
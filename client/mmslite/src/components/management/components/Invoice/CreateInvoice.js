import * as React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {  getMarkets,stalls,createInvoice } from '../../../../service/call';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import Alert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";



import {
    Box,
   
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField
  } from '@mui/material';

export default function CreateInvoice() {
    const [open, setOpen] = React.useState(false);
    const [markets, setMarket] = React.useState([]);
    const [stalles, setStall] = React.useState([])
    const[status, setStatus] = React.useState([])
    const[msg, setMsg]=React.useState([])
    const [snack, setSnack] = React.useState(false);

  
    const [values, setValues] = React.useState({
        market: 'San Ignacio Market',
       stall: 'None',
       dueData: '2022-05-24',
       rent:0,
       water:0,
       light:0,
       other:0,
       dDetails:'None',
       total:0

      });
    

    React.useEffect(()=>{
  
        
        getMarket()
        getStalls()
       
       
      }, []);

      const getMarket = async () =>{
        
    
        const res = await getMarkets()
      
        setMarket(res.data)
        //getStalls()
        
     }




    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (event) => {
        setOpen(false);
        setValues({
            market: 'San Ignacio Market',
            stall: 'None',
            dueDate: '2022-05-24',
            rent:0,
            water:0,
            light:0,
            other:0,
            dDetails:'None',
            total:0
            })
      };
      const handleChange =  (event) => {
      
        
      getStalls()
        setValues({
            ...values,
            [event.target.name]: event.target.value})

            

        
      }
     

      const getStalls = async() =>{

        

        const res = await stalls(values.market)
       
        setStall(res.data)
        console.log(":::", values.market)
        
     }


      const invoiceCreate = async () =>{
          const itotal =  parseFloat(values.rent) + parseFloat(values.water) + parseFloat(values.light) + parseFloat(values.other);
       const data = {...values, total: itotal }

          const res = await createInvoice(data)
          try{

            if(res.status === 200){
                setStatus('success')
                setMsg(res.data.msg)
                setSnack(true)
              
              setTimeout(() => handleClose(), 3000)
    
    
            }
          }catch(e){
  
          
            
          }


      }

     
  
  
    return (
      <div>
          <Button variant="outlined" color="success" onClick={handleClickOpen} > <AddIcon/> Create Invoice  </Button>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <form
            autoComplete="off"
            noValidate>
            <Card>
                <CardHeader
                subheader="Filled all Fields"
                title="Create Invoice"
                />
                <Divider />
                <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        label="Select Market"
                        name="market"
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.market}
                        onChange={ handleChange}
                        variant="outlined"
                    >
                          {markets.map((option) => (
                  <option
                    key={option.m_name}
                    value={option.m_name}
                  >
                    {option.m_name}
                  </option>
                ))}
                    </TextField>
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        label="Select Stall"
                        name="stall"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.stall}
                        variant="outlined"
                        
                    >

                        {stalles.map((option) => (
                        <option
                            key={option.stall}
                            value={option.stall}
                        >
                            {option.stall}
                        </option>
                        ))} 
                            
                    </TextField>
                    </Grid>
                    <Grid item md={6}
                    xs={12}>
                     <TextField
                      fullWidth
                        id="date"
                        label="Due Date"
                        type="date"
                        defaultValue="2022-05-24"
                    
                        onChange={handleChange}
                        name="dueDate"
                                        
                                        value={values.dueDate}
                        
                     />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       
                    
                    </Grid>
                    <Divider />
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                    <TextField
                        fullWidth
                        label="Rental Fee"
                        name="rent"
                        onChange={handleChange}
                        type="number"
                        value={values.rent}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                   <TextField
                        fullWidth
                        label="Water Fee"
                        name="water"
                        onChange={handleChange}
                        type="number"
                        value={values.water}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                   <TextField
                        fullWidth
                        label="Electricity Fee"
                        name="light"
                        onChange={handleChange}
                        type="number"
                        value={values.light}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                        <TextField
                        fullWidth
                        label="Other Fee Details"
                        name="dDetails"
                        onChange={handleChange}
                        type="text"
                        value={values.dDetails}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                       <TextField
                        fullWidth
                        label="Other Fee"
                        name="other"
                        onChange={handleChange}
                        type="number"
                        value={values.other}
                        variant="outlined"
                    />
                    </Grid>
                    <Grid
                    item
                    md={6}
                    xs={12}
                    >
                          <Grid item>  <h3 > Total:</h3> <span name='total'  value={ values.total} onChange={handleChange}>${parseFloat(values.rent) + parseFloat(values.water) + parseFloat(values.light) + parseFloat(values.other)}</span> </Grid>
                       
                    </Grid>
                </Grid>
                </CardContent>
                <Divider />
                <Snackbar open={snack}>
                <  Alert severity={status}>{msg}</Alert>
                </Snackbar>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
                >
                <Button
                    color="success"
                    variant="contained"
                    onClick={ invoiceCreate}
                >
                    <SaveIcon/> Save 
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    onClick={handleClose}
                >
                   <CancelIcon/> Cancel
                </Button>
                </Box>
            </Card>
        </form>
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
      </div>
    );
  }
  
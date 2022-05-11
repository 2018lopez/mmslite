import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

//import PropTypes from 'prop-types';

// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Dialog from '@mui/material/Dialog';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';

// import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Select from '@mui/material/Select';
// import { fontWeight } from '@mui/system';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: orange[700],
//     },
//     secondary: {
//       main: purple[700],
//     },
//   },
// });




export default function BillingInfo() {
  // const [open, setOpen] = React.useState(false);
  // // const [age, setAge] = React.useState('');
  // const [dValue, setDValue] = React.useState();

  // const handleChange = (newValue) => {
  //   setDValue(newValue);
  //   console.log(newValue)
  // };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason !== 'backdropClick') {
  //     setOpen(false);
  //   }
  // };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* top section */}
      <Grid container spacing={2}>        
        <Grid item lg={4} md={4} xs={12}> 
          <div style={{fontWeight: 'bold'}}>
            Billing Information</div> <div>
          </div>
        </Grid>
        <Grid item lg={4} md={4} xs={12}> 
          <div>Expiry Date</div> <div>data</div>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Button variant="contained" size="medium" > 
          Change plan 
          </Button>
        </Grid>        
      </Grid>
    
    </Box>
    
  );
}




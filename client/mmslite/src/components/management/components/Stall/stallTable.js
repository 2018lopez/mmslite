import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateStall from './CreateStall'
import CayoTable from './CayoTable'
import Grid from '@mui/material/Grid';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
        <Grid container justifyContent="flex-end"> 
           <CreateStall/>
        </Grid>
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Corozal" {...a11yProps(0)} />
            <Tab label="Orange Walk" {...a11yProps(1)} />
            <Tab label="Belize" {...a11yProps(2)} />
            <Tab label="Cayo" {...a11yProps(3)} />
            <Tab label="Stann Creek" {...a11yProps(4)} />
            <Tab label="Toledo" {...a11yProps(5)} />
            
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            Corozal
        </TabPanel>
        <TabPanel value={value} index={1}>
           Orange Walk
        </TabPanel>
        <TabPanel value={value} index={2}>
            Belize
        </TabPanel>
        <TabPanel value={value} index={3}>
           <CayoTable/>
        </TabPanel>
        <TabPanel value={value} index={4}>
            Stann Creek
        </TabPanel>
        <TabPanel value={value} index={5}>
           Toledo
        </TabPanel>
        
        </Box>

    </div>
  );
}
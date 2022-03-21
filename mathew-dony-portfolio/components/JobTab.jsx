import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TabPanel = (props) => {
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
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// ARIA Accessibility Props
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const JobTab = ({ data }) => {
  console.log(data);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        desktop: 768,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: {
            mobile: "100vw",
            desktop: "100%",
          },
          marginLeft: {
            mobile: "-5vw",
            desktop: 0,
          },
          marginRight: {
            mobile: "-5vw",
            desktop: 0,
          },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            allowScrollButtonsMobile
            variant="scrollable"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#4398c1",
              },
            }}
          >
            {data.map((job, index) => (
              <Tab
                sx={{ color: "white", textTransform: "none" }}
                label={job.name}
                style={{color: "#4398c1"}}
                {...a11yProps(index)}
              />
            ))}

            {/* <Tab
            sx={{ color: "white", textTransform: "none" }}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ color: "white", textTransform: "none" }}
            label="Item Three"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ color: "white", textTransform: "none" }}
            label="Item Four"
            {...a11yProps(3)}
          /> */}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
};

export default JobTab;

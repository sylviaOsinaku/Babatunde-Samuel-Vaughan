import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import ExperienceCard from "./ExperienceCard";

const myExperience = [
  {
    companyName: "Youth-Minds Alignment and Development Centre",
    role: "Founder",
    employmentType: "Part-time",
    date: "Jul 2012 - Present",
    location: "Ibadan",
    duration: "12 yrs 4 mos",
    jobDone: [
      "Led the development of a 21st-Century curriculum for K-12 and HED after-school programmes, using localized content and culturally tuned case studies to promote global competencies and 21st-century skills in youth.",
      "Efficiently managed +40 volunteer teachers over 4 years, facilitating community projects that impacted over 3,600 teenagers from +20 private and government schools, and orphanages.",
      "Designed and managed 3 summer leadership camps/projects worth ~248,000 USD, focusing on transformational learning, stakeholder engagement, and smart investing techniques spanning over 3 months each.",
      "Guided the research and development of proprietary curricula and Intellectual Sellable Property.",
      "Grew the organization through effective fundraising and project management, achieving a 37% YoY increase in donations in 2018.",
    ],
  },
  {
    companyName: "Microsoft",
    role: "Program Manager, Talent and Ecosystem Development",
    employmentType: "Full-time",
    date: "Dec 2021 - Jul 2024",
    location: "Lagos",
    duration: "2 yrs 8 mos",
    jobDone: [
      "Led and managed the execution of 3 out of 7 engineering talent development programs across 10 universities in Nigeria and Ghana, demonstrating strong project governance skills involving program design, budgeting, stakeholder management, and scaling.",
      "Collaborated with software engineers, lecturers, and professionals to design structured learning pathways for student developers in areas like Data Structures, AI & ML, Security, and more.",
      "Designed playbooks, manuals, and onboarding documents for the Microsoft ADC Students League, fostering student communities with strong CS fundamentals.",
      "Provided industry inputs on future-ready skilling, talent transformation roadmaps, and STEM Education as a trusted advisor to government agencies.",
    ],
  },
  {
    companyName: "Microsoft",
    role: "Customer Success Manager, Modern Workplace",
    employmentType: "Contract",
    date: "Jul 2019 - Dec 2021",
    location: "MEA MCC (Nigeria, Ghana, Rwanda, Botswana & Kenya)",
    duration: "2 yrs 6 mos",
    jobDone: [
      "Led pre-sales enablement and post-sales adoption workstreams for Microsoft Education Transformation Workshops across six state governments.",
      "Designed and launched a skilling program that grew the community of Microsoft Innovative Educators by +15,600 teachers over two years.",
      "Delivered training to +28,000 teachers during the COVID-19 lockdown across two Ministries of Education, driving strategic wins and case studies.",
      "Facilitated demos and training sessions, removing adoption blockers and increasing retention across multiple regions.",
    ],
  },
  {
    companyName: "Microsoft",
    role: "Learning Delivery Specialist",
    employmentType: "Full-time",
    date: "Oct 2018 - Jun 2019",
    location: "MEA MCC (Nigeria)",
    duration: "9 mos",
    jobDone: [
      "Developed strategies for schools to map learning processes to product capabilities, providing demo environments and sessions.",
      "Empowered +30 education partners on Modern Classroom Solutions (M365, O365, Intune for Education, and School Data Sync), ensuring effective change management.",
      "Achieved an 872% YoY increase across core metrics by implementing workshops, live events, and demos.",
    ],
  },
  {
    companyName: "African Leadership Academy",
    role: "Educator/Camp Director - Global Scholars Program",
    employmentType: "Contract",
    date: "May 2015 - Jul 2015",
    location: "Johannesburg Area, South Africa",
    duration: "3 mos",
    jobDone: [
      "Facilitated immersive and experiential learning projects and design thinking modules for scholars from 11 different countries.",
      "Mentored students in real-life problem-solving and project-based community service at Soweto’s largest education non-profit for orphans and vulnerable minors.",
      "Provided advisory comments to aid guardians in making informed career decisions for their wards.",
    ],
  },
  {
    companyName: "Havilah Engineering Limited",
    role: "Data Centre Systems Integrator/Technical Trainer",
    employmentType: "Full-time",
    date: "Sep 2008 - Jun 2015",
    location: "Abuja, Lagos, Ibadan",
    duration: "6 yrs 10 mos",
    jobDone: [
      "Designed over 50 comprehensive network diagrams for state governments and universities, helping to reduce project timeframes on metro projects worth +$1.3 Million.",
      "Led implementation and technical support for various internet, WAN, RF Projects, and Data Centre setups across 10 states, and several large institutions like Galaxy Backbone, NITEL, and Spectranet.",
      "Increased internet availability at universities from 65.6% to 93.2% uptime, achieving cost savings of ~20,000 USD.",
    ],
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  const isMobile = useMediaQuery("(max-width:760px)");
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        flexGrow: isMobile ? 1 : 3, // Give it more space when not mobile
        maxWidth: isMobile ? "100%" : "75%", // Adjust max width for non-mobile views
      }}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MaterialExperience() {
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery("(max-width:760px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#393636",
        display: "flex",
        height: "auto",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        scrollButtons
        allowScrollButtonsMobile
        onChange={handleChange}
        aria-label="Experience tabs"
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "divider",
          color: "white",
          flexGrow: 1, // Make sure tabs take up only necessary space
        }}
      >
        {myExperience.map((job, index) => (
          <Tab
            key={index + "compname"}
            label={
              <Typography sx={{ fontSize: isMobile ? ".75rem" : "inherit" }}>
                {job.companyName}
              </Typography>
            }
            {...a11yProps(index)}
            sx={{
              color: "white",
              "&:hover": {
                color: "orange",
              },
            }}
          />
        ))}
      </Tabs>
      {myExperience.map((company, index) => (
        <TabPanel value={value} index={index} key={`tabpanel-${index}`}  >
          <ExperienceCard company={company} />
        </TabPanel>
      ))}
    </Box>
  );
}

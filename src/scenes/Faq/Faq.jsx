import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={colors.greenAccent[500]} variant="h5">
          Important Questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a,
            nulla nesciunt debitis maiores sint exercitationem, enim ad
            repellendus laborum assumenda, eum iure sed illo! Eos natus
            doloribus maxime eum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={colors.greenAccent[500]} variant="h5">
          Important Questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a,
            nulla nesciunt debitis maiores sint exercitationem, enim ad
            repellendus laborum assumenda, eum iure sed illo! Eos natus
            doloribus maxime eum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={colors.greenAccent[500]} variant="h5">
          Important Questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a,
            nulla nesciunt debitis maiores sint exercitationem, enim ad
            repellendus laborum assumenda, eum iure sed illo! Eos natus
            doloribus maxime eum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={colors.greenAccent[500]} variant="h5">
          Important Questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a,
            nulla nesciunt debitis maiores sint exercitationem, enim ad
            repellendus laborum assumenda, eum iure sed illo! Eos natus
            doloribus maxime eum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={colors.greenAccent[500]} variant="h5">
          Important Questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a,
            nulla nesciunt debitis maiores sint exercitationem, enim ad
            repellendus laborum assumenda, eum iure sed illo! Eos natus
            doloribus maxime eum!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} />
        <Typography color={colors.greenAccent[500]} variant="h5">
          Important Questions
        </Typography>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a,
            nulla nesciunt debitis maiores sint exercitationem, enim ad
            repellendus laborum assumenda, eum iure sed illo! Eos natus
            doloribus maxime eum!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;

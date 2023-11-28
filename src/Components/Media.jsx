import * as React from "react";
import {
  Box,
  SpeedDialAction,
  Backdrop,
  SpeedDial,
  SpeedDialIcon,
  Tooltip,
} from "@mui/material";

import {
  LinkedIn,
  Instagram,
  Telegram,
  CopyrightRounded,
  GitHub,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: <LinkedIn />,
    name: "لینکدین",
    link: "https://www.linkedin.com/in/amir-hosein-keimasi-1b6849212/",
  },
  {
    icon: <Instagram />,
    name: "اینستاگرام",
    link: "https://www.instagram.com/amir_v13",
  },
  { icon: <Telegram />, name: "تلگرام", link: "https://telegram.im/@amir1_1" },
  {
    icon: <GitHub />,
    name: "گیت هاب",
    link: "https://github.com/amirhosein-keimasi",
  },
];

export default function Madia() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      
    >
      <Backdrop open={open} />
      <SpeedDial  
        ariaLabel="SpeedDial tooltip example"
        sx={{
          position: "fixed",
          bottom: 23,
          left: 16,
        }}
        icon={<CopyrightRounded />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction 
            key={action.name}
            icon={action.icon}
            onClick={() => {
              setOpen(false);
              window.open(action.link)
            
            }}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

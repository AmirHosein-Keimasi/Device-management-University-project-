import { useState, useEffect } from "react";
import { Divider, Chip, Slide, Button } from "@mui/material";

const CustomDivider = ({ bColor, cColor, icon, align, text }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Slide
        direction="down"
        in={loading}
        style={{
          transitionDelay: loading ? "150ms" : "0ms",
        }}
      >
        <Divider
          variant="middle"
          textAlign={align}
          sx={{
            "&::before, &::after": {
              borderColor: bColor,
            },
          }}
        >
          <Chip
            color={cColor}
            icon={icon}
            label={
              <Button  
            
                variant="body1"
                color="black"
                sx={{ textAlign: "center" }}
              >
                {text}
              </Button>
            }
            sx={{ px: 2, py:4 }}
          />
        </Divider>
      </Slide>
    </>
  );
};
export default CustomDivider;

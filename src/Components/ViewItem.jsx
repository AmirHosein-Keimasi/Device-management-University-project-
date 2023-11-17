import {
  Card,
  CardActions,
  CardContent,
  Accordion,
  Typography,
  FormControlLabel,
  Checkbox,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../Server/servises";
import { Helmet } from "react-helmet-async";

const ViewItem = ({ helmetTitle }) => {
  const [Product, setProduct] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getProduct(itemId);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDate();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: 3,
        }}
      >
        <Grid container>
          {Object.values(Product).map((item, index) => (
            <Grid xs={12} sm={6} md={4} lg={4} xl={4} spacing={1}>
              <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5 }} component="div">
                  {item.name}
                  </Typography>{" "}
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    روز باقی مونده سرویس
                  </Typography>
                  <Accordion>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>ادامه توضیحات</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">توضیحات</Typography>

                      <FormControlLabel
                        control={<Checkbox />}
                        label="سرویس شد"
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                      <CardActions></CardActions>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>{" "}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ViewItem;

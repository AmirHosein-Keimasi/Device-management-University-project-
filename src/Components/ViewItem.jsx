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
import "./Card.css";
import CustomDivider from "../Constants/CustomDivider";
import { Add, DownloadDone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ViewItem = ({ helmetTitle, CategoryAlldata }) => {
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
  console.log(Product);
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
        <Grid container className="body">
          {Object.values(Product).map((item, index) => (
            <Grid xs={12} sm={6} md={4} lg={4} xl={4} spacing={1} >
              <div class="container">
                <a class="card1" href="#">
                  <h3> {item.product_name}</h3>
                  <p class="small">{item.category}</p>
                  <div class="go-corner" href="#">
                    <div class="go-arrow">→</div>
                  </div>

                  <Accordion sx={{ mt: 13 }}>
                    <AccordionSummary
                      className="Accordion"
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="body1">توضیحات</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{my:2 , fontSize:18}} > {item.discription}</Typography>

                      <CustomDivider
                        bColor="#primary.main"
                        cColor="primary"
                        icon={<DownloadDone />}
                        align="center"
                        text={
                       
                          <Link className="btn" to={"/"} >
                               سرویس انجام شد
                          </Link>
                        }
                      >
                        {" "}
                      </CustomDivider>
                      <CardActions></CardActions>
                    </AccordionDetails>
                  </Accordion>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ViewItem;

{
  /*              <Card  sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.category_name}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5 }} component="div">
                  {item.product_name}
                  </Typography>{" "}
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    روز باقی مونده سرویس
                  </Typography>
                  <Accordion>
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography> {item.discription}</Typography>
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
              </Card> */
}

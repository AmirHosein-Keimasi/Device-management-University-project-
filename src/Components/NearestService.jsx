import {
  CardActions,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,  InputAdornment,
  TextField,
  Grid,
  Divider
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../Server/servises";
import { Helmet } from "react-helmet-async";
import "./Card.css";
import DateTimerPicker from "./DateTimerPicker";
import { ArrowDownward, Chat, DownloadDone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FabBack from "./FabBack";
import moment from 'moment-jalaali';



const NearestService = ({ helmetTitle, CategoryAlldata }) => {
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
  function convertToJalali(date) {
    return moment(date, 'YYYY-M-D').format('jYYYY/jM/jD');
  }
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
        <Grid container className="body" spacing={1}>
          {Object.values(Product).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
              <div className="container" id="myDiv">
                <h4 className="card1">
                  <h3> {item.product_name}</h3>
                  <p className="small">{item.category}</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>

                  <Typography variant="body1">
                    اخرین سرویس انجام شده  :  {convertToJalali(item.latest_service_date)}
                  </Typography>
<Divider className="Divider" sx={{my:2}}/>

                  <Typography sx={{ my: 2, fontSize: 18 }}>
                    {" "}
                    {item.discription}
                  </Typography>
                  <Accordion sx={{ mt: 13 , borderRadius:"8px"}} className="Accordion">
                    <AccordionSummary
                     
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className="servis" variant="caption" sx={{fontSize:"20px"}}>
                        ثبت سرویس جدید <ArrowDownward />
                      </Typography>
                    </AccordionSummary >
                    <AccordionDetails  className="AccordionDetails" >
                      <DateTimerPicker   />

                      {/*  */}

                      <TextField
                       sx={{mb: 2.5,
                        alignItems:'center',
                       
                      }}
                    
                    fullWidth
                    multiline
                    rows={4}
                    color="secondary"
                    label="توضیحات"
                    name="discription"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment postion="end">
                          <Chat color="black" />
                        </InputAdornment>
                      ),
                    }}></TextField>
                      <Button
                        sx={{
                          alignItems:'center',
                          color: "secondary.main",
                          backgroundColor: "secondary.main",
                          "&:hover": {
                            backgroundColor: "secondary.dark",
                            color: "secondary.dark",
                          },
                        }}
                        className="button-37  "
                    
                      >
                        {" "}
                        <Link className="btn " to={"/"}>
                          سرویس انجام شد <DownloadDone />
                        </Link>
                      </Button>

                      <CardActions></CardActions>
                    </AccordionDetails>
                  </Accordion>
                </h4>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <FabBack />
    </>
  );
};

export default NearestService;


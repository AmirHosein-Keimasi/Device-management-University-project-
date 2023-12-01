import { Typography, Box, Button, Grid, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getNearService } from "../Server/servises";
import { Helmet } from "react-helmet-async";
import "./Card.css";
import { Link } from "react-router-dom";
import FabBack from "./FabBack";
import moment from "moment-jalaali";

const NearestService = ({ helmetTitle }) => {
  const [NearProduct, setNearProduct] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getNearService();
        setNearProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDate();
    };
  }, []);
  function convertToJalali(date) {
    return moment(date).format("jYYYY/jM/jD");
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
          {Object.values(NearProduct).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
              <div className="container w-100 " id="myDiv">
                <div className="card1  w-100 h-80 ">
                  <h3> {item.product_name}</h3>
                  <p className="small">{item.category_name}</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>

                  <Typography variant="body1">
                    روز باقی مانده تا سرویس : {item.remaining_days}
                  </Typography>
                  <Divider className="Divider" sx={{ my: 2 }} />

                  <Typography variant="body1">
                    اخیرین سرویس انجام شده :
                    {convertToJalali(item.last_service_date)}
                  </Typography>
                  <Divider className="Divider" sx={{ my: 2 }} />

                  <Typography sx={{ my: 1, fontSize: 18 }}>
                    {" "}
                    {item.discription}
                  </Typography>

                  <Button
                    sx={{
                      mt: 3,
                      backgroundColor: "#00838d",
                      "&:hover": {
                        backgroundColor: "#005e65",
                      },
                    }}
                    role="button"
                  >
                    {" "}
                    <Link
                      to={{
                        pathname: `id_product/${item.product_id}`,
                        state: { product: NearProduct },
                      }}
                      className="btn"
                    >
                      ثبت سرویس جدید
                    </Link>
                  </Button>
                </div>
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

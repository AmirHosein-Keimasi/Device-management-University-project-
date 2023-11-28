import { Typography, Box, Button, Grid, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../Server/servises";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FabBack from "./FabBack";
import moment from "moment-jalaali";

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

  function convertToJalali(date) {
    return moment(date, "YYYY-M-D").format("jYYYY/jM/jD");
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
              <div className="container w-100 " id="myDiv">
                <div className="card1  w-100 h-80 ">
                  <h3> {item.product_name}</h3>
                  <p className="small">{item.category}</p>
                  <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                  </div>

                  <Typography variant="body1">
                    اخرین سرویس انجام شده :{" "}
                    {convertToJalali(item.latest_service_date)}
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
                        state: { product: Product },
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
export default ViewItem;

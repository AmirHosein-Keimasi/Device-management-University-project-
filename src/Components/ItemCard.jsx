import { Button, CardMedia, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Card.css";

const ItemCard = ({ CategoryAlldata }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  <motion.ul variants={container} initial="hidden" animate="show">
    <motion.li variants={item}> </motion.li>
  </motion.ul>;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        m: 3,
      }}
    >
      <Grid container>
        {Object.values(CategoryAlldata).map((item, index) => (
          <Grid xs={12} sm={12} md={6} lg={4} xl={4} spacing={1}>
            <div class="container">
              <a class="card1" href="#">
                <CardMedia
                  component="img"
                  sx={{
                    height: 320,
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                  image={item.imgLink}
                  title="green iguana"
                />
                <h5 className="my-3"> {item.name}</h5>

                <div class="go-corner" href="#">
                  <div class="go-arrow">→</div>
                </div>
                <p class="small" variant="body1">
                  {" "}
                  {item.description}
                </p>

                <Button
                  sx={{
                    backgroundColor: "secondary.main",
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                  }}
                  className="button-37  "
                  role="button"
                >
                  {" "}
                  <Link to={`id_category/${item.id}`} className="btn mx-2">
                    نمایش دسته بندی
                  </Link>
                </Button>

                {/* <Accordion sx={{ mt: 13 }}>
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
                  </Accordion> */}
              </a>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemCard;

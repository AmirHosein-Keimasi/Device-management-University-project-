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
      <Grid container >
        {Object.values(CategoryAlldata).map((item, index) => (
          <Grid item xs={12} sm={6} md={4}  xl={4} key={index}  >
            <div  className="container"> 
              <a className="card2" >
                <CardMedia
                className=""
                  component="img"
                  sx={{
                    height: 320,
                    alignContent: "center",
                    justifyContent: "center",
                    borderRadius:"10px"
                  }}
                  image={item.imgLink}
                  title="green iguana"
                />
                <h5 className="my-3"> {item.name}</h5>

                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
                <p className="small" variant="body1">
                  {" "}
                  {item.description}
                </p>

                <Button
                  sx={{
                    backgroundColor: "#00838d",
                    "&:hover": {
                      backgroundColor: "#005e65",
                  
                    
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
              </a>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemCard;

import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  Card,
  Box,
  Grid,
  CardActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getcategorys } from "../Server/servises";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
  //   const ExpandMore = styled((props) => {
  //     const { expand, ...other } = props;
  //     return <IconButton {...other} />;
  //   })(({ theme, expand }) => ({
  //     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  //     marginLeft: "auto",
  //     transition: theme.transitions.create("transform", {
  //       duration: theme.transitions.duration.shortest,
  //     }),
  //   }));

  //   const [expanded, setExpanded] = useState();

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };
  //   <ExpandMore
  //   expand={expanded}
  //   onClick={handleExpandClick}
  //   aria-expanded={expanded}
  //   aria-label="show more"
  // >
  //   <ExpandMoreIcon />
  // </ExpandMore>
  // <Collapse in={expanded} timeout="auto" unmountOnExit>
  //   <Typography paragraph></Typography>
  // </Collapse>
const ItemCard = () => {
  const [CategoryAlldata, setCategorydata] = useState([]);



  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getcategorys();
        setCategorydata(data);
        // console.log(CategoryAlldata);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDate();
    };
  }, []);

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
  <motion.li variants={item}>     </motion.li>
</motion.ul>

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
          <Grid xs={12} sm={6} md={6} lg={4} xl={4} spacing={1}>
            <Card
            
              sx={{
                maxWidth: 450,
                mt: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 350 , alignContent:"center",justifyContent:"center" }}
                image={item.imgLink}
                title="green iguana"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">
                  {" "}
                  <Button size="large">
                    <Link to={`id_category/${item.id}`} className="btn mx-2">
                      نمایش دسته بندی
                    </Link>
                  </Button>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
 
  );
};

export default ItemCard;

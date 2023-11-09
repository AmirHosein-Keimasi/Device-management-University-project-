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
import { getCategorys } from "../Container/Contactsservises";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const ItemCard = () => {
  const [CategoryAlldata, setCategorydata] = useState([]);

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

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getCategorys();
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
          <Grid xs={12} sm={6} md={4} lg={4} xl={4} spacing={1}>
            <Card
            
              sx={{
                maxWidth: 700,
                mt: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 160 }}
                image={item.img}
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
                    <Link to={`Category/${item.id}`} className="btn mx-2">
                      نمایش دسته بندی
                    </Link>
                  </Button>
                </Button>
                <Button size="small">حذف دسته بندی</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
 
  );
};

export default ItemCard;
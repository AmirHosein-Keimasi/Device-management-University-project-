import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { Category } from "../db";

console.log(Category.name);
const ItemCard = () => {
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
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card
            sx={{
              maxWidth: 700,
            }}
          >
            {/*
             category.img
             category.name
        
            */}
            <CardMedia sx={{ height: 150 }} src={Category.img} title= { Category.id} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
             { Category.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                category.description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View category items</Button>
              <Button size="small">delete Category</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Card
            sx={{
              maxWidth: 700,
            }}
          >
            {/*
             category.img
             category.name
        
            */}
            <CardMedia sx={{ height: 150 }} src="" title="پروژکتور" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                category.name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                category.description
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View category items</Button>
              <Button size="small">delete Category</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemCard;

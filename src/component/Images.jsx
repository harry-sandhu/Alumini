import React from "react";
import { Box, Stack } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../asserts/image2.jfif";
import image2 from "../asserts/image2.jfif";
import image3 from "../asserts/image2.jfif";

const Images = () => {
  return (
    <Stack 
     alignItems='center'
     justifyItems='center'
     marginBottom='10px'
    >
      <Box
        sx={{
          width: { lg: "1200px", md: "600px", sm: "300px" },
          height: "auto",
          backgroundColor: "primary.dark",
        }}
        alignContent="center"
      >
        <Carousel>
          <Carousel.Item>
        
            <img className="d-block w-100 " src={image1} alt="First slide" width='100%' height='100%' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" max-width="100%" height="auto" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" max-width="100%" height="auto" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Images;

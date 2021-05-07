import React from "react";
import styled from "styled-components";
import {Typography} from "@material-ui/core"

const Movies = ({images, title}) => {
  return (
    <Container>
          <Typography color="secondary">{title}</Typography>
      <Content>
       
     {images.map((image, index) => (
          <Item><Image src={image} /></Item>
     ))}
        
       
      </Content>
    </Container>
  );
};

const Image = styled.img`
     width:100%;
     height:auto;
     object-fit: 100%;
     align-items: center;
     display:grid;
     justify-content: center;
     border-radius:7px;
     transform:scale(1);
     transition: transform 250ms ease-in;
     overflow: hidden;

     &:hover{
          transform:scale(2);
          transition: transform 250ms ease-in-out;
     }
    
`
const Container = styled.div`
     margin-top:2rem;
`;

const Content = styled.div`
     display:grid;
     grid-gap:30px;
     grid-template-columns: repeat(5, minmax(0, 1fr));
     padding:20px 0 40px 0;
     justify-content:center;
     align-items:center;
     text-align:center;
     border-radius:10px;
     overflow:hidden;

     

     @media (max-width:767px){
          grid-template-columns: repeat(1, minmax(0, 1fr));
     }
     
`;

const Item = styled.div`
     border-radius:10px;
     border:4px solid rgba(249, 249, 249, 0.1);
     padding:1px;
     box-shadow: rgb(0 0 0 / 70% ) 0 16px 30px -10px, rgb(0 0 0 / 70% ) 0 16px 30px -10px;
     transition: box-shadow, border 250ms ease-in;
     overflow: hidden;
     
     &:hover{
          border-radius:10px;
          border:4px solid rgba(74, 121, 255, 0.71);
          box-shadow: rgb(74 121 255 / 30%) 0 16px 30px -10px, rgb(74 121 255 / 30%) 0 16px 30px -10px;
          cursor:pointer;
          transition: box-shadow, border 250ms ease-in-out;
     }
     @media (max-width:768px){
          grid-template-columns: repeat(1, minmax(0, 1fr));
          border:4px solid rgba(249, 249, 249, 0.1);
     }
   
`;


export default Movies;

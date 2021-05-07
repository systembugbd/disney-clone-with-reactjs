import styled from 'styled-components'

import ImageSlider from './ImageSlider';
import Alan from './../app/alan';
import Viewers from './Viewers';
import Movies from './Movies';

const imagesRecomanded = [
     'images/bambi.jpg',
     'images/boyes.jpg',
     'images/car.jpg',
     'images/luca.jpg',
     'images/car.jpg'


]
const imagesViewers = [
     'images/viewers-disney.png',
     'images/viewers-marvel.png',
     'images/viewers-national.png',
     'images/viewers-pixar.png',
     'images/viewers-starwars.png'
]

const Home = ( ) => {
     return (
          <Container>
              <ImageSlider />
               <Viewers images={imagesViewers} />
               <Movies images={imagesRecomanded} title="Recomended Movies For You"/>

               <Movies images={imagesRecomanded} title="Most Watched" />

               <Movies images={imagesRecomanded} title="Recent Movies"/>

               <Movies images={imagesRecomanded}  title="Populer Movies"/>
              <Alan />
          </Container>
         
     )
}

const Container = styled.main`
     background: url('/images/home-background.png') center center no-repeat fixed;
     background-size:cover;
     position:relative;
     min-height: calc(100vh - 250px);
     overflow-x: hidden;
     display:block;
     top:72px;
     padding:0 calc(3.5vw + 5px);
    

     &:after{
       
          content:"";
          position: absolute;
          inset:0px;
          opacity:1;
          z-index:-1;
     }

`
export default Home

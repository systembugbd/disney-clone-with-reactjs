import { useEffect } from 'react'
import styled from 'styled-components'


 


const Login = (props) => {
 
return(
     <Container>
     <Content>
       
          <CTA>
               <CTAOneLogo src="/images/cta-logo-one.svg" />
               <CTAButton>GET ALL THERE</CTAButton>
               <CTAContent>Anim irure anim irure enim culpa id excepteur aliqua labore excepteur minim laboris est fugiat. Consequat elit do cillum esse. Deserunt deserunt ad quis magna ex. Officia Lorem dolor voluptate excepteur velit qui quis mollit laboris excepteur proident dolor cillum proident. Irure nostrud ut amet laborum magna ex elit sint.</CTAContent>
               <CTATwoLogo src="/images/cta-logo-two.png" />
          </CTA>
          <HeroBGImg />

         
     </Content>
</Container>
)
}


const AlanButton = styled.button`

`
const Container = styled.section`
overflow:hidden;
display: flex;
flex-direction:column;
text-align:center;
`
const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
min-height:100vh;
box-sizing: border-box;
`
const HeroBGImg = styled.div`
height:100vh;
background-image: url('/images/login-background.jpg');
background-repeat:no-repeat;
background-size:cover;
background-position: top;
position:absolute;
top:0;
right:0;
left:0;

`

const CTA = styled.div`
width:100%;
max-width:650px;
width: 100%;
max-width: 650px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
z-index:1;
`
const CTAOneLogo = styled.img`
margin-bottom:20px;
max-width: 600px;
min-height:1px;
display:block;
width:100%;
`
const CTATwoLogo = styled.img`
width:100%;
max-width:600px;
margin-top: 20px;
min-height:1px;
display:block;
`

const CTAButton = styled.button`
padding:30px 0;
margin-bottom:20px;
width:100%;
font-size:15px;
letter-spacing:2px;
background:#0076ce;
border:none;
border-radius:5px;
color:#fff;
font-weight:bold;
&:hover{
     background:#007cee;
     cursor: pointer;
}
`

const CTAContent = styled.p`
     width:100%;
     height:auto;
     display:block;
     z-index:1;
     color:#fff;
     line-height:20px;
     font-size:16px;


 
`
export default Login

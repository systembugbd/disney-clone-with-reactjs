import { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom"
import { auth, provider } from "../firebase";
import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState} from "../features/user/userSlice"

const Header = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {

    if(!userName) {
    auth
      .signInWithPopup(provider)
      .then((result) => {
         setUser(result.user)
      })
      .catch((error) => {
        alert(error.message)
      });
    }else if(userName){
      auth.signOut()
      .then(()=>{
        dispatch(setSignOutState());
        history.push("/")
      })
      .catch((err)=>{
        alert(err.message);
      })
    }

  };



  const setUser = (user) =>{
  
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      })
    );
  };

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        setUser(user)
        history.push('/home');
      }else{
        history.push("/")
      }
    })

  }, [userName])


  return (
    <Nav>
      <Logo href="/">
        <LogoImg src="/images/logo.svg" alt="" />
      </Logo>

{
  !userName ? (
    <LoginBtn onClick={handleAuth}>Login</LoginBtn>
  ):(

 <>
      <Navmenu>
        <a href="/">
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="" /> <span>WATCHLIST</span>
        </a>
        <a href="/original">
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a href="/movie">
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a href="/serise">
          <img src="/images/series-icon.svg" alt="" /> <span>SERISE</span>
        </a>
      </Navmenu>
      <Signout>
         <UserImg src={userPhoto} alt={userName} />
         <Dropdown><span onClick={handleAuth}>Sign out</span></Dropdown>
      </Signout>
</>
  )

  }
    </Nav>
  );
};


const Dropdown = styled.div`
background-color:#090b13;
color:#f5f6fa;
padding:10px;
border-radius:5px;
border:1px solid #353535;
cursor:pointer;
transition: all .5s ease;
opacity:0;
position:absolute;
font-size:15px;
right:50px;
position:absolute;
bottom:0px;

`
const Signout = styled.div`
height:70px;
width:70px;


  &:hover{
    ${Dropdown}{
     
      opacity:1;
      transition: all .5s ease;
      box-shadow:rgb(0 0 0 /50%) 0px 0px 18px 0px;
      font-size:14px;
      &:hover{
        background-color:#151925;
      }
    }
  }
`
const UserImg = styled.img`
width:70px;
height:70px;
border-radius:50%;
display:block;
transition: all 0.2s ease-out;

&:hover{
  transform: scale(1.05);
  opacity:.8;
  transition: all 0.2s ease-out;
}
`
const LoginBtn = styled.a`
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  transition: all 250ms ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    transition: all 250ms ease-in;
  }
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 2;
 
  }
`;
const Logo = styled.a`
  width: 90px;

  margin-top: 4px;
  display: block;
`;
const LogoImg = styled.img`
  display: block;
  width: 90px;
  transition: 0.2s ease-out;
`;

const Navmenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
  margin-right: auto;
  margin-left: 30px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    text-decoration: none;
    color: #fff;

    img {
      width: 25px;
      margin-right: 4px;
    }

    span {
      font-size: 15px;
      padding-top: 3px;
      white-space: nowrap;
      position: relative;
      letter-spacing: 2px;

      &:before {
        content: "";
        position: absolute;

        border-bottom: 2px solid #fff;
        left: 0;
        right: 0;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
      }
    }

    &:hover {
      span:before {
        visibility: visible;
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
    opacity: 0;
    transition: all 0.2s ease-out;
  }
`;

export default Header;

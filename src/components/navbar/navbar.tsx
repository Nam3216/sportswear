import React,{useState,useEffect} from "react"
import "./styleNavbar.css"

/*appbar*/
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from "react"
import {ContextElement} from "../../Context/Context"
import CartMenu from "./cartMenu"
//import AdbIcon from '@mui/icons-material/Adb';

/* menu desplegable*/
/*import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';*/


const pages = ['Home', 'Products', 'Cart', 'Contact', 'About Us'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar=()=>{
    const[navOk,setNavOk]=useState(false)
    const[MenuCart,setMenuCart]=useState(false)
    const{listCart}=useContext(ContextElement)

/* para appbar*/
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00000',
      },
    },
  });

  const lightTheme2 = createTheme({
    palette: {
     mode: 'dark',
      primary: {
        main: '#5A5A5A',
      },
     
    },
  });

  /* menu desplegable*/ 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
/*---------*/
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return()=>{
            window.removeEventListener("scroll",handleScroll)}
    },[])


    const handleScroll=()=>{
        if(window.scrollY>50){
            setNavOk(true)
           
           
        }
        if(window.scrollY<50){
            setNavOk(false)
        }
    }

   /*---menu dashboard cart---*/
   const handleCart=()=>{
    setMenuCart(true)
   }

    return(
        <header >
            <ThemeProvider theme={navOk  ? lightTheme2 : darkTheme}>
            <AppBar  className={navOk  ? "navbarSticky" : "navbar"} >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
              
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                  
                  <Link to={"/sportswear"}>   <Button key="Home" onClick={handleCloseNavMenu} style={{display:"block"}}>
                        <Typography textAlign="center" className="link" ><p style={{color:"white"}} > Home</p></Typography>
                      </Button></Link>
                      <Button key="Products" 
                              id="basic-button"
                              aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick}
                              style={{display:"block"}}>
                        <Typography textAlign="center" className="link"><p style={{color:"white"}}>Products</p></Typography>
                      </Button>
                          <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                          'aria-labelledby': 'basic-button',
                          }}
                      >
                          <Link to={"/products/football"}>    <MenuItem onClick={handleClose} className="menuitem"><p>Football</p></MenuItem></Link>
                          <Link to={"/products/tennis"}>    <MenuItem onClick={handleClose} className="menuitem"><p>Tennis</p></MenuItem></Link>
                          <Link to={"/products/boxing"}>    <MenuItem onClick={handleClose} className="menuitem"><p>Boxing</p></MenuItem></Link>
                          <Link to={"/products/hockey"}>    <MenuItem onClick={handleClose} className="menuitem"><p>Hockey</p></MenuItem></Link>
                          </Menu>
                  <Link to={"/cart"}>    <Button key="Cart" onClick={handleCloseNavMenu} style={{display:"block"}}>
                        <Typography textAlign="center" className="link"><p style={{color:"white"}}>Cart</p></Typography>
                      </Button></Link>
                      <Link to={"/contact"}>    <Button key="Contact" onClick={handleCloseNavMenu} style={{display:"block"}}>
                        <Typography textAlign="center" className="link"><p style={{color:"white"}}>Contact</p></Typography>
                      </Button></Link>
                  <Link to={"/aboutus"}>    <Button key="AboutUs" onClick={handleCloseNavMenu} style={{display:"block"}}>
                        <Typography textAlign="center" className="link"><p style={{color:"white"}}>About Us</p></Typography>
                      </Button></Link>
                      <Link to={"/register"}>    <Button key="AboutUs" onClick={handleCloseNavMenu} style={{display:"block"}}>
                        <Typography textAlign="center" className="link"><p style={{color:"white"}}>Register</p></Typography>
                      </Button></Link>
                      <Link to={"/login"}>    <Button key="AboutUs" onClick={handleCloseNavMenu} style={{display:"block"}}>
                        <Typography textAlign="center" className="link"><p style={{color:"white"}}>Login</p></Typography>
                      </Button></Link>    
              
                  </Menu>
                </Box>
              
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  
                  <Link to={"/sportswear/"}>  <Button
                      key="Home"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Home
                    </Button></Link>
              
                    <Button
                      key="Products"
                      /*onClick={handleCloseNavMenu}*/
                      sx={{ my: 2, color: 'white', display: 'block' }}
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      Products
                      
                    </Button>
                          <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                          'aria-labelledby': 'basic-button',
                          }}
                      >
                      <Link to={"/products/running"}>    <MenuItem  onClick={handleClose}>Running</MenuItem> </Link>
                      <Link to={"/products/football"}>    <MenuItem onClick={handleClose}>Football</MenuItem></Link>
                      <Link to={"/products/tennis"}>   <MenuItem onClick={handleClose}>Tennis</MenuItem></Link>
                      <Link to={"/products/boxing"}>   <MenuItem onClick={handleClose}>Boxing</MenuItem></Link>
                      <Link to={"/products/hockey"}>   <MenuItem onClick={handleClose}>Hockey</MenuItem></Link>
                          </Menu>
                          
                    
                          <Link to={"/cart"}>  <Button
                      key="Cart"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Cart
                    </Button></Link>
                <Link to={"/contact"}> <Button
                      key="Contact"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Contact
                    </Button></Link>
                <Link to={"/aboutus"}>  <Button
                      key="AboutUs"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      About Us
                    </Button></Link> 
                    <Link to={"/register"}>  <Button
                      key="AboutUs"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Register
                    </Button></Link> 
                    <Link to={"/login"}>  <Button
                      key="AboutUs"
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      Login
                    </Button></Link> 
                
                </Box>

                {listCart.length > 0 && <div style={{marginRight:100}} ><CartMenu/></div>  }
              </Toolbar>
             
        </Container>
      </AppBar>
    </ThemeProvider>
        </header>
    )
}

export default Navbar

/* return(
        <header className={navOk  ? "navbarSticky" : "navbar"}>
            <ul>
                <li><p>Home</p></li>
                <li><p>Categories</p></li>
                <li><p>Cart</p></li>
                <li><p>Contact</p></li>
                <li><p>About Us</p></li>
              
            </ul>
        </header>
    )
}*/
/*{pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}/*

/*<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>*/


          /*<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ShoppingCartIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >{listCart.map((item)=>{
        return <MenuItem onClick={handleClose}>{item.price} </MenuItem>
      })}
        
      </Menu>
    </div>*/
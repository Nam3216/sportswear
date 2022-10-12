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
//import AdbIcon from '@mui/icons-material/Adb';

/* menu desplegable*/
/*import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';*/


const pages = ['Home', 'Products', 'Cart', 'Contact', 'About Us'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar=()=>{
    const[navOk,setNavOk]=useState(false)
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

  const lightTheme = createTheme({
    palette: {
     mode: 'light',
      primary: {
        main: '#D3D3D3',
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

   

    return(
        <header >
            <ThemeProvider theme={navOk  ? lightTheme : darkTheme}>
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
             
                <Button key="Home" onClick={handleCloseNavMenu} style={{display:"block"}}>
                  <Typography textAlign="center" className="link">Home</Typography>
                </Button>
                <Button key="Products" /*onClick={handleCloseNavMenu}*/
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{display:"block"}}>
                  <Typography textAlign="center" className="link">Products</Typography>
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
                        <MenuItem onClick={handleClose}>Running</MenuItem>
                        <MenuItem onClick={handleClose}>Football</MenuItem>
                        <MenuItem onClick={handleClose}>Tennis</MenuItem>
                        <MenuItem onClick={handleClose}>Boxing</MenuItem>
                        <MenuItem onClick={handleClose}>Hockey</MenuItem>
                    </Menu>
                <Button key="Cart" onClick={handleCloseNavMenu} style={{display:"block"}}>
                  <Typography textAlign="center" className="link">Cart</Typography>
                </Button>
                <Button key="Contact" onClick={handleCloseNavMenu} style={{display:"block"}}>
                  <Typography textAlign="center" className="link">Contact</Typography>
                </Button>
                <Button key="AboutUs" onClick={handleCloseNavMenu} style={{display:"block"}}>
                  <Typography textAlign="center" className="link">About Us</Typography>
                </Button>
        
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
            
              <Button
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
        
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
                    <MenuItem onClick={handleClose}>Running</MenuItem>
                    <MenuItem onClick={handleClose}>Football</MenuItem>
                    <MenuItem onClick={handleClose}>Tennis</MenuItem>
                    <MenuItem onClick={handleClose}>Boxing</MenuItem>
                    <MenuItem onClick={handleClose}>Hockey</MenuItem>
                    </Menu>
                    
               
              <Button
                key="Cart"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Cart
              </Button>
              <Button
                key="Contact"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>
              <Button
                key="AboutUs"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Us
              </Button>
          
          </Box>

          
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
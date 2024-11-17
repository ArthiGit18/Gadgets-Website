import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Checkbox,
    FormControlLabel,
    Typography,
    Avatar,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import GoogleIcon from '@mui/icons-material/Google';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const Navbar = ({ aboutRef }) => {
    const [isFixed, setIsFixed] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [networkError, setNetworkError] = useState('');
    const [user, setUser] = useState(null); // New state to hold logged-in user info

    useEffect(() => {
        // Check if there's user data in localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.name && storedUser.email) {
            setUser(storedUser); // Set user from localStorage if available
        }

        const handleScroll = () => {
            const heroHeight = document.querySelector('.hero_wrapper').offsetHeight;
            setIsFixed(window.scrollY > heroHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDialogOpen = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setIsSignUpMode(false);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setMobile('');
        setEmail('');
        setPassword('');
        setIsTermsChecked(false);
        setEmailError('');
        setPasswordError('');
        setNetworkError('');
    };

    const toggleSignUpMode = () => {
        setIsSignUpMode((prevMode) => !prevMode);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailError(emailRegex.test(value) ? '' : 'Please enter a valid email address');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value.length < 6 ? 'Password must be at least 6 characters long' : '');
    };

    const handleSignIn = async () => {
        try {
            const endpoint = isSignUpMode
                ? 'http://localhost:3001/api/auth/signup'
                : 'http://localhost:3001/api/auth/signin';

            const payload = {
                email,
                password,
                ...(isSignUpMode && { name, mobile })
            };

            const response = await axios.post(endpoint, payload);

            if (response.status === 200 || response.status === 201) {
                console.log(isSignUpMode ? 'Sign-up successful' : 'Sign-in successful');

                // Store the user information in localStorage
                const userData = { name: response.data.name, email: response.data.email };
                localStorage.setItem('user', JSON.stringify(userData));

                setUser(userData); // Update state with logged-in user info
                handleDialogClose();
            }
        } catch (error) {
            setNetworkError('Check the Network Connections');
        }
    };

    const isSubmitDisabled =
        !isTermsChecked || !email || !password || emailError || passwordError ||
        (isSignUpMode && (!name || !mobile));

    const handleSignOut = () => {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        setUser(null); // Reset user state
    };

    return (
        <div className={`navbar_wrapper ${isFixed ? 'fixed' : ''}`}>
            <div className='nav_logo'>
                <img
                    src={isFixed ? "assets/logo/Logo (2).png" : "assets/logo/Logo (3).png"}
                    alt="Logo"
                />
            </div>
            <div className='nav_items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToAbout(); }}>About us</a></li>
                    <li><a href="/product-list">Product</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Customer Service</a></li>
                </ul>
            </div>
            <div className='nav_actions'>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <ShoppingCartIcon />
                <FavoriteIcon />
                {user && user.name ? (
                    // Display user's first letter as avatar using MUI Avatar
                    <Avatar sx={{ bgcolor: '#ff5722' }}>
                        {user.name.charAt(0).toUpperCase()}
                    </Avatar>
                ) : (
                    <Button variant='contained' onClick={handleDialogOpen}>Sign up/Sign In</Button>
                )}
                {user && user.name && (
                    <Button variant='outlined' onClick={handleSignOut}>Sign Out</Button>
                )}
            </div>

            {/* Dialog for Sign up/Sign In */}
            <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
                <DialogContent sx={{ padding: 0 }} className='login_common'>
                    <div className='login_img'>
                        <img src="/assets/login/1.jpeg" alt="login view" />
                    </div>
                    <div className='login_form'>
                        <DialogTitle>{isSignUpMode ? 'Sign Up' : 'Sign In'}</DialogTitle>
                        {networkError && <Typography color="red">{networkError}</Typography>}

                        {isSignUpMode && (
                            <>
                                <TextField
                                    label="Username"
                                    fullWidth
                                    margin="dense"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextField
                                    label="Mobile Number"
                                    fullWidth
                                    margin="dense"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </>
                        )}

                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="dense"
                            value={email}
                            onChange={handleEmailChange}
                            error={!!emailError}
                            helperText={emailError}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="dense"
                            value={password}
                            onChange={handlePasswordChange}
                            error={!!passwordError}
                            helperText={passwordError}
                        />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isTermsChecked}
                                        onChange={(e) => setIsTermsChecked(e.target.checked)}
                                    />
                                }
                                label="I agree to the Terms & Conditions"
                            />
                        

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleSignIn}
                            disabled={isSubmitDisabled}
                        >
                            {isSignUpMode ? 'Sign Up' : 'Sign In'}
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{ width: '100%' }}
                            startIcon={<GoogleIcon />}
                        >
                            Sign in with Google
                        </Button>

                        <Typography variant="body2" sx={{ padding: '10px' }}>
                            {isSignUpMode ? 'Already have an account? ' : "Don't have an account? "}
                            <Button onClick={toggleSignUpMode}>
                                {isSignUpMode ? 'Sign In' : 'Sign Up'}
                            </Button>
                        </Typography>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const navItems = [
    { label: "Perfil", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contato", id: "contact" },
];

export const StyledNavLink = styled("button")(({ theme }) => ({
    background: "transparent",
    border: "none",
    color: theme.palette.text.primary,
    cursor: "pointer",
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: "0.95rem",
    transition: "background-color 160ms ease, transform 160ms ease",
    '&:hover': {
        backgroundColor: 'rgba(166, 176, 191, 0.12)',
        transform: 'translateY(-1px)',
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    return (
        <Box component="header" sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="transparent">
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ minHeight: 84, display: 'flex', justifyContent: 'space-between' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0.2,
                                cursor: 'pointer',
                            }}
                            onClick={() => handleSmoothScroll('about')}
                        >
                            <Typography variant="subtitle1" fontWeight={700} lineHeight={1}>
                                Felipe Araújo
                            </Typography>
                            <Typography variant="caption" color="text.secondary" letterSpacing={2} textTransform="uppercase">
                                Desenvolvedor Full Stack
                            </Typography>
                        </Box>

                        <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navItems.map((item) => (
                                <StyledNavLink key={item.id} onClick={() => handleSmoothScroll(item.id)}>
                                    {item.label}
                                </StyledNavLink>
                            ))}
                        </Stack>

                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="abrir menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {navItems.map((item) => (
                                    <MenuItem key={item.id} onClick={() => handleSmoothScroll(item.id)}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
import { Box, Container, IconButton, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box id="contact" pt={6} pb={4} sx={{ borderTop: '1px solid rgba(166, 176, 191, 0.12)', background: 'linear-gradient(180deg, rgba(8, 16, 25, 0.2), rgba(8, 16, 25, 0.55))' }}>
                <Container maxWidth="lg">
                    <Stack spacing={3} alignItems="center">
                        <Box textAlign="center">
                            <Typography variant="h4">Vamos conversar.</Typography>
                            <Typography color="text.secondary" mt={1}>
                                Se o desafio envolve APIs, integrações, arquitetura de software ou evolução de sistemas, ficarei feliz em trocar ideias e contribuir com a solução.
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center" gap={1.5}>
                            <IconButton component="a" href="https://github.com/Felipe-Araujo-duck" target="_blank" rel="noreferrer">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton component="a" href="https://www.linkedin.com/in/felipearaujo-dev/" target="_blank" rel="noreferrer">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton component="a" href="mailto:felipe.araujo.dev100@gmail.com">
                                <EmailIcon />
                            </IconButton>
                        </Box>

                        <Typography textAlign="center" color="text.secondary">
                            © {new Date().getFullYear()} Felipe Araújo · Construindo software para resolver problemas reais
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default Footer
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import theme from "../../../../theme";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StylesHero = styled("div")(() => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingTop: "100px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    position: "relative",
    zIndex: 2,
  }));

  return (
    <StylesHero>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5} position="relative">
            <Box position="absolute" width={"150%"} top={-100} right={0} zIndex={1}> 
              <AnimatedBackground />
            </Box>
            <Box position="relative" textAlign="center">
              <StyledImg src={Avatar} alt="Avatar" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} textAlign="center" zIndex={2}>
            <Typography color="primary.contrastText" variant="h1" pb={2}>
              Felipe Araújo
            </Typography>
            <Typography color="primary.contrastText" variant="h2">
              Desenvolvedor Web
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2} pt={3} zIndex={2}>
              <Grid item>
                <StyledButton onClick={() => console.log("Download CV")}> 
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton onClick={() => console.log("Contact me")}> 
                  <MailOutlineIcon />
                  <Typography>Contact me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StylesHero>
  );
};

export default Hero;

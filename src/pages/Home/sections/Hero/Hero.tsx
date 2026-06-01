import { Box, Chip, Container, Grid, Stack, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/my-photo.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Button from "@mui/material/Button";

const HeroSurface = styled("section")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: "128px 0 72px",
  background: `radial-gradient(circle at top left, rgba(103, 216, 208, 0.16), transparent 32%), radial-gradient(circle at 85% 20%, rgba(240, 179, 94, 0.18), transparent 26%), linear-gradient(180deg, ${theme.palette.background.default} 0%, #0b1320 100%)`,
}));

const AvatarShell = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '18px',
  borderRadius: '32px',
  background: 'rgba(17, 26, 39, 0.82)',
  border: '1px solid rgba(166, 176, 191, 0.16)',
  boxShadow: '0 30px 90px rgba(0, 0, 0, 0.28)',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '12px',
    borderRadius: '24px',
    border: `1px solid ${theme.palette.secondary.main}33`,
    pointerEvents: 'none',
  },
}));

const StatCard = styled(Box)(() => ({
  padding: '16px',
  borderRadius: '20px',
  background: 'rgba(8, 16, 25, 0.72)',
  border: '1px solid rgba(166, 176, 191, 0.14)',
  backdropFilter: 'blur(12px)',
}));

const Hero = () => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    maxWidth: "440px",
    borderRadius: "26px",
    objectFit: "cover",
    aspectRatio: '4 / 5',
    position: "relative",
    zIndex: 2,
    border: `1px solid ${theme.palette.secondary.main}33`,
    boxShadow: '0 22px 70px rgba(0, 0, 0, 0.25)',
  }));

  const handleDownloadCV = () => {
    const cvUrl = "/CV_Felipe_Araujo.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Felipe_Araujo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    const email = "felipe.araujo.dev100@gmail.com";
    const subject = encodeURIComponent("Contato via portfólio");
    const body = encodeURIComponent("Olá Felipe, vi seu portfólio e gostaria de conversar sobre uma oportunidade.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <HeroSurface>
      <Container>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="overline" color="secondary.main" letterSpacing={4}>
                  Software Engineer | Full Stack Developer | Angular & .NET
                </Typography>
                <Typography variant="h1" color="primary.contrastText" sx={{ fontSize: { xs: '3rem', md: '4.8rem' }, lineHeight: 0.95, mt: 1 }}>
                  Felipe Araújo
                </Typography>
                <Typography variant="h4" color="primary.contrastText" sx={{ mt: 2, maxWidth: 720 }}>
                  Software Engineer focado em arquitetura, performance e construção de produtos de alto impacto.
                </Typography>
              </Box>

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.85 }}>
                Trabalho principalmente com C#/.NET no desenvolvimento de sistemas, APIs e soluções voltadas para desafios reais de negócio. Tenho experiência com Angular e React no frontend e interesse constante em arquitetura de software, performance e sistemas distribuídos.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <StyledButton onClick={handleDownloadCV}>
                  <DownloadIcon />
                  <Typography>Baixar CV</Typography>
                </StyledButton>
                <StyledButton onClick={handleContactMe}>
                  <MailOutlineIcon />
                  <Typography>Falar comigo</Typography>
                </StyledButton>
                <Button href="#projects" variant="text" color="inherit" sx={{ alignSelf: 'center', px: 1.5 }}>
                  Ver projetos
                </Button>
              </Stack>

              <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                <Chip label="C# .NET & APIs" variant="outlined" />
                <Chip label="Arquitetura de Software" variant="outlined" />
                <Chip label="Sistemas Financeiros" variant="outlined" />
                <Chip label="Angular & React" variant="outlined" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box position="relative" display="flex" justifyContent="center">
              <Box position="absolute" width={{ xs: '100%', md: '115%' }} top={-40} right={{ xs: 0, md: -20 }} zIndex={1} sx={{ opacity: 0.45 }}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" zIndex={2} width="100%" maxWidth={460}>
                <AvatarShell>
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(103, 216, 208, 0.08), transparent 45%)' }} />
                  <Box position="relative" zIndex={2} display="flex" justifyContent="center">
                    <StyledImg src={Avatar} alt="Felipe Araújo" />
                  </Box>
                </AvatarShell>

                <Box mt={2} display="grid" gridTemplateColumns="repeat(2, minmax(0, 1fr))" gap={2}>
                  <StatCard>
                    <Typography variant="overline" color="text.secondary" letterSpacing={2}>
                      Stack Principal
                    </Typography>
                    <Typography variant="h6" mt={0.5}>
                      Backend & Sistemas Financeiros
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      Desenvolvimento de APIs, integrações e regras de negócio para aplicações que exigem confiabilidade, escalabilidade e alta disponibilidade.
                    </Typography>
                  </StatCard>
                  <StatCard>
                    <Typography variant="overline" color="text.secondary" letterSpacing={2}>
                      Foco Atual
                    </Typography>
                    <Typography variant="h6" mt={0.5}>
                      Produtos Financeiros
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      Construção de soluções para processamento de transações, operações críticas e fluxos de negócio que exigem consistência e segurança.
                    </Typography>
                  </StatCard>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroSurface>
  );
};

export default Hero;

import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimatonComponent/AnimationComponent";


const About: React.FC = () => {

  const StyledCard = styled(Card)(({ theme }) => ({
      padding: "10px 10px",
      textAlign: "center",
      marginBottom: "10px",
      '&:hover': {
          backgroundColor: theme.palette.secondary.light
      }
  }));

  const skillsSet = [
      "Javascript", "Typescript", "C#", "Java", "MySQL","SQLServer", "PostgreSQL", "React", "Next", "Node", "Nest", "Angular", "Spring Boot", "ASP.NET Core", "Git", "HTML", "CSS", "Cypress", "AWS", "GCP", "Material UI", "Angular Material", "Figma"
  ]

  return (
      <>
          <Container maxWidth="lg">
              <Box id="about" pt={5} mb={3}>
                  <Typography variant="h2" textAlign="center" >About me</Typography>
              </Box>
              <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                  <Grid item xs={9} md={2.5}>
                      <AnimationComponent moveDirection="right">
                          <StyledCard variant="outlined">
                              <WorkspacePremiumIcon />
                              <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                              <Typography textAlign="center">1+ years</Typography>
                              <Typography textAlign="center">Frontend Development</Typography>
                          </StyledCard>
                      </AnimationComponent>
                  </Grid>
                  <Grid item xs={9} md={2.5}>
                      <AnimationComponent moveDirection="left">
                          <StyledCard variant="outlined">
                              <SchoolIcon />
                              <Typography textAlign="center" fontWeight={600}>Education</Typography>
                              <Typography textAlign="center">Bachelors Degree</Typography>
                              <Typography textAlign="center">Computer Science</Typography>
                          </StyledCard>
                      </AnimationComponent>

                  </Grid>
              </Grid>
              <Box pb={1}>
                <Typography>
                  Atualmente estou cursando o 7º período de Ciência da Computação e atuo na área de desenvolvimento de software há 2 anos e 5 meses. Minha trajetória começou ainda no início da graduação, quando tive a oportunidade de ingressar no mercado e desde então venho acumulando experiências, aprendizados e evoluindo constantemente.

                  Sou movido pela curiosidade e pelo desejo de entender como as coisas funcionam. Encaro a tecnologia como uma ferramenta poderosa de transformação e estou sempre em busca de crescer, tanto profissionalmente quanto pessoalmente. Acredito que o desenvolvimento é um processo contínuo — não só de sistemas, mas também de quem os constrói.
                  Sou movido por desafios e tenho como objetivo crescer continuamente como desenvolvedor, construindo soluções que gerem impacto real.
                </Typography>
              </Box>
              <hr />
              <Box id="skills" pt={1} mb={3}>
                  <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
              </Box>
              <Box mb={5}>
                  <Grid container spacing={3} justifyContent="center">
                      {skillsSet.map((skill, index) => (
                          <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                              <StyledCard variant="outlined">
                                  {skill}
                              </StyledCard>
                          </Grid>
                      ))}
                  </Grid>
              </Box>
          </Container>
      </>
  )
}
  
export default About
  
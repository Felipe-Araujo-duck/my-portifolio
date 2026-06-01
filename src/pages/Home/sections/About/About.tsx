import { Box, Card, Chip, Container, Divider, Grid, Stack, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EngineeringIcon from '@mui/icons-material/Engineering';

const Surface = styled("section")(({ theme }) => ({
  background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #0b1320 100%)`,
  padding: '72px 0',
}));

const HighlightCard = styled(Card)(({ theme }) => ({
  padding: '24px',
  height: '100%',
  borderRadius: '24px',
  transition: 'transform 180ms ease, border-color 180ms ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.palette.secondary.main,
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  paddingInline: '4px',
  backgroundColor: 'rgba(166, 176, 191, 0.08)',
  borderColor: 'rgba(166, 176, 191, 0.18)',
  '& .MuiChip-label': {
    fontWeight: 600,
  },
  '&:hover': {
    borderColor: theme.palette.secondary.main,
  },
}));


const About: React.FC = () => {
  const skillsSet = [
      "C#",
      ".NET / ASP.NET Core",
      "NestJS",
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "Entity Framework Core",
      "Docker",
      "Kubernetes",
      "GCP",
      "Git",
      "REST APIs",
      "Clean Architecture",
      "SOLID",
      "Scrum",
      "Azure DevOps",
      "Angular Material",
      "Material UI",
  ]

  return (
      <Surface>
          <Container maxWidth="lg">
              <Box id="about" mb={4}>
                  <Typography variant="overline" color="secondary.main" letterSpacing={4}>
                      Onde gero mais valor
                  </Typography>
                  <Typography variant="h2" mt={1}>
                      O tipo de sistema em que eu sou mais útil
                  </Typography>
                  <Typography color="text.secondary" mt={1} maxWidth={780}>
                      Atuo principalmente em sistemas que exigem confiabilidade, escalabilidade e regras de negócio complexas. Meu foco está na construção de APIs, integrações e soluções backend robustas, participando da evolução da arquitetura e contribuindo para que o produto cresça de forma sustentável. Também possuo experiência no desenvolvimento de interfaces modernas quando a solução exige uma visão full stack.
                  </Typography>
              </Box>
              <Grid container spacing={3} pb={4}>
                  <Grid item xs={12} md={5}>
                      <HighlightCard variant="outlined">
                          <Stack spacing={2}>
                              <WorkspacePremiumIcon color="secondary" />
                              <Typography variant="h5">Resumo profissional</Typography>
                              <Typography color="text.secondary">
                                  Software Engineer com experiência no desenvolvimento de sistemas corporativos, APIs e aplicações web. Atualmente atuo na construção de soluções para o mercado financeiro, com foco em backend, arquitetura de software e integração entre sistemas. Gosto de trabalhar em produtos que exigem regras de negócio complexas, escalabilidade e evolução contínua, transformando desafios técnicos em soluções simples e sustentáveis.
                              </Typography>
                              <Stack direction="row" flexWrap="wrap" gap={1}>
                                  <Chip label="Wealth Money" variant="outlined" />
                                  <Chip label="A2W Tecnologia" variant="outlined" />
                                  <Chip label="Ciência da Computação - UNIFENAS" variant="outlined" />
                              </Stack>
                          </Stack>
                      </HighlightCard>
                  </Grid>
                  <Grid item xs={12} md={7}>
                      <HighlightCard variant="outlined">
                          <Stack spacing={2}>
                              <EngineeringIcon color="secondary" />
                              <Typography variant="h5">Wealth Money</Typography>
                              <Typography color="text.secondary">
                                  Desenvolvimento de plataforma financeira P2P · 2026 - Atual
                              </Typography>
                              <Divider flexItem />
                              <Box component="ul" sx={{ m: 0, pl: 2.2, color: 'text.secondary', display: 'grid', gap: 1.2 }}>
                                  <Box component="li">Participação no desenvolvimento e evolução de sistemas financeiros voltados para operações P2P, que exigem alta confiabilidade, consistência de dados e processamento seguro de transações.</Box>
                                  <Box component="li">Atuo principalmente na construção de APIs e serviços backend com C#/.NET, trabalhando em integrações, modelagem de regras de negócio e evolução da arquitetura da plataforma. Também contribuo com aplicações frontend para entregar soluções completas e alinhadas às necessidades do produto.</Box>
                                  <Box component="li">Além do desenvolvimento, participo da evolução técnica da plataforma, colaborando em decisões relacionadas à arquitetura, bancos de dados, observabilidade e escalabilidade dos sistemas.</Box>
                              </Box>
                              <Stack direction="row" flexWrap="wrap" gap={1}>
                                  <Chip label="C#" variant="outlined" />
                                  <Chip label="ASP.NET Core" variant="outlined" />
                                  <Chip label="NestJS" variant="outlined" />
                                  <Chip label="Kubernetes" variant="outlined" />
                                  <Chip label="GCP" variant="outlined" />
                                  <Chip label="Angular" variant="outlined" />
                                  <Chip label="SQL Server" variant="outlined" />
                                  <Chip label="PostgreSQL" variant="outlined" />
                                  <Chip label="Docker" variant="outlined" />
                              </Stack>
                          </Stack>
                      </HighlightCard>
                  </Grid>

                  <Grid item xs={12} md={12}>
                      <HighlightCard variant="outlined">
                          <Stack spacing={2}>
                              <EngineeringIcon color="secondary" />
                              <Typography variant="h5">A2W Tecnologia e Inovações</Typography>
                              <Typography color="text.secondary">
                                  Evolução profissional e construção de produtos · Nov/2022 - Mar/2026
                              </Typography>
                              <Divider flexItem />
                              <Box component="ul" sx={{ m: 0, pl: 2.2, color: 'text.secondary', display: 'grid', gap: 1.2 }}>
                                  <Box component="li">Empresa onde evoluí de estagiário para Desenvolvedor Full Stack, participando ativamente da construção e evolução de sistemas corporativos.</Box>
                                  <Box component="li">Atuei no desenvolvimento de aplicações web com Angular, ASP.NET Core e NestJS, contribuindo para funcionalidades críticas, modernização de sistemas legados e melhorias de performance, usabilidade e manutenção.</Box>
                                  <Box component="li">A experiência em squads ágeis proporcionou contato constante com arquitetura de software, integrações entre sistemas, modelagem de dados e processos de entrega contínua, formando a base técnica que sustenta minha atuação atual em produtos financeiros.</Box>
                                  <Box component="li">Saí de lá com mais repertório em arquitetura, integração, evolução de sistemas legados e visão de infraestrutura com Kubernetes.</Box>
                              </Box>
                              <Stack direction="row" flexWrap="wrap" gap={1}>
                                  <Chip label="Angular" variant="outlined" />
                                  <Chip label="NestJS" variant="outlined" />
                                  <Chip label="ASP.NET Core" variant="outlined" />
                                  <Chip label="Kubernetes" variant="outlined" />
                                  <Chip label="MySQL" variant="outlined" />
                                  <Chip label="SQL Server" variant="outlined" />
                                  <Chip label="Scrum" variant="outlined" />
                              </Stack>
                          </Stack>
                      </HighlightCard>
                  </Grid>
              </Grid>

              <Box id="skills" mt={2} mb={3}>
                  <Typography variant="h3">Skills</Typography>
                  <Typography color="text.secondary" mt={1} maxWidth={720}>
                      Stack utilizada na construção de APIs, sistemas corporativos e produtos financeiros, com foco em backend, arquitetura de software e aplicações web modernas.
                  </Typography>
              </Box>
              <Box mb={3}>
                  <Stack direction="row" flexWrap="wrap" gap={1.5}>
                      {skillsSet.map((skill) => (
                          <SkillChip key={skill} label={skill} variant="outlined" />
                      ))}
                  </Stack>
              </Box>
          </Container>
      </Surface>
  )
}
  
export default About
  
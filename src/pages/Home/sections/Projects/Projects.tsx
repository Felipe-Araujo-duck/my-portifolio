import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimatonComponent/AnimationComponent";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import Agape from "../../../../assets/images/agape.png";
import Odontrack from "../../../../assets/images/odon-track.png";
import Mario from "../../../../assets/images/mario.png";
import Calculadora from "../../../../assets/images/calculadora-saudavel.png";
import GitHub from "../../../../assets/images/github.jpg";

const projects: ProjectCardProps[] = [
    {
        title: "Ágape",
        subtitle: "Projeto pessoal",
        srcImg: Agape,
        description: "Um sistema que comecei para organizar a rotina de pet shops e agropecuárias, conectando estoque, crediário, vendas e metas com uma base mais simples de manter.",
        technologies: ["Angular", "NestJS", "MySQL", "TypeScript"],
        websiteURL: "https://github.com/Felipe-Araujo-duck",
        codeURL: "https://github.com/Felipe-Araujo-duck",
    },
    {
        title: "Odontrack",
        subtitle: "Projeto acadêmico · Hackathon universitário",
        srcImg: Odontrack,
        description: "Projeto de hackathon voltado para clínicas, com foco na base do sistema: agenda, prontuário, perfis de usuário e apoio inteligente para o fluxo.",
        technologies: ["Angular", "ASP.NET Core", "MySQL", "JWT"],
        websiteURL: "https://www.linkedin.com/posts/felipe-araujo-62b384231_hackathon-inovaaexaeto-tecnologia-activity-7228582601014317057-EXUd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnl2oMBZ6vikIHeM_idWpDjaleKVxhps6A",
        codeURL: "https://www.linkedin.com/posts/felipe-araujo-62b384231_hackathon-inovaaexaeto-tecnologia-activity-7228582601014317057-EXUd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnl2oMBZ6vikIHeM_idWpDjaleKVxhps6A",
    },
    {
        title: "Mario Jump",
        subtitle: "Projeto pessoal",
        srcImg: Mario,
        description: "Um jogo curto para exercitar colisão, movimento e responsividade direto no navegador.",
        technologies: ["TypeScript", "HTML", "CSS"],
        websiteURL: "https://felipe-araujo-duck.github.io/mario/",
        codeURL: "https://github.com/Felipe-Araujo-duck/mario",
    },
    {
        title: "Calculadora Saudável",
        subtitle: "Aplicativo Flutter",
        srcImg: Calculadora,
        description: "Uma app simples para cálculos de IMC e índice de gordura com interface direta e sem distração.",
        technologies: ["Flutter", "Dart"],
        websiteURL: "https://github.com/Felipe-Araujo-duck/Calculadora-da-saude",
        codeURL: "https://github.com/Felipe-Araujo-duck/Calculadora-da-saude",
    },
    {
        title: "Mais projetos no GitHub",
        subtitle: "Portfólio e experimentos",
        srcImg: GitHub,
        description: "Outros estudos, testes e experimentos que ainda não viraram case, mas ajudam a mostrar evolução técnica e prática.",
        technologies: ["GitHub", "Estudos contínuos"],
        websiteURL: "https://github.com/Felipe-Araujo-duck/",
        codeURL: "https://github.com/Felipe-Araujo-duck/",
    },
];

const Projects: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        background: `linear-gradient(180deg, #0b1320 0%, ${theme.palette.background.default} 100%)`,
        padding: '72px 0',

    }));

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" mb={4}>
                    <Typography variant="overline" color="secondary.main" letterSpacing={4}>
                        Portfólio
                    </Typography>
                    <Typography variant="h2" mt={1}>
                        Projetos selecionados
                    </Typography>
                    <Typography color="text.secondary" mt={1} maxWidth={760}>
                        Estes são os projetos que melhor mostram meu jeito de trabalhar: sistemas com regra de negócio, integração e evolução de base.
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {projects.map((project: ProjectCardProps, index: number) => {
                        const isLastItem = index === projects.length - 1;
                        const isOddLength = projects.length % 2 !== 0;

                        // Se for o último de uma lista ímpar, centraliza
                        if (isLastItem && isOddLength) {
                            return (
                                <Grid item md={12} key={index}>
                                    <Box maxWidth={{ xs: '100%', md: '52%' }} mx="auto">
                                        <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                            <ProjectCard {...project} />
                                        </AnimationComponent>
                                    </Box>
                                </Grid>
                            );
                        }

                        return (
                            <Grid item md={6} key={index}>
                                <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                    <ProjectCard {...project} />
                                </AnimationComponent>
                            </Grid>
                        );
                    })}
                </Grid>

            </Container>
        </StyledExperience>
    )
}

export default Projects
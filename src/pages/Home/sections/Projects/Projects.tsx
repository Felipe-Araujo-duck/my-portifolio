import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimatonComponent/AnimationComponent";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const Projects: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Project Ágape",
            subtitle: "Jan 30, 2025 - Progress",
            srcImg: "/src/assets/images/agape.png",
            description: "O Sistema Ágape é uma solução profissional em desenvolvimento para gestão de pet shops, pensada para facilitar as vendas e o controle do negócio. Permite o cadastro de clientes com histórico de compras a prazo, controle automático de estoque, emissão de boletos e organização dos vendedores por usuário. Com uma interface intuitiva e tecnologias modernas como Angular 19, Nest.js e MySQL, o sistema oferece segurança com autenticação via token JWT e foco na performance. Ele ajuda o vendedor a vender mais com praticidade, enquanto o empresário ganha total controle sobre as operações do pet shop em tempo real podendo analisar o desempenho do seu negócio em qualquer momento. (Esse projeto foi desenvolvido somente por mim com a presença de um cliente avaliando o projeto e é armazenado em um repositório privado)",
            technologies: "Technologies: Angular, Nest.js, MySQL",
            websiteURL: "https://github.com/Felipe-Araujo-duck",
            codeURL: "https://github.com/Felipe-Araujo-duck",
        },
        {
            title: "Project Odon Track",
            subtitle: "Apr 25, 2024 -  Jun 26, 2024",
            srcImg: "/src/assets/images/odon-track.png",
            description: "O Odontrack é um sistema desenvolvido com o objetivo de auxiliar profissionais da área odontológica no gerenciamento de seus atendimentos e prontuários. A plataforma permite o cadastro e acompanhamento de pacientes, controle de agendamentos, registros clínicos e geração de relatórios. Com uma interface moderna desenvolvida em Angular e um backend robusto em ASP.NET Core, o sistema garante uma experiência eficiente e segura. Os dados são armazenados em um banco MySQL, garantindo integridade e organização, e todo o controle de versionamento é feito com Git. O Odontrack é a solução ideal para dentistas que buscam otimizar sua rotina e oferecer um atendimento de qualidade aos seus pacientes. (Este projeto foi desenvolvido em equipe e é armazenado em um repositório privado)",
            technologies: "Technologies: Angular, ASP.NET Core, MySQL, Git",
            websiteURL: "https://www.linkedin.com/posts/felipe-araujo-62b384231_hackathon-inovaaexaeto-tecnologia-activity-7228582601014317057-EXUd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnl2oMBZ6vikIHeM_idWpDjaleKVxhps6A",
            codeURL: "https://www.linkedin.com/posts/felipe-araujo-62b384231_hackathon-inovaaexaeto-tecnologia-activity-7228582601014317057-EXUd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnl2oMBZ6vikIHeM_idWpDjaleKVxhps6A",
        },
        {
            title: "Project Mario Jump",
            subtitle: "Jun 30, 2023 - Jul 1, 2023",
            srcImg: "/src/assets/images/mario.png",
            description: "Mini game do Mario, inspirado no clássico jogo do dinossauro da Google. Uma experiência simples, divertida e responsiva, onde o personagem corre e desvia de obstáculos.",
            technologies: "Technologies: TypeScript, HTML, CSS",
            websiteURL: "https://felipe-araujo-duck.github.io/mario/",
            codeURL: "https://github.com/Felipe-Araujo-duck/mario",
        },
        {
            title: "Project Calculadora Saudável",
            subtitle: "Mar 26, 2025",
            srcImg: "/src/assets/images/calculadora-saudavel.png",
            description: "Aplicativo desenvolvido em Flutter que calcula o IMC (Índice de Massa Corporal) e o IG (Índice de Gordura) com base na altura, peso, idade e sexo do usuário. Simples, funcional e com interface intuitiva. ",
            technologies: "Technologies: Flutter, Dart",
            websiteURL: "https://github.com/Felipe-Araujo-duck/Calculadora-da-saude",
            codeURL: "https://github.com/Felipe-Araujo-duck/Calculadora-da-saude",
        },
        {
            title: "For more projects visit my Git Hub",
            subtitle: "",
            srcImg: "/src/assets/images/github.jpg",
            description: "",
            technologies: "",
            websiteURL: "https://github.com/Felipe-Araujo-duck/",
            codeURL: "https://github.com/Felipe-Araujo-duck/",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => {
                        const isLastItem = index === projects.length - 1;
                        const isOddLength = projects.length % 2 !== 0;

                        // Se for o último de uma lista ímpar, centraliza
                        if (isLastItem && isOddLength) {
                            return (
                                <Grid item md={12} key={index}>
                                    <Box maxWidth="50%" mx="auto">
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
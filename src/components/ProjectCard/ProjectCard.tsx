import { Box, Card, CardContent, Chip, Stack, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string[]
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "cover",
        aspectRatio: "16 / 10",
        borderRadius: "20px",
        border: `1px solid ${theme.palette.secondary.main}22`,
        marginBottom: "18px",
    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        height: '100%',
        borderRadius: '26px',
        transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
        '&:hover': {
            transform: 'translateY(-6px)',
            borderColor: theme.palette.secondary.main,
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.3)',
        }
    }));

    return (
        <StyledCard>
            <CardContent sx={{ p: 3 }}>
                <StyledImg src={srcImg} alt={title} loading="lazy" />
                <Stack spacing={1.5}>
                    <Box>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                        {description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                        {technologies.map((technology) => (
                            <Chip key={technology} label={technology} size="small" variant="outlined" />
                        ))}
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} pt={1}>
                        <StyledButton onClick={() => window.open(websiteURL, '_blank', 'noopener,noreferrer')}>
                            Ver projeto
                        </StyledButton>
                        <StyledButton onClick={() => window.open(codeURL, '_blank', 'noopener,noreferrer')}>
                            Ver código
                        </StyledButton>
                    </Stack>
                </Stack>
            </CardContent>
        </StyledCard>
    )
}

export default ProjectCard
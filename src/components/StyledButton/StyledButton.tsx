import { styled } from "@mui/material/styles";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode,
    onClick: () => void,
    type?: "button" | "submit" | "reset"
}

const BaseButton = styled("button")(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  color: theme.palette.secondary.contrastText,
  padding: "12px 18px",
  border: "none",
  borderRadius: 999,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  boxShadow: "0 16px 40px rgba(240, 179, 94, 0.24)",
  transition: "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
  '&:hover': {
    transform: "translateY(-2px)",
    boxShadow: "0 20px 48px rgba(240, 179, 94, 0.3)",
    filter: "brightness(1.02)",
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.info.main}`,
    outlineOffset: 3,
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
    return (
      <BaseButton type="button" onClick={onClick}>
          {children}
      </BaseButton>
    )
  }
  
  export default StyledButton
  
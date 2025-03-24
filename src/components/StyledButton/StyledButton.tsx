import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode,
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
    const StyledButton = styled("button")(({theme}) => ({
      backgroundColor: "transparent",
      color: theme.palette.primary.contrastText,
      padding: "5px 15px",
      border: `1px solid ${theme.palette.primary.contrastText}`,
      borderRadius: "3px",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      }
    }));
    return (
      <>
        <StyledButton onClick={onClick}>
          {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  
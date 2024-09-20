import { Box, Typography } from "@mui/material";
import { theme } from "../styles/theme";

export const Footer = () => {
  return (
    <Box bottom={0} width={"100%"} bgcolor={theme.colors.primaryColor}>
      <Box p={theme.sizes.xsmall}>
        <Typography color={theme.colors.white} textAlign={"center"}>
          Diego Lima da Silva
        </Typography>
      </Box>
    </Box>
  );
};

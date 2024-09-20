import { Box, Typography } from "@mui/material";
import { theme } from "../styles/theme";

export const Header = () => {
  return (
    <Box
      bgcolor={theme.colors.primaryColor}
      height={"8rem"}
      p={theme.sizes.small}
      justifyContent={"center"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography color={theme.colors.white} fontSize={theme.sizes.medium}>
        Oficina UNIFG
      </Typography>
      <Typography color={theme.colors.white} fontSize={theme.sizes.medium}>
        Landing page com React
      </Typography>
    </Box>
  );
};

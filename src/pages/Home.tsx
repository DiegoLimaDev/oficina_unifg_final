import { Box } from "@mui/material";
import { Footer } from "../components/Footer";
import { GridForCards } from "../components/GridForCards";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
      <Header />
      <Box flex={1}>
        <GridForCards />
      </Box>
      <Footer />
    </Box>
  );
};

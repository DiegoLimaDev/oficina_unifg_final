import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import { IUsers } from "../types/users";
import { MyDialog } from "./MyDialog";
import { useState } from "react";

type props = {
  user: IUsers;
};

export const CardComponent = ({ user }: props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <Box width={"15rem"} height={"10rem"} p={"1rem"}>
        <CardContent>
          <Typography fontSize={theme.sizes.small} textAlign={"center"}>
            {user.id}
          </Typography>
          <Typography fontSize={theme.sizes.small} textAlign={"center"}>
            {user.username}
          </Typography>
        </CardContent>
        <Box display={"block"} m={"0 auto"} width={"fit-content"}>
          <Button variant={"contained"} onClick={handleClick}>
            Informações
          </Button>
        </Box>
      </Box>
      <MyDialog user={user} isOpen={isOpen} handleClose={handleClick} />
    </Card>
  );
};

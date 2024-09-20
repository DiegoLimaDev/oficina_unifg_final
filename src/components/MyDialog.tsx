import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { IUsers } from "../types/users";

type props = {
  isOpen: boolean;
  user: IUsers;
  handleClose: () => void;
};

export const MyDialog = ({ isOpen, user, handleClose }: props) => {
  return (
    <Box>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle textAlign={"center"}>{user.name}</DialogTitle>
        <DialogContent>
          <Typography>Email: {user.email}</Typography>
          <Typography>City: {user.address.city}</Typography>
          <Typography>Company: {user.company.name}</Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

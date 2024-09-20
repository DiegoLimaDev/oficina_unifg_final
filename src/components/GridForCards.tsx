import { Grid2 } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardComponent } from "./CardComponent";
import { IUsers } from "../types/users";

export const GridForCards = () => {
  const [data, setData] = useState<IUsers[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  });

  return (
    <Grid2 container spacing={2} p={2} justifyContent={"center"}>
      {data.map((item) => {
        return (
          <Grid2 key={item.id}>
            <CardComponent user={item} />
          </Grid2>
        );
      })}
    </Grid2>
  );
};

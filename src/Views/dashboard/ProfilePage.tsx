import React from "react";
import { UserContext } from "../../controllers/contexts";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function ProfilePage() {
  const user = React.useContext(UserContext);
  return (
    <Grid>
      <Typography>{user.name || "Andres Advincula"}</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Email" secondary={user.email || "hi"} />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary="Phone Number" secondary={user.phone || "hi"} />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText
            primary="Address"
            secondary={user.address.street || "hi"}
          />
        </ListItem>
      </List>
    </Grid>
  );
}

import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const[activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  }, [])

  const title = 'Reactivities!'
  return (
    <Fragment>
      <Typography variant="h3" className="app">{title}</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Fragment>
  )
}

export default App

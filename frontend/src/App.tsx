import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

function App() {
  const[activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data))
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

import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import FolderIcon from "@material-ui/icons/Folder";

import * as React from "react";


const styles = createStyles({
  paper: {
    marginleft: 10,
    marginright: 10,
  },
  root: {
    padding: 0,
  },
});

type ClassNames = keyof typeof styles;

interface ITodoProps {
  completed: boolean;
  text: string;
  onClick: () => void;
}

export const Todo: React.SFC<ITodoProps> = 
  (props: ITodoProps & WithStyles<ClassNames>) => {
    const { classes, completed, text, onClick } = props;
    return (
      <Paper className={classes.paper}>
        <ListItem
          onClick={onClick}
          style={ {textDecoration: completed ? 'line-through' : 'none'} }
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </Paper>
    )
}

export default withStyles<{} & ClassNames>(styles)<ITodoProps>(Todo);

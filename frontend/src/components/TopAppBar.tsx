import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import * as React from "react";

const styles = createStyles({
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
});

type ClassNames = keyof typeof styles;

export interface ITopAppBarProps {
  dummyProp: string;
}

export const TopAppBar: React.SFC<ITopAppBarProps> = 
  (props: ITopAppBarProps & WithStyles<ClassNames>) => {
  const { classes, dummyProp } = props;
  return (
    <div className={classes.root}>
      <AppBar position={"static"}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {dummyProp}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles<{} & ClassNames>(styles)<ITopAppBarProps>(TopAppBar);

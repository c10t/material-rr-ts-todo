import { createStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { WithStyles } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import * as React from "react";


const styles = createStyles({
  paper: {
    margin: 10,
  },
  root: {
    padding: 10,
  },
  textfield: {
    margin: 10,
  },
});

type ClassNames = keyof typeof styles;

export interface IAddTodoButtonProps {
  onSubmit: (s: string) => void;
}

class AddButton extends React.Component<IAddTodoButtonProps & WithStyles<ClassNames>, {input: string}> {
  constructor(props: IAddTodoButtonProps & WithStyles<ClassNames>) {
    super(props)
    this.state = {
      input: "",
    }
  }

  public render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <form onSubmit={this.onFormSubmit}>
            <TextField className={classes.textfield} 
              value={this.state.input} 
              onChange={this.onInputChange} 
            />
            <Button type="submit" color="secondary">
              ADD TODO*
            </Button>
          </form>
        </Paper>
      </div>
    )
  }

  private onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(!this.state.input.trim()) {
      return
    }

    this.props.onSubmit(this.state.input);

    this.setState({
      input: "",
    })
  }

  private onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      input: e.currentTarget.value,
    })
  }
}

export default withStyles<{} & ClassNames>(styles)(AddButton);

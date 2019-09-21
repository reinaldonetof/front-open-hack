import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Button
} from "@material-ui/core";
import { lighten, withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  gridAchiev: {
    marginTop: theme.spacing(2)
  },
  buttonHacka: {
    flex: 1,
    margin: 5,
    height: 30,
  },
}));

const Participated = props => {
  const [Participated, setParticipated] = useState(
    "1º Shawee Online Hackathon"
  );

  const [haveParticipated, setHaveParticipated] = useState('yes')

  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid
            container
            direction={"row"}
            justify="flex-start"
            alignItems="center"
          >
            <Typography
              className={classes.title}
              color="textSecondary"
              variant="h6"
              style={{ textAlign: "center" }}
            >
              Did you participate the latest hacka?
            </Typography>
          </Grid>
          {haveParticipated === "yes" ? (
            <div>
              <Typography style={{ textAlign: "center" }} variant="h4">
                {Participated}
              </Typography>
              <Grid container className={classes.gridAchiev}>
                <Grid direction="row" container xs>
                  <Button
                    size="small"
                    variant="outlined"
                    className={classes.buttonHacka}
                  >
                    Yes
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    className={classes.buttonHacka}
                    onClick={() => setHaveParticipated("no")}
                  >
                    No
                  </Button>
                </Grid>
              </Grid>
            </div>
          ) : (
            <Grid
              container
              justify="center"
              alignItems="center"
            >
              <Typography style={{ textAlign: "center" }} variant="h4">
                Serious? Try to participate on next :D
              </Typography>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

Participated.propTypes = {
  className: PropTypes.string
};

export default Participated;

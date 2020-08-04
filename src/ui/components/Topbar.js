import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="default">
          <Toolbar>
            <Link component={GatsbyLink} variant="h6" to="/">
              TV Kitchen
            </Link>
            <Link component={GatsbyLink} variant="body2" to="/documentation/">
              Documentation
            </Link>
            <Link component={GatsbyLink} variant="body2" to="/partners/">
              Partners
            </Link>
            <Link component={GatsbyLink} variant="body2" to="/help/">
              Help
            </Link>
            <Link component={GatsbyLink} variant="body2" to="/about/">
              About
            </Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbar} />
    </>
  );
}
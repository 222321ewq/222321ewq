import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import ProgressProvider from './ProgressProvider';
import { useStyles } from './style';

function CircularBarContainer({ description, children }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.circleBarContainer}>{children}</div>
      <div className={classes.textContainer}>
        <Typography variant="body2" component="p" style={{ fontSize: 16, fontWeight: 'bold' }}>
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default function StatisticCircle({ value, color, description }) {
  const classes = useStyles();
  return (
    <Grid item xs className={classes.gridItem}>
      <CircularBarContainer description={description}>
        <ProgressProvider valueStart={0} valueEnd={value}>
          {newValue => (
            <CircularProgressbar
              style={classes.progress}
              value={newValue}
              strokeWidth={12}
              text={`${newValue}%`}
              styles={{
                text: {
                  fill: 'black',
                  fontSize: '1.6em',
                  fontWeight: 'bold',
                },
                path: {
                  stroke: color,
                },
              }}
            />
          )}
        </ProgressProvider>
      </CircularBarContainer>
    </Grid>
  );
}

CircularBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

StatisticCircle.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

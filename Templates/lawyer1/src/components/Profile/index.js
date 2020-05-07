import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Typography } from '@material-ui/core';
import { useStyles } from './style';

const Profile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Lucas G. Mota',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Advogado Trabalhista',
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=867&q=80"
        to="/settings"
      />
      <div className={classes.information}>
        <Typography className={classes.name} variant="h6">
          {user.name}
        </Typography>
        <Typography variant="body2">{user.bio}</Typography>
      </div>
    </div>
  );
};

Profile.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};

export default Profile;

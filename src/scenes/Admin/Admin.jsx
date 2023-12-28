import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, FormControl, TextField, Button } from '@material-ui/core';

import styles from './style';
import { setAccessToken, getUser } from '../../libs/utils/helpers';
import request, { API_METHOD, ENDPOINTS } from '../../libs/request';

import AdminPanel from './components/AdminPanel';

const useStyles = makeStyles(styles);

const defaultUserState = {
  firstName: '',
  lastName: '',
  username: '',
  role: '',
};

const Admin = () => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(defaultUserState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const userData = getUser();

    if (userData) {
      setUser(userData);
    }
  }, []);

  const resetFields = () => {
    setUsername('');
    setPassword('');
  };

  const login = () => {
    if (!username || !password) {
      return false;
    }

    setIsLoading(true);
    const payload = { username, password };

    request(API_METHOD.post, ENDPOINTS.login, { data: payload })
      .then((res) => {
        if (res.accessToken) {
          setAccessToken(res.accessToken);
          setUser(getUser());
        }
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={classes.body}>
      {!user?.username ? (
        <div className={classes.root}>
          <Typography variant="h4" align="center">Admin Login</Typography>

          <div className={classes.form}>
            <FormControl fullWidth>
              <TextField
                id="username"
                type="text"
                label="Username"
                value={username}
                fullWidth
                margin="dense"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="password"
                type="password"
                label="Password"
                value={password}
                fullWidth
                margin="dense"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <div className={classes.button}>
              <Button
                style={{ marginRight: 5 }}
                onClick={resetFields}
                disabled={isLoading || (!username && !password)}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={login}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <AdminPanel user={user} />
      )}
    </div>
  )
}

export default Admin;

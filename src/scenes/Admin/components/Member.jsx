import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, makeStyles } from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

import ImageUpload from '../../../components/ImageUpload';
import DialogBox from '../../../components/DialogBox';
import Loader from '../../../components/Loader';
import request, { API_METHOD, ENDPOINTS } from '../../../libs/request';
import styles from './style';

const useStyles = makeStyles(styles);

const ROLES = [{ label: 'Admin', value: 'admin' }, { label: 'User', value: 'user' }];

const deleteUserSchema = { fullName: '', id: '' };

const AdminPanel = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState(ROLES[1].value);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [profile, setProfile] = useState('');
  const [message, setMessage] = useState('');
  const [facebook, setFacebook] = useState([]);
  const [whatsapp, setWhatsapp] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    error: '',
    message: '',
    status: null,
    timestamp: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState(deleteUserSchema);
  const [enteredDeleteUser, setEnteredDeleteUser] = useState('');
  const [deleteLoader, setDeleteLoader] = useState(false);

  useEffect(() => {
    const fetchAllUsers = () => {
      request(API_METHOD.get, ENDPOINTS.allUsers, { params: { type: 'member' }})
        .then((res) => setUsers(res))
        .catch((err) => console.error(err))
    };

    fetchAllUsers();
  }, []);

  const clearButtonDisabled = (isLoading || (
    !firstName && !lastName && !role &&
    !username && !password && !designation &&
    !profile && !message && !facebook && !whatsapp
  ));

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setRole(ROLES[1].value);
    setUsername('');
    setPassword('');
    setDesignation('');
    setProfile('');
    setMessage('');
    setFacebook([]);
    setWhatsapp([]);
  };

  const closeDeleteModal = () => {
    setIsDialogOpen(false);
    setDeleteUser(deleteUserSchema);
    setEnteredDeleteUser('');
  };

  const addUser = () => {
    if (!firstName || !lastName || !role || !username || !password || !designation || !profile) {
      return false;
    }

    let contacts = [];

    if (facebook.length) {
      contacts = [...contacts, { type: 'facebook', value: facebook }];
    }

    if (whatsapp.length) {
      contacts = [...contacts, { type: 'whatsapp', value: whatsapp }];
    }

    const form = new FormData();
    form.append('firstName', firstName);
    form.append('lastName', lastName);
    form.append('role', role);
    form.append('username', username);
    form.append('password', password);
    form.append('designation', designation);
    form.append('profile', profile);
    form.append('message', message);

    if (contacts.length) {
      form.append('contacts', JSON.stringify(contacts));
    }

    setIsLoading(true);

    request(API_METHOD.post, ENDPOINTS.signup, { data: form })
      .then((res) => {
        resetFields();
        setUsers((prevUsers) => [...prevUsers, res]);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const removeUser = () => {
    setDeleteLoader(true);
    request(API_METHOD.delete, ENDPOINTS.deleteUser.replace(':id', deleteUser.id))
      .then(() => {
        const restUsers = users.filter((user) => user.originalId !== deleteUser.id);
        setUsers(restUsers);
        closeDeleteModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setDeleteLoader(false));
  };

  return (
    <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
      {error.error ? (
        <span style={{ color: 'red' }}>
          {error.message}
        </span>
      ) : null}
      <div className={classes.form}>
        {/* First Name */}
        <FormControl style={{ margin: '0 10px' }}>
          <TextField
            id="firstName"
            type="text"
            label="First Name"
            value={firstName}
            fullWidth
            margin="dense"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>

        {/* Last Name */}
        <FormControl style={{ margin: '0 10px' }}>
          <TextField
            id="lastName"
            type="text"
            label="Last Name"
            value={lastName}
            fullWidth
            margin="dense"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>

        {/* Role */}
        <FormControl style={{ margin: '0 10px' }}>
          <InputLabel id="role">Role</InputLabel>
          <Select
            labelId="role"
            id="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {ROLES.map((role) => <MenuItem value={role.value}>{role.label}</MenuItem>)}
          </Select>
        </FormControl>

        {/* Designation */}
        <FormControl style={{ margin: '0 10px' }}>
          <TextField
            id="designation"
            type="text"
            label="Designation"
            value={designation}
            fullWidth
            margin="dense"
            onChange={(e) => setDesignation(e.target.value)}
          />
        </FormControl>

        {/* Message */}
        <FormControl style={{ margin: '0 10px' }}>
          <TextField
            id="message"
            type="text"
            label="Message"
            value={message}
            fullWidth
            margin="dense"
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>

        {/* Social Media - Facebook */}
        <FormControl style={{ margin: '0 10px' }}>
          <TextField
            id="facebook"
            type="text"
            label="Facebook"
            value={facebook}
            fullWidth
            margin="dense"
            onChange={(e) => setFacebook(e.target.value)}
          />
        </FormControl>

        {/* Social Media - Whatsapp */}
        <FormControl style={{ margin: '0 10px' }}>
          <TextField
            id="whatsapp"
            type="number"
            label="WhatsApp"
            value={whatsapp}
            fullWidth
            margin="dense"
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </FormControl>

        {/* Username */}
        <FormControl style={{ margin: '0 10px' }}>
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

        {/* Password */}
        <FormControl style={{ margin: '0 10px' }}>
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

      <ImageUpload image={profile} setImage={setProfile} />
      </div>
      <div className={classes.button}>
        <Button
          style={{ marginRight: 5 }}
          onClick={resetFields}
          disabled={clearButtonDisabled}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={addUser}
          startIcon={isLoading ? <Loader /> : null}
        >
          Add user
        </Button>
      </div>

      <Typography>Member List</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Profile Image</TableCell>
              <TableCell align="right">Designation</TableCell>
              <TableCell align="right">Message</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.firstName + user.lastName}>
                <TableCell component="th" scope="user">
                  {`${user.firstName} ${user.lastName}`}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">
                  <img
                    alt="ProfileImage"
                    width={"250px"}
                    src={user.profile}
                  />
                </TableCell>
                <TableCell align="right">{user.designation}</TableCell>
                <TableCell align="right">{user.message}</TableCell>
                <TableCell align='center'>
                  <DeleteIcon
                    color="error"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setIsDialogOpen(true);
                      setDeleteUser({
                        fullName: `${user.firstName} ${user.lastName}`,
                        id: user.originalId
                      });
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DialogBox
        open={isDialogOpen}
        title="Delete Member"
        content={`Do you really want to remove "${deleteUser.fullName}"? This action can't undo.`}
        agreeButtonLabel="Delete Member"
        disagreeButtonLabel="Cancel"
        agreeButtonAction={() => removeUser()}
        disagreeButtonAction={() => setIsDialogOpen(false)}
        disableAgreeButton={!deleteUser.id || deleteUser.fullName !== enteredDeleteUser || deleteLoader}
        disableDisagreeButton={false}
        isDeleteModal
        disableButtonColor="ternary"
        children={
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Repeat Full Name"
            type="text"
            fullWidth
            onChange={(e) => setEnteredDeleteUser(e.target.value)}
          />
        }
      />
    </AccordionDetails>
  );
};

export default AdminPanel;

import { Box, Button, Dialog, styled, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

// Styled Components
const Component = styled(Box)`
  max-height: 90vh;
  width: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Image = styled(Box)`
  background-image: url('https://images.meesho.com/images/marketing/1661417516766.webp');
  background-size: cover;
  background-position: center;
  height: 250px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-shrink: 0;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 25px 35px;
  overflow-y: auto;
  flex-grow: 1;

  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #9c27b0;
  color: white;
  height: 45px;
  font-weight: 600;
  border-radius: 6px;
  font-size: 16px;

  &:hover {
    background: #7b1fa2;
  }
`;

const Heading = styled(Typography)`
  font-weight: 600;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #9c27b0;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

// Initial view state
const accountInitialValues = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const signupIntitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}

const loginInitialValues = {
  username: '',
  password: ''
}

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupIntitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { setAccount, setUserEmail } = useContext(DataContext); // Added setUserEmail here

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    if (account.view === 'login') {
      setLogin({ ...login, [e.target.name]: e.target.value }); // Update login fields
    } else {
      setSignup({ ...signup, [e.target.name]: e.target.value }); // Update signup fields
    }
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
    setUserEmail(signup.email); // set email to context
    localStorage.setItem('account', signup.firstname);
    localStorage.setItem('userEmail', signup.email); // store email in localStorage
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
      setUserEmail(response.data.data.email); // set email to context
      localStorage.setItem('account', response.data.data.firstname);
      localStorage.setItem('userEmail', response.data.data.email); // store email in localStorage
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="body"
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 500,
          borderRadius: 2,
          overflow: 'hidden',
          maxHeight: '90vh',
        },
      }}
    >
      <Component>
        <Image />
        {
          account.view === "login" ?
            <Wrapper>
              <Heading>Login to view your profile</Heading>
              <TextField variant="standard" onChange={onInputChange} name="username" label="Enter Username" />
              {error && <Error>Please enter valid username or password</Error>}
              <TextField variant="standard" onChange={onInputChange} name="password" label="Enter Password" />
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <CreateAccount onClick={toggleSignup}>New to Meesho? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
              <Heading>SignUp to view your profile</Heading>
              <TextField variant="standard" onChange={onInputChange} name='firstname' label="Enter Firstname" />
              <TextField variant="standard" onChange={onInputChange} name='lastname' label="Enter Lastname" />
              <TextField variant="standard" onChange={onInputChange} name='username' label="Enter Username" />
              <TextField variant="standard" onChange={onInputChange} name='email' label="Enter Email" />
              <TextField variant="standard" onChange={onInputChange} name='password' label="Enter Password" />
              <TextField variant="standard" onChange={onInputChange} name='phone' label="Enter Phone" />
              <LoginButton onClick={signupUser}>Continue</LoginButton>
            </Wrapper>
        }
      </Component>
    </Dialog>
  );
};

export default LoginDialog;

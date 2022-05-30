import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Homepage from './pages/homepage/homepage';
import ResultPages from './pages/resultpage/resultpage';
import ContentPage from './pages/contentpage/contentpage';
import EffectPage from './pages/effectpace/effectpage';
import ProtectPage from './pages/protectpage/protectpage'
import './App.scss'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',

    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      borderRadius: '10px',
      width: '300px'
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = React.useState<string>('homepage');
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderSwitch = () => {
    switch (pages) {
      case 'homepages':
        return <Homepage />;
      default:
        return 'foo';
    }
  }

  const ChangePages = (page: any) => {
    setPages(page)
  }

  const renderPages = () => {
    switch (pages) {
      case "homepage": return <Homepage ChangePages={ChangePages} />;
      case "resultpage": return <ResultPages ChangePages={ChangePages} />;
      case "contentpage": return <ContentPage ChangePages={ChangePages} />;
      case "effectpage": return <EffectPage />;
      case "protectpage": return <ProtectPage />;
      default: return <Homepage ChangePages={ChangePages} />;
    }
  }

  return (
    <React.Fragment>
      <Typography component="div" className="App">
        <AppBar position="static" className='bg-pink'>
          <Toolbar>
            <Typography variant="h6" className="title">
              มะเร็งเต้านม
            </Typography>
            <IconButton aria-label="SignIn" onClick={handleOpen}>
              <ExitToAppIcon style={{ color: '#fff' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container fixed className='content'>
          {renderPages()}
        </Container>
        <Typography component="div" className='footer'>

        </Typography>
      </Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form autoComplete="off">
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <Typography component="div" style={{ marginBottom: '30px' }}>
                    <h1 style={{ color: 'green' }}>มะเร็งเต้านม</h1>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    style={{ width: '-webkit-fill-available' }}
                    label="ชื่อผู้ใช้"
                    helperText="Incorrect entry."
                    size="small"
                    variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    style={{ width: '-webkit-fill-available' }}

                    label="รหัสผ่าน"
                    helperText="Incorrect entry."
                    size="small"
                    variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography component="div" style={{ marginBottom: '10px' }}>

                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button style={{ width: '-webkit-fill-available' }} variant="outlined" color="primary">
                    เข้าสู๋ระบบ
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button style={{ width: '-webkit-fill-available' }} variant="outlined">
                    สมัครสมาชิก
                  </Button>
                </Grid>

              </Grid>
            </form>

          </div>
        </Fade>
      </Modal>
    </React.Fragment >
  )
}

export default App;
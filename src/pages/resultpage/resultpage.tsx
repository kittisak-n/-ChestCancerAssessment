import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import './resultpage.scss'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);
const hearder_preview = require('./../../assets/images/woman-with-illuminated-chest.jpg');
const ResultPages = (props: any) => {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <React.Fragment>
            <Typography className="resultpage">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" >
                                หน้าแรก
                            </Link>
                            <Typography color="textPrimary">บันทึกการตรวจ</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <img src={hearder_preview} className="img-preview" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>

                        <form autoComplete="off">
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="div" className="from-label">
                                        <Typography className="label">วันที่ทำการตรวจ</Typography>
                                        <TextField variant="outlined" type={'date'} size="small" style={{ width: '-webkit-fill-available' }} />
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="div" className="from-label">
                                        <Typography className="label" >เคยทำการตรวจ</Typography>

                                        <FormControl variant="outlined" size="small" style={{ width: '-webkit-fill-available' }}>
                                            <Select
                                                value={2}
                                            >
                                                <MenuItem value={2}><em>โปรดเลือก</em>
                                                </MenuItem>
                                                <MenuItem value={0}>Ten</MenuItem>
                                                <MenuItem value={1}>Twenty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography component="div" className="from-label">
                                        <Typography className="label">พบ</Typography>
                                        <FormControl variant="outlined" size="small" style={{ width: '-webkit-fill-available' , marginBottom: '15px' }}>
                                            <Select
                                                value={2}
                                            >
                                                <MenuItem value={2}><em>โปรดเลือก</em>
                                                </MenuItem>
                                                <MenuItem value={0}>Ten</MenuItem>
                                                <MenuItem value={1}>Twenty</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12} sm={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} sm={6}>
                                            <Button style={{ width: '-webkit-fill-available' }} variant="outlined">
                                                บันทึกผลการตรวจ
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Button style={{ width: '-webkit-fill-available' }} variant="outlined">
                                                ประวัติการตรวจ
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>

                    </Grid>


                </Grid>
            </Typography>

        </React.Fragment>
    )

}

export default ResultPages;
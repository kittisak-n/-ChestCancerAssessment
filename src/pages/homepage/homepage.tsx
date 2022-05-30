import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './homepage.scss'
const self_examination_icon = require('./../../assets/images/self-examination.png');
const surgery_icon = require('./../../assets/images/surgery.png');
const breast_cancer_protect_icon = require('./../../assets/images/pink-ribbon.png');
const health_report_icon = require('./../../assets/images/health-report.png');
const breast_cancer_icon = require('./../../assets/images/breast-cancer.png');
const breast_cancer_2_icon = require('./../../assets/images/breast-cancer (2).png');
const hearder_preview = require('./../../assets/images/woman-with-illuminated-chest.jpg');

const HomePage = (props: any) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Typography component="div" className="homepage">
                <Typography component="div">
                    <Typography component="div">
                        <img src={hearder_preview} className="img-preview" />
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={4}>
                            <Card variant="outlined" onClick={() => {
                                props.ChangePages('contentpage')
                            }} >
                                <CardContent>
                                    <Typography component="div" className='img-box'>
                                        <img className='img-icon' alt='self_examination' src={self_examination_icon} />
                                    </Typography>
                                    <Typography className='TextHeader'>
                                        มะเร็งเต้านม
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} >
                            <Card variant="outlined" onClick={() => {
                                props.ChangePages('effectpage')
                            }} >
                                <CardContent>
                                    <Typography component="div" className='img-box'>
                                        <img className='img-icon' alt='surgery' src={surgery_icon} />
                                    </Typography>
                                    <Typography className='TextHeader'>
                                        ผลกระทบ
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Card variant="outlined" onClick={() => {
                                props.ChangePages('protectpage')
                            }}>
                                <CardContent>
                                    <Typography component="div" className='img-box'>
                                        <img className='img-icon' alt='breast_cancer_protect' src={breast_cancer_protect_icon} />
                                    </Typography>
                                    <Typography className='TextHeader'>
                                        การป้องกัน
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography component="div" className='img-box'>
                                        <img className='img-icon' alt='health_report_icon' src={health_report_icon} />
                                    </Typography>
                                    <Typography className='TextHeader'>
                                        แบบประเมิน
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Card variant="outlined" onClick={() => {
                                props.ChangePages('resultpage')
                            }}>
                                <CardContent>
                                    <Typography component="div" className='img-box'>
                                        <img className='img-icon' alt='breast_cancer_icon' src={breast_cancer_icon} />
                                    </Typography>
                                    <Typography className='TextHeader'>
                                        บันทึกการตรวจ
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography component="div" className='img-box'>
                                        <img className='img-icon' src={breast_cancer_2_icon} />
                                    </Typography>
                                    <Typography className='TextHeader'>
                                        แหล่งข้อมูล
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <iframe

                                src={`https://www.youtube.com/embed/YRVByjMs_jI`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="การตรวจเต้านมด้วยตนเอง"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <iframe

                                src={`https://www.youtube.com/embed/yW2f_hNKyu8`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </Grid>
                    </Grid>
                </Typography>
            </Typography>
        </React.Fragment >
    )
}



export default HomePage;
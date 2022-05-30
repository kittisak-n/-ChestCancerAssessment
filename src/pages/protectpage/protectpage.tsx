import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import './protectpage.scss';

const hearder_preview = require('./../../assets/images/woman-with-illuminated-chest.jpg');


const ProtectPage = (props: any) => {
    return (
        <React.Fragment>
            <Typography className="effectpage">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" >
                                หน้าแรก
                            </Link>
                            <Typography color="textPrimary">การป้องกัน</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <img src={hearder_preview} className="img-preview" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="title">การป้องกัน ?</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div" className="content-detail">
                            แม้สาเหตุของมะเร็งเต้านมยังไม่เป็นที่แน่ชัด แต่การปฏิบัติตัวที่ดีจะช่วยลดโอกาสเกิดมะเร็งเต้านม ได้แก่
                        </Typography>
                        <div style={{ height: '10px' }} />
                        <Typography>
                            <ul style={{ marginTop: '0px', marginLeft: '-10px', marginBottom: '0px' }}>
                                <li>เลือกรับประทานอาหาร เน้นผักหรือผลไม้</li>
                                <li>ควบคุมน้ำหนักไม่ให้เกินเกณฑ์และอ้วน</li>
                                <li>ออกกำลังกายสัปดาห์ละ 5 วัน วันละ 30 นาที</li>
                                <li>งดสูบบุหรี่</li>
                                <li>งดดื่มแอลกอฮอล์</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Typography>
        </React.Fragment>
    )
}

export default ProtectPage;
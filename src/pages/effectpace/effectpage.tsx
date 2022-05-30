import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import './effectpage.scss';

const hearder_preview = require('./../../assets/images/woman-with-illuminated-chest.jpg');


const EffectPage = (props: any) => {
    return (
        <React.Fragment>
            <Typography className="effectpage">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" >
                                หน้าแรก
                            </Link>
                            <Typography color="textPrimary">ผลกระทบ</Typography>
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
                                <div className="title">ผลกระทบ ?</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="sub-title">ตนเอง</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div" className="content-detail">
                            อาการข้างเคียงเมื่อได้รับยาเคมีบำบัด คือ อาการไข้โลหิตจาง จุดเลือดหรือจำเลือด คลื่นไส้ อาเจียน เจ็บปากเจ็บคอ ท้องเสีย ท้องผูก ผมร่วง
                            ผิวหนังและเล็บเปลี่ยนสีฝ่ามือฝ่าเท้ามีสีแดง หรือดาคล้ำและเจ็บ ชาปลายมือปลายเท้า ความสามารถในการมี
                            เพศสัมพันธ์และการมีบุตรลดลง อารมณ์
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="sub-title">ครอบครัว</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography component="div" className="content-detail">
                                มีประวัติคนในครอบครัวเป็นมะเร็งเต้านม ยิ่งถ้ามีญาติสายตรงเป็นมะเร็งเต้านมก็ยิ่งเสี่ยงเพิ่มขึ้น
                                ผู้หญิงที่มีแม่ น้องสาว พี่สาว หรือบุตรเป็นมะเร็งเต้านมก่อนอายุ 50 ควรต้องได้รับการตรวจเช็คมะเร็งเต้านม
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="sub-title">ค่าใช้จ่าย</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <ul style={{ marginTop: '0px', marginLeft: '-10px', marginBottom: '0px' }}>
                                    <li>เทคนิค 3 มิติ ค่าจำลองการฉายรังสี 8,500 บาท, ค่าคำนวณ 6,000 บาท, ค่าฉายรังสี (2,500x25
                                        ครั้ง)62,500 บาท, Boote electron 3,500 บาท, ค่า port film 4,000 บาท
                                        รวมเป็น 84,500 บาท</li>
                                    <li>เทคนิค 2 มิติ ค่าจำลองการฉายรังสี (Acuity Simulation) 2,000 บาท, ค่าคำนวณ 800 บาท, ค่าฉายรังสี
                                        (2,400x25 ครั้ง) 60,000 บาท, Boote electron 3,500 บาท, ค่า port film 3,000 บาท
                                        รวมเป็น 69,300 บาท</li>
                                </ul>
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Typography>
        </React.Fragment>
    )
}

export default EffectPage;
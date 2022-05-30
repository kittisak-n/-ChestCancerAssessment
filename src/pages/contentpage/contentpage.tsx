import React from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


import './contentpage.scss';

const hearder_preview = require('./../../assets/images/woman-with-illuminated-chest.jpg');


const ContentPage = (props: any) => {
    return (
        <React.Fragment>
            <Typography className="contentpage">
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/" >
                                หน้าแรก
                            </Link>
                            <Typography color="textPrimary">มะเร็งเต้านม</Typography>
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
                                <div className="title">มะเร็งเต้านม ?</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component="div" className="content-detail">
                            เป็นโรคมะเร็งที่เกิดจากเนื้อเยื่อที่มีความผิดปกติส่วนใดส่วนหนึ่งภายในเต้านมเปลี่ยนแปลงไปเป็นเซลล์มะเร็ง
                            และขยายใหญ่ขิ้นจนกลายเป็นก้อนเนื้อร้าย ก่อนจะลุกลามไปสู่เนื้อเยื่อข้างเคียงและแพร่กระจายไปยังเซลล์อื่นของ
                            ร่างกาย มะเร็งชนิดนี้สามารถพบได้ทั้งในเพศหญิงและเพศชาย แต่พบในเพศชายในอัตราที่น้อยมาก
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="sub-title">สาเหตุ ?</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <ul style={{ marginTop: '0px', marginLeft: '-10px' }}>
                                    <li><b>ความผิดปกติทางกรรมพันธุ์คือ</b> มีประวัติคนในครอบครัวเป็นมะเร็งเต้านม</li>
                                    <li><b>อายุ</b> เมื่ออายุเพิ่มขึ้นก็มีโอกาสที่จะมีความผิดปกติของยีนในเซลล์เพิ่มขึ้น ส่งผลให้เกิดมะเร็งได้</li>
                                    <li><b>เพศ</b> ผู้หญิงมีโอกาสเป็นมะเร็งเต้านมมากกว่าผู้ชายถึง 100 เท่า</li>
                                    <li><b>เต้านมมีเนื้อเยื่อแน่น</b> หมายถึง มีต่อมน้านมมากกว่าผู้หญิงทั่วไปทำให้มีความเสี่ยงเพิ่มขึ้น</li>
                                    <li><b>เชื้อชาติ</b> มีความสำคัญ ผู้หญิงตะวันตกมีความเสี่ยงสูงกว่าผู้หญิงชาวเอเชีย</li>
                                    <li><b>ประวัติดื่มเครื่องดื่มมีแอลกอฮอล์ เหล้า</b> เพิ่มความเสี่ยงของมะเร็งเต้านม ผู้หญิงที่ดื่มมากกว่า 2-5
                                        แก้วต่อวัน มีความเสี่ยงสูงกว่าผู้หญิงที่ไม่ดื่ม 1.5 เท่า</li>
                                    <li><b>อ้วน</b> ความอ้วนนอกจากจะทำให้ความเสี่ยงต่อการเกิดโรคหัวใจ เบาหวานเท่านั้น ยังทำให้ความ
                                        เสี่ยงต่อการเกิดโรคมะเร็งเต้านมเพิ่มขึ้น</li>
                                    <li><b>ไม่เลี้ยงลูกด้วยนมมารดา</b> เนื่องจากช่วงให้นมบุตรจะทำให้มารดาไม่มีประจำเดือนมา เกิดการ
                                        เปลี่ยนแปลงของระดับฮอร์โมนและป้องกันมะเร็งเต้านมได้</li>
                                </ul>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="sub-title">อาการ ?</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography component="div" className="content-detail">
                                ผู้หญิงที่เป็นมะเร็งเต้านมในประเทศไทยส่วนมากจะมาพบแพทย์ด้วยปัญหาก้อนที่เต้า
                                นม ซึ่งอาจมีขนาดของก้อนมะเร็งใหญ่เล็กแตกต่างกัน และนอกจากก้อนที่เต้านมแล้วยังมีอาการอย่างอื่น
                                ที่ควรมาพบแพทย
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography>
                                <ul style={{ marginTop: '0px', marginLeft: '-10px', marginBottom: '0px' }}>
                                    <li>การเปลี่ยนแปลงของผิวหนังบริเวณหน้าอก เช่น มีรอยบุ๋ม ย่น หดตัว หนาผิดปกติคล้าย
                                        เปลือกส้ม หรือบางส่วนเกิดเป็นสะเก็ด</li>
                                    <li>ความเปลี่ยนแปลงของหัวนม เช่น มีการหดตัว หัวนมบอด คันหรือแดงผิดปกติ
                                        เลือดออกทางหัวนม อาการเจ็บเต้านม หรือมีก้อนที่รักแร้</li>
                                </ul>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography>
                                <div className="sub-title">การรักษา ?</div>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography component="div">
                            <Typography component="div" className="content-detail">
                                หลักการรักษามะเร็งเต้านม
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography component="div" className="content-detail">
                                1. การรักษาเฉพาะที่ (local treatment) ได้แก่ การผ่าตัดและการฉายรังสีเพื่อควบคุมรอยโรคที่เต้า
                                นมและรักแร้ สิ่งสำคัญที่ต้องบอกคือ มะเร็งเต้านมจะหายได้นั้น จะต้องสามารถผ่าตัดน้ำก้อนมะเร็งออกไปจาก
                                ร่างกายได้จนหมด
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography component="div" className="content-detail">
                                2. การรักษาที่ครอบคลุมรอยโรคทั้งร่างกาย (systemic treatment) ได้แก่ เคมีบำบัดหรือยาต้าน
                                ฮอร์โมน เพื่อควบคุมเซลล์มะเร็งที่อาจมีการกระจายไปยังส่วนอื่นของร่างกาย
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography component="div" className="content-detail">
                                การรักษามะเร็งเต้านมด้วยยาที่ออกฤทธิ์ฆ่าทำลายเซลล์มะเร็งได้ทั่วทั้งร่างกาย
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography component="div" className="content-detail">
                                การรักษาแบบ systemic นี้มีได้ทั้งแบบยาฉีด ยารับประทาน หรือ ยาฉีดเข้าใต้ผิวหนังหรือ
                                กล้ามเนื้อ โดยหลักการคือเมื่อยาเข้าไปในร่างกายจะสามารถไปทำลายเซลล์มะเร็งได้ไม่ว่าเซลล์นั ้นจะ
                                อยู่ที่อวัยวะใด การรักษาแบบ systemic นี ้ประกอบด้วยยาหลายกลุ่ม ดังต่อไปน
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography>
                                <ul style={{ marginTop: '0px', marginLeft: '-10px', marginBottom: '0px' }}>
                                    <li>ยาเคมีบำบัด (chemotherapy)</li>
                                    <li>ยาต้านฮอร์โมน (antihormonal agents)</li>
                                    <li>การรักษาด้วยยาพุ่งเป้า (targeted therapy)</li>
                                    <li>ยากลุ่มภูมิต้านทานบำบัด (immunotherapy)</li>
                                </ul>
                            </Typography>
                            <div style={{ height: '10px' }} />
                            <Typography component="div" className="content-detail">
                                สิ่งสำคัญที่ต้องทราบคือ การเลือกยาในการรักษามะเร็งนั้น อาจมีความแตกต่างกันในคนไข้แต่ละคน
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Typography>
        </React.Fragment>
    )
}

export default ContentPage
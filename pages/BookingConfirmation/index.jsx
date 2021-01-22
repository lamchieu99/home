import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import styles from './bookingConfirmation.module.css'
import {
    StarOutlined, WarningOutlined, TabletOutlined, WifiOutlined, SmileOutlined,
    TeamOutlined, DesktopOutlined, CheckSquareOutlined, EnvironmentOutlined,
    HomeOutlined, FormatPainterOutlined, GatewayOutlined, HeartOutlined
}
    from '@ant-design/icons';

export default function Index() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal} >
                Open Modal
            </Button>
            <Modal width="620px" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h2 className={`${styles.green} ${styles.confirm}`}>XÁC NHẬN ĐẶT PHÒNG</h2>
                <div className={styles.container}>
                    <div className={styles.nameRoom}>
                        <span>NAME ROOM</span>
                        <div className={styles.star}>
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </div>
                    </div>
                    <div className={styles.infoRoom}>
                        <div className={styles.row}>
                            <div className={styles.col3}>
                                <img src="https://danviet.mediacdn.vn/upload/3-2019/images/2019-09-09/5-ly-do-vi-sao-khong-nen-mua-xe-hoi-bang-gia-xe-o-to-moi-nhat-hom-nay-thang-1568002119-width800height450.jpg" alt="oto" />
                            </div>
                            <div className={`${styles.col9} ${styles.info}`}>
                                <div>
                                    <span className={styles.bold}>Thời gian đặt phòng</span> <br />
                                    <span className={styles.green}>Nhận phòng</span> 21:00 - 18/02/2020
                                <span className={styles.green}> Trả phòng</span> 21:00 - 18/02/2020 <br />
                                </div>
                                <div>
                                    <span className={styles.bold}>Loại giường</span>
                                    <span> Giường đôi</span> <br />
                                </div>
                                <div>
                                    <span className={styles.bold}>Loại phòng </span>
                                    <span> Deluxe</span> <br />
                                </div>
                                <span className={styles.bold}>Lời nhắn của khách hàng</span> <br />
                                <span className={styles.mess}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut in, quisquam vel animi incidunt, distinctio earum vero quas, dolorem at doloremque unde id consequuntur. Eaque qui aliquid ipsa atque.</span>
                            </div>
                        </div>
                    </div>
                    <div className="convenient">
                        <div className={styles.row}>
                            <div className={styles.col3}>
                                <span className={styles.bold}>Các tiện nghi</span>
                            </div>
                            <div className={styles.col3}>
                                <TabletOutlined className ={styles.padding} color={"#004918"} /><span>Bàn làm việc</span> <br />
                                <FormatPainterOutlined className ={styles.padding} /><span>Máy sấy tóc</span> <br />
                                <HomeOutlined className ={styles.padding} /><span>Minibar</span> <br />
                                <CheckSquareOutlined className ={styles.padding} /><span>Khu hút thuốc</span> <br />
                            </div>
                            <div className={styles.col3}>
                                <GatewayOutlined className ={styles.padding} /><span>Phòng tắm vòi sen</span> <br />
                                <DesktopOutlined className ={styles.padding} /><span>TV</span> <br />
                                <WifiOutlined className ={styles.padding} /><span>Wifi</span> <br />
                            </div>
                            <div className={styles.col3}>
                                <HeartOutlined className ={styles.padding} /><span>Máy lạnh</span><br />
                                <TeamOutlined className ={styles.padding} /><span>Phòng làm việc</span><br />
                                <SmileOutlined className ={styles.padding} /><span>Phòng trẻ em</span><br />
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <div className={styles.row}>
                            <div className={styles.col3}>
                                <p className={styles.bold}>Vị trí xung quanh</p>
                            </div>
                            <div className={styles.col4}>
                                <EnvironmentOutlined className ={styles.padding} /><span>Bãi biễn Mỹ khê 0,88km</span> <br />
                                <EnvironmentOutlined className ={styles.padding} /><span>Lễ hội Diều Đà Nẵng 0,88km</span> <br />
                            </div>
                            <div className={styles.col5}>
                                <EnvironmentOutlined className ={styles.padding} /><span>Công viên Biển Đông  0,88km</span> <br />
                                <EnvironmentOutlined className ={styles.padding} /><span>Coconut Bar 0,88km</span> <br />
                            </div>
                        </div>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.bold}>Bảng giá</span>
                        <table className={styles.col12}>
                            <tr>
                                <td className={styles.col3}>Đơn giá thuê</td>
                                <td className={styles.col5}>600 000VNĐ/ngày</td>
                                <td rowspan="2" className={styles.col4}>
                                    <div className={styles.bg}>
                                        <span>TIỀN CỌC</span> <br />
                                        <span className={styles.green}>200 000VNĐ</span> <br />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.col3}>Phí dịch vụ khách sạn</td>
                                <td className={styles.col5}>53550 VNĐ/ngày</td>
                            </tr>
                            <tr>
                                <td className={styles.col3}>Tổng phí thuê xe</td>
                                <td className={styles.col5}>600 000VNĐ/ngày</td>
                                <td rowspan="2" className={styles.col4}>
                                    <div className={styles.bg}>
                                        THANH TOÁN SAU CHO KHÁCH SẠN<br />
                                        <span className={styles.bold}>453 550VNĐ</span> <br />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.col3}><span className={styles.bold}>TỔNG CỘNG</span></td>
                                <td className={styles.col5}><span className={styles.bold}>653 550VNĐ</span></td>
                            </tr>

                        </table>
                    </div>
                    <div className={styles.infoContact}>
                        <span>THÔNG TIN LIÊN HỆ </span>
                        <form action="" >
                            <div className={styles.contact} className={styles.row}>
                                <label className={styles.col3} htmlFor="">Tên người liên hệ</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className={styles.contact} className={styles.row}>
                                <label className={styles.col3} htmlFor="">Số điện thoại</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className={styles.contact} className={styles.row}>
                                <label className={styles.col3} htmlFor="">Email</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className={styles.contact} className={styles.row}>
                                <label className={styles.col3} htmlFor="">Tên khách hàng</label>
                                <input type="text" className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div className={styles.order}>
                        <div>
                            <WarningOutlined /><WarningOutlined className="pl-1" />
                            <span className="pl-1"> Đặt phòng này không áp dụng chính sách hủy phòng</span> <br />
                        </div>
                        <div>
                            <input type="checkbox" value="" /><label>Tôi đã hiểu và đồng ý với chính sách đặt phòng của Etrips </label>
                        </div>
                        <div className={styles.submit}>
                            <button>HỦY</button>
                            <button>ĐẶT PHÒNG</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};



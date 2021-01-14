import React from 'react'
import styles from './footer.module.css'

export default function index() {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                    <img src="https://danviet.mediacdn.vn/upload/3-2019/images/2019-09-09/5-ly-do-vi-sao-khong-nen-mua-xe-hoi-bang-gia-xe-o-to-moi-nhat-hom-nay-thang-1568002119-width800height450.jpg" alt="oto" />
                    </div>
                    <div className={styles.info}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis consequuntur, quod architecto quidem vero totam cupiditate quasi consectetur, nihil eaque alias excepturi corrupti animi beatae? Voluptatibus aliquam dolore modi facere!
                    </div>
                </div>
                <div className={styles.content}>
                    <ul className={styles.ul}>
                        <li><a href="">Trang chủ</a></li>
                        <li><a href="">Trips</a></li>
                        <li><a href="">Dịch vụ</a></li>
                        <li><a href="">Tin tức</a></li>
                    </ul>
                </div>
                <div className={styles.content}>
                   <img className = {styles.img} src="https://danviet.mediacdn.vn/upload/3-2019/images/2019-09-09/5-ly-do-vi-sao-khong-nen-mua-xe-hoi-bang-gia-xe-o-to-moi-nhat-hom-nay-thang-1568002119-width800height450.jpg" alt="oto" />
                </div>
                <div className={styles.content}>
                    <p>Đăng ký nhận tin</p>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder = "Địa chỉ email của bạn"/>
                        <button>Gửi</button>
                    </div>
                </div>
            </footer>

        </div>
    )
}

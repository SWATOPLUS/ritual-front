import { Col, Container, Row, Button } from "react-bootstrap"
import styles from './style.module.scss';
import img from '../../public/images/1.jpg';
import img1 from '../../public/images/code.jpg';

import { Carousel, ImageType } from "../Carousel";

const images: Array<ImageType> = [
    { src: img  },
    { src: img1 }
]

export const Description = () => {
    return (
        <>
            <div className={styles.qr_container}>
                <Container className={styles.container}>
                    <Row md={2} xs={1}>
                        <Col>
                            <Carousel images={images}/>
                        </Col>
                        <Col className={styles.description}>
                            <h3>Задумывались ли вы о том, что память о близком человеке можно сохранить навсегда? </h3>
                            <p className={styles.description_p}>
                                Благодаря нашей услуге это стало реально!
                                <br />
                                <br />
                                Теперь  воспоминания о ваших предках могут быть всегда рядом с вами.
                                <br />
                                <br />
                                Вам всего лишь нужно создать страницу человека с помощью нашего сервиса и получить QR- код,который можно будет разместить на могиле человека.
                                <br />
                                <br />
                                Наведя камеру на этот код,вы увидете биографию его жизни,прямо как на страницах википедии
                            </p>
                            <Button className={styles.btn_grad}>Создать страницу</Button>
                        </Col>
                    </Row>
                    
                    
                </Container>
            
                <span className={styles.qr_code}/>
            </div>
        </>
    )
}
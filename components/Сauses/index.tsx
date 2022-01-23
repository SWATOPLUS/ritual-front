import { ReactSVG, SVGAttributes } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styles from './style.module.scss'

export interface CausesProps {
    causes: Array<CauseType>
}
export type CauseType = {
    icon: string | any
    title: string,
    text: string
}

export const Causes = ({ causes }: CausesProps) => {
    return (
        <Container className={styles.causes_container}>
            <h1 className={styles.causes_title}>{causes.length} причин выбрать именно нас</h1>
            <Row md={2} xs={1}>
                {causes.map((cause, ind)=> {
                    return (
                        <Col key={ind}>
                            <Cause {...cause}/>
                        </Col>
                    )
                })}

            </Row>
        </Container>
    )
}

const Cause = ({icon, title, text}: CauseType) => {
    return (
        <div className={styles.cause}>
            <img src={icon.src} className={styles.cause_icon}/>
            <div className={styles.cause_body}>
                <div className={styles.cause_title}>{title}</div>
                <p>{text}</p>
            </div>
        </div>
    )
}
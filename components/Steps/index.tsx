import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./style.module.scss";

export interface StepsProps {
  steps: Array<StepType>;
}

export type StepType = {
  icon: string;
  text: string;
};

export const Steps = ({ steps }: StepsProps) => {
  return (
    <div className={styles.steps}>
      <Container className={styles.steps_container}>
        <h1 className={styles.title}>
          <span className={styles.number}>{steps.length}</span> шага
          использования нашей услуги
        </h1>
        <Row xs={2} md={4}>
          {steps.map((step, ind) => {
            return (
              <Col key={ind}>
                <Image src={step.icon} width={100} />
                <p>{step.text}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

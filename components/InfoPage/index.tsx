import { useRouter } from "next/router"
import { ReactNode } from "react"
import { Button, Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Footer } from "../../components/Footer"
import styles from './style.module.scss'

interface InfoPageProps {
    text?: string | Array<any>,
    title?: string,
    children?: ReactNode,
    paddingTop?: string
}

export const InfoPage = ({text, title, children, paddingTop = "120px"}: InfoPageProps) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state:any) => state.auth.isLoggedIn);

    const handleBack = () => {
        if(isLoggedIn) {
            router.back()
        }
        return
    }
    
    return (
        <div className={styles.info}>
            <main style={{paddingTop}}>
                {text && title? (
                    <Container>
                    <p className={styles.title}>
                        {title}
                    </p>
                    <pre className={styles.content}>
                        {Array.isArray(text)? text.map((val, ind)=>{
                            return (
                                <div key={ind}>
                                    <p className={styles.title_text}>{val?.title}</p>
                                    <p className={styles.text_text}>{val.text}</p>
                                    <br />
                                </div>
                                
                            )
                        }) : text}
                    </pre>
                </Container>
                ): null}
                {children? (
                    <Container>
                        <Button variant="outline-light" onClick={handleBack}>Назад</Button>
                        {children}
                    </Container>
                ) : null}    
            </main>
            <Footer/>
        </div>
    )
}

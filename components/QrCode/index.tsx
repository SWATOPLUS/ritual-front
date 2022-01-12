import { useRef } from "react";
import { Button } from "react-bootstrap"
import { pathFromServer } from "../../utils/fromServer"
import { downloadFile } from '../../utils/files'
import styles from './style.module.scss'


interface QrCodeProps {
    qrCodes: Array<QrCode>
}
type QrCode = {
    url: string,
    id: number
}

export const QrCode = ({qrCodes}: QrCodeProps) => {
    const codeOne = useRef<HTMLAnchorElement>(null);
    const codeTwo = useRef<HTMLAnchorElement>(null);
    const handleDownload = () => {
        qrCodes.forEach((code)=> {
            downloadFile(code.url, `qr_code${code.id}.png`);
        })  
    }
    return (
        <div className={styles.container}>
            <a ref={codeOne} href={pathFromServer(qrCodes[0].url)} download/>
            <a ref={codeTwo} href={pathFromServer(qrCodes[1].url)} download/>
            <img className={styles.qr_code} src={pathFromServer(qrCodes[1].url)}/>
            <Button onClick={handleDownload}>Скачать QR-код</Button>
        </div>
    )
}
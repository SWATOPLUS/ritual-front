import { NextPage, NextPageContext } from "next";
import { getPageReq } from "../../api/page";
import { TransitionGallery } from "../../components/Gallery/Transition";
import { InfoPage } from "../../components/InfoPage";
import { Map } from "../../components/Map";
import { AboutPeople } from "../../components/Page/AboutPeople";
import { Biography } from "../../components/Page/Biography";
import { QrCode } from "../../components/QrCode";
import styles from "./style.module.scss"

interface PageProps {
    page?: any,
    id: string | string[] | undefined,
    error?: any
}

const Page: NextPage<PageProps> = ({page, id}) => {
    
    const haveMedia = page.pictures.length || page.videos.length;
    console.log(haveMedia)
    console.log(page)
    return (
        <>
            <InfoPage>
                <Biography user={page}/>
                <AboutPeople user={page}/>
                {haveMedia && <TransitionGallery 
                    pictures={page.pictures} 
                    videos={page.videos}
                    idGallery={id}/>}
                <div>
                    <p className={styles.map_title}>Смотреть на карте:</p>
                    <Map coordinates={page?.coords}/>
                </div>
                <QrCode qrCodes={page.qr_code}/>
            </InfoPage>
        </>
    )
}

Page.getInitialProps = async (ctx: NextPageContext) => {
    let page: any = {}
    await getPageReq({ page: ctx.query.id }).then((res: any)=>  {
        page = res.data.page
    });
    return { 
        page,
        id: ctx.query.id
    }
}

export default Page
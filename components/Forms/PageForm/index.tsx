
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { CarouselImage } from "../../CarouselImages";
import { BiographyForm } from "../Biography";
import { DefaultInput } from "../Inputs/DefaultInput";
import styles from './style.module.scss'
import { CarouselVideo } from "../../CarouselVideo";
import { Map } from "../../Map";
import { createPageReq } from "../../../api/page";

interface PageFormProps {
    page?: any,
    onSubmit: (data: any) => void
}

export const PageForm  = ({ page, onSubmit }: PageFormProps) => {
    const biographyForm = useForm({
        defaultValues: page?{
            'name': page.name,
            'otchestvo': page.otchestvo,
            'surname': page.surname,
            'date_of_birth': page.date_of_birth,
            'date_of_death': page.date_of_death,
            'place_of_birth': page.place_of_birth,
            'place_of_death': page.place_of_death
        }: undefined
    });
    const dataForm = useForm({
        defaultValues: page? {
            'biography': page.biography,
            'facts': page.facts
        }: undefined
    })
    const [coords, setCoords] = useState(page? page.coords: []);
    const [nationality, setNationality] = useState(page? page.nationality.id: undefined);
    const [pictures, setPictures] = useState(page? page.pictures: []);
    const [videos, setVideos] = useState(page? page.videos: []);
    const [mainImage, setMainImage] = useState(page? page.avatar?.id : 0);

    const handleSubmit = (data: any) => {
        if(videos.some((x: any) => x.isLoading )) {
            return;
        }
        const picturesId = pictures.map((image: any) => image.id);
        const videosId = videos.map((video: any) => video.id);
        onSubmit({
            ...data,
            ...dataForm.getValues(),
            coords,
            nationality,
            pictures: picturesId,
            videos: videosId,
            avatar: mainImage
        });
    }

    const handleChangeNational = (data: any) => {
        setNationality(data.value)
    }
    return (
        <>
            <Row lg={2} xs={1}>
                <Col>
                    <CarouselImage 
                        images={pictures}
                        setImages={setPictures}
                        mainImage={mainImage}
                        setMainImage={setMainImage}/>
                </Col>
                <Col>
                    <BiographyForm defaultNationality={page? {
                        value: page.nationality.id,
                        label: page.nationality.name,
                        icon: page.nationality.icon
                    } : undefined} biographyForm={biographyForm} onChangeNational={handleChangeNational}/>
                </Col>
            </Row>
            <CarouselVideo videos={videos} setVideos={setVideos}/>
            <Row className={styles.description_container}>
                <Col xs={12} md={8}>
                    <DefaultInput as="textarea" 
                        register={dataForm.register('biography')} 
                        className={styles.biography} 
                        title="Биография:" 
                        placeholder="Напишите биографию" />
                </Col>
                <Col xs={12} md={4}>
                    <DefaultInput as="textarea"
                        register={dataForm.register('facts')}
                        className={styles.facts} 
                        title="Эпитафия:" 
                        placeholder="Можете написать короткую и трогательную эпитафию"/>
                </Col>
            </Row>
            <div className={styles.map_container}>
                <p>Отметить на карте</p>
                <Map isForm handleChange={setCoords} coordinates={coords}/>
            </div>
            <div className={styles.send_container}>
                <Button className={styles.btn_send} onClick={biographyForm.handleSubmit(handleSubmit)}>Отправить</Button>
            </div>
            
        </>
    )
    
}
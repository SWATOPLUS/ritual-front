import { Dispatch } from 'react'
import { YMaps, Map as MapYandex, Placemark } from "react-yandex-maps"
import placemarkerIcon from '../../public/icons/placemarker.svg'

interface MapProps { 
    isForm?: boolean,
    handleChange?: Function | Dispatch<any> | undefined
    coordinates?: Array<number>
}
export const Map = ({
    isForm = false, 
    handleChange, 
    coordinates = []
}: MapProps) => {
    const handleClickMap = (inst: any) => {
        if(inst && isForm && handleChange) {
            inst.cursors.push('pointer');
            inst.events.add('click', (e: any)=> {
                handleChange(e.get('coords'))
            })
        }
    }
    return (
        <YMaps query={{
            apikey: '31429c36-3280-488e-8552-058d0833ce7a',
            mode: 'release'
        }}>
            <MapYandex width="100%" height="400px"  defaultState={{ yandexMapAutoSwitch: true, maxZoom: 5, center: [55.75, 37.57], zoom: 9 }} instanceRef={ handleClickMap }>
                {coordinates? <Placemark
                    options={{
                        iconLayout:'default#image',
                        iconImageHref: placemarkerIcon.src,
                        iconImageOffset: [-17, -38]
                    }} 
                    geometry={coordinates}/> : null}
            </MapYandex>
        </YMaps>
    )
}
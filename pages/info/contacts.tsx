import { InfoPage } from "../../components/InfoPage"
import { Navbar } from "../../components/Navbars/Navbar"

const title = 'Наши контакты'
const text = `По поводу сотрудничества и предложений пишите нам на почту:
Ritualqrcodes@gmail.com
Так же можете связаться с нами по телефону:
+7 921 380-90-54(Россия)
+375 29 171-99-20 (Беларусь)
Или в мессенджерах 
Телеграмм: +375 29 171-99-20 
Вотсапп: +375 29 171-99-20

Название организации: ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ БЕЛОУС ЛЕВ ЮРЬЕВИЧ
Юридический адрес организации: 117574, РОССИЯ, Г МОСКВА, ПР-КТ НОВОЯСЕНЕВСКИЙ, Д 12, КОРП 3, КВ 332
ИНН: 662300978462
`


const Info = () => {
    return (
        <>
            <Navbar/>
            <InfoPage text={text} title={title}/>
        </>
    )
}

export default Info
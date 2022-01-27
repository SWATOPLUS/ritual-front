import{ StylesConfig } from "react-select";
import AsyncSelect from "react-select/async";
import { getNationalyReq } from "../../../api/page";
import { pathFromServer } from "../../../utils/fromServer";
import { date, required } from "../../../utils/validFields";
import { Field, Form } from "../Form";
import { DefaultInput } from "../Inputs/DefaultInput";
import styles from './style.module.scss'

const iconFlag = (icon: string) => ({
    display: 'flex',
    alignItems: 'center',
    ':after': {
        content: "''",
        height: 20,
        width: 20,
        display: 'inline-block',
        backgroundImage: `url(${pathFromServer(icon)})`,
        backgroundSize: 20,
        marginLeft: 10,
    }
})

const colourStyles: StylesConfig<OptionNational> = {
    option: (styles, { data }) =>  ({ ...styles, ...iconFlag(data.icon) }),
    singleValue: (styles, { data }) => ({ ...styles, ...iconFlag(data.icon) }),
}

interface OptionNational {
    value: number,
    label: string,
    icon: string
}

interface BiographyFormProps {
    biographyForm: any,
    onChangeNational: (data: any) => void,
    defaultNationality?: OptionNational | undefined
}

export const BiographyForm = ({ biographyForm, onChangeNational, defaultNationality }: BiographyFormProps) => {
    const filterOptions = (nationalities: any[]) => nationalities.map((national)=> ({
        value: national.id,
        label: national.name,
        icon: national.icon
    }))

    const loadOptions = (inputValue: string, callback: (options: OptionNational[]) => void) => {
        getNationalyReq().then((res:any)=> {
            callback(filterOptions(res.data.nationalities));
        })
    }

    const fieldsBio: Field[] = [
        {
            name: "name",
            title: "Имя:",
            valid: required,
        },
        {
            name: "surname",
            title: "Фамилия:",
            valid: required,
        },
        {
            name: "otchestvo",
            title: "Отчество:",
            valid: required,
        },
        
        {
            name: "place_of_birth",
            title: "Место рождения:",
            valid: required,
        },
        
        {
            name: "place_of_death",
            title: "Место смерти:",
            valid: required,
        },
        {
            name: "date_of_birth",
            title: "Дата рождения:",
            type: 'date',
            className: styles.single_line_field,
            valid: {
                ...date,
                ...required
            },
        },
        {
            name: "date_of_death",
            title: "Дата смерти:",
            type: 'date',
            className: styles.single_line_field,
            valid: {
                ...date,
                ...required
            }
        },
    ]
    return (
        <div className={styles.container}>
            <Form valid={biographyForm} fields={fieldsBio} Input={DefaultInput}>
                <AsyncSelect
                    className={styles.nationaly}
                    placeholder="Национальность"
                    defaultValue={defaultNationality}
                    cacheOptions
                    defaultOptions
                    onChange={onChangeNational}
                    loadOptions={loadOptions}
                    styles={colourStyles}
                />
            </Form>
        </div>
    )
}
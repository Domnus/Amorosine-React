interface Props {
    classDiv: string,
    classInput: string,
    idInput: string,
    nameInput: string,
    typeInput: string,
    placeholderInput: string,
    classLabel: string
    textLabel: string
}

export default function Input({classDiv, classInput, idInput, nameInput, typeInput, placeholderInput, classLabel, textLabel} : Props) {
    return (
        <>
            <div className={classDiv}>
                <input className={classInput} id={idInput} name={nameInput} type={typeInput} placeholder={placeholderInput} required />
                <label className={classLabel} >*{textLabel}</label>
            </div>
        </>
    )
}

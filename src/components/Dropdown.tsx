interface IProps {
    options: string[]
    label: string
    id: string
}
function Dropdown({ options, label, id }: IProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>

            <select id={id}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}

export default Dropdown

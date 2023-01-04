import { ChangeEvent } from 'react'

interface IProps {
    options: string[]
    label: string
    id: string
    value: string
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
function Dropdown({ options, label, id, value, onChange }: IProps) {
    return (
        <>
            <div>
                <label htmlFor={id}>{label}</label>

                <select id={id} onChange={onChange} value={value}>
                    {options.map((option, i) => (
                        <option key={i} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Dropdown

import { ChangeEvent } from 'react'

interface IProps {
    label: string
    id: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
function Input({ label, id, value, onChange }: IProps) {
    return (
        <>
            <div className="row">
                <label htmlFor={id}>{label}</label>
                <input value={value} id={id} onChange={onChange} />
            </div>
        </>
    )
}

export default Input

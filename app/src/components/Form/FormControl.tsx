import React from 'react'

const FormControl: React.FC<{
    children?: React.ReactNode,
}> = (props) => {
    return (
        <>
            <div className="form__control">
                {props.children}
            </div>
        </>
    )
}

export default FormControl
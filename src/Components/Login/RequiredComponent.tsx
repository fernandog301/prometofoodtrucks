import React from 'react'

function RequiredComponent(props: 
    { title: string, type: string, 
        borderError: string, 
        placeholder: string, 
        value: string, 
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, maxLength: number}
) {
  return (
    <>
        <h3 className={"sm:text-4xl text-3xl jura text-white"}>{props.title}</h3>
        <input type={props.type} className={"w-full my-5 sm:min-h-[76px] min-h-16 jura sm:text-4xl text-3xl rounded-lg pl-2 " + props.borderError} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength}/>
    </>
  )
}

export default RequiredComponent

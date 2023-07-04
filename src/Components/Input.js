import React from "react";
import {useFormContext} from "react-hook-form";
// import cn from 'classnames'

import {findInputError} from '../utils/findInputError'
import {isFormInvalid} from '../utils/isFormInvalid'
import {AnimatePresence, motion} from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({ label, type, id, placeholder, name, validation, multiline }) => {
    const { register, formState:{ errors }, } = useFormContext()

    const inputError = findInputError(errors, name)
    const isInvalid = isFormInvalid(inputError)

    return(
        <div className = "mb-6">
            <label htmlFor={id} className= "block text-xs text-dark">
                {label}
            </label>
            <AnimatePresence mode="wait" initial={false}>
                {isInvalid && (
                    <InputError
                        message={inputError.error.message}
                        key={inputError.error.message}
                    />
                )}
            </AnimatePresence>
            {multiline ? (
                <textarea
                    id={id}
                    type={type}
                    className= "w-full resize-none border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                    placeholder={placeholder}
                    {...register(name, validation)}
                ></textarea>
            ):(
                <input
                    id={id}
                    type={type}
                    className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
                    placeholder={placeholder}
                    {...register(name, validation)}
                />
            )}

        </div>
    )
}

const InputError = ({ message }) => {
    return (
        <motion.p
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
        >
            <MdError />
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}
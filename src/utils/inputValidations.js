export const name_validation = {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    id: 'name',
    placeholder: 'Full Name',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
    },
}

export const message_validation = {
    name: 'message',
    label: 'Got a question? We\'ll get back to you',
    multiline: true,
    id: 'message',
    placeholder: 'Ask question here',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        // maxLength: {
        //     value: 200,
        //     message: '200 characters max',
        // },
    },
}

export const num_validation = {
    name: 'phone',
    label: 'Phone Number',
    type: 'phone',
    id: 'phone',
    placeholder: 'Phone Number',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
    },
}

export const email_validation = {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    id: 'email',
    placeholder: 'Email Address',
    validation: {
        required: {
            value: true,
            message: 'required',
        },
        pattern: {
            value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'not valid',
        },
    },
}
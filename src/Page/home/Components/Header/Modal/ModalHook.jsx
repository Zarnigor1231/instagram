import React from 'react'

const ModalHook = ( val = false) => {
    const [isopen, setIsopen] = React.useState(val)

    const open = () => setIsopen(true)
    const toggle = () => setIsopen(!isopen)
    const close = () => setIsopen(false)


    return { open, toggle, close, isopen }
}

export default ModalHook
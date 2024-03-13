import React from 'react'

const resizeCanvasToDisplaySize = (canvas) => {
    const { width, height } = canvas.getBoundingClientRect()

    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true

    }

    return false

}

export default resizeCanvasToDisplaySize
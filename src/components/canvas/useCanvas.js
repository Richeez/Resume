import { useEffect, useRef } from "react";


const useCanvas = (draw, options = {}) => {
    let animatinFrameId;
    const canvasRef = useRef(null);
    // let frameCount = 0;

    // const startDraw = ()=>{

    // }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext(options.context ?? "2d");


        const display = () => {
            // frameCount++
            animatinFrameId = canvas.addEventListener('mousemove', (e) => {
                const x = e.offsetX;
                const y = e.offsetY;
                canvas.style.backgroundColor = 'yellow'
                draw(context, x, y /*frameCount*/)
                // console.log(e, 'as target');

            })
        }
        display()

        return () => window.removeEventListener('mousemove', animatinFrameId)


    }, [draw, animatinFrameId]);

    return canvasRef
}

export default useCanvas
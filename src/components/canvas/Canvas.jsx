import resizeCanvasToDisplaySize from "./resizeCanvasToDisplaySize";
import useCanvas from "./useCanvas";

const postDraw = () => {
  index++;
  ctx.restore();
};
const preDraw = (context, canvas) => {
  context.save();
  resizeCanvasToDisplaySize(context, canvas);
  const { width, height } = context.canvas;
  context.clearRect(0, 0, width, height);
};
const Canvas = (props) => {
  const { draw, options, ...rest } = props;
  const canvasRef = useCanvas(draw, { postDraw, preDraw });

  return <canvas ref={canvasRef} {...rest}></canvas>;
};

export default Canvas;

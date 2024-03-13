import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Resume from "./components/Resume";
import PersonalCV from "./components/PersonalCV";
// import Canvas from "./components/canvas/Canvas";

function App() {
  // const canvasRef = useRef(null);
  // const canvas = canvasRef?.current;
  // const [isPressed, setIsPressed] = useState(false);

  // canvas?.addEventListener("mouseup", (e) => {
  //   console.log("mouseup");
  //   setIsPressed(false);
  // });

  // canvas?.addEventListener("mousedown", (e) => {
  //   console.log("mousedown");
  //   setIsPressed(true);
  // });
  // useEffect(() => {
  //   // if (isPressed) {
  //   const ctx = canvas?.getContext("2d");
  //   draw(ctx);
  //   // }
  // }, [draw]);
  // console.log(isPressed, "mousemove");
  // function drawCircle(ctx, x, y) {
  //   ctx?.beginPath();
  //   ctx?.arc(x, y, size, 0, Math.PI * 2);
  //   ctx?.fill();
  // }

  //  draw(ctx) {
  //   canvas?.addEventListener("mousemove", (e) => {
  //     console.log("first");
  //     const x = e.offsetX;
  //     const y = e.offsetY;
  //     drawCircle(ctx, x, y);
  //   });
  // }

  // const drawCircle = (x, y) => {
  //   // console.log("as target", e);
  // };
  let size = 2;
  console.log("as target");

  const draw = (ctx, x, y, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx?.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <main className="App">
      {/* <Resume /> */}
      <PersonalCV />
    </main>
  );
}

export default App;

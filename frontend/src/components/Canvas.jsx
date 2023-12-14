import { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import { useCreateDrawingMutation } from "../redux/api/drawingApi";
import { message } from "antd";

const Canvas = () => {
  const [createDrawing] = useCreateDrawingMutation();

  const canvasRef = useRef(null);

  const handleClearCanvas = () => {
    canvasRef.current.clear();
  };

  const handleSaveDrawing = async () => {
    const drawingData = JSON.stringify(canvasRef.current.getSaveData());

    try {
      const savedDrawing = await createDrawing({
        drawingData,
      });

      message.success("Canvas Saved");
      console.log("Drawing data:", drawingData);
      console.log("Saved Drawing:", savedDrawing);
    } catch (error) {
      console.error("Error saving drawing:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Drawing Canvas</h1>
      <CanvasDraw
        ref={canvasRef}
        brushColor="#000000"
        brushRadius={2}
        canvasWidth={500}
        canvasHeight={300}
      />
      <div>
        <button onClick={handleClearCanvas}>Clear Canvas</button>
        <button onClick={handleSaveDrawing}>Save Drawing</button>
      </div>
    </div>
  );
};

export default Canvas;

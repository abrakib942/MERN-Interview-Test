import { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useCreateDrawingMutation } from "../redux/api/drawingApi";
import { message } from "antd";

const Canvas = () => {
  const [createDrawing] = useCreateDrawingMutation();
  const canvasRef = useRef(null);
  const [drawingData, setDrawingData] = useState({
    lines: [],
    shapes: [],
    textAnnotations: [],
  });

  const handleClearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
      setDrawingData({
        lines: [],
        shapes: [],
        textAnnotations: [],
      });
    }
  };

  const handleSaveDrawing = async () => {
    if (canvasRef.current) {
      const currentDrawingData = {
        lines: canvasRef.current.lines || [],
        shapes: canvasRef.current.shapes || [],
        textAnnotations: canvasRef.current.textAnnotations || [],
      };

      try {
        const savedDrawing = await createDrawing({
          drawingData: JSON.stringify(currentDrawingData),
        });

        message.success("Canvas Saved");
        console.log("Drawing data:", currentDrawingData);
        console.log("Saved Drawing:", savedDrawing);
      } catch (error) {
        console.error("Error saving drawing:", error);
      }
    }
  };

  const handleCanvasChange = (data) => {
    setDrawingData(JSON.parse(data));
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
        saveData={JSON.stringify(drawingData)}
        onChange={handleCanvasChange}
        loadTimeOffset={5}
        lazyRadius={1}
        immediateLoading={true}
      />
      <div>
        <button onClick={handleClearCanvas}>Clear Canvas</button>
        <button onClick={handleSaveDrawing}>Save Drawing</button>
      </div>
    </div>
  );
};

export default Canvas;

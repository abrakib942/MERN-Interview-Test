import { useParams } from "react-router-dom";
import { useGetSingleDrawingQuery } from "../redux/api/drawingApi";
import Loading from "../components/Loading";
import CanvasDraw from "react-canvas-draw";

const ViewDrawing = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleDrawingQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  const drawingData = data?.data;

  // Logging for debugging
  console.log("Drawing Data:", drawingData);

  return (
    <div className="flex flex-col items-center">
      <h1>Drawing </h1>
      {drawingData ? (
        <CanvasDraw saveData={drawingData} disabled />
      ) : (
        <p>No drawing data found.</p>
      )}
    </div>
  );
};

export default ViewDrawing;

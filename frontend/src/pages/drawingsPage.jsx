import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGetAllDrawingsQuery } from "../redux/api/drawingApi";

const DrawingsPage = () => {
  const { data, isLoading } = useGetAllDrawingsQuery(null);

  if (isLoading) {
    return <Loading />;
  }

  const drawingData = data?.data;

  return (
    <div className="flex flex-col items-center">
      <h1>Drawings</h1>
      <ul>
        {drawingData?.map((drawing) => (
          <li key={drawing._id}>
            <Link to={`/drawing/${drawing._id}`}>
              {`Drawing ${drawing._id}`}
            </Link>
            <br />
            <img
              src={`data:image/png;base64,${drawing.drawingData}`}
              alt={`Drawing ${drawing._id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawingsPage;

import { useParams } from "react-router-dom";

export default function BookDetailPage() {
  const { workId } = useParams();
  return <h2>Book Detail: {workId}</h2>;
}

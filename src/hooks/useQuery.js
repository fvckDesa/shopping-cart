import { useLocation } from "react-router-dom";

export default function useQuery() {
  const location = useLocation();
  const queries = new URLSearchParams(location.search).entries();
  return Object.fromEntries(queries);
}

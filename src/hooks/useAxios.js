import axios from "axios";
import { useState, useEffect } from "react";

const controller = new AbortController();

axios.defaults.method = "GET";

export default function useAxios(url, options, arr = []) {
  const [requestState, setRequestState] = useState({
    data: null,
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    setRequestState((prev) => ({ ...prev, isLoading: true }));
    (async () => {
      try {
        const res = await axios({ ...options, url, signal: controller.signal });
        setRequestState({ data: res.data, isLoading: false, error: null });
      } catch (err) {
        setRequestState({ data: null, isLoading: false, error: err });
      }
    })();
  }, [url, ...arr]);

  return requestState;
}

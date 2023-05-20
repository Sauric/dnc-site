import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface IFetchResponse {
  data: any;
  isPending: boolean;
  error: string | null;
}

interface IFetchRequest {
  url: string;
  fetchName: string;
  retries: number;
}

const useFetch = (request: IFetchRequest): IFetchResponse => {
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const { url, fetchName, retries } = request;
  
  const fetchRetryPolicy: any = ( innerUrl: string, options = {}, innerRetries: number ) =>
    fetch(innerUrl, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (retries > 0) {
        return fetchRetryPolicy(url, options, innerRetries - 1);
      }
      throw new Error(res.statusText);
    });

  const fetchRepeated: any = () =>
    fetchRetryPolicy(url, {}, retries)
    .then((responseData: any) => {
      setData(responseData);
      setIsPending(false);
      setError(null);
      console.log(responseData);
    })
    .catch((err: any) => {
      setIsPending(false);
      setError(err.message);
    });

  // eslint-disable-next-line
  useEffect(() => {
    fetchRepeated();
    setInterval(fetchRepeated, 120000);
  }, /* eslint-disable */ []); 

  return { data, isPending, error };
};

export default useFetch;

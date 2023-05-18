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
  console.log('init fetch');
  const fetchPlus: any = (
    innerUrl: string,
    options = {},
    innerRetries: number
  ) =>
    fetch(innerUrl, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      if (retries > 0) {
        return fetchPlus(url, options, innerRetries - 1);
      }
      throw new Error(res.statusText);
    });

  // eslint-disable-next-line
  useEffect(() => {
      setTimeout(() => {
        const fetchTask = fetchPlus(url, {}, retries)
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

      void toast.promise(fetchTask, {
        pending: fetchName,
        error: fetchName,
        success: fetchName,
      });
    }, 1000);
    
  }, /* eslint-disable */ []); 

  return { data, isPending, error };
};

export default useFetch;

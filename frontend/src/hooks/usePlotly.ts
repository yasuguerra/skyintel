import { useEffect, useState } from "react";

export interface PlotlyJSON {
  data: any[];
  layout: any;
  frames?: any[];
  config?: any;
}

export const usePlotly = (endpoint: string) => {
  const [fig, setFig] = useState<PlotlyJSON | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!ignore) setFig(json);
      } catch (e: any) {
        if (!ignore) setError(e.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [endpoint]);

  return { fig, loading, error };
};

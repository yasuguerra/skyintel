import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Plot from "react-plotly.js";
import { usePlotly } from "@/hooks/usePlotly";

interface PlotCardProps {
  title: string;
  figId: string;
}

export const PlotCard = ({ title, figId }: PlotCardProps) => {
  const { fig, loading, error } = usePlotly(
    `http://localhost:8000/api/fig/${figId}`
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px] flex items-center justify-center">
        {loading && <span className="animate-pulse">Cargando…</span>}
        {error && <span className="text-red-500">{error}</span>}
        {fig && (
          <Plot
            data={fig.data}
            layout={{ ...fig.layout, autosize: true }}
            style={{ width: "100%", height: "100%" }}
            config={{ displayModeBar: false }}
          />
        )}
      </CardContent>
    </Card>
  );
};

import { PlotCard } from "@/components/ui/PlotCard";

export default function OpsSales() {
  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <PlotCard title="Vuelos / Mes" figId="vuelos-mes" />
        <PlotCard title="Ingresos / Mes" figId="ingresos-mes" />
        <PlotCard title="Ganancia / Mes" figId="ganancia-mes" />
      </div>
    </div>
  );
}


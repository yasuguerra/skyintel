import { PlotCard } from "@/components/ui/PlotCard";

export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      {/* —— KPIs rápida (placeholder) —— */}
      <div className="grid grid-cols-3 gap-4">
        <PlotCard title="Vuelos / Mes" figId="vuelos-mes" />
        <PlotCard title="Ingresos / Mes" figId="ingresos-mes" />
        <PlotCard title="Ganancia / Mes" figId="ganancia-mes" />
      </div>
    </div>
  );
}

import { ChevronDown } from "lucide-react";

// Static chart geometry — all coordinates are pre-computed for the 580×290 viewBox.
// Plot area: x ∈ [50, 570], y ∈ [15, 240].  MAX_Y = 1500.
//   xScale(i) = 50 + i * 104    (6 points, step = 520/5)
//   yScale(v) = 240 − (v/1500) * 225

const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"] as const;
const VALUES = [850, 920, 1015, 1120, 1210, 1248] as const;
const DISPLAY = ["850", "920", "1.015", "1.120", "1.210", "1.248"] as const;
const Y_TICKS = [1500, 1250, 1000, 750, 500, 250, 0] as const;

const PLOT = { x1: 50, x2: 570, y1: 15, y2: 240 } as const;
const PLOT_W = PLOT.x2 - PLOT.x1; // 520
const PLOT_H = PLOT.y2 - PLOT.y1; // 225
const MAX_Y = 1500;

function xAt(i: number) {
  return PLOT.x1 + (i / (VALUES.length - 1)) * PLOT_W;
}
function yAt(v: number) {
  return PLOT.y2 - (v / MAX_Y) * PLOT_H;
}
function fmtTick(v: number): string {
  if (v === 0) return "0";
  if (v >= 1000) {
    return `${Math.floor(v / 1000)}.${String(v % 1000).padStart(3, "0")}`;
  }
  return String(v);
}

const pts = VALUES.map((v, i) => ({ x: xAt(i), y: yAt(v), label: DISPLAY[i], month: MONTHS[i] }));
const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y.toFixed(1)}`).join(" ");
const areaPath = `${linePath} L${PLOT.x2},${PLOT.y2} L${PLOT.x1},${PLOT.y2} Z`;

export function RegistrationChart() {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-semibold text-[#0F172A]">
          Crecimiento de registros de estudiantes
        </h2>
        <div className="flex cursor-default items-center gap-1.5 rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-sm text-[#64748B]">
          Últimos 6 meses
          <ChevronDown aria-hidden="true" className="h-4 w-4" />
        </div>
      </div>

      {/* SVG Chart */}
      <svg
        aria-label="Gráfico de crecimiento de registros de estudiantes"
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        viewBox="0 0 580 290"
      >
        <defs>
          <linearGradient id="admin-area-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#6D4AFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6D4AFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines + Y-axis labels */}
        {Y_TICKS.map((v) => {
          const y = yAt(v);
          return (
            <g key={v}>
              <line
                stroke="#E5E7EB"
                strokeWidth="1"
                x1={PLOT.x1}
                x2={PLOT.x2}
                y1={y}
                y2={y}
              />
              <text
                fill="#64748B"
                fontSize="11"
                textAnchor="end"
                x={PLOT.x1 - 6}
                y={y + 4}
              >
                {fmtTick(v)}
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path d={areaPath} fill="url(#admin-area-fill)" />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="#6D4AFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />

        {/* Data points, value labels, and month labels */}
        {pts.map((pt) => (
          <g key={pt.month}>
            <circle cx={pt.x} cy={pt.y} fill="#6D4AFF" r="4" />
            <text
              fill="#0F172A"
              fontSize="11"
              fontWeight="500"
              textAnchor="middle"
              x={pt.x}
              y={pt.y - 10}
            >
              {pt.label}
            </text>
            <text
              fill="#64748B"
              fontSize="11"
              textAnchor="middle"
              x={pt.x}
              y={PLOT.y2 + 22}
            >
              {pt.month}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-1 flex items-center justify-center gap-2">
        <div className="h-px w-5 rounded bg-[#6D4AFF]" />
        <span className="text-xs text-[#64748B]">Estudiantes registrados</span>
      </div>
    </div>
  );
}

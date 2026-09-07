const nodes = [
  { name: "Europe", x: 210, y: 70 },
  { name: "Middle East", x: 300, y: 190 },
  { name: "Asia", x: 470, y: 110 },
  { name: "Africa", x: 220, y: 300 },
  { name: "Americas", x: 60, y: 160 },
];

const hub = { x: 300, y: 190 };

function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - 28;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

export default function NetworkGraphic() {
  return (
    <svg
      viewBox="0 0 560 340"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of MARU Tour's global network, connecting Dubai to Europe, Asia, Africa and the Americas"
    >
      <circle cx={hub.x} cy={hub.y} r={150} fill="none" stroke="#E1DCD0" strokeWidth={1} />
      <circle cx={hub.x} cy={hub.y} r={95} fill="none" stroke="#E1DCD0" strokeWidth={1} />

      {nodes
        .filter((n) => n.name !== "Middle East")
        .map((n) => (
          <path
            key={n.name}
            d={curvePath(hub.x, hub.y, n.x, n.y)}
            fill="none"
            stroke="#2166B1"
            strokeOpacity={0.45}
            strokeWidth={1.25}
          />
        ))}

      <circle cx={hub.x} cy={hub.y} r={7} fill="#0C2A47" />
      <circle cx={hub.x} cy={hub.y} r={13} fill="none" stroke="#2166B1" strokeOpacity={0.5} strokeWidth={1} />
      <text
        x={hub.x}
        y={hub.y + 30}
        textAnchor="middle"
        className="fill-navy"
        style={{ font: "600 13px var(--font-manrope)" }}
      >
        Dubai
      </text>

      {nodes
        .filter((n) => n.name !== "Middle East")
        .map((n) => (
          <g key={n.name}>
            <circle cx={n.x} cy={n.y} r={4.5} fill="#1FAE94" />
            <text
              x={n.x}
              y={n.y - 14}
              textAnchor="middle"
              className="fill-graphite"
              style={{ font: "500 12px var(--font-inter)" }}
            >
              {n.name}
            </text>
          </g>
        ))}
    </svg>
  );
}

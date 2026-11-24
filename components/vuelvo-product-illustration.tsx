import { Beer, Gift } from "lucide-react";

// Static adaptation of the Vuelvo+ landing illustration. The SVG viewBox keeps
// the receipt, phone and cartillas together at every viewport width.
export default function VuelvoProductIllustration() {
  const stamps = Array.from({ length: 8 }, (_, index) => ({
    x: 38 + (index % 4) * 50,
    y: 88 + Math.floor(index / 4) * 52,
    marked: index < 5,
    reward: index === 7,
  }));

  return (
    <svg
      viewBox="0 0 430 640"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="vuelvo-illustration-title vuelvo-illustration-desc"
      className="mx-auto block h-auto w-full max-w-[460px] rounded-[32px]"
    >
      <title id="vuelvo-illustration-title">
        De la venta en Gesrest a la cartilla Vuelvo+
      </title>
      <desc id="vuelvo-illustration-desc">
        Ejemplo de una venta registrada por S/ 72, una visita sumada
        automáticamente y una cartilla de Bar La Esquina con cinco de ocho
        visitas.
      </desc>
      <defs>
        <pattern
          id="vuelvo-illustration-dots"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="9" cy="9" r="1.5" fill="#ffffff" opacity="0.09" />
        </pattern>
        <linearGradient
          id="vuelvo-illustration-cartilla"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop stopColor="#FFEDEB" />
          <stop offset="1" stopColor="#FFCFCB" />
        </linearGradient>
        <clipPath id="vuelvo-illustration-clip">
          <rect width="430" height="640" rx="32" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#vuelvo-illustration-clip)"
        fontFamily="Arial, sans-serif"
      >
        <rect width="430" height="640" fill="#39312d" />
        <rect width="430" height="640" fill="url(#vuelvo-illustration-dots)" />
        <circle
          cx="215"
          cy="320"
          r="295"
          fill="none"
          stroke="#82716b"
          strokeDasharray="6 7"
          opacity="0.35"
        />
        <circle cx="215" cy="320" r="210" fill="#FFEDEB" />

        <rect x="80" y="30" width="270" height="574" rx="44" fill="#1f1514" />
        <rect
          x="90"
          y="40"
          width="250"
          height="554"
          rx="34"
          fill="#1c1614"
          stroke="#776962"
          strokeWidth="0.8"
        />
        <rect x="173" y="48" width="84" height="22" rx="11" fill="#1f1514" />

        <g transform="translate(102 244)" fill="#4A1410">
          <rect
            width="226"
            height="242"
            rx="24"
            fill="url(#vuelvo-illustration-cartilla)"
          />
          <text x="16" y="35" fontSize="19" fontWeight="800">
            Bar La Esqui…
          </text>
          <rect
            x="166"
            y="15"
            width="44"
            height="28"
            rx="14"
            fill="#4A1410"
            opacity="0.16"
          />
          <text
            x="188"
            y="34"
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
          >
            5/8
          </text>
          {stamps.map(({ x, y, marked, reward }, index) => (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r="20"
                fill={marked ? "#4A1410" : "none"}
                stroke="#4A1410"
                strokeWidth="1.5"
                strokeDasharray={marked ? undefined : "4 3"}
                opacity={marked ? 1 : 0.5}
              />
              {reward ? (
                <Gift
                  x={x - 10}
                  y={y - 10}
                  width={20}
                  height={20}
                  stroke="#4A1410"
                  strokeWidth={2.2}
                />
              ) : marked ? (
                <Beer
                  x={x - 10}
                  y={y - 10}
                  width={20}
                  height={20}
                  stroke="#ffffff"
                  strokeWidth={2.2}
                />
              ) : (
                <text x={x} y={y + 5} textAnchor="middle" fontSize="14">
                  {index + 1}
                </text>
              )}
            </g>
          ))}
          <text x="16" y="178" fontSize="15" fontWeight="700">
            Te faltan 3 visitas
          </text>
        </g>

        <g transform="translate(18 70)">
          <rect
            width="230"
            height="120"
            rx="18"
            fill="#2b231e"
            stroke="#4b3b34"
          />
          <text x="17" y="31" fill="#bdb1a8" fontSize="12" fontWeight="700">
            CAJA ·
          </text>
          <image
            href="/productos/vuelvo_gesrest_blanco.svg"
            x="74"
            y="15"
            width="93"
            height="26"
          />
          <text x="17" y="67" fill="#fff7f0" fontSize="17" fontWeight="700">
            Venta registrada
          </text>
          <text x="17" y="98" fill="#bdb1a8" fontSize="14">
            DNI 4•••••12
          </text>
          <text x="212" y="98" fill="#bdb1a8" fontSize="14" textAnchor="end">
            S/ 72.00
          </text>
        </g>

        <g transform="translate(224 172)">
          <rect width="190" height="46" rx="23" fill="#1f1514" />
          <circle cx="25" cy="23" r="16" fill="#FE6055" />
          <Beer
            x="16"
            y="14"
            width={18}
            height={18}
            stroke="#4A1410"
            strokeWidth={2.4}
          />
          <text x="50" y="29" fill="white" fontSize="14" fontWeight="700">
            +1 visita sumada
          </text>
        </g>

        <g transform="translate(14 442)" fill="#4A1410">
          <rect
            width="260"
            height="178"
            rx="18"
            fill="url(#vuelvo-illustration-cartilla)"
            stroke="#FE6055"
          />
          <text x="16" y="33" fontSize="17" fontWeight="800">
            Bar La Esquina
          </text>
          {Array.from({ length: 8 }, (_, index) => {
            const x = 41 + (index % 4) * 59;
            const y = 79 + Math.floor(index / 4) * 56;
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="23"
                  fill={index === 7 ? "#FE6055" : "#4A1410"}
                  stroke={index === 7 ? "#4A1410" : "none"}
                  strokeWidth="2"
                  strokeDasharray={index === 7 ? "4 3" : undefined}
                />
                {index === 7 ? (
                  <Gift
                    x={x - 10}
                    y={y - 10}
                    width={20}
                    height={20}
                    stroke="#4A1410"
                    strokeWidth={2.2}
                  />
                ) : (
                  <Beer
                    x={x - 9}
                    y={y - 9}
                    width={18}
                    height={18}
                    stroke="#FE6055"
                    strokeWidth={2.2}
                  />
                )}
              </g>
            );
          })}
        </g>
      </g>
    </svg>
  );
}

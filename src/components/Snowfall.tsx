const FLAKES = [
  { left: "3%", size: 6, duration: 11, delay: -2 },
  { left: "10%", size: 4, duration: 9, delay: -6 },
  { left: "18%", size: 8, duration: 14, delay: -1 },
  { left: "27%", size: 5, duration: 10, delay: -8 },
  { left: "35%", size: 7, duration: 13, delay: -4 },
  { left: "44%", size: 4, duration: 8, delay: -3 },
  { left: "52%", size: 6, duration: 12, delay: -9 },
  { left: "60%", size: 5, duration: 10, delay: -5 },
  { left: "68%", size: 8, duration: 15, delay: -7 },
  { left: "76%", size: 4, duration: 9, delay: -2 },
  { left: "84%", size: 6, duration: 11, delay: -10 },
  { left: "91%", size: 5, duration: 13, delay: -6 },
  { left: "97%", size: 7, duration: 10, delay: -1 },
];

export default function Snowfall({ className = "" }: { className?: string }) {
  return (
    <div className={`snowfall ${className}`} aria-hidden="true">
      {FLAKES.map((flake, i) => (
        <span
          key={i}
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

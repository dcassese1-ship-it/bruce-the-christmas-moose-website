export default function MooseIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Bruce the Christmas Moose, a friendly cartoon moose wearing a striped scarf and a santa hat"
    >
      {/* Antlers */}
      <path
        d="M120 150 C90 130 70 90 45 95 C60 115 65 135 55 150 C80 145 95 150 110 168 Z"
        fill="#8a5a3a"
      />
      <path
        d="M280 150 C310 130 330 90 355 95 C340 115 335 135 345 150 C320 145 305 150 290 168 Z"
        fill="#8a5a3a"
      />

      {/* Ears */}
      <ellipse cx="112" cy="185" rx="26" ry="34" fill="#a9714a" />
      <ellipse cx="288" cy="185" rx="26" ry="34" fill="#a9714a" />
      <ellipse cx="112" cy="188" rx="13" ry="19" fill="#d99c73" />
      <ellipse cx="288" cy="188" rx="13" ry="19" fill="#d99c73" />

      {/* Head */}
      <ellipse cx="200" cy="230" rx="118" ry="105" fill="#a9714a" />

      {/* Muzzle */}
      <ellipse cx="200" cy="290" rx="62" ry="48" fill="#c98c5e" />

      {/* Nose */}
      <ellipse cx="200" cy="270" rx="30" ry="22" fill="#c23b3b" />
      <ellipse cx="191" cy="263" rx="7" ry="5" fill="#f7dfa0" opacity="0.7" />

      {/* Nostrils */}
      <ellipse cx="189" cy="278" rx="4" ry="6" fill="#5a2a2a" />
      <ellipse cx="211" cy="278" rx="4" ry="6" fill="#5a2a2a" />

      {/* Eyes */}
      <circle cx="155" cy="205" r="13" fill="#3a2417" />
      <circle cx="245" cy="205" r="13" fill="#3a2417" />
      <circle cx="159" cy="200" r="4" fill="#fff" />
      <circle cx="249" cy="200" r="4" fill="#fff" />

      {/* Cheeks */}
      <ellipse cx="135" cy="240" rx="14" ry="9" fill="#e3665f" opacity="0.55" />
      <ellipse cx="265" cy="240" rx="14" ry="9" fill="#e3665f" opacity="0.55" />

      {/* Santa hat */}
      <path
        d="M140 118 C170 70 230 70 260 118 C230 108 170 108 140 118 Z"
        fill="#c23b3b"
      />
      <path
        d="M140 118 C120 128 190 150 210 118 C230 150 280 128 260 118 C250 150 150 150 140 118 Z"
        fill="#c23b3b"
      />
      <rect x="132" y="112" width="136" height="18" rx="9" fill="#fffaf3" />
      <circle cx="255" cy="82" r="14" fill="#fffaf3" />

      {/* Scarf */}
      <path
        d="M108 300 C150 330 250 330 292 300 L292 330 C250 355 150 355 108 330 Z"
        fill="#1f5c3d"
      />
      <path
        d="M108 300 C150 330 250 330 292 300 L292 314 C250 339 150 339 108 314 Z"
        fill="#f7dfa0"
      />
      <rect x="160" y="330" width="16" height="34" rx="4" fill="#1f5c3d" />
      <rect x="224" y="330" width="16" height="34" rx="4" fill="#1f5c3d" />
    </svg>
  );
}

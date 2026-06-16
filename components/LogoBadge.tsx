/**
 * SVG-версія бейджу компанії «Служба Безпеки».
 *
 * Якщо є файл оригінального логотипу (PNG/SVG) — покладіть його в public/logo.png
 * і замініть цей компонент на:
 *   <Image src="/logo.png" alt="Служба Безпеки" width={size} height={size} />
 */

interface LogoBadgeProps {
  size?: number;
  className?: string;
}

/** Компактний щит для хедера та футера */
export function LogoIcon({ size = 40, className }: LogoBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Служба Безпеки — логотип"
    >
      {/* Shield shape */}
      <path
        d="M24 2L45 10.5V30C45 42 36 50.5 24 55C12 50.5 3 42 3 30V10.5L24 2Z"
        fill="#005BBB"
      />
      {/* Yellow bottom section */}
      <path
        d="M3.8 35H44.2C42 44.5 34 52 24 55C14 52 6 44.5 3.8 35Z"
        fill="#FFD700"
      />
      {/* Thin outline */}
      <path
        d="M24 2L45 10.5V30C45 42 36 50.5 24 55C12 50.5 3 42 3 30V10.5L24 2Z"
        fill="none"
        stroke="white"
        strokeWidth="0.8"
        strokeOpacity="0.3"
      />
      {/* С letter */}
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontSize="20"
        fontWeight="900"
        fill="white"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        С
      </text>
    </svg>
  );
}

/** Повний круглий бейдж для великих блоків */
export function LogoBadgeFull({ size = 160, className }: LogoBadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Служба Безпеки — бейдж"
    >
      <defs>
        <path id="sbTopArc"    d="M 18,100 A 82,82 0 0,1 182,100" />
        <path id="sbBotArc"    d="M 182,100 A 82,82 0 0,1 18,100" />
        <path id="sbTopArc2"   d="M 28,100 A 72,72 0 0,1 172,100" />
      </defs>

      {/* Outer ring */}
      <circle cx="100" cy="100" r="97" fill="white" stroke="#111" strokeWidth="3.5" />
      <circle cx="100" cy="100" r="87" fill="none"  stroke="#111" strokeWidth="1.5" />

      {/* Top arc: СЛУЖБА БЕЗПЕКИ */}
      <text fontSize="13" fontWeight="bold" fill="#111" letterSpacing="4" fontFamily="Arial, sans-serif">
        <textPath href="#sbTopArc" startOffset="9%">СЛУЖБА БЕЗПЕКИ</textPath>
      </text>

      {/* Bottom arc: УКРАЇНИ */}
      <text fontSize="12" fontWeight="bold" fill="#111" letterSpacing="5" fontFamily="Arial, sans-serif">
        <textPath href="#sbBotArc" startOffset="28%">УКРАЇНИ</textPath>
      </text>

      {/* Inner arc: БЕЗПЕКА */}
      <text fontSize="10" fill="#555" letterSpacing="3" fontFamily="Arial, sans-serif">
        <textPath href="#sbTopArc2" startOffset="22%">БЕЗПЕКА</textPath>
      </text>

      {/* Crossed maces behind shield */}
      <line x1="62" y1="55" x2="100" y2="148" stroke="#222" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="138" y1="55" x2="100" y2="148" stroke="#222" strokeWidth="4.5" strokeLinecap="round" />
      {/* Mace heads */}
      <ellipse cx="62"  cy="52" rx="7" ry="5" fill="#222" />
      <ellipse cx="138" cy="52" rx="7" ry="5" fill="#222" />

      {/* Shield outer */}
      <path
        d="M100 50 L138 63 L138 100 Q138 132 100 148 Q62 132 62 100 L62 63 Z"
        fill="#222"
      />
      {/* Shield — blue */}
      <path
        d="M100 56 L131 67 L131 100 Q131 126 100 141 Q69 126 69 100 L69 67 Z"
        fill="#005BBB"
      />
      {/* Shield — yellow lower half */}
      <path
        d="M69 110 Q70 130 100 141 Q130 130 131 110 Z"
        fill="#FFD700"
      />

      {/* С letter */}
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontSize="38"
        fontWeight="900"
        fill="white"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        С
      </text>
    </svg>
  );
}

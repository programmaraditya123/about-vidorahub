

export function CreatorIcon({ size = 18, color = "#c084fc" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function VideoIcon({ size = 18, color = "#c084fc" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polygon points="10,9 16,12 10,15" />
    </svg>
  );
}

export function GrowthIcon({ size = 18, color = "#c084fc" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 4h7v7" />
    </svg>
  );
}


export function UploadIcon({ size = 28, color = "#3b82f6" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 16V4" />
      <path d="M7 9l5-5 5 5" />
      <rect x="4" y="16" width="16" height="4" rx="2" />
    </svg>
  );
}


export function DiscoveryIcon({ size = 28, color = "#3b82f6" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}


export function PlayPlatformIcon({ size = 28, color = "#3b82f6" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polygon points="10,9 16,12 10,15" />
    </svg>
  );
}


export function TickIcon({ size = 14, color = "#22c55e" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SecureInfrastructureIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
      <rect x="9" y="10" width="6" height="4" rx="1" />
    </svg>
  );
}


export function PrivacyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <rect x="16" y="14" width="4" height="4" rx="1" />
    </svg>
  );
}

export function PlatformSafetyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="3" />
      <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
      <path d="M15 19l2 2 4-4" />
    </svg>
  );
}


/* GitHub Icon */
export function GithubIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12a10 10 0 006.84 9.49c.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.46-1.15-1.12-1.46-1.12-1.46-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.35 1.1 2.92.85.09-.65.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .85-.27 2.8 1.02A9.7 9.7 0 0112 6.84c.85 0 1.71.12 2.5.35 1.94-1.29 2.79-1.02 2.79-1.02.56 1.37.21 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.93.68 1.87v2.77c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
    </svg>
  );
}

/* Community / Users Icon */
export function UsersIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3 3-5 7-5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14 20c.5-2 2.5-3.5 5-3.5" />
    </svg>
  );
}

/* Mail Icon */
export function MailIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}


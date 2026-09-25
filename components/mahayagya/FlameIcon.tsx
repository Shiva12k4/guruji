export default function FlameIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="flame-gradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ea560c" />
          <stop offset="55%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f9edc4" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c1.2 2.6-0.4 4-1.4 5.4C9.4 8.9 8.5 10.2 8.5 12a3.5 3.5 0 0 0 7 0c0-1-0.3-1.7-0.7-2.4 1.4 1 2.2 2.6 2.2 4.4a5 5 0 0 1-10 0c0-3.2 2-4.8 3.4-6.6C11.3 5.8 12.3 4.3 12 2Z"
        fill="url(#flame-gradient)"
      />
    </svg>
  );
}

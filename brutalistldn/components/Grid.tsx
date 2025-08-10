type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  return <div className={`grid grid-cols-12 gap-4 md:gap-6 ${className ?? ""}`}>{children}</div>;
}

export function Col({ span = 12, children, className }: { span?: number; children: React.ReactNode; className?: string }) {
  return <div className={`col-span-12 md:col-span-${span} ${className ?? ""}`}>{children}</div>;
}
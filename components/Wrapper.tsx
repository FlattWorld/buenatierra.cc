type wrapperProps = {
  className?: string;
  children: React.ReactNode;
  direction?: 'column' | 'row';
}
export default function Wrapper({direction = 'column', children, className } : wrapperProps) {
  return <div className={`w-full flex flex-${direction} max-w-7xl ${className}`}>{children}</div>;
}
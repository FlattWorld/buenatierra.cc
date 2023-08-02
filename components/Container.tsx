import Wrapper from './Wrapper';

type containerProps = {
  direction?: "column" | "row";
  className?: string;
  children: React.ReactNode; 
}

export default function Container({ className, children, direction="column" } : containerProps) {
  return <div className={`${className} w-full flex flex-col items-center justify-start`}><Wrapper direction={direction}>{children}</Wrapper></div>;
}

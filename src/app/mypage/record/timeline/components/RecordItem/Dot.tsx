function Dot({ color = 'bg-bk30' }: { color?: string }) {
  return <div className={`h-0.5 w-0.5 ${color}`} />;
}

export default Dot;

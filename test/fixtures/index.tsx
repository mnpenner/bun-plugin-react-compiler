function Item({ value }: { value: number }) {
  return <div>{value * 2}</div>;
}

export default function App({ n }: { n: number }) {
  return <Item value={n + 1} />;
}

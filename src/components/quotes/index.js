import { QUOTES } from "@constants";
import { Item } from "./item";

export function Quotes() {
  return (
    <>
      {QUOTES.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}

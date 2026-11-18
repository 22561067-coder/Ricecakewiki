import TteokCatalog from "./TteokCatalog";

import butter from "./butter.webp";
import matcha from "./matcha.webp";
import tiramisu from "./tiramisu.webp";
import oreo from "./oreo.webp";

const products = [
  {
    title: "버터떡",
    img: butter,
    desc: "고소한 버터 풍미와 쫀득한 식감이 어우러진 인기 디저트 떡",
  },
  {
    title: "말차모찌",
    img: matcha,
    desc: "진한 말차 향과 부드러운 찹쌀의 조화가 매력적인 디저트 떡",
  },
  {
    title: "티라미수떡",
    img: tiramisu,
    desc: "티라미수의 풍미를 떡으로 재해석한 현대식 디저트 떡",
  },
  {
    title: "오레오 인절미",
    img: oreo,
    desc: "오레오 쿠키의 바삭함과 인절미의 쫀득함이 어우러진 디저트 떡",
  },
];

export default function DessertPage() {
  return <TteokCatalog title="디저트 떡" products={products} />;
}

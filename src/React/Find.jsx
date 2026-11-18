import { useSearchParams } from "react-router-dom";
import TteokCatalog from "./TteokCatalog";

import injeolmi from "./injul.webp";
import chapssal from "./chapssal.webp";
import songpyeon from "./songpyeon.webp";
import bakseol from "./baksul.webp";
import baram from "./baram.webp";
import hk from "./hk.webp";
import hobak from "./hobak.webp";
import ssuk from "./ssuk.webp";
import rainbow from "./rainbow.webp";
import yak from "./yak.webp";
import su from "./su.webp";
import du from "./du.webp";
import zng from "./zng.webp";
import hwa from "./hwa.webp";
import bing from "./bing.webp";
import ome from "./ome.webp";
import round from "./round.webp";
import jan from "./jan.webp";
import back from "./back.webp";
import cloud from "./cloud.webp";

const products = [
  { title: "인절미", img: injeolmi, to: "/injeolmi", desc: "판매자: 떡마을 떡집" },
  { title: "찹쌀떡", img: chapssal, desc: "판매자: 떡마을 떡집" },
  { title: "송편", img: songpyeon, desc: "판매자: 떡마을 떡집" },
  { title: "백설기", img: bakseol, desc: "판매자: 떡마을 떡집" },
  { title: "바람떡", img: baram, desc: "판매자: 떡마을 떡집" },

  { title: "흑임자 인절미", img: hk, desc: "오늘의 추천 떡" },
  { title: "호박설기", img: hobak, desc: "오늘의 추천 떡" },
  { title: "쑥개떡", img: ssuk, desc: "오늘의 추천 떡" },
  { title: "무지개떡", img: rainbow, desc: "오늘의 추천 떡" },
  { title: "약편", img: yak, desc: "오늘의 추천 떡" },

  { title: "수박떡", img: su, desc: "여름에 어울리는 떡" },
  { title: "두텁떡", img: du, desc: "여름에 어울리는 떡" },
  { title: "증편", img: zng, desc: "여름에 어울리는 떡" },
  { title: "화전", img: hwa, desc: "여름에 어울리는 떡" },
  { title: "빙수떡", img: bing, desc: "여름에 어울리는 떡" },

  { title: "오메기떡", img: ome, desc: "얼려서 먹으면 더 맛있는 떡" },
  { title: "경단", img: round, desc: "얼려서 먹으면 더 맛있는 떡" },
  { title: "잔기지떡", img: jan, desc: "얼려서 먹으면 더 맛있는 떡" },
  { title: "백년초떡", img: back, desc: "얼려서 먹으면 더 맛있는 떡" },
  { title: "구름떡", img: cloud, desc: "얼려서 먹으면 더 맛있는 떡" },
];

function normalizeSearch(value) {
  return value.normalize("NFC").replace(/\s+/g, "").toLowerCase();
}

const searchableProducts = products.map((product) => ({
  product,
  searchTitle: normalizeSearch(product.title),
}));

export default function FindPage() {
  const [searchParams] = useSearchParams();
  const keyword = normalizeSearch(searchParams.get("search") ?? "");
  const matches = keyword
    ? searchableProducts.filter(({ searchTitle }) => searchTitle.includes(keyword)).map(({ product }) => product)
    : products;

  return <TteokCatalog title="떡 찾기" products={matches} />;
}

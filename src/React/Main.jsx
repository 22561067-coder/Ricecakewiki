import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Header from "../Components/Header";
import "./Main.css";

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

function TteokCarousel({ title, description, items, cardDescription }) {
  const rowRef = useRef(null);

  function scroll(direction) {
    const row = rowRef.current;
    const cardWidth = row.firstElementChild.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(row).columnGap);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    row.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <section className="slider-wrapper" aria-label={title}>
      <div className="section-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <button type="button" className="slide-btn left" aria-label="이전 카드" onClick={() => scroll(-1)}>
        <FiChevronLeft />
      </button>
      <button type="button" className="slide-btn right" aria-label="다음 카드" onClick={() => scroll(1)}>
        <FiChevronRight />
      </button>

      <div ref={rowRef} className="grid">
        {items.map(({ name, img }) => (
          <div key={name} className="product-wrapper">
            <div className="product-card">
              <div className="product-img">
                <img src={img} alt={name} loading="lazy" decoding="async" />
              </div>
              <div className="product-info">
                <h3>{name}</h3>
                <p>{cardDescription}</p>
              </div>
            </div>
            <button type="button" className="outside-btn">바로가기</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MainPage() {
  const products = [
    { name: "인절미", img: injeolmi },
    { name: "찹쌀떡", img: chapssal },
    { name: "송편", img: songpyeon },
    { name: "백설기", img: bakseol },
    { name: "바람떡", img: baram },
  ];
  const recommend = [
    { name: "흑임자 인절미", img: hk },
    { name: "호박설기", img: hobak },
    { name: "쑥개떡", img: ssuk },
    { name: "무지개떡", img: rainbow },
    { name: "약편", img: yak }
  ];

  const season = [
    { name: "수박떡", img: su },
    { name: "두텁떡", img: du },
    { name: "증편", img: zng },
    { name: "화전", img: hwa },
    { name: "빙수떡", img: bing }
  ];

  const cold = [
    { name: "오메기떡", img: ome },
    { name: "경단", img: round },
    { name: "잔기지떡", img: jan },
    { name: "백년초떡", img: back },
    { name: "구름떡", img: cloud }
  ];

  return (
    <div className="tteok-home">

      <Header />

      <section className="hero">
        <h1>대한민국 모든 떡 정보 정리</h1>
        <p>다양한 떡 정보를 한 곳에서 확인하세요</p>
      </section>

      <main>
        <TteokCarousel title="인기 떡" description="요즘 많이 찾는 떡이에요" items={products} cardDescription="판매자: 떡마을 떡집" />
        <TteokCarousel title="오늘의 추천 떡" description="지금 가장 잘 어울리는 떡이에요" items={recommend} cardDescription="오늘의 추천 떡" />
        <TteokCarousel title="계절 떡" description="지금 계절에 어울리는 떡이에요" items={season} cardDescription="여름에 어울리는 떡" />
        <TteokCarousel title="차갑게 먹는 떡" description="냉장 또는 냉동 상태로 먹으면 식감이 살아나는 시원한 떡이에요" items={cold} cardDescription="얼려서 먹으면 더 맛있는 떡" />
      </main>

      <footer className="footer">
        © 2026 떡위키. All rights reserved.
      </footer>

    </div>
  );
}
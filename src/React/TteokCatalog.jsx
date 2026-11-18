import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "./Find.css";

export default function TteokCatalog({ title, products }) {
  return (
    <div className="tteok-catalog">
      <Header />
      <main className="catalog-main">
        <h1>{title}</h1>
        {products.length === 0 ? (
          <p className="catalog-empty">검색 결과가 없습니다.</p>
        ) : (
          <div className="catalog-grid">
            {products.map(({ title, img, desc, to }, index) => (
              <article className="catalog-card" key={title}>
                <img src={img} alt={title} width="640" height="640" loading={index < 4 ? "eager" : "lazy"} decoding="async" />
                <div className="catalog-info">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  {to && <Link to={to} className="catalog-link">바로가기</Link>}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <footer>© 2026 떡위키. All rights reserved.</footer>
    </div>
  );
}

import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

import './Header.css';

export default function Header() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!keyword.trim()) return;

    navigate(`/find?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <header className="header tteok-header">
      <div className="header-inner">

        <Link to="/" className="logo">
          떡위키
        </Link>

        <div className="search-box">
          <input
            type="text"
            aria-label="검색어"
            placeholder="검색어를 입력해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button type="button" className="search-btn" aria-label="검색" onClick={handleSearch}>
            <FiSearch />
          </button>
        </div>

        <nav className="nav">
          <NavLink to="/shop">떡집 찾기</NavLink>
          <NavLink to="/find">떡 찾기</NavLink>
          <NavLink to="/make">떡 만들기</NavLink>
          <NavLink to="/latest">디저트 떡</NavLink>
          <NavLink to="/storage">떡 보관법</NavLink>
        </nav>

      </div>
    </header>
  );
}
import React, { useState, useEffect } from "react";
import * as S from "./dropdown.styled";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (menuNumber) => {
    setActiveMenu(activeMenu === menuNumber ? null : menuNumber);
  };

  return (
    <S.Header>
      <S.Menu isScrolled={isScrolled}>
        <S.EmptyBox></S.EmptyBox>
        <S.Menu0>
          <Link to="/">Home</Link>
        </S.Menu0>
        <S.Menu1 onClick={() => handleClick(1)}>제품</S.Menu1>
        <S.Menu2 onClick={() => handleClick(2)}>코스메슈티컬</S.Menu2>
        <S.Menu3 onClick={() => handleClick(3)}>관련정보</S.Menu3>

        {activeMenu && (
          <S.MenuBar>
            {activeMenu === 1 && (
              <S.MenuStyle1>
                <S.SubMenu1>
                  <Link to="/Intro/Ceo">회사소개</Link>
                </S.SubMenu1>
                <S.SubMenu2>
                  <Link to="/Research/Tech">연구개발</Link>
                </S.SubMenu2>
                <S.SubMenu3>
                  <Link to="/Business/Machine">사업영역</Link>
                </S.SubMenu3>
                <S.SubMenu4>
                  <Link to="/Product/Medical">제품</Link>
                </S.SubMenu4>
                <S.SubMenu5>
                  <Link to="/Cro/Intro">CRO서비스</Link>
                </S.SubMenu5>
                <S.SubMenu6>
                  <Link to="/List/Notice">알림마당</Link>
                </S.SubMenu6>
              </S.MenuStyle1>
            )}
            {activeMenu === 2 && (
              <S.MenuStyle2>
                {/* <S.SubMenu7>
                <Link to="/Intro/Ceo">CEO인사말</Link>
              </S.SubMenu7> */}
                <S.SubMenu7>
                  <Link to="/Product/Medical">의료기기</Link>
                </S.SubMenu7>
              </S.MenuStyle2>
            )}
            {activeMenu === 3 && (
              <S.MenuStyle3>
                <S.SubMenu8>
                  <Link to="/Product/Cosmetic">화장품</Link>
                </S.SubMenu8>
                <S.SubMenu9>
                  <Link to="/Product/Material">화장품원료</Link>
                </S.SubMenu9>
                <S.SubMenu10>
                  <Link to="/Product/Matinfo">관련정보</Link>
                </S.SubMenu10>
              </S.MenuStyle3>
            )}
          </S.MenuBar>
        )}
      </S.Menu>
    </S.Header>
  );
};

export default Dropdown;

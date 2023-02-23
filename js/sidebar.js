import { sidebarAction } from "./library/swiper";
import { makeDOMwithProperties } from "./utils/dom";
import moveToDetail from "./movetoProductDetail";

export function setSidebar(data, router) {
  let sidebarData = JSON.parse(localStorage.getItem("sidebarData"));
  if (!sidebarData) {
    sidebarData = [];
  }

  // sidebarData에 이미 데이터가 있으면 배열에서 객체 삭제하고 배열 앞에 다시 삽입
  sidebarData.forEach((item, index) => {
    if (item.id === data.id) {
      sidebarData.splice(index, 1);
    }
  });
  // 최근 본 상품은 최대 10개까지 저장 가능
  if (sidebarData.length === 10) sidebarData.pop();
  sidebarData.unshift({ id: data.id, thumbnail: data.thumbnail });
  localStorage.setItem("sidebarData", JSON.stringify(sidebarData));
  setSidebarSwiper(router);
}

export function setSidebarSwiper(router) {
  const sidebarData = JSON.parse(localStorage.getItem("sidebarData"));
  const swiperWrapperDiv = document.querySelector(
    "#sidebar-area .swiper-wrapper"
  );

  const swiperDivs = sidebarData.map((item) => {
    const swiperDiv = makeDOMwithProperties("div", {
      className: "swiper-slide",
    });
    swiperDiv.innerHTML = `<a href="productDetail/${item.id}" data-navigo><img src="${item.thumbnail}" alt="${item.title}"/></a>`;

    swiperDiv.querySelector("a").addEventListener("click", function (event) {
      moveToDetail(event, this, router);
      setSidebar(item, router);
    });
    return swiperDiv;
  });

  swiperWrapperDiv.innerHTML = ``;
  swiperWrapperDiv.append(...swiperDivs);
  sidebarAction();
}
![header](https://user-images.githubusercontent.com/100064540/222079935-fd5ec79b-aea0-4931-98fb-3645f143405d.jpg)

<h1 align="center"><strong>💳Ottogi Premium💳</strong></h1>


<br /><br />
## 👨‍💻 Paldo 팀 소개
권범준(조장) | 고봉석 | 유선주 | 조성민 
:--: | :--: | :--: | :--: 
<img src="https://user-images.githubusercontent.com/102499959/217551283-17667e31-d531-484e-803f-fc77d9c4e2a2.png" style="zoom: 20%;" /> | <img src="https://user-images.githubusercontent.com/102499959/217551787-88fa9a6a-45c0-4247-9958-48e10ea2501a.png" style="zoom: 20%;" /> | <img src="https://user-images.githubusercontent.com/102499959/217551950-8ede2ed8-16d9-4643-9acc-aff59e92bb66.png" style="zoom: 20%;" /> | <img src="https://user-images.githubusercontent.com/102499959/217569300-a231ec7a-c0e7-4e3a-b936-cd152a0f7673.png" style="zoom: 20%;" /> 
[kjungit](https://github.com/kjungit) | [bongsee](https://github.com/bongsee) | [yousunzoo](https://github.com/yousunzoo) | [FranzCho](https://github.com/FranzCho) 
[관리자 페이지]<br>- 메인 페이지<br>- 상품 관리 페이지<br>- 상품 개별 페이지<br>- 상품 등록 페이지<br>- 상품 수정 페이지<br>- 거래내역 관리 페이지<br>- 거래내역 상세 페이지|[마이 페이지]<br>- 찜한 상품 페이지<br>- 주문 내역 페이지<br>- 회원정보 수정 페이지<br>- 계좌 관리 페이지<br>[주문 페이지]<br>- 주문서 페이지<br>- 결제 완료 페이지|[사용자용 페이지]<br>- 상품 페이지<br>- 상품 검색 페이지<br>- 장바구니 페이지<br>- 쿠폰 페이지<br>- 로그인/아웃 시 헤더 변경<br>- 사이드바|- 회원가입 페이지 퍼블리싱<br>- 장바구니 페이지 퍼블리싱<br>- 찜한 상품 페이지 퍼블리싱<br>- 제품 상세 페이지 퍼블리싱

<br /><br /><br />
 ## 🛒 프로젝트 소개
![main](https://user-images.githubusercontent.com/100064540/222090529-b8d97421-76b2-4eee-be02-b63f17c4ecbd.jpg)

 REST API를 활용하여 Vanilla JavaScript로 제작한 프리미엄 식품 쇼핑몰입니다.
 - 유저는 회원가입 및 로그인 후 상품 구매 및 장바구니, 찜목록 추가를 할 수 있습니다.<br />
   그 외에도 주문내역, 개인정보수정 등이 가능하며, 계좌관리(계좌등록)을 통해 구매가 가능합니다.
 - 관리자는 상품 통계, 거래 통계 현황을 볼 수 있고, 상품등록 및 수정, 거래취소 및 거래확정이 가능합니다.

---
<br />

- 작업 기간 : 2023.01.30 ~ 2023.03.01
- 데모 사이트 : [✨오뚜기몰 프리미엄✨](https://ottogi-premium.netlify.app/)
- 팀 레포지토리 주소 : [Paldo](https://github.com/KDT4-team6/Paldo)

- 테스트용 계정
  - 일반 사용자
    - ID : testuser@gmail.com
    - PW : 123qwerty
  - 관리자
    - ID : admin@paldo.com
    - PW : 12345678a
<br /><br /><br />
### 🛠️사용한 기술 스택
- Basic: `HTML`, `SCSS`, `JavaScript`
- Library:  `Swiper`, `Navigo`, `Chart.js`, `GSAP`, `SweetAlert2`,`Flatpickr`, `Daum postcode.map`
- Bundler: `Parcel`
- Deploy: `Netlify`
<br/><br/><br/>

### 📁 프로젝트 구조
```
┌─js
│  ├─adminFunctions
│  │  └─admin 페이지 구현을 위한 함수
│  ├─userFunctions
│  │  └─user 페이지 구현을 위한 함수
│  ├─components
│  │  └─페이지를 구성하는 컴포넌트 모음
│  ├─library
│  │  └─library를 사용하는 함수
│  ├─utils
│  │  └─유틸리티 함수
│  ├─api
│  │  └─api와 통신하는 함수
│  └─router.js
├─scss
│  ├─common
│  ├─pages
│  └─variables
├─static
│  └─images
├─index.html
├─README.md
├─package.json
└─package-lock.json
```
<br/><br/><br/>
### 💻 프로젝트 실행 방법
```bash
1. $ git clone https://github.com/KDT4-team6/Paldo.git
2. $ cd Paldo
3. $ npm i
4. root경로에 .env 파일 생성 후, api관련 정보(API_KEY, API_URL, USER_NAME) 입력 ex) API_KEY=123456
5. $ npm run dev
``` 
<br/><br/><br/>
 ## ⏱ 타임라인
![WBS](https://user-images.githubusercontent.com/100064540/222091118-fc17a644-3970-4403-b1ec-ad0f55acbad7.jpg)

<br/><br/><br/>
 ## 📝 페이지 구성
![pages](https://user-images.githubusercontent.com/100064540/222080400-c0468e60-22ac-4dcd-82e8-713e29345248.png)



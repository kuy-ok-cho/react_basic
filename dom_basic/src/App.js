import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import SectionArea from "./components/Section";
import FooterArea from "./components/Footer";
//뒤에는 파일이름 앞에는 컴포넌트 이름

// function Greeting() {
//   //render 함수의 내부에 return 값은 반드시 하나의 태그로 감싸져야 한다.
//   // render() {
//   return (
//     <div>
//       <p> Hello Again React!!</p>
//     </div>
//   );
//   // }
// }

function App() {
  return (
    <div className='App'>
      <Header />
      <SectionArea />
      <FooterArea />
    </div>
  );
}

export default App;

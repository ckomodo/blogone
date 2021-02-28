import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
     
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81fO6by7-nL._AC_UL640_FMwebp_QL65_.jpg"
    alt=" "
  />
);

const Title = () => <h1>The Dancing Girls</h1>
const Author = () => <h1>M. M. Chouinard</h1>


ReactDom.render(<BookList />, document.getElementById("root"));

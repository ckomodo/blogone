import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// variables

const firstBook = {
  img:
    "https://m.media-amazon.com/images/I/81fO6by7-nL._AC_UL640_FMwebp_QL65_.jpg",
  title: "The Dancing Girls",
  author: "M. M. Chouinard",
};

const secondBook = {
  img:
    "https://m.media-amazon.com/images/I/61EYPTVI2JL.jpg",
  title: "The Return",
  author: "Nicholas Sparks, Kyf Brewer, et al.",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book 
      img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}/>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="bookname">
      <img src={props.img} alt=" " />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

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
  img: "https://m.media-amazon.com/images/I/61EYPTVI2JL.jpg",
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
      >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum nulla in ligula vestibulum blandit. Ut sit amet sodales odio. Suspendisse maximus libero ac auctor sodales. Quisque quis felis in lorem scelerisque consectetur. Sed mattis augue quis fringilla tempus. Aliquam sit amet dolor 
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author, children} = props
  console.log(props);
  return (
    <article className="bookname">
      <img src={img} alt=" " />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h5>{children}</h5>

    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

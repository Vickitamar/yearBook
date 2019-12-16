import React, { Component } from "react";
import styled from "styled-components";
import VickiModal from "../Modal/vickiModal";

const PhotoGrid = styled.div`
  display: grid;
  margin-top: 550px;
  grid-template-columns: repeat(3, 305px);
  justify-content: center;
  gap: 60px;
  grid-auto-rows: 450px;
  @media (max-width: 990px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: calc(33vw - 5px);
  }
`;

const BookOverview = styled.div`
  background-color: hotPink;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedBook: null };
  }

  componentDidMount() {
    const { listBooks } = this.props;
    listBooks();
  }

  handleSelectBook = book => {
    this.setState({ selectedBook: book });
  };

  handleModalClose = () => {
    this.setState({ selectedBook: null });
  };

  render() {
    const { books, isLoading } = this.props;

    return (
      <div>
        {isLoading && <div>is loading</div>}

        {!isLoading && books && books.length && (
          <PhotoGrid>
            {books.map(book => (
              <BookOverview
                key={book.title}
                onClick={() => this.handleSelectBook(book)}
              >
                {book.title}
                <img src={book.img} alt="book cover" />
              </BookOverview>
            ))}
          </PhotoGrid>
        )}
        <VickiModal
          selectedBook={this.state.selectedBook}
          close={this.handleModalClose}
        />
      </div>
    );
  }
}

export default Gallery;

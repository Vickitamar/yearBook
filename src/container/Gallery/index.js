import { connect } from "react-redux";
import Gallery from "../../components/Gallery";
import { loadBooks } from "../../Actions";

const mapStateToProps = state => {
  const { books, isLoading } = state.booksReducer;

  return {
    books,
    isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  listBooks: () => dispatch(loadBooks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

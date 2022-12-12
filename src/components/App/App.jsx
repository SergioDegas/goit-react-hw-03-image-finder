import { GlobalStyle } from '../GlobalStyle';
import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Searchbar from 'components/Searchbar';
import Api from '../Api/Api.js';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    isLoading: false,
    showModal: false,
    modalImage: '',
  };
  async componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (prevState.query !== query) {
      this.setState({ items: [] });

      try {
        const { hits } = await Api(query, page);
      this.setState({ isLoading: true });

        this.setState(prevState => ({
          items: [...prevState.items, ...hits],
        }));
      } catch (error) {
       toast.error('Oops! Something went wrong! Please try again.');
      } finally {
        this.setState({ isLoading: false });
      }
    }

    if (prevState.page !== page && page !== 1) {
      this.setState({ isLoading: true });

      try {
        const { hits } = await Api(query, page);

        this.setState(prevState => ({
          items: [...prevState.items, ...hits],
        }));
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  inputValue = query => {
    this.setState({ query });
    // console.log(query);
  };

  incrementPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  openModal = largeImageURL => {
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
    });
  };

  render() {
    const { items, isLoading, showModal, modalImage } = this.state;
    // console.log(items);
    return (
      <>
        <Searchbar onSubmit={this.inputValue} />
        {items && <ImageGallery items={items} onClick={this.openModal} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImage} alt="largeImage" />
          </Modal>
        )}
        {items.length > 11 && <Button incrementPage={this.incrementPage} />}
        {isLoading && <Loader />}
        <Toaster position='top-right'/>
        <GlobalStyle />
      </>
    );
  }
}

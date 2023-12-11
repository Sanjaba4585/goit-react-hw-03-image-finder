import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import * as api from '../api/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/Error';
import Notiflix from 'notiflix';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    modal: { isOpen: false, largeImageURL: '' },
    q: '',
    page: 1,
    images: [],
    result: 0,
    error: null,
    loading: false,
  };
  handlSubmit = value => {
    this.setState({ q: value, page: 1, images: [], result: 0, error: null });
  };

  componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      this.getApi(q, page);
    }
  }

  getApi = async (q, page) => {
    this.setState({ loading: true });
    try {
      const { hits, totalHits } = await api.getImages(q, page);

      if (totalHits === 0) {
        Notiflix.Notify.warning(
          `There is no results upon your ${q}, please try again...`
        );
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        result: totalHits,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  loadingButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onModalOpen = data => {
    this.setState({
      modal: {
        isOpen: true,
        largeImageURL: data,
      },
    });
  };

  onModalClose = () => {
    this.setState({
      modal: {
        isOpen: false,
        largeImageURL: '',
      },
    });
  };
  render() {
    const { images, result, loading, error, modal } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handlSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} onModalOpen={this.onModalOpen} />
        )}
        {error && <ErrorMessage />}
        {result > images.length && (
          <Button loadingButton={this.loadingButton} />
        )}
        {modal.isOpen && (
          <Modal
            largeImageURL={this.state.modal.largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}
      </div>
    );
  }
}

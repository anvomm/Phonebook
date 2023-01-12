import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyAboutError = () => {
    toast.error(`Ooops... something went wrong, please try again later.`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  export const notifyAboutSuccess = text => {
    toast.info(text, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
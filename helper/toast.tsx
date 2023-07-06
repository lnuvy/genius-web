import { ToastOptions, toast } from "react-toastify";

type Text = string;

const TOAST_OPTION = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
} as ToastOptions;

const errorMsg = (text: Text) => toast.error(text, TOAST_OPTION);
const warning = (text: Text) => toast.warn(text, TOAST_OPTION);
const success = (text: Text) => toast.success(text, TOAST_OPTION);

const Toast = {
  errorMsg,
  warning,
  success,
};

export default Toast;

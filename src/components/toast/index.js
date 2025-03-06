import {
  toast as reactToast,
  ToastContainer as ReactToastContainer,
} from "react-toastify";

import { CloseButton } from "./close-button";
import "./index.scss";

export function ToastContainer(props) {
  return (
    <ReactToastContainer
      hideProgressBar={true}
      className="customized_toast"
      closeButton={<CloseButton />}
      closeOnClick={true}
      autoClose={3000}
      {...props}
    />
  );
}

export function toast(text, type, options) {
  if (type) {
    return reactToast[type](<p className="text">{text}</p>, options);
  }

  return reactToast;
}

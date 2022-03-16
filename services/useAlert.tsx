/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Slide, toast, ToastOptions } from 'react-toastify';

import Alert from '../components/atoms/Alert';

export default function useAlert() {
  return {
    show: (msg, options: ToastOptions<{}> = {}) => toast(<Alert msg={msg} />, { ...options, type: 'info' }),
    success: (msg, options: ToastOptions<{}> = {}) => toast(<Alert msg={msg} />, { ...options, type: 'success' }),
    error: (msg, options: ToastOptions<{}> = {}) => toast(<Alert msg={msg} />, { ...options, type: 'error' }),
    info: (msg, options: ToastOptions<{}> = {}) => toast(<Alert msg={msg} />, { ...options, type: 'info' }),
    dismiss: () => toast.dismiss(),
    close: (id) => toast.dismiss(id),
  };
}

export const SlideAlertTransition = Slide;

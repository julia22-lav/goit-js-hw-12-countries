import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const notifications = {
  onOverflow() {
    PNotify.notice({
      title: 'Too many matches.',
      text: 'Please enter a more specific query.',
    });
  },
  onNotFound() {
    PNotify.info({
      title: 'No matches found.',
      text: 'Please ckeck your query.',
    });
  },
  onError() {
    PNotify.error({
      title: 'Something went wrong!',
      text: 'Please repeat your query.',
    });
  },
};

export default notifications;

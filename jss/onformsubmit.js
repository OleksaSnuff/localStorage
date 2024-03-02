import { refs } from './refs';
import { createNoteMarkup } from './createNoteMarkup';
import { localStorageAPI } from './localStorage.js';
import { nanoid } from 'nanoid';

export function onFormSubmit(event) {
  event.preventDefault();
  const newNote = { id: nanoid() };
  new FormData(event.currentTarget).forEach((value, key) => {
    newNote[key] = value;
  });

  localStorageAPI.addNote(newNote);

  const markup = createNoteMarkup(newNote);
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

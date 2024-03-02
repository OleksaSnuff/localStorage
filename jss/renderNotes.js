import { createNoteMarkup } from './createNoteMarkup';
import { refs } from './refs';
import { localStorageAPI } from './localStorage';

export function renderNotes() {
  const notesArray = localStorageAPI.getAllNotes();
  const markup = notesArray.map(createNoteMarkup).join('');
  refs.taskList.innerHTML = markup;
}

/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */

import { refs } from "./js/refs";
import { onFormSubmit } from "./js/onformsubmit";
import { renderNotes } from "./js/renderNotes.js";
import { getAllNotes } from "./js/localStorage.js";
import { LOCAL_STORAGE_KEY } from "./js/localStorage.js";

refs.taskList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "BUTTON") return;
  const notesArray = getAllNotes();
  console.log(event.target.dataset.id);
  const id = notesArray.findIndex((elem) => {
    return elem.id === event.target.dataset.id;
  });
  console.log(id);
  if (id === undefined || id === -1) return;
  notesArray.splice(id, 1);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notesArray));
  renderNotes();
});

renderNotes();
refs.form.addEventListener("submit", onFormSubmit);

const bookSection = document.querySelector(".book-list");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const addBtn = document.querySelector("#submit");

window.addEventListener("DOMContentLoaded", () => {
  class Library {
    constructor() {
      this.library = JSON.parse(localStorage.getItem("book-collection")) || [];
    }

    
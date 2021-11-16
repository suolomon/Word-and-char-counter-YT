//get elements by ids
let inputTextArea = document.getElementById("input-text");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

// console.log(inputTextArea, charCount, wordCount);
//count characters
inputTextArea.addEventListener("input", () => {
  charCount.textContent = inputTextArea.value.length;

  //remove whitespaces
  let textInput = inputTextArea.value.trim();
  console.log(textInput);
  //count words - split textInput to an array. Filter out empty strings.count length.

  wordCount.textContent = textInput.split(/\s+/).filter((item) => item).length;
});

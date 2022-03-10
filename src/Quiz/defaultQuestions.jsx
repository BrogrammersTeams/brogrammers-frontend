export const QuizArr = {
  html: [
    {
      question: "HTML stands for -",
      options: [
        "HighText Machine Language",
        "HyperText and links Markup Language",
        "HyperText Markup Language",
        "None of these",
      ],
      answer: 2,
      points: 2, // <- Index of answer array
    },
    {
      question: "The correct sequence of HTML tags for starting a webpage is -",
      options: [
        "Head, Title, HTML, body",
        "HTML, Body, Title, Head",
        "HTML, Head, Title, Body",
        "HTML, Head, Title, Body",
      ],
      answer: 3,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following element is responsible for making the text bold in HTML?",
      options: ["<pre>", "<a>", "<b>", "<br>"],
      answer: 2,
      points: 3, // <- Index of answer array
    },
    {
      question:
        "Which of the following tag is used for inserting the largest heading in HTML?",
      options: ["<h3>", "<h1>", "<h5>", "<h6>"],
      answer: 1,
      points: 3, // <- Index of answer array
    },
    {
      question:
        "Which of the following tag is used to insert a line-break in HTML?",
      options: ["<br>", "<a>", "<pre>", "<b>"],
      answer: 0,
      points: 3, // <- Index of answer array
    },
    {
      question:
        "How to create an unordered list (a list with the list items in bullets) in HTML?",
      options: ["<ul>", "<ol>", "<li>", "<i>"],
      answer: 0,
      points: 3, // <- Index of answer array
    },
    {
      question:
        "How to create an ordered list (a list with the list items in numbers) in HTML?",
      options: ["<ul>", "<ol>", "<li>", "<i>"],
      answer: 1,
      points: 3, // <- Index of answer array
    },
    {
      question:
        "Which of the following element is responsible for making the text italic in HTML?",
      options: ["<i>", "<italic>", "<it>", "<pre>"],
      answer: 0,
      points: 3, // <- Index of answer array
    },
    {
      question: "<input> is -",
      options: [
        "a format tag.",
        "an empty tag.",
        "All of the above",
        "None of the above",
      ],
      answer: 1,
      points: 3, // <- Index of answer array
    },
    {
      question:
        "Which of the following tag is used to make the underlined text?",
      options: ["<i>", "<ul>", "<u>", "<pre>"],
      answer: 2,
      points: 3, // <- Index of answer array
    },
  ],
  // css questions
  css: [
    {
      question: "What is CSS stands for ?",
      options: [
        "Cascading Style Sheets",
        "Cascade Style Sheet",
        "Color Style Sheets",
        "Color Style Sheet",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question: "What CSS describes?",
      options: [
        "CSS describes how calculation perform on button click.",
        "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
        "Both A. and B.",
        "None of the above",
      ],
      answer: 1,
      points: 2, // <- Index of answer array
    },
    {
      question: "What is the correct CSS syntax?",
      options: [
        "body {color: black;}",
        "body:color=black;",
        "body;color:black;",
        "body:color=black;",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question: "What is a CSS selector?",
      options: [
        "A CSS selector is the CSS class name",
        "A CSS selector is the set of properties that are going to be applied on HTML elements",
        "A CSS selector is name of CSS file.",
        "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements.",
      ],
      answer: 3,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?",
      options: ["Selector", "Property", "Value", "None of the above"],
      answer: 1,
      points: 2, // <- Index of answer array
    },
    {
      question: "Internal styles are written within the _____ element.",
      options: [
        "<style>…</style>",
        "<css>…</css>",
        "<stylesheet>…</stylesheet>",
        "Both A. and B",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question: "Inline styles are written within the _____ attribute.",
      options: ["style", "css", "stylesheet", "Both A. and B"],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question: "CSS comments are placed within the ______.",
      options: ["//", "/*", "<!--", "None of the above"],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question: "Can comments also span multiple lines?",
      options: ["Yes", "No", "It depends on the comment", "None of the above"],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question: "Which property is used to define the text color?",
      options: ["text-color", "color", "text-color:red", "color:red"],
      answer: 1,
      points: 2, // <- Index of answer array
    },
  ],
  // javascript questions
  javascript: [
    {
      question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
      options: [
        "<script src='xxx.js'>",
        "<script href='xxx.js'>",
        "<script name='xxx.js'>",
        "<script type='text/javascript' src='xxx.js'>",
      ],
      answer: 3,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "What is the correct syntax for adding a comment in JavaScript?",
      options: [
        "<!--This is a comment-->",
        "//This is a comment",
        "/*This is a comment*/",
        "None of the above",
      ],
      answer: 1,
      points: 2, // <- Index of answer array
    },
    {
      question: "Which of the following is not a reserved word in JavaScript?",
      options: ["interface", "throws", "program", "short"],
      answer: 2,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following is not a valid JavaScript variable name?",
      options: [
        "2names",
        "_first_and_last_names",
        "FirstAndLast",
        "None of the above",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following function of String object returns the length of the string?",
      options: ["getDate()", "toString()", "getUTCDate()", "charAt()"],
      answer: 1,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following function of String object returns the calling string value converted to lower case?",
      options: [
        "toLowerCase()",
        "toUpperCase()",
        "toLocaleLowerCase()",
        "toLocaleUpperCase()",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following function of String object causes a string to be displayed in the specified color?",
      options: ["fontcolor()", "font()", "color()", "highlight()"],
      answer: 2,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following function of String object returns the calling string value converted to uppercase?",
      options: [
        "toUpperCase()",
        "toLowerCase()",
        "toLocaleUpperCase()",
        "toLocaleLowerCase()",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following function of String object causes a string to be displayed in a specified font?",
      options: ["fontcolor()", "font()", "color()", "highlight()"],
      answer: 1,
      points: 2, // <- Index of answer array
    },
    {
      question:
        "Which of the following function of String object returns the calling string value converted to lower case?",
      options: [
        "toUpperCase()",
        "toLowerCase()",
        "toLocaleUpperCase()",
        "toLocaleLowerCase()",
      ],
      answer: 0,
      points: 2, // <- Index of answer array
    },
  ],
};

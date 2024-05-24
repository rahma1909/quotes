


// function of add quotes
var allQuotes = [
  { quote: "“So many books, so little time.”", author: "― Frank Zappa" },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    quote: "“If you tell the truth, you don't have to remember anything.”",
    author: "―  Mark Twain",
  },
];

var lastNum=0;

function addQuote() {

  
  do {
    var num = Math.floor(Math.random() * allQuotes.length);
  } while (num == lastNum);



  lastNum = num
 
console.log(num);
  document.getElementById("quoname").innerHTML = allQuotes[num].quote;
  document.getElementById("qouauthor").innerHTML = allQuotes[num].author;
  
}

var order = 10; //Analysis key.
var ngrams = {}; //A contiguous sequence of n items from a given sample of text or speech.
var button; //Generate button.
var txt; //Input file.
var result; //Output text.


function markov(){

  var curGram = txt.substring(0,order);
  result = curGram;

  //generate a story
  for (var i = 0; i <10000; i++) {
     var possibilities = ngrams[curGram];
     if(possibilities){
       result+=random(possibilities);
     }
     curGram = result.substring(result.length-order,result.length);
  }
  document.write(3+4);
  document.write(result);

}

function run(file){
  txt = file.data;

  //create an array of phrases
  for (var i = 0; i <=txt.length-order; i++) {
    var gram = txt.substring(i,i+order);
    if (!ngrams[gram]) {
      ngrams[gram] = [];
    }
    ngrams[gram].push(txt.charAt(i+order));
  }

  //call markov
  markov();
}
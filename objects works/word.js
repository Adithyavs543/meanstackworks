var text="hai hello hai hello"

//print word count
//hai:2,hello:2

var words=text.split(" ") //[hai]
var word_count={}
for(let word of words){
    if(word in word_count){
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);
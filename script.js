var georgeWashingtonRadio = document.getElementById('george-washington-radio');
var abrahamLincolnRadio = document.getElementById('abraham-lincoln-radio');
var marieCurieRadio = document.getElementById('marie-curie-radio');
var storyHolder = document.getElementById('story-holder');
var button = document.getElementById('button');
var nounInput = document.getElementById('noun-input')
var verbInput = document.getElementById('verb-input')
var adjectiveInput = document.getElementById('adjective-input')
var adverbInput = document.getElementById('adverb-input')
var randomNoun = ['mountain', 'bobcat', 'chair', 'piano', 'pillowcase', 'printer', 'skyscraper', 'ball of cheese', 'stick', 'garbagecan'];
var randomVerb = ['eat', 'devour', 'stare', 'climb', 'jump', 'kill', 'poop', 'listen', 'flip out', 'stop'];
var randomAdjective = ['tall', 'dark', 'short', 'evil', 'misunderstood', 'formidable', 'tempestuouse', 'sketchy', 'ugly', 'beautiful'];
var randomAdverb = ['lovingly', 'sarcastically', 'stupidly', 'wisely', 'arrogantly', 'quickly', 'loosley', 'underhandedly', 'decisevely', 'athletically'];
var objectNoun = {input: nounInput, array: '', replace: /{{noun}}/, random: randomNoun}
var objectVerb = {input: verbInput, array: "", replace: /{{verb}}/, random: randomVerb}
var objectAdjective = {input: adjectiveInput, array: "", replace: /{{adjective}}/, random: randomAdjective}
var objectAdverb = {input: adverbInput, array: "", replace: /{{adverb}}/, random: randomAdverb}
var objectArray = [objectNoun, objectVerb, objectAdjective, objectAdverb]

// display mad lib
button.addEventListener('click', function(){
    var storyFinal = document.createElement('div');
    storyFinal.className = 'story-box';
    var blankStory = getBlankStory();
    objectArray = getArray(objectArray);
    console.log(objectArray);
    blankStory = fillInStory(blankStory, objectArray);
    storyFinal.innerText = blankStory;
    storyHolder.innerHTML = storyFinal.outerHTML;
});

// calls blank story from variable
function getBlankStory(){
    var storyBlank = document.createElement('div');
    
    if(georgeWashingtonRadio.checked){
        storyBlank = georgeWashingtonStory;   
    }
    else if(abrahamLincolnRadio.checked){
        storyBlank = abrahamLincolnStory;
    }
    else if(marieCurieRadio.checked){
        storyBlank = marieCurieStory; 
    }
    return storyBlank;
}
// uses objectArray to call individual word objects
function getArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].array = getInput(arr[i].input, arr[i].array, arr[i].random);
    }
    return arr;
}
// fills object.array with values from UI input boxes
function getInput(input, str, word){
    if(input.value === ''){
        str = getRandElem(word);
    }
    else{str = input.value;}
    str = str.split(',');
    while(str.length < 4){
        var newWord = getRandElem(word);
        str.push(newWord);
    }

    return str;
}
// find random element from an array
function getRandElem(arr){
    return arr[genRandNum(0,arr.length - 1)];
}
// Find random number with parameters
function genRandNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// selects objects from objectArray
function fillInStory(str, arr){
    for(var i = 0; i < arr.length; i++){
        str = replaceWords(arr[i], str);
    }
    return str;
}
// uses values from object.array to replace {{words}} from object.replace
function replaceWords(object, str){
    for(var i = 0; i < object.array.length; i++){
    str = str.replace(object.replace, object.array[i]);
    }
    return str;
}
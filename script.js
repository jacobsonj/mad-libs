var georgeWashingtonRadio = document.getElementById('george-washington-radio');

var abrahamLincolnRadio = document.getElementById('abraham-lincoln-radio');

var marieCurieRadio = document.getElementById('marie-curie-radio');

var storyHolder = document.getElementById('story-holder');

var button = document.getElementById('button');

var nounInput = document.getElementById('noun-input')

var verbInput = document.getElementById('verb-input')

var adjectiveInput = document.getElementById('adjective-input')

var adverbInput = document.getElementById('adverb-input')

// var replaceNoun = /{{noun}}/

var objectNoun = {input: nounInput, array: "", replace: /{{noun}}/, }
var objectVerb = {input: verbInput, array: "", replace: /{{verb}}/}
var objectAdjective = {input: adjectiveInput, array: "", replace: /{{adjective}}/}
var objectAdverb = {input: adverbInput, array: "", replace: /{{adverb}}/}

var objectArray = [objectNoun, objectVerb, objectAdjective, objectAdverb]

button.addEventListener('click', function(){
    var storyFinal = document.createElement('div');
    
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
        var storyBlank = georgeWashingtonStory;   
    }
    else if(abrahamLincolnRadio.checked){
        var storyBlank = abrahamLincolnStory;
    }
    else if(marieCurieRadio.checked){
        var storyBlank = marieCurieStory; 
    }

    return storyBlank;
}

// uses objectArray to call individual word objects
function getArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i].array = getInput(arr[i].input, arr[i].array);
    }
    return arr;
}

// fills object.array with values from UI input boxes
function getInput(input, str){
    str = input.value;
    str = str.split(',');
    return str;
}

// replaces selects objects from objectArray
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
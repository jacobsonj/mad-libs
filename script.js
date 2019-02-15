var georgeWashingtonStory = "George Lorem ipsum {{noun}} dolor sit amet, {{verb}} consectetur adipiscing {{adjective}} elit, sed do eiusmod {{verb}} tempor incididunt ut labore et dolore {{noun}} magna aliqua. Ut enim ad minim veniam, {{noun}} quis nostrud exercitation {{adjective}} ullamco laboris {{verb}} nisi ut aliquip ex ea commodo {{noun}} consequat. Duis aute irure dolor in reprehenderit {{adjective}} in voluptate velit esse cillum dolore eu {{verb}} fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit {{adjective}} anim id est laborum.";


var abrahamLincolnStory = "Abraham Lorem ipsum {{noun}} dolor sit amet, {{verb}} consectetur adipiscing {{adjective}} elit, sed do eiusmod {{verb}} tempor incididunt ut labore et dolore {{noun}} magna aliqua. Ut enim ad minim veniam, {{noun}} quis nostrud exercitation {{adjective}} ullamco laboris {{verb}} nisi ut aliquip ex ea commodo {{noun}} consequat. Duis aute irure dolor in reprehenderit {{adjective}} in voluptate velit esse cillum dolore eu {{verb}} fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit {{adjective}} anim id est laborum.";

var marieCurieStory = "Marie Lorem ipsum {{noun}} dolor sit amet, {{verb}} consectetur adipiscing {{adjective}} elit, sed do eiusmod {{verb}} tempor incididunt ut labore et dolore {{noun}} magna aliqua. Ut enim ad minim veniam, {{noun}} quis nostrud exercitation {{adjective}} ullamco laboris {{verb}} nisi ut aliquip ex ea commodo {{noun}} consequat. Duis aute irure dolor in reprehenderit {{adjective}} in voluptate velit esse cillum dolore eu {{verb}} fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit {{adjective}} anim id est laborum.";

var georgeWashingtonRadio = document.getElementById('george-washington-radio');

var abrahamLincolnRadio = document.getElementById('abraham-lincoln-radio');

var marieCurieRadio = document.getElementById('marie-curie-radio');

var storyHolder = document.getElementById('story-holder');

var button = document.getElementById('button');

var nounInput = document.getElementById('noun-input')

var verbInput = document.getElementById('verb-input')

var adjectiveInput = document.getElementById('adjective-input')

var adverbInput = document.getElementById('adverb-input')

var replaceNoun = /{{noun}}/

button.addEventListener('click', function(){
    var storyFinal = document.createElement('div');
    
    var blankStory = getBlankStory();

    var inputValuesNoun = getInputValuesNoun();

    var filledStory = fillInStory(blankStory, inputValuesNoun, replaceNoun);

    blankStory = filledStory;
    console.log(inputValuesNoun);
    
    // console.log(nounInput.value);
    // console.log(verbInput.value);
    // console.log(adjectiveInput.value);
    // console.log(adverbInput.value);

    storyFinal.innerText = blankStory;

    storyHolder.innerHTML = storyFinal.outerHTML;
});

// selects story based on radio selection and returns that story
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

// calls value from text imput
function getInputValuesNoun(){
    
    var nounString = nounInput.value;
    nounString = nounString.split(',');
    return nounString;
}


function fillInStory(str, arr, word){
    for(var i = 0; i < arr.length; i++){
        str = str.replace(word, arr[i]);
    }
    return str;
}

// function fillInStory(str, arr, word){
//     for(var i = 0; i < arr.length; i++){
//         str = str.replace(/{{noun}}/, arr[i]);
//     }
//     return str;
// }

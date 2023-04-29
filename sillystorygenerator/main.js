const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised - :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    //Create three new variables called xItem, yItem, and zItem, 
  //and make them equal to the result of calling randomValueFromArray() 
  //on your three arrays (the result in each case will be a random item out of 
  //each array it is called on). For example you can call the function and get it to return one 
  //random string out of insertX by writing randomValueFromArray(insertX).
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    //Next we want to replace the three placeholders in the newStory string — :insertx:, 
    //:inserty:, and :insertz: — with the strings stored in xItem, yItem, and zItem. 
    //There are two possible string methods that will help you here — in each case, 
    //make the call to the method equal to newStory, so each time it is called, 
    //newStory is made equal to itself, but with substitutions made. 
    //So each time the button is pressed, these placeholders are 
    //each replaced with a random silly string. As a further hint, 
    //depending on the method you choose, you might need to make one of the calls twice.
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
    //Inside the first if block, add another string replacement method call to replace 
    //the name 'Bob' found in the newStory string with the name variable. 
    //In this block we are saying "If a value has been entered into the customName text input,
    // replace Bob in the story with that custom name."

  }

  if(document.getElementById('uk').checked) {
    const weight = Math.round((300-32)*5/9);
    const temperature =  Math.round(94/14);
    newStory = newStory.replace('94 fahrenheit', temperature + ' centigrade');
    newStory = newStory.replace('300 pounds', weight + ' stone');
    
}
  
  story.textContent = newStory ;
  story.style.visibility = 'visible';
  

}


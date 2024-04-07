function scuberGreetingForFeet(distanceInFeet) {
   // Write your code here!
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distanceInFeet > 2500) {
    return 'No can do.';
  } else {
    return 'That will be twenty bucks.';
  }
}

function ternaryCheckCity(city) {
   // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
   // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

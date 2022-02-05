/* ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মান হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।  */

function anaToVori(ana) {
  if (typeof ana === "number" && ana >= 0) {
    let vori = ana / 16;
    return vori;
  } else {
    return "Please input a valid Number of Ana";
  }
}

let myVori = anaToVori(100);
console.log(myVori);



/* ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। */

function pandaCost(singara, sammusa, gilepi) {
  const singaraCost = singara * 7;
  const sammusaCost = sammusa * 10;
  const gilepiCost = gilepi * 15;

  if (
    typeof singara === "number" &&
    typeof sammusa === "number" &&
    typeof gilepi === "number" &&
    singara >= 0 &&
    sammusa >= 0 &&
    gilepi >= 0
  ) {
    let totalCost = singaraCost + sammusaCost + gilepiCost;
    return totalCost;
  } else {
    return "Sorry, we can't calculate the value you input";
  }
}

let myTreat = pandaCost(3, 23, 0);
console.log(myTreat);



/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  

এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। */

function picnicBudget(person) {
  let totalBudget = 0;
  const costOfFirst100 = 5000;
  const costOfFirst200 = 4000;
  const restOfCost = 3000;

  if (typeof person !== "number" || person < 1) {
    return "Please, input a valid Number of person";
  } else if (person <= 100) {
    totalBudget += person * costOfFirst100;
  } else if (person >= 101 && person <= 200) {
    let first100Cost = 100 * costOfFirst100;
    let restPeople = person - 100;
    let restCost = restPeople * costOfFirst200;
    let total = first100Cost + restCost;

    totalBudget += total;
  } else if (person >= 201) {
    let first100Cost = 100 * costOfFirst100;
    let first200Cost = 100 * costOfFirst200;
    let restPeople = person - 200;
    let restCost = restPeople * restOfCost;
    let total = first100Cost + first200Cost + restCost;

    totalBudget += total;
  }

  return totalBudget;
}

let ourPicnic = picnicBudget(143);

console.log(ourPicnic);



// ৪. [ ফাংশন নেম দিতে হবে oddFriend]: বিস্তারিত ভিডিওতে দেখো।

function oddFriend(friends) {

  if (Array.isArray(friends) === true) {
    let oddOne = 'There isnt any odd number of Array element.';

    for (const friend of friends) {
      if (friend.length % 2 === 1) {
        oddOne = friend;
        break;
      }
    }

    return oddOne;
  } else {
    return "You need to input an Array of your friends";
  }
}

let myFriends  ;

console.log(oddFriend(myFriends));

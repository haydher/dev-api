// return random string based on whats given with min and max length
const getRandStr = (str, minLength, maxLength) => {
 const string =
  str?.toString() ||
  `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur`;

 const min = parseInt(minLength) || 5;
 const max = parseInt(maxLength) || 10;
 0;
 // change string to array
 const strArr = string.split(" ");

 const randStrRange = getRandNum(min, max);

 const outputStr = [...Array(randStrRange)].map(() => strArr[Math.floor(Math.random() * strArr.length - 1)]).join(" ");

 return outputStr;
};

//
// get random domain name
const getRandomDomain = () => {
 const alphabets = [...Array(26)].map((val, i) => String.fromCharCode(i + 65).toLowerCase());
 return [...Array(getRandNum(3, 6))].map(() => alphabets[Math.floor(Math.random() * alphabets.length - 1)]).join("");
};

//
// get random number between range
const getRandNum = (minNum, maxNum) => {
 const min = parseInt(minNum) || 0;
 const max = parseInt(maxNum) || 30;

 // const randStrRange = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
 return Math.floor(Math.random() * (max - min + 1)) + min;
};

//
// returns a random date between today and a week from now
const getRandomDate = (dateStart, dateEnd) => {
 // get todays date
 const startDate = Object.prototype.toString.call(dateStart) === "[object Date]" || new Date();
 // get the date a week from now
 const endDate =
  Object.prototype.toString.call(dateEnd) === "[object Date]" ||
  new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 7);

 return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
};

//
// returns a random boolean
const getRandomBool = () => (Math.round(Math.random()) >= 1 ? true : false);

//
// return a random username based on first and last name
const getUserName = (fName, lName) => {
 if (!fName || !lName) return null;

 const firstName = fName.toString();
 const lastName = lName.toString();

 const usernames = [
  `${firstName}_${lastName}`,
  `${firstName}_${lastName}`,
  `${firstName[0]}${lastName}`,
  `${firstName}${lastName}`,
  `${firstName}${lastName[0]}`,
  `its_${firstName}${lastName}`,
  `its_${firstName}_${lastName}`,
  `its_${firstName}_${lastName}_official`,
  `${firstName}_${lastName}_official`,
 ];

 const randNum = getRandNum(0, usernames.length - 1);

 return usernames[randNum];
};

//
// formate phone number
const formatePhoneNum = (phoneNumber) => {
 const cleaned = ("" + phoneNumber).replace(/\D/g, "");
 const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
 if (match) return "(" + match[1] + ") " + match[2] + "-" + match[3];
 return null;
};

module.exports = {
 getRandStr,
 getRandNum,
 getRandomDate,
 getRandomBool,
 getUserName,
 getRandomDomain,
 formatePhoneNum,
};

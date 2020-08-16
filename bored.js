const taskName = document.getElementById("task-name");
const typeName = document.getElementById("type-name");
const participantsName = document.getElementById("participants-name");
const priceName = document.getElementById("price-name");
const linkName = document.getElementById("link-name");
const keyValue = document.getElementById("key-value");
const accessibilityName = document.getElementById("accessibility-value");

fetch("https://www.boredapi.com/api/activity")
  .then((res) => res.json())
  .then((data) => displayTask(data));

function displayTask(data) {
  console.log(data);
  const dataArray = [];
  dataArray.push(data);
  console.log(dataArray);
  const {
    activity,
    type,
    price,
    accessibility,
    key,
    link,
    participants,
  } = dataArray[0];
  workSimplify(taskName, activity);
  workSimplify(typeName, capitalize(type));
  workSimplify(participantsName, participants);
  workSimplify(priceName, price);
  //   workSimplify(linkName, link);
  workSimplify(keyValue, key);
  workSimplify(accessibilityName, accessibility);

  const aTag = document.createElement("a");
  aTag.innerText = "More Information";
  linkName.appendChild(aTag);
  if (link == "") {
    aTag.href = "#";
  } else {
    aTag.href = link;
  }
}

//disply innerText editer
function workSimplify(varName, inputName) {
  varName.innerText = inputName;
}

//Capitalize word function
const capitalize = (s) => {
  return s.toLowerCase().replace(/\b./g, (a) => a.toUpperCase());
};

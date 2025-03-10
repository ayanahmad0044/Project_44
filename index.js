/*let myLeads = '["www.ayanahmad.com","www.epicload.com"]' ; // Array to store the leads


//myLeads = JSON.parse(myLeads)
//myLeads.push("www.epicload.com")


//  to turn a string into an array

// we use parse example :
// string to array 
myLeads=JSON.parse(myLeads)

myLeads.push("www.lead2.com")
console.log(typeof myLeads)
// Now turning the ( array to string ) 

 myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)




let Leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(Leadsfromlocalstorage )
;
*/




// ORIGINAL CODE BEGINS FROM HERE 


let myLeads = [];
let oldLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const Deletebtn = document.getElementById("delete-btn");
const TabEL = document.getElementById("tab-btn");





// Get leads from localStorage when the page loads
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsfromlocalstorage);

// If leads are found in localStorage, use them and render them
if (leadsfromlocalstorage) {
  myLeads = leadsfromlocalstorage;
  render(myLeads);
}

// Even t listener for the delete button click or double-click
Deletebtn.addEventListener("dblclick", function () {
  console.log("Delete button double-clicked"); // Check if event triggers
  localStorage.clear();  // Clear localStorage
  myLeads = [];          // Clear the myLeads array
  render(myLeads);          // Re-render the empty list
});

// Event listener for the add button click
inputBtn.addEventListener("click", function () {
  // Push the input value to the myLeads array
  myLeads.push(inputEl.value);
  inputEl.value = ""; // Clear the input field
  
  // Save the updated myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  
  // Call the renderLead function to display the leads
  render(myLeads);
});



TabEL.addEventListener("click",function(){
  // chrome.tabs is an API (Application Programming Interface)
  // Explanation :
  // hey Chrome i want to accesss and object called tabs and have a query 
  // the active tab which is in use , current window true
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // since only one tab should be active and in the current window at once
    //the return variable should have only one entry
     // or do whatever you need
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify( myLeads ))
    render(myLeads)
  } )
 // console.log(tabs[0].url)
  // Save the url instaed of logging it out
  
})

// Function to render the leads from the myLeads array
function render(leads) {
  let listItems = ""; // Initialize an empty string to build the list of leads

  // Loop through the array and create a list item for each lead
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
  }

  // Update the inner HTML of the <ul> element to show the list of leads
  ulEL.innerHTML = listItems;
}

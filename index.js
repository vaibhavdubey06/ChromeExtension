let myLeads=[];
let oldLeads=[];
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("del-btn");
const tabBtn=document.getElementById("tab-btn");
//localStorage.setItem("myName", "vaibhav");

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
       
    
    myLeads.push(tabs.url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads(myLeads);
})
})
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLeads(myLeads);
}
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
    renderLeads();
   
})
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads);

})
function renderLeads(leads){
let listItems="";
    for(let i=0;i<leads.length;i++){ 
       listItems+=`<li>
       <a target='_blank' href='${leads[i]}'> ${leads[i]} 
       </a>
       </li>`;

    }
    ulEl.innerHTML=listItems;
}
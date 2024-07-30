const start_btn=document.getElementById("start-btn");
const stop_btn=document.getElementById("stop-btn");
const logDiv=document.getElementById("logDiv");
const stateDiv=document.getElementById("stateDiv");

start_btn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleup);
})
stop_btn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleup);
    logDiv.textContent=" ";
    stateDiv.textContent=" ";
})

function handleDown(e){
    logDiv.textContent=`key ${e.key} pressed`;
    stateDiv.textContent=`key is down`;
}

function handleup(e){
    logDiv.textContent=`key ${e.key} is up`;
    stateDiv.textContent=`key is up`;
}
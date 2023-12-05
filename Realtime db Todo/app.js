import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase,  ref, set, onValue,remove,update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbZdxRCHe8FGtWIgjtHHvCxKU1GtHh5L4",
  authDomain: "realtime-1e6f4.firebaseapp.com",
  projectId: "realtime-1e6f4",
  storageBucket: "realtime-1e6f4.appspot.com",
  messagingSenderId: "1084056383031",
  appId: "1:1084056383031:web:16c9af5e8507322c0899b2",
  measurementId: "G-36YVCE6G8M"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);



const btn = document.querySelector('#btn')
const input = document.querySelector('#inp')
const getul = document.querySelector('#getul')
let ids = [];


btn.addEventListener('click', (e) => {
  if(input.value == ""){
    alert("You must write something!")
  }
  else{
    let userId = Math.random()*333333333
    let getId = userId.toFixed()
      set(ref(db, 'Todos/' +  getId ), {
        todo: input.value,
        // id: userId,
        time: new Date().toLocaleString()
      });
      input.value = ""
  } 
})
//  <--get data-->
function getTodo(){
  const starCountRef = ref(db, 'Todos/')
  onValue(starCountRef,(snapshot) =>{
    const data = snapshot.val()
    getul.innerHTML = ''
    for(let key in data){
      let todoId = data[key].todo
      let todoTime = data[key].time
      let todoids = key
      ids.push(todoids)
      
    getul.innerHTML += `
    <li>${todoId}
    <button id="edit" onclick="editTodo(this,'${todoids}')"><i class="ri-edit-2-fill"></i></button>
    <button id="del" onclick="delTodo('${todoids}')"><i class="ri-delete-bin-fill"></i></button>
    </li>
    ` 
   
      
    }
    // console.log(key)
  })
}  
getTodo()

// <--delete data-->
function delTodo(id){
   remove(ref(db, `Todos/${id}`))
}

// <--edit data-->
async function editTodo(e,id){
  let editVal = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = editVal
  
  await update(ref(db, `Todos/${id}`),{
    todo : editVal
  });
}


// <--deleteAll data-->
function delAll(){
  for(let i=0; i<ids.length; i++){
    remove(ref(db, `Todos/${ids[i]}`))
  }
}









window.getTodo = getTodo
window.delTodo = delTodo
window.editTodo = editTodo
window.delAll = delAll


   
  
  




















let addbtn = document.getElementById('addbtn');
let display = document.getElementById('display');
let del = document.getElementById('del')
let strick = document.getElementById('strick')
let displaytxt = document.querySelectorAll('.display-text')
let bookpro = document.getElementById('bookproperty')

//Two input value
var input1 = document.getElementById('num1')
var input2 = document.getElementById('num2')

// var inputvalue1 = input1.value
// var inputvalue2 = input2.value

//To show the new;
let show = document.getElementById('show')

//To display a content to strick, and del
addbtn.addEventListener("click", () => {
    display.style.display = "block";
})

// to strick the content
// To delete the parent element.
del.addEventListener("click", () => {
    display.style.display = "none";
})


addbtn.addEventListener("click", ()=>{
    let div = document.createElement("div");
    div.setAttribute("class", "display")
    div.setAttribute("id", "display")
    div.innerHTML = `
                <p id="display-text" class="display-text; style="text-decoration: line-through;
                "> Book Title: ${input1.value} <br>
                 Book Author was: ${input2.value} <br>
                </p>
                    
                <button class="strick" id="strick" onclick="Strick(event)">Mark as Read</button>
                <button class="del" id="del" onclick="remove(event)">Delete</button>
                    `

    bookpro.append(div);
})

//Here I removed a parent COntainer
function remove(event){
    event.target.parentNode.remove()   
}


//Here I used event object to strick the text by using a CSS style.
function Strick(event){
    event.target.parentNode.style.textDecoration = "line-through"

}

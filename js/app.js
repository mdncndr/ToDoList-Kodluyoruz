
let inputDOM = document.querySelector("#newtask input");
let inputValue = inputDOM.value;

document.querySelector('#push').onclick = function () {


    if (document.querySelector('#newtask input').value.length == 0) {
        $(".error").toast("show");

    }
    else {
        $(".success").toast("show");
        document.querySelector('#tasks').innerHTML += `
        <div class=task >
            <span id="taskname">
                ${document.querySelector('#newtask input').value} 
            </span>

            <button class="delete">
               <i class="far fa-trash-alt"></i>
            </button>   
        </div>
                `;


        let current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();

            }
            document.querySelector("#newtask input").value = "";

        }

        let toast_hide = document.querySelectorAll('.close');
        for (i = 0; i < close.length; i++) {
            toast_hide[i].onclick = function () {
                $(".close").toast("hide");
            }
        }


    }

    // let toDos = parse(('.input').text());
    // localStorage.setItem('input', toDos);


    // let toDo = localStorage.getItem("input") ? JSON.parse(localStorage.getItem("input")) : [];
    // toDo.push(inputValue);
    // localStorage.setItem("toDo", JSON.stringify(newtask));

}

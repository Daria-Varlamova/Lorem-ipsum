// burger toggle menu
let hamburger = document.querySelector(".hamburger-js");
const body = document.querySelector('.body');

if (hamburger) {
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        body.classList.toggle('active-menu');
    });
}


// hover link menu 
document.querySelectorAll('.link-js').forEach((elem) => {

    elem.onmouseenter =
        elem.onmouseleave = (e) => {

            const tolerance = 10

            const left = 0
            const right = elem.clientWidth

            let x = e.pageX - elem.offsetLeft

            if (x - tolerance < left) x = left
            if (x + tolerance > right) x = right

            elem.style.setProperty('--x', `${ x }px`)

        }
});

// add file 
function handleChnageFieldOfFile() {
    let fileInpts = [...document.querySelectorAll('.attach-file-js')];

    fileInpts.forEach((field) => {
        field.addEventListener('change', (e) => {
            let container = document.querySelector(".container-document");

            if (!container) {
                return;
            }

            const containerDocument = document.querySelector('.form__container-document');

            const template = document.getElementById('form__new-document').content;
            const element = template.querySelector('.form__container');

            const fileList = e.target.files[0].name;
            containerDocument.classList.add("disabled");

            let clonedElement = element.cloneNode(true);
            clonedElement.children[0].textContent = fileList;
            container.appendChild(clonedElement);

            if (!element || !containerDocument) {
                return;
            }

            const formBtnReset = e.target.parentElement.parentElement.querySelector('.form__btn-reset');

            formBtnReset.addEventListener('click', () => {
                container.removeChild(clonedElement);
                containerDocument.classList.remove('disabled');
                e.target.value = '';
            });
        });
    })
}

handleChnageFieldOfFile();

// input range 

const slider = document.querySelector(".range");
const output = document.querySelector(".range-value");
output.innerHTML = slider.value + '%';

slider.oninput = function () {
    output.innerHTML = this.value + '%';
    const value = (this.value - this.min) / (this.max - this.min) * 100;
}

const select = document.querySelector(".select");

if (select) {
    NiceSelect.bind(select);
}

// validation email 

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}


const form = document.querySelector('.form-js');
const btnSubmit = form.querySelector('.btn-js');

function emailValidateInit() {
  const emailInput = document.querySelector('.input-js');

  emailInput.addEventListener('focus', () => {
    if (emailInput.parentElement.classList.contains('input-erorr')) {
      emailInput.parentElement.classList.remove('input-erorr');
    }
  });

  emailInput.addEventListener('blur', (event) => {
    const value = event.target.value;

    if (!value || isEmailValid(value)) {
      emailInput.parentElement.classList.remove('input-erorr');
      btnSubmit.disabled = false;
    } else {
      emailInput.parentElement.classList.add('input-erorr');
      btnSubmit.disabled = true;
    }
  });
}

emailValidateInit();



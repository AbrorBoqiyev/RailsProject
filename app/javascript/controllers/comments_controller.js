import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize () {
    // console.log('Initialize!')
  }
  connect() {
    // console.log('Hello, Stimules')
  }
  // toggleForm(event) {
  //   console.log("I clicked the edit button")
  //   event.preventDefault()
  //   event.stopPropagation()
  //   const formID = event.params["form"];
  //   const commentBodyID = event.params["body"]
  //   const form = document.getElementById("formID")
  //   form.classList.toggle("d-none")
  //   const commentBody = document.getElementById(commentBodyID)
  //   commentBody.classList.toggle("d-none");
  // }
  toggleForm(event) {
    console.log("I clicked the edit button");
    event.preventDefault();
    event.stopPropagation();

    const formID = event.currentTarget.dataset.comments_form_param; // Bu to'g'ri bo'lishi kerak
    const commentBodyID = event.currentTarget.dataset.comments_body_param; // Bu to'g'ri bo'lishi kerak

    // Formani topish
    const form = document.getElementById(formID);
    if (form) {
        form.classList.toggle("d-none");
    } else {
        console.error(`Forma topilmadi: ${formID}`);
    }

    // Comment body ni topish
    const commentBody = document.getElementById(commentBodyID);
    if (commentBody) {
        commentBody.classList.toggle("d-none");
    } else {
        console.error(`Comment body topilmadi: ${commentBodyID}`);
    }
}

}

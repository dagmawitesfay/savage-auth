
const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
 const  trash = document.querySelector(".delete-message");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function() {
          const id = this.parentNode.parentNode.childNodes[1].dataset.userId // specific id 
         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('/thumbUp', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 
            id , 
            "thumbUp" : thumbUp
          })
        })
         .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(thumbDown).forEach(function(element) {
    console.log(element)
      element.addEventListener('click', function() {
          const id = this.parentNode.parentNode.childNodes[1].dataset.userId
          console.log(id)
          const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
          // const thumbDown= parseFloat(this.parentNode.parentNode.childNodes[6].innerText)
        fetch('/thumbDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ 
            id , thumbUp 
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
  console.log(element)
      element.addEventListener('click', function() {
         const id = this.parentNode.parentNode.childNodes[1].dataset.userId
        fetch('/messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id })
        }).then(function(response) {
          if (!response.ok) throw new Error('Could not delete the message')
          window.location.reload()
        }).catch(function(error) {
          console.error(error)
        })
      });
});

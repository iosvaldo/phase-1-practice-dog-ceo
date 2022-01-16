console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
  renderDogImages()
  renderDogBreeds()
  giveSelectFunctionality()
})

function renderDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => data.message.map((img) => {
      let pic = document.createElement('img');
      pic.src = img;
      pic.width = '350'
      document.querySelector('#dog-image-container').appendChild(pic)
    }))
}

function renderDogBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all').then(res => res.json())
    .then(data => {
      let breeds = Object.keys(data.message);
      breeds.map((breed) => {
        let li = document.createElement('li');
        let list = document.getElementById('dog-breeds');
        li.textContent = breed;
        li.classList.add('list-item')
        li.addEventListener('click', () => {
          li.style.color = 'red'
        })
        list.appendChild(li)
      })
    })
}

function rerenderDogBreeds(letter) {
  clearDogs()
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      let breeds = Object.keys(data.message);
      breeds.map((breed) => {
        if (breed[0] === letter) {
          let li = document.createElement('li');
          let list = document.getElementById('dog-breeds');
          li.textContent = breed;
          li.addEventListener('click', () => {
            li.style.color = 'red'
          })
          list.appendChild(li)
        }
      })
    })
}

function giveSelectFunctionality() {
  let select = document.getElementById('breed-dropdown')
  select.addEventListener('change', (e) => {
    rerenderDogBreeds(e.target.value)
  })
}

function clearDogs() {
  let parent = document.querySelector('#dog-breeds')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }

}

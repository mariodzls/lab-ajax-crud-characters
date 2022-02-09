const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(response => {
        let text = ''
        response.data.forEach(eachCharacter => {
          text +=
            `<div class="character-info"><div class="name">Character Name: ${eachCharacter.name}</div>
        <div class="occupation">Character Occupation: ${eachCharacter.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${eachCharacter.cartoon}</div>
        <div class="weapon">Character Weapon: ${eachCharacter.weapon}</div></div>`
        })
        document.querySelector('.characters-container').innerHTML = text
      })
      .catch(err => console.log(err))
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const ID = document.getElementsByClassName('character-id').value
    charactersAPI
      .getOneRegister(ID)
      .then(eachCharacter => {
        let text = ""
        text += `<div class="character-info"><div class="name">Character Name: ${eachCharacter.data.name}</div>
              <div class="occupation">Character Occupation: ${eachCharacter.data.occupation}</div>
              <div class="cartoon">Is a Cartoon?: ${eachCharacter.data.cartoon}</div>
              <div class="weapon">Character Weapon: ${eachCharacter.data.weapon}</div></div>`
        document.querySelector('.characters-container').innerHTML = text
      })
      .catch(err => console.log(err))
    })


  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

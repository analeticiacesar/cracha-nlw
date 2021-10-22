//variaveis: let ou const
// let pode mudar o valor da variavel, const nao pode mudar o valor
// PRECISA colocar let ou const antes de declarar a variavel pro javascript saber que é variavel.

const user = {
  name: 'Ana Letícia',
  phone: 38998668315,
  accept: true
}

const linksSocialMedia = {
  github: 'analeticiacesar',
  youtube: 'teste',
  facebook: 'teste',
  instagram: 'analeticia_cesar',
  twitter: 'putzlele'
}

function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Lelê'
  userName.textContent = 'Ana Lelê'

  /** for (let i = 0; i <= 10; i++) {
          alert(i)
        }
        **/
  for (let li of socialLinks.children) {
    //alert(li.children[0].href)

    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// const github = "analeticiacesar"
// const youtube = "teste"
// const facebook = "teste"
// const instagram = "analeticia_cesar"
// const twitter = "putzlele"

/** Padroes de declaraçao de variavel:
 * camelCase
 * PascalCase
 * snake_case
 **/

function showMeSomething() {
  alert('Oi, estou aqui!')
}

//alert(user.name)

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  // template string

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

/** ARROW FUNCTIONS : como se fosse forma curta de declarar funcao
 * argumento => {}
 * (argumento1, argumento2) => {}
 * () => {}
 * se tiver so um comando nao precisa de {}
 **/

/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
export default background;

function getImage(link) {
  const backIMG = document.getElementById('wrapper__back');
  backIMG.style.backgroundImage = `url(${link})`;
}

function background(query) {
  const IMG_API_TOKEN = '1d9115cf4375470ad39eb933a07aa8ce2464e9e6ee262111a61dd6adc17bbf98';

  fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${IMG_API_TOKEN}`).then((result) => result.json()).then((data) => {
    getImage(data.urls.regular);
  });
}

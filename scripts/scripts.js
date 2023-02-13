var titlecard = [
    {
        title1: ``,
        title2: ``,
        name: ``
    }
];

var mycards = [
    {
        txt: {
            tag: ``,
            txt: ``,
            classes: ``,
        },
    },
    {
        txt: {
            tag: ``,
            txt: ``,
            classes: ``,
        },
    },
];









// The Logic \/

function loadtitlecard() {
    for (var titles of titlecard) {
        document.getElementById('main').innerHTML += `
<div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        <h3>${titles.title1}</h3>
        <h4>${titles.title2}</h4>
        <h5>${titles.name}</h5>
        <br />
        <p class="lead floating">Scroll</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-down floating" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
`
    }
}


function load() {
    for (var card in mycards) {
        var cardText = [];

        var obj = mycards[card];
        for (var text in obj) {
            console.log(obj);
            cardText += `
            <${obj[text].tag} class="${obj[text].classes}">${obj[text].txt}</${obj[text].tag}>`;
        }
        document.getElementById("main").innerHTML += `
        <div class="bg-text" data-aos="flip-down" data-aos-duration="1000">
        ${cardText}
        </div>`;
    }

    document.getElementById("main").innerHTML += `<div>Built by ProtonZ With &hearts;</div>`;
}

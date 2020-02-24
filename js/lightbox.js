const klein = document.querySelectorAll('.kop');
const gaatWeg = document.querySelectorAll('.tekst')

// Array maken
const alleInfo = []

for (let i=0; i<gaatWeg.length; i++) {
    alleInfo.push(gaatWeg [i]);
    gaatWeg[i].remove();
}

const maakSluitKnop = document.createElement('i');
maakSluitKnop.className = 'fas fa-times-circle sk';
maakSluitKnop.addEventListener('click', verwijderModaal);

function maakModaal(num) {
    console.log('geklikt op '+num);
    console.log(alleInfo[num].innerHTML)
    let modaal = document.createElement('div');
    modaal.id = 'modaal';
    modaal.addEventListener('click', verwijderModaal);
    let modaalInhoud = document.createElement('div');
    // Modaal inhoud element maken
    modaalInhoud.className = 'modaal-inhoud';
    modaalInhoud.innerHTML = alleInfo[num].innerHTML;
    modaalInhoud.addEventListener('click', function(e) {
        e.stopPropagation();
    })
    modaalInhoud.prepend(maakSluitKnop);
    modaal.append(modaalInhoud);
    document.body.append(modaal);
}

// Klik gebeurtenis op de div's

for(let i=0; i<klein.length; i++) {
    klein[i].addEventListener('click', function() {
        maakModaal(i)
    });
}

function verwijderModaal() {
    document.getElementById('modaal').remove();
}

// Login

const klein2 = document.querySelectorAll('.login');
const gaatWeg2 = document.querySelectorAll('.logininfo')

// Array maken
const alleInfo2 = []

for (let i=0; i<gaatWeg2.length; i++) {
    alleInfo2.push(gaatWeg2 [i]);
    gaatWeg2[i].remove();
}

function maakLogin(num) {
    console.log('geklikt op '+num);
    console.log(alleInfo2[num].innerHTML)
    let lgn = document.createElement('div');
    lgn.id = 'lgn';
    let loginInhoud = document.createElement('div');
    // Modaal inhoud element maken
    loginInhoud.className = 'modaal-inhoud';
    loginInhoud.innerHTML = alleInfo2[num].innerHTML;
    loginInhoud.addEventListener('click', function(e) {
        e.stopPropagation();
    })
    loginInhoud.prepend(maakSluitKnop);
    lgn.append(loginInhoud);
    document.body.append(lgn);
}

// Klik gebeurtenis op de div's

for(let i=0; i<login.length; i++) {
    login[i].addEventListener('click', function() {
        maakLogin(i)
    });
}
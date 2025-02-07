function ubahText(){
    document.querySelector('#judul').innerText = "Ini Text Palsu";
}

function ubahHtml() {
    document.querySelector('#list').innerHTML = '<li>item 3</li> <li>item 4</li>'
}

function ubahWarna(){
    let judul = document.querySelector('.container');

    judul.style.color = "blue";
    judul.innerText = "blue";

    // document.querySelector('.container').style.color = "blue";
    // document.querySelector('.container').innerText = "diubah";
}

function ubahWarna2(){
    document.querySelector("#text").classList.add("berubah");
}
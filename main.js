var i = 0;
var turn = ["https://thumbs.dreamstime.com/t/turn-pages-old-book-blank-vector-illustration-33942385.jpg", "https://i.pinimg.com/736x/35/8a/0f/358a0fbec4a914fed88ba3a918046841.jpg"];

function playIt() {
    if (document.getElementById("btn1").innerHTML == "PAUSE IT!") {
        document.getElementById("abcd").pause();
        document.getElementById("btn1").innerHTML = "Turn on music";
        document.getElementById("sponge").src = "https://i.pinimg.com/originals/f9/f9/1e/f9f91e3778478474e86d827b62de8fe7.gif";
    } else {
        document.getElementById("abcd").play();
        document.getElementById("btn1").innerHTML = "PAUSE IT!";
        document.getElementById("sponge").src = "https://i.giphy.com/media/ZmdErsWqppgMo/200w.webp";
    }
}

function turnPage() {
    if (i == 2) {
        i = 0;
    }
    document.getElementById("dddd").play();
    document.getElementById("book").src = turn[i];
    i++;
}

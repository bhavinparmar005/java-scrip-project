// let displayImage=getElementById("apple");
let displayImage = document.getElementById("theImage");
let imageAudio = document.getElementById("theAudio");

document.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
    displayImage.setAttribute("src", "./asset/IMG/apple.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/A.mp3");
    imageAudio.play();
  } else if (e.key === "b" || e.key === "B") {
    displayImage.setAttribute("src", "./asset/IMG/ball.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/B.mp3");
    imageAudio.play();
  } else if (e.key === "c" || e.key === "C") {
    displayImage.setAttribute("src", "./asset/IMG/cat.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/C.mp3");
    imageAudio.play();
  } else if (e.key === "d" || e.key === "D") {
    displayImage.setAttribute("src", "./asset/IMG/dog.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/D.mp3");
    imageAudio.play();
  } else if (e.key === "e" || e.key === "E") {
    displayImage.setAttribute("src", "./asset/IMG/elephant.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/E.mp3");
    imageAudio.play();
  } else if (e.key === "f" || e.key === "F") {
    displayImage.setAttribute("src", "./asset/IMG/fish.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/F.mp3");
    imageAudio.play();
  } else if (e.key === "g" || e.key === "G") {
    displayImage.setAttribute("src", "./asset/IMG/grapes .jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/G.mp3");
    imageAudio.play();
  } else if (e.key === "h" || e.key === "H") {
    displayImage.setAttribute("src", "./asset/IMG/horse.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/H.mp3");
    imageAudio.play();
  } else if (e.key === "i" || e.key === "I") {
    displayImage.setAttribute("src", "./asset/IMG/ice-cream.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/I.mp3");
    imageAudio.play();
  } else if (e.key === "j" || e.key === "J") {
    displayImage.setAttribute("src", "./asset/IMG/jug.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/J.mp3");
    imageAudio.play();
  } else if (e.key === "k" || e.key === "K") {
    displayImage.setAttribute("src", "./asset/IMG/kite.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/K.mp3");
    imageAudio.play();
  } else if (e.key === "l" || e.key === "L") {
    displayImage.setAttribute("src", "./asset/IMG/lion.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/L.mp3");
    imageAudio.play();
  } else if (e.key === "m" || e.key === "M") {
    displayImage.setAttribute("src", "./asset/IMG/monkey.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/M.mp3");
    imageAudio.play();
  } else if (e.key === "n" || e.key === "N") {
    displayImage.setAttribute("src", "./asset/IMG/nest.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/N.mp3");
    imageAudio.play();
  } else if (e.key === "o" || e.key === "O") {
    displayImage.setAttribute("src", "./asset/IMG/orange.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/O.mp3");
    imageAudio.play();
  } else if (e.key === "p" || e.key === "P") {
    displayImage.setAttribute("src", "./asset/IMG/peacock.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/P.mp3");
    imageAudio.play();
  } else if (e.key === "q" || e.key === "Q") {
    displayImage.setAttribute("src", "./asset/IMG/queen.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/Q.mp3");
    imageAudio.play();
  } else if (e.key === "r" || e.key === "R") {
    displayImage.setAttribute("src", "./asset/IMG/rose.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/R.mp3");
    imageAudio.play();
  } else if (e.key === "s" || e.key === "S") {
    displayImage.setAttribute("src", "./asset/IMG/sun.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/S.mp3");
    imageAudio.play();
  } else if (e.key === "t" || e.key === "T") {
    displayImage.setAttribute("src", "./asset/IMG/telephone.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/T.mp3");
    imageAudio.play();
  } else if (e.key === "u" || e.key === "U") {
    displayImage.setAttribute("src", "./asset/IMG/umbrella.avif");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/U.mp3");
    imageAudio.play();
  } else if (e.key === "v" || e.key === "V") {
    displayImage.setAttribute("src", "./asset/IMG/van.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/V.mp3");
    imageAudio.play();
  } else if (e.key === "w" || e.key === "W") {
    displayImage.setAttribute("src", "./asset/IMG/watch.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/W.mp3");
    imageAudio.play();
  } else if (e.key === "x" || e.key === "X") {
    displayImage.setAttribute("src", "./asset/IMG/x-ray.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/X.mp3");
    imageAudio.play();
  } else if (e.key === "y" || e.key === "Y") {
    displayImage.setAttribute("src", "./asset/IMG/yak.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/Y.mp3");
    imageAudio.play();
  } else if (e.key === "z" || e.key === "Z") {
    displayImage.setAttribute("src", "./asset/IMG/zebra.jpg");
    imageAudio.setAttribute("src", "./asset/A TO Z Audio/Z.mp3");
    imageAudio.play();
  } else {
    alert("wrong key");
  }
});

let a = () => {
  displayImage.setAttribute("src", "./asset/IMG/apple.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/A.mp3");
  imageAudio.play();
};
let b = () => {
  displayImage.setAttribute("src", "./asset/IMG/ball.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/B.mp3");
  imageAudio.play();
};
let c = () => {
  displayImage.setAttribute("src", "./asset/IMG/cat.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/C.mp3");
  imageAudio.play();
};
let d = () => {
  displayImage.setAttribute("src", "./asset/IMG/dog.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/D.mp3");
  imageAudio.play();
};
let e = () => {
  displayImage.setAttribute("src", "./asset/IMG/elephant.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/E.mp3");
  imageAudio.play();
};
let f = () => {
  displayImage.setAttribute("src", "./asset/IMG/fish.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/F.mp3");
  imageAudio.play();
};
let g = () => {
  displayImage.setAttribute("src", "./asset/IMG/grapes .jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/G.mp3");
  imageAudio.play();
};
let h = () => {
  displayImage.setAttribute("src", "./asset/IMG/horse.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/H.mp3");
  imageAudio.play();
};
let i = () => {
  displayImage.setAttribute("src", "./asset/IMG/ice-cream.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/I.mp3");
  imageAudio.play();
};
let j = () => {
  displayImage.setAttribute("src", "./asset/IMG/jug.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/J.mp3");
  imageAudio.play();
};
let k = () => {
  displayImage.setAttribute("src", "./asset/IMG/kite.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/K.mp3");
  imageAudio.play();
};
let l = () => {
  displayImage.setAttribute("src", "./asset/IMG/lion.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/L.mp3");
  imageAudio.play();
};
let m = () => {
  displayImage.setAttribute("src", "./asset/IMG/monkey.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/M.mp3");
  imageAudio.play();
};
let n = () => {
  displayImage.setAttribute("src", "./asset/IMG/nest.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/N.mp3");
  imageAudio.play();
};
let o = () => {
  displayImage.setAttribute("src", "./asset/IMG/orange.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/O.mp3");
  imageAudio.play();
};
let p = () => {
  displayImage.setAttribute("src", "./asset/IMG/peacock.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/P.mp3");
  imageAudio.play();
};
let q = () => {
  displayImage.setAttribute("src", "./asset/IMG/queen.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/Q.mp3");
  imageAudio.play();
};
let r = () => {
  displayImage.setAttribute("src", "./asset/IMG/rose.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/R.mp3");
  imageAudio.play();
};
let s = () => {
  displayImage.setAttribute("src", "./asset/IMG/sun.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/S.mp3");
  imageAudio.play();
};
let t = () => {
  displayImage.setAttribute("src", "./asset/IMG/telephone.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/T.mp3");
  imageAudio.play();
};
let u = () => {
  displayImage.setAttribute("src", "./asset/IMG/umbrella.avif");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/U.mp3");
  imageAudio.play();
};
let v = () => {
  displayImage.setAttribute("src", "./asset/IMG/van.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/V.mp3");
  imageAudio.play();
};
let w = () => {
  displayImage.setAttribute("src", "./asset/IMG/watch.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/W.mp3");
  imageAudio.play();
};
let x = () => {
  displayImage.setAttribute("src", "./asset/IMG/x-ray.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/X.mp3");
  imageAudio.play();
};
let y = () => {
  displayImage.setAttribute("src", "./asset/IMG/yak.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/Y.mp3");
  imageAudio.play();
};
let z = () => {
  displayImage.setAttribute("src", "./asset/IMG/zebra.jpg");
  imageAudio.setAttribute("src", "./asset/A TO Z Audio/Z.mp3");
  imageAudio.play();
};

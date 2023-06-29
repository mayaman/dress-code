/* 
* dress code
* Maya Man (mayaontheinter.net)
*/
let chars = ["♡", "ꔫ", "༶", "*", "✿", "✼", "☆", "𐐪𐑂", "✧", "❀", "✣", "୭", "✮", "𓏲", "❅", "✥", "✤", "❃", "✫", "✩", "✩"];
let charArray = [];
let gucciWords = [];

// 4 fun
let blacknwhite = ["#000000", "#ffffff"];
let silvers = ["#d1c6b5", "#aa9e8b", "#e3d9cd", "#ffffff", "#FFC8E3", "#38323a", "#113820"];
let girlblogger = ["#4D4137", "#E4D6D1", "#937C71", "#71594D", "#BBA79A", "#776652", "#9A9690", "#9A8A8D", "#BDABAC", "#EACDCF", "#DCBFB7", "#E9E6E1", "#FFFFFF"];

// sandy
let apple = ["#545665", "#dcc0cf", "#f4f4f4", "#fcf3f4", "#f4f4df"];
let polly = ["#da5748", "#744864", "#72242a", "#5f3f47", "#302c4d"];
let nussbaum = ["#959379", "#cbd0c8", "#414429", "#666d3f", "#5e5814", "#e2c9d0"];
let skate = ["#847c7c", "#040404", "#deaebc", "#14140c", "#14141c"];
let jelly = ["#84649c", "#8c5cb4", "#be81b4", "#7c3464", "#d4cedf"];
let collector = ["#d8d3d1", "#efece4", "#8c9cb4", "#ece4e6", "#fcfcf4", "#8c9cb4"];
let tuxedo = ["#c4cccf", "#252a34", "#363539", "#88b8dd", "#fcf4f8"];

// ashley
let armwarmers = ["#cc7689", "#f7c5c7", "#c0bfb7", "#e3d7e6", "#0c0c0f"];
let strawberries = ["#c9d4c3", "#f6f4e3", "#fc8cac", "#c9ecd0", "#dc7484"];
let sadteddies = ["#9f8180", "#a7b672", "#b6a770", "#ac8474"];
let patchwork = ["#e0a0a7", "#ada8cb", "#fcf1f1", "#eceded"];
let cardigan = ["#966a54", "#58855c", "#fa91a4", "#fc5484", "#c27c73"]; // Kind of ugly

// simone
let ruffle = ["#ececec", "#d6c1b9", "#7484b0", "#b7b4c0", "#dce0ee"];
let mint = ["#c0c2b5", "#dae2cf", "#767474", "#b4ccb4", "#ecf0e8"];
let peplum = ["#9c8c6c", "#f4f1eb", "#e5e4dc", "#ecf4ef", "#ecece4"];

// cecilie
let beth = ["#caae96", "#d1cfc2", "#d0e2e0", "#f4f4fc", "#f4fcf8"];
let alexandra = ["#322f30", "#717474", "#d1d4d6", "#e6ccc4", "#e9dcdc", "#d0857a", "#eca8a5"];
let gianna = ["#f4d4d3", "#f4d4dc", "#d49c74", "#dc7474", "#f4bcd4"];

// molly
let myla = ["#ead8dd", "#c11e3e", "#deb6b3", "#c42c64", "#f4f4ec"];
let luke = ["#d9cec0", "#997989", "#ece4e4", "#e6ccc4", "#f4ecef"];
let lewis = ["#80181f", "#2c4f30", "#fcebf0", "#ecece4", "#ececf4"];

// let colorOptions = [girlblogger, myla, luke, lewis, gianna, alexandra, beth, mint, peplum, ruffle, cardigan, patchwork, sadteddies, silvers, blacknwhite, apple, polly, nussbaum, skate, jelly, collector, tuxedo, armwarmers, strawberries];
let colorOptions = [girlblogger];

let backgroundColors = ["#D7D8C3", "#F6F4E3", "#F4BCD4", "#9C8C6C", "#5E5814", "#F9DDE2", "#FFFEF5", "#FFF3F8", "#ECE7DC", "#FFFFFF", "#140004", "#383200", "#CDCDCD"];
let currentPalette = apple;
let sparkles2reset;
let grids = [];
let myCanvas;
let timer = 0;
let resetInterval = 111 + Math.floor(Math.random() * 1111);
// let resetInterval = 100;
let scalar;
let code2000;
let notoemoji;

let adjectives = [
  "emblematic",
  "signature",
  "leisurely",
  "summer",
  "warm-weather",
  "heritage",
  "vibrant",
  "ever-changing",
  "reflective",
  "custom-made",
  "archival",
  "bamboo",
  "iconic",
  "contemporary",
  "royal",
  "aluminum",
  "custom",
  "crystal",
  "corseted",
  "minimalist",
  "equestrian-inspired",
  "special",
  "unique",
  "heritage",
  "ephemeral",
  "precious",
  "handcrafted",
  "exclusive",
  "one-of-a-kind",
  "precious",
  "exquisite",
  "ultra-thin",
  "colorful",
  "playful",
  "nautical",
  "sophisticated",
  "natural",
  "luminous",
  "multicultural",
  "historic",
  "wondrous",
  "vintage-inspired",
  "versatile",
  "maxi",
  "eternal",
  "embroidered",
  "silk",
  "eclectic",
  "naturalistic",
  "intangible",
  "dynamic",
  "energetic",
  "personal",
  "matching",
  "quilted",
  "relaxed",
  "classic",
  "star-shaped",
  "diamond-encrusted",
  "sequin-embroidered",
  "soft",
  "unexpected",
  "sartorial",
  "magnetic",
  "open-hearted",
  "recognizable",
  "exuberant",
  "tactile"
];

let adjChars = adjectives.concat(chars);
// let adjChars = chars;

let fonts = [
  "cursive"]


let backgroundColorString = '#D7D8C3';
let words = [];

let layers = [];
let patches = [];
let appliques = [];
let offset = 100;
let minWidth, minHeight;
let currentNumApp = 0;
let numWordsToShow = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background('#D7D8C3');
  textFont("cursive");
  resetPatchwork();

  appliques.push(new Applique(randChoice(adjectives), randChoice(girlblogger), randChoice(girlblogger)));

  smooth();
  noStroke();
  angleMode(DEGREES);
  // textAlign(CENTER);
}

function draw() {
  background(backgroundColorString);
  if (millis() - timer > resetInterval) {
    resetInterval = 111 + Math.floor(Math.random() * 1111);
    if (randomBool(0.1)) {
      replacePatch();
    } else {
      resetPatchwork();
    }
    timer = millis();
  }

  // if (frameCount % 60 == 0) {
  //   numWordsToShow++;

  //   if (numWordsToShow > words.length) {
  //     resetPatchwork();
  //     numWordsToShow = 0;
  //   }
  // }

  // for (let l = 0; l < layers.length; l++) {
  //   layers[l].draw();
  // }

  for (let p = 0; p < patches.length; p++) {
    let currentPatch = patches[p];
    currentPatch.draw();
    if (currentPatch.pg) {
      image(currentPatch.pg, currentPatch.x, currentPatch.y, currentPatch.w, currentPatch.h);
    }
  }

  // for (let w = 0; w < numWordsToShow; w++) {
  //   let currentPatch = words[w];
  //   currentPatch.draw();
  //   image(currentPatch.pg, currentPatch.x, currentPatch.y, currentPatch.w, currentPatch.h);
  // }

  // for (let a = 0; a < appliques.length; a++) {
  //   let currentApp = appliques[a];
  //   currentApp.draw();
  // }

  // if (appliques[currentNumApp].isComplete()) {
  //   appliques.push(new Applique(randChoice(adjectives), randChoice(girlblogger), randChoice(girlblogger), random(111, 444)));
  //   currentNumApp = appliques.length - 1;
  // }
}

function randomBool(chance) {
  return (Math.random() >= chance);
}


class Applique {
  constructor(aText, aFill, aStroke) {
    this.text = aText;
    this.fill = aFill;
    this.stroke = aStroke;
    this.size = random(111, 222);
    this.x = random(width / 2);
    this.y = random(height / 2);
    this.counter = 0;
    this.currentCharIndex = 0;
    this.complete = false;
    this.deleting = false;
    this.font = randChoice(fonts);
    this.fin = false;
  }

  draw() {
    textSize(this.size);
    // fill(this.fill);
    // stroke(this.stroke);

    fill(255);
    // textStyle(BOLD);
    stroke(0);
    strokeWeight(10);
    strokeJoin(ROUND);
    textFont("serif");
    textAlign(LEFT, CENTER);
    text(this.text.substr(0, this.currentCharIndex).toUpperCase(), this.x, this.y);

    if (!this.complete) {
      this.counter++;
      if (this.counter % 10 == 0) {
        this.currentCharIndex++;
        if (this.currentCharIndex >= this.text.length + 10) {
          this.complete = true;
          this.deleting = true;
        }
      }
    } else if (this.complete && this.deleting) {
      this.counter++;
      if (this.counter % 10 == 0) {
        this.currentCharIndex--;
        if (this.currentCharIndex <= 0) {
          this.deleting = false;
          this.fin = true;
        }
      }
    } else if (this.fin) {
      this.complete = false;
      this.fin = false;
      this.text = randChoice(adjectives);
      this.x = random(width / 2);
      this.y = random(height / 2);
      this.currentCharIndex = 0;
    }

  }

  isComplete() {
    return this.complete;
  }
}

// class Layer {
//   constructor(patches) {
//     this.patches = patches;
//     this.numPatchesToShow = 0;
//     this.offset = 0;
//     this.rate = random(1, 10);
//     this.currentScale = 1;
//   }

//   draw() {
//     if (frameCount % 60 == 0) {
//       this.numPatchesToShow++;

//     }

//     this.offset++;
//     this.currentScale -= 0.001;
//     for (let p = 0; p < this.patches.length; p++) {
//       let currentPatch = this.patches[p];
//       currentPatch.draw();
//       if (currentPatch.pg) {
//         image(currentPatch.pg, currentPatch.x, currentPatch.y, currentPatch.w, currentPatch.h);
//       }
//     }
//   }
// }


class Patch {
  constructor(wText, wColor, posX, posY, pW, pH) {
    this.text = wText;
    this.color = color(wColor);
    this.r = red(this.color);
    this.g = green(this.color);
    this.b = blue(this.color);
    this.x = posX;
    this.y = posY;
    this.w = pW;
    this.h = pH;
    this.calculateSize();
    this.opacity = 255;
    this.opacityDecreaseRate = Math.random() / 2;
    this.pg = createGraphics(this.w, this.h);
    this.randomBackground = color(randChoice(backgroundColors));
    while (colorsEqual(this.color, this.randomBackground)) {
      this.randomBackground = color(randChoice(backgroundColors));
    }
    this.textWOffset = 1.05;
    this.counter = 0;
    this.counterDivider = 10 * Math.floor(Math.random() * 20);
    this.textStarting = this.size * -1;
    this.font = randChoice(fonts);
    this.pg.textFont(this.font);
    this.moves = randomBool(0.5);
    this.specialTextStyle = NORMAL;


    if (randomBool(0.9)) {
      this.specialTextStyle = BOLD;
    }

    if (randomBool(0.9)) {
      this.specialTextStyle = ITALIC;
    }

    if (randomBool(0.9)) {
      this.specialTextStyle = BOLDITALIC;
    }

    // Check if char vs word
    if (this.text.length <= 1) {
      this.isChar = true;
    } else {
      this.isChar = false;
    }
  }

  draw() {
    this.pg.background(this.randomBackground);
    this.pg.noStroke();
    this.pg.textSize(this.size);
    this.pg.textAlign(CENTER, CENTER);
    // this.pg.textStyle(this.specialTextStyle);
    let textW = this.pg.textWidth(this.text) * this.textWOffset;
    let textH = this.size;

    if (this.isChar) {
      textH = this.size * 0.75;
    }

    let startXVal = 0;

    let offset = false;
    for (let i = this.textStarting; i < this.w * 2 + textW; i += textW) {
      for (let j = startXVal; j < this.h + textH; j += textH) {
        this.pg.fill(this.r, this.g, this.b, this.opacity);
        if (offset) {
          this.pg.text(this.text, i - textW / 2, j);
        } else {
          this.pg.text(this.text, i, j);
        }
        offset = !offset;
      }
      offset = false;
    }

    this.counter++;
  }

  calculateSize() {
    if (randomBool(0.8)) {
      this.size = random(width / 5, width / 3);
    } else if (randomBool(0.1)) {
      this.size = random(width / 47, width / 10);
    } else {
      this.size = random(width / 200, width / 100);

    }
  }

  reset() {
    this.text = randChoice(adjectives);
    this.opacity = 255;
  }

  replace() {
    this.calculateSize();
    this.text = randChoice(adjChars).toLowerCase();
    this.color = randChoice(randChoice(colorOptions));
    this.r = red(this.color);
    this.g = green(this.color);
    this.b = blue(this.color);
    this.randomBackground = color(randChoice(backgroundColors));
    // this.randomBackground = color('#FAEDEF');
    while (colorsEqual(this.color, this.randomBackground)) {
      this.randomBackground = color(randChoice(backgroundColors));
    }
  }
}

function colorsEqual(color1, color2) {
  if (red(color1) == red(color2) && green(color1) == green(color2) && blue(color1) == blue(color2)) {
    return true;
  } else {
    return false;
  }
}


function resetPatchwork() {
  minWidth = width / 50;
  minHeight = height / 50;


  let currentW = 0;
  let currentH = 0;
  let newW = 0;

  maxWidth = determineMaxWidth();
  maxHeight = determineMaxHeight();
  let newH = minHeight + Math.random() * maxHeight;


  patches = [];
  while (currentH < height) {
    while (currentW < width) {
      maxWidth = determineMaxWidth();
      newW = minWidth + Math.random() * maxWidth;
      let last = false;
      if ((currentW + newW) > width) {
        newW = width - currentW;
        last = true;
      }
      patches.push(new Patch(randChoice(adjChars).toLowerCase(), color(randChoice(randChoice(colorOptions))), currentW, currentH, newW, newH));
      // patches.push(new Patch(randChoice(adjChars).toLowerCase(), color('#FAEDEF'), currentW, currentH, newW, newH));

      if (last) {
        currentW += newW;

      } else {
        currentW += newW - 1;
      }
    }
    currentW = 0;
    currentH += newH - 1;
    maxHeight = determineMaxHeight();
    newH = minHeight + Math.random() * maxHeight;
  }

  // layers[0] = new Layer(patches);
  // layers.push(new Layer(patches));
}

function determineMaxWidth() {
  let newMaxWidth = width;
  if (randomBool(0.7)) {
    newMaxWidth = width;
  } else if (randomBool(0.7)) {
    newMaxWidth = width / 5;
  } else {
    newMaxWidth = width / 20;
  }

  return newMaxWidth;
}

function determineMaxHeight() {
  let newMaxHeight = height;
  if (randomBool(0.7)) {
    newMaxHeight = height;
  } else if (randomBool(0.7)) {
    newMaxHeight = height / 5;
  } else {
    newMaxHeight = height / 10;
  }

  return newMaxHeight;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetPatchwork();
}

function randChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function mouseClicked() {
  console.log("clicked!");
  replacePatch();
}

function replacePatch() {
  let patchIndex = Math.floor(Math.random() * patches.length);
  let randPatch = patches[patchIndex];
  randPatch.replace();
  // layers[0].patches[patchIndex] = new Patch(randChoice(adjChars).toLowerCase(), randChoice(randChoice(colorOptions)), randPatch.x, randPatch.y, randPatch.w, randPatch.h);
}


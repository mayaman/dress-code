/* 
* Dress Code
* @author Maya Man (mayaontheinter.net)
*/

let chars = ["❁", "༄ؘ", "♥", "୨୧", "＊", "༺", "♡", "ꔫ", "༶", "✿", "✼", "☆", "𐐪𐑂", "✧", "❀", "✣", "୭", "✮", "𓏲", "❅", "✥", "✤", "❃", "✫", "✩"];
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
  "corseted",
  "minimalist",
  "equestrian-inspired",
  "special",
  "unique",
  "heritage",
  "ephemeral",
  "handcrafted",
  "exclusive",
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
  "tactile",
  "one-of-a-kind",
  "airy",
  "open-hearted",
  "loving",
  "exceptional",
  "unstructured",
  "voluminous",
  "pleated",
  "joyous",
  "whimsical",
  "fanciful",
  "retro",
  "kaleidoscopic",
  "expressive",
  "candid",
  "high-contrast",
  "radiant",
  "metropolitan",
  "coastal",
  "wonderful",
  "velvet",
  "floral-printed",
  "ruffle-trimmed",
  "squiggle-bordered",
  "legendary",
  "historical",
  "acclaimed",
  "lasting",
  "imaginative",
  "bright",
  "ready-to-wear",
  "delicate",
  "lightweight",
  "limited-edition",
  "dream-like",
  "perfect",
  "warm",
  "magical",
  "ethereal",
  "joy-fuelled",
  "glossy",
  "romantic",
  "decorative",
  "powerful",
  "oversize",
  "timeless",
  "embossed",
  "oversized",
  "embellished",
  "distinctive",
  "fluorescent",
  "festive",
  "satin",
  "silk",
  "suede",
  "metallic",
  "chunky",
  "authentic",
  "opulent",
  "surreal",
  "simple",
  "unconventional",
  "knitted",
  "sheer",
  "transparent",
  "belted",
  "hypnotizing",
  "imaginary",
  "shiny",
  "crystal",
  "textured",
  "metal",
  "tweed",
  "mysterious",
  "tailored",
  "silver-toned",
  "refined",
  "multi-hued",
  "light",
  "fresh",
  "tone-on-tone",
  "ornate",
  "lace",
  "puffed",
  "brushed",
  "supple",
  "geometric",
  "symbolic",
  "cinched",
  "tulle",
  "mythological",
  "checked",
  "ruffled",
  "over-the-knee",
  "mid-heel",
  "all-natural",
  "tweed",
  "jacquard",
  "georgette",
  "iridescent",
  "plush",
  "patent",
  "buckled",
  "leather",
  "studded",
  "glitter",
  "interlocking",
  "detachable",
  "evening",
  "wool",
  "sweet",
  "striped",
  "charmeuse",
  "beaded",
  "crêpe",
  "pearl-embroidered",
  "cashmere",
  "patched",
  "exotic",
  "feminine",
  "double-breasted",
  "chiffon",
  "hand-sewn",
  "rose-tinted",
  "demure",
  "lurex",
  "candy-colored",
  "detailed",
  "chic",
  "irresistible",
  "everyday",
  "metaphorical",
  "crystal-embroidered",
  "luxury",
  "updated",
  "hand-painted"
];
let adjChars = adjectives.concat(chars).concat(chars).concat(chars).concat(chars).concat(chars).concat(chars);

let girlblogger = ["#4D4137", "#E4D6D1", "#937C71", "#71594D", "#BBA79A", "#776652", "#9A9690", "#9A8A8D", "#BDABAC", "#EACDCF", "#DCBFB7", "#E9E6E1", "#FFFFFF"];
let backgroundColors = ["#D7D8C3", "#F6F4E3", "#F4BCD4", "#9C8C6C", "#5E5814", "#F9DDE2", "#FFFEF5", "#FFF3F8", "#ECE7DC", "#FFFFFF", "#140004", "#383200", "#CDCDCD"];
let badPairings = [
  ["#D7D8C3", "#E4D6D1"],
  ["#D7D8C3", "#EACDCF"],
  ["#9C8C6C", "#9A8A8D"],
  ["#F9DDE2", "#E9E6E1"],
  ["#FFFEF5", "#FFFFFF"],
  ["#ECE7DC", "#E9E6E1"],
  ["#FFFFFF", "#FFFFFF"]
]
let timer = 0;
let resetInterval = 111 + Math.floor(Math.random() * 1111);
let patches = [];
let minWidth, minHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("cursive");
  smooth();
  noStroke();
  resetPatchwork();

  console.log("https://www.tiktok.com/@charlidamelio/video/6927448387004419333")
}

function draw() {
  if (millis() - timer > resetInterval) {
    resetInterval = 111 + Math.floor(Math.random() * 1111);
    if (randomBool(0.1)) {
      replacePatch();
    } else {
      resetPatchwork();
      console.log(randChoice(adjectives) + "!");
    }

    timer = millis();
  }

  for (let p = 0; p < patches.length; p++) {
    let currentPatch = patches[p];
    currentPatch.draw();
    if (currentPatch.pg) {
      image(currentPatch.pg, currentPatch.x, currentPatch.y, currentPatch.w, currentPatch.h);
    }
  }
}

function badColorMatch(backgroundColor, textColor) {
  let badColors = false;
  for (let b = 0; b < badPairings.length; b++) {
    let backgroundColorCheck = color(badPairings[b][0]);
    let textColorCheck = color(badPairings[b][1]);

    if (colorsEqual(backgroundColor, backgroundColorCheck) && colorsEqual(textColor, textColorCheck)) {
      badColors = true;
    }
  }

  return badColors;
}

function colorsEqual(color1, color2) {
  if (red(color1) == red(color2) && green(color1) == green(color2) && blue(color1) == blue(color2)) {
    return true;
  } else {
    return false;
  }
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

function randomBool(chance) {
  return (Math.random() >= chance);
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

  // Remove patches currently
  for (let p = 0; p < patches.length; p++) {
    let currentPatch = patches[p];
    currentPatch.removeGraphic();
  }

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
      patches.push(new Patch(randChoice(adjChars).toLowerCase(), color(randChoice(girlblogger)), currentW, currentH, newW, newH));
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
}

function replacePatch() {
  let patchIndex = Math.floor(Math.random() * patches.length);
  let randPatch = patches[patchIndex];
  randPatch.replace();
}

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
    this.pg = createGraphics(this.w, this.h);
    this.randomBackground = color(randChoice(backgroundColors));
    while (colorsEqual(this.color, this.randomBackground) || badColorMatch(this.randomBackground, this.color)) {
      this.randomBackground = color(randChoice(backgroundColors));
    }
    this.textWOffset = 1.05;
    this.textStarting = this.size * -1;
    this.font = "cursive";
    this.pg.textFont(this.font);

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
    let textW = this.pg.textWidth(this.text) * this.textWOffset;
    let textH = this.size;

    if (this.isChar) {
      textH = this.size * 0.75;
    }

    let startXVal = 0;

    let offset = false;
    for (let i = this.textStarting; i < this.w * 2 + textW; i += textW) {
      for (let j = startXVal; j < this.h + textH; j += textH) {
        this.pg.fill(this.r, this.g, this.b);
        if (offset) {
          this.pg.text(this.text, i - textW / 2, j);
        } else {
          this.pg.text(this.text, i, j);
        }
        offset = !offset;
      }
      offset = false;
    }
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

  removeGraphic() {
    this.pg.remove();
  }

  replace() {
    this.calculateSize();
    this.text = randChoice(adjChars).toLowerCase();
    this.color = randChoice(girlblogger);
    this.r = red(this.color);
    this.g = green(this.color);
    this.b = blue(this.color);
    this.randomBackground = color(randChoice(backgroundColors));
    while (colorsEqual(this.color, this.randomBackground)) {
      this.randomBackground = color(randChoice(backgroundColors));
    }
  }
}


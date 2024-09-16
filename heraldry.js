const COLORS = {
  "Argent": "#e6e6e6",
  "Or": "#ffc800",
  "Gules": "#c83737",
  "Azure": "#3771c8",
  "Vert": "#2ca02c",
  "Purpure": "#8d5fd3",
  "Sable": "#323232",
  "Tenny": "#ff7f2a",
  "Brown": "#a05a2c",
}

const DIVISIONS = [
  "PartyPale",
  "PartyFess",
  "PartyBend",
  "PartyBendS",
  "PartyChevron",
  "PartySaltire",
  "TiercedPale",
  "TiercedFess",
  "Quarterly",
  "Gyronny",
  "Paly",
  "Barry",
  "Bendy",
  "BendyS",
  "Chevronny",
  "Chequy",
  "Lozengy",
  "BarryBendy",
  "PalyBendy",
  "Gyronny12",
  "Pily",
  "PilyBendy",
  "PilyBendyS"
]

const ORDINARIES = [
  "Pale",
  "Fess",
  "Bend",
  "BendS",
  "Chevron",
  "Saltire",
  "Pall",
  "Cross",
  "CrossFixed",
  "Pile"
]

const CHARGES = [
  "Circle",
]

const LESSER_CHARGE_POINTS = [
  [125, 145], [175, 145], [300, 145], [425, 145], [475, 145],

  [125, 195],
  [175, 195],
  [300, 195],
  [425, 195],
  [475, 195],

  [125, 340],
  [175, 340],
  [300, 340],
  [425, 340],
  [475, 340],

  [125, 485],
  [175, 485],
  [300, 485],
  [425, 485],
  [475, 485],

  [175, 535],
  [300, 535],
  [425, 535],

  [300, 585],
]

const MARGIN = 50;

const SHIELD_SHAPES = {
  "Standard": {
    "shape": "M "+s(0)+","+s(0)+" v 270 C "+s(0)+","+s(490)+" "+s(150)+","+s(620)+" "+s(250)+","+s(650)+" "+s(350)+","+s(620)+" "+s(500)+","+s(490)+" "+s(500)+","+s(270)+" V "+s(0)+" Z",
    "width": 500,
    "height": 650,
    "center": [250, 290],
  },
  "Heater": {
    "shape": "M "+s(12)+","+s(0)+" C "+s(-7)+","+s(256)+" "+s(-39)+","+s(490)+" "+s(250)+","+s(631)+" "+s(539)+","+s(490)+" "+s(507)+","+s(256)+" "+s(488)+","+s(0)+" Z",
    "width": 500,
    "height": 630,
    "center": [250, 280],
  },
  "Round": {
    "shape": "M "+s(0)+","+s(0)+" v 330 C "+s(0)+","+s(468)+" "+s(112)+","+s(580)+" "+s(250)+","+s(580)+" "+s(388)+","+s(580)+" "+s(500)+","+s(468)+" "+s(500)+","+s(330)+" V "+s(0)+" Z",
    "width": 500,
    "height": 580,
    "center": [250, 270],
  },
  "Square": {
    "shape": "M "+s(0)+","+s(0)+" v 500 h 500 v -500 Z",
    "width": 500,
    "height": 500,
    "center": [250, 250],
  },
  "Oval": {
    "shape": "M "+s(500)+","+s(342)+" a 250,342 0 0 1 -500,0 250,342 0 1 1 500,0 z",
    "width": 500,
    "height": 680,
    "center": [250, 350],
  },
  "Lozenge": {
    "shape": "M "+s(0)+","+s(330)+" "+s(250)+","+s(0)+" "+s(500)+","+s(330)+" "+s(250)+","+s(660)+" Z",
    "width": 500,
    "height": 660,
    "center": [250, 330],
  },
  "English": {
    "shape": "M "+s(0)+","+s(0)+" C "+s(10)+","+s(10)+" "+s(17)+","+s(20)+" "+s(17)+","+s(51)+" V "+s(445)+" c 0,71 73,100 165,113 43,6 62,14 68,23 6,-8 24,-16 68,-23 92,-13 165,-43 165,-113 V "+s(51)+" C "+s(483)+","+s(20)+" "+s(490)+","+s(10)+" "+s(500)+","+s(0)+" H "+s(0)+" Z",
    "width": 500,
    "height": 580,
    "center": [250, 270],
  },
  "OldFrench": {
    "shape": "M "+s(500)+","+s(0)+" V "+s(462)+" C "+s(500)+","+s(563)+" "+s(421)+","+s(547)+" "+s(323)+","+s(562)+" "+s(276)+","+s(568)+" "+s(257)+","+s(576)+" "+s(250)+","+s(581)+" "+s(243)+","+s(576)+" "+s(224)+","+s(568)+" "+s(177)+","+s(562)+" "+s(79)+","+s(547)+" "+s(0)+","+s(563)+" "+s(0)+","+s(462)+" V "+s(0)+" Z",
    "width": 500,
    "height": 580,
    "center": [250, 270],
  },
  "Triangle": {
    "shape": "M "+s(0)+","+s(0)+" V "+s(143)+" C "+s(0)+","+s(428)+" "+s(210)+","+s(560)+" "+s(250)+","+s(581)+" "+s(290)+","+s(560)+" "+s(500)+","+s(428)+" "+s(500)+","+s(143)+" V "+s(0)+" Z",
    "width": 500,
    "height": 580,
    "center": [250, 260],
  },
  "Triangle2": {
    "shape": "M "+s(250)+","+s(0)+" C "+s(150)+","+s(0)+" "+s(61)+","+s(18)+" "+s(0)+","+s(45)+" "+s(0)+","+s(280)+" "+s(90)+","+s(437)+" "+s(250)+","+s(580)+" "+s(410)+","+s(437)+" "+s(500)+","+s(280)+" "+s(500)+","+s(45)+" "+s(439)+","+s(18)+" "+s(350)+","+s(0)+" "+s(250)+","+s(0)+" Z",
    "width": 500,
    "height": 580,
    "center": [250, 260],
  },
  "Triangle3": {
    "shape": "M "+s(0)+","+s(0)+" V "+s(143)+" C "+s(0)+","+s(428)+" "+s(210)+","+s(560)+" "+s(250)+","+s(581)+" "+s(290)+","+s(560)+" "+s(500)+","+s(428)+" "+s(500)+","+s(143)+" V "+s(0)+" c -102,40 -147,44 -250,0 C "+s(147)+","+s(44)+" "+s(102)+","+s(40)+" "+s(0)+","+s(0)+" Z",
    "width": 500,
    "height": 580,
    "center": [250, 260],
  },
  "Renaissance": {
    "shape": "M "+s(282)+","+s(558)+" c 118,-26 212,-79 218,-248 C "+s(450)+","+s(282)+" "+s(433)+","+s(139)+" "+s(486)+","+s(57)+" L "+s(433)+","+s(0)+" C "+s(392)+","+s(18)+" "+s(325)+","+s(30)+" "+s(250)+","+s(30)+" "+s(175)+","+s(30)+" "+s(108)+","+s(18)+" "+s(67)+","+s(0)+" L "+s(14)+","+s(57)+" C "+s(67)+","+s(193)+" "+s(50)+","+s(282)+" "+s(0)+","+s(309)+" c 6,169 100,223 218,248 24,5 23,12 32,23 8,-11 8,-18 32,-23 Z",
    "width": 500,
    "height": 580,
    "center": [250, 270],
  },
}

var charge_points = [];

var svg = "";
var header = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n"
  + "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n"
  + "xmlns:cc=\"http://creativecommons.org/ns#\"\n"
  + "xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n"
  + "xmlns:svg=\"http://www.w3.org/2000/svg\"\n"
  + "xmlns=\"http://www.w3.org/2000/svg\"\n";

var patternDefs = '<pattern id="patternArgent" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">'
				+ '<rect x="0" y="0" width="10" height="10" fill="#e6e6e6"/>'
				+'</pattern>'

				+'<pattern id="patternOr" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="40" height="40" fill="#e6e6e6"/>'
				+	'<circle cx="0" cy="0" r="4" fill="black"/>'
				+	'<circle cx="40" cy="40" r="4" fill="black"/>'
				+	'<circle cx="0" cy="40" r="4" fill="black"/>'
				+	'<circle cx="40" cy="0" r="4" fill="black"/>'
				+	'<circle cx="20" cy="20" r="4" fill="black"/>'
				+'</pattern>'

				+'<pattern id="patternGules" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="20" height="20" fill="#e6e6e6"/>'
				+	'<rect x="0" y="0" width="4" height="20" fill="black"/>'
				+'</pattern>'

				+'<pattern id="patternAzure" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="20" height="20" fill="#e6e6e6"/>'
				+	'<rect x="0" y="0" width="20" height="4" fill="black"/>'
				+'</pattern>'

				+'<pattern id="patternVert" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="30" height="30" fill="#e6e6e6"/>'
				+	'<line x1="0" y1="0" x2="30" y2="30" stroke="black" stroke-width="4"/>'
				+	'<line x1="29" y1="-1" x2="31" y2="1" stroke="black" stroke-width="4"/>'
				+	'<line x1="-1" y1="29" x2="1" y2="31" stroke="black" stroke-width="4"/>'
				+'</pattern>'

				+'<pattern id="patternPurpure" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="30" height="30" fill="#e6e6e6"/>'
				+	'<line x1="30" y1="0" x2="0" y2="30" stroke="black" stroke-width="4"/>'
				+	'<line x1="1" y1="-1" x2="-1" y2="1" stroke="black" stroke-width="4"/>'
				+	'<line x1="31" y1="29" x2="29" y2="31" stroke="black" stroke-width="4"/>'
				+'</pattern>'

				+'<pattern id="patternSable" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="20" height="20" fill="#e6e6e6"/>'
				+	'<rect x="0" y="0" width="4" height="20" fill="black"/>'
				+	'<rect x="0" y="0" width="20" height="4" fill="black"/>'
				+'</pattern>'

				+'<pattern id="patternTenny" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="30" height="30" fill="#e6e6e6"/>'
				+	'<line x1="30" y1="0" x2="0" y2="30" stroke="black" stroke-width="4"/>'
				+	'<line x1="1" y1="-1" x2="-1" y2="1" stroke="black" stroke-width="4"/>'
				+	'<line x1="31" y1="29" x2="29" y2="31" stroke="black" stroke-width="4"/>'
				+	'<rect x="0" y="0" width="30" height="4" fill="black"/>'
				+'</pattern>'

				+'<pattern id="patternBrown" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">'
				+	'<rect x="0" y="0" width="30" height="30" fill="#e6e6e6"/>'
				+	'<line x1="0" y1="0" x2="30" y2="30" stroke="black" stroke-width="4"/>'
				+	'<line x1="29" y1="-1" x2="31" y2="1" stroke="black" stroke-width="4"/>'
				+	'<line x1="-1" y1="29" x2="1" y2="31" stroke="black" stroke-width="4"/>'
				+	'<rect x="0" y="0" width="30" height="4" fill="black"/>'
				+'</pattern>"'

var defs = "";
var mask = ""
var outline = "";
var field = "";
var ordinary = "";
var charges = "";

var shieldType = "Standard";
var fieldColor = "Argent";
var divisionColor1 = "Gules";
var divisionColor2 = "Azure";
var fieldDivision = "PartyPale";
var divisionCount = 6;
var chargeArray = [];

var ordinaryType = "none";
var ordinaryColor = "Sable";
var ordinaryWidth = 80;
var showColors = true;
var showOutlines = false;

var selectedChargeIndex = null;

setup()

function setup() {
  document.getElementById('editor-division-color-2').hidden = true;
  document.getElementById('editor-div-count').hidden = true;
  document.getElementById('div-count').value = 6;
  document.getElementById('ord-width').value = 80;
  addColorButtons(document.getElementById('editor-field-color'), 'field');
  addColorButtons(document.getElementById('editor-division-color'), 'division');
  addColorButtons(document.getElementById('editor-division-color-2'), 'division2');
  addColorButtons(document.getElementById('editor-ordinary-color'), 'ordinary');
  addColorButtons(document.getElementById('editor-charge-color'), 'charge');
  document.getElementById('field-color-' + fieldColor).checked = true;
  document.getElementById('division-color-' + divisionColor1).checked = true;
  document.getElementById('division2-color-' + divisionColor2).checked = true;
  document.getElementById('div-partypale').checked = true;
  document.getElementById('ord-none').checked = true;
  document.getElementById('ordinary-color-' + ordinaryColor).checked = true;
  setShield(shieldType);
  // for (let i = 0; i < charge_points.length; i++) {
  //   chargeArray.push(["Circle", charge_points[i], COLORS.Tenny]);
  // }
  // for (let i = 0; i < charge_points2.length; i++) {
  //   chargeArray.push(["Circle2", charge_points2[i], COLORS.Sable]);
  // }
  // setCharges(chargeArray);
  makeDefinitions();
}

function s(number) {
  return number + MARGIN;
}

function s2(tuple) {
  return tuple.map(s);
}

function s_array(array) {
  return array.map(s2);
}

function addColorButtons(element, name) {
  for (const key of Object.keys(COLORS)) {
    element.innerHTML += "<input type=\"radio\" name=\"" + name + "color\" id=\"" + name + "-color-" + key + "\"  class=\"colorbutton " + key + "\" style=\"background-color: " + COLORS[key] + ";\" title=\"" + key + "\" onclick=\"update" + name + "color('" + key + "')\">"
  }
}

function toggleColor() {
  var button = document.getElementById('color-toggle-button');
  if (showColors && showOutlines) {
    showColors = false;
    button.innerHTML = 'Color | Outline | <b>Pattern</b>';
  } else if (showColors && !showOutlines) {
    showOutlines = true;
    button.innerHTML = 'Color | <b>Outline</b> | Pattern';
  } else {
    showColors = true;
    showOutlines = false;
    button.innerHTML = '<b>Color</b> | Outline | Pattern';
  }
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2);
  setOrdinary(ordinaryType, ordinaryWidth, ordinaryColor);
  setCharges(chargeArray);
}

function updatefieldcolor(color) {
  fieldColor = color
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2);
}

function updatedivisioncolor(color) {
  divisionColor1 = color
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2);
}

function updatedivision2color(color) {
  divisionColor2 = color
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2);
}

function updateDivisionType(type) {
  var color1 = document.getElementById('editor-division-color');
  var color2 = document.getElementById('editor-division-color-2');
  var count = document.getElementById('editor-div-count');
  color1.hidden = false;
  color2.hidden = true;
  count.hidden = true;
  if (type == 'none') color1.hidden = true;
  if (['TiercedPale','TiercedFess'].includes(type)) color2.hidden = false;
  if (['Paly','Barry','Bendy','BendyS','Chevronny','Chequy','Lozengy','Pily'].includes(type)) count.hidden = false;
  
  fieldDivision = type;
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2)
}

function updateDivisionCount() {
  divisionCount = document.getElementById('div-count').value;
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2)
}

function updateordinarycolor(color) {
  ordinaryColor = color
  setOrdinary(ordinaryType, ordinaryWidth, ordinaryColor)
}

function updateOrdinaryType(type) {
  var ordWidth = document.getElementById('editor-ordinary-width');
  var ordColor = document.getElementById('editor-ordinary-color');
  ordWidth.hidden = false;
  ordColor.hidden = false;
  if (['none','Pile','CrossFixed'].includes(type)) ordWidth.hidden = true;
  if (type == 'none') ordColor.hidden = true;
  ordinaryType = type;
  setOrdinary(ordinaryType, ordinaryWidth, ordinaryColor)
}

function updateOrdinaryWidth() {
  ordinaryWidth = document.getElementById('ord-width').value;
  setOrdinary(ordinaryType, ordinaryWidth, ordinaryColor)
}

function updateShieldType(type) {
  shieldType = type;
  setShield(shieldType);
}

function getRect(x, y, width, height, color, mask, drawOutline = true) {
  var b = '';
  if (showOutlines && drawOutline) b = 'stroke:black; stroke-width:6;';
  return "<rect x=\"" + s(x) + "\" y=\"" + s(y) + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"fill:" + color + ";" + b + "\" clip-path=\"url(#" + mask + ")\"/>";
}

function getPolygon(points, color, mask, drawOutline = true) {
  var b = '';
  if (showOutlines && drawOutline) b = 'stroke:black; stroke-width:6;';
  polygon = "<polygon points=\"";
  for (let i = 0; i < points.length; i++) {
    polygon += " " + s(points[i][0]) + "," + s(points[i][1]);
  }
  return polygon + "\" style=\"fill:" + color + ";" + b + "\" clip-path=\"url(#" + mask + ")\"/>";
}

function getRectLine(point1, point2, width, color, mask, drawOutline = true) {
  // calculate an orthonormal vector
  var v = [point2[0]-point1[0], point2[1]-point1[1]];
  var orth = [v[1], -v[0]];
  var l = Math.sqrt(Math.pow(orth[0],2)+Math.pow(orth[1],2));
  var n = [orth[0]/l,orth[1]/l];

  return getPolygon([[point1[0]+n[0]*width, point1[1]+n[1]*width],[point1[0]-n[0]*width, point1[1]-n[1]*width],[point2[0]-n[0]*width, point2[1]-n[1]*width],[point2[0]+n[0]*width, point2[1]+n[1]*width]], color, mask, drawOutline);
}

function getOutline(type, width) {
  return "<path stroke=\"black\" stroke-width=\"" + width + "\" fill=\"none\" d=\"" + SHIELD_SHAPES[type].shape + "\" id=\"outline" + type + "\" />";
}

function makeDefinitions() {

  document.getElementById('svg-defs').innerHTML += patternDefs;

  for (let i = 0; i < DIVISIONS.length; i++) {
    document.getElementById('svg-defs').innerHTML += "<symbol id=\"" + DIVISIONS[i] + "\">"
      + getRect(0, 0, 500, 650, COLORS.Argent, 'maskStandard')
      + getDivision(DIVISIONS[i], 6, COLORS.Gules, COLORS.Azure, 'maskStandard')
      + getOutline("Standard", 10)
      + "</symbol>"
  }

  for (let i = 0; i < ORDINARIES.length; i++) {
    document.getElementById('svg-defs').innerHTML += "<symbol id=\"" + ORDINARIES[i] + "\">"
      + getRect(0, 0, 600, 700, COLORS.Argent, 'maskStandard')
      + getOrdinary(ORDINARIES[i], 80, COLORS.Gules, 'maskStandard')
      + getOutline("Standard", 10)
      + "</symbol>"
  }

  for (const [key, value] of Object.entries(SHIELD_SHAPES)) {
    document.getElementById('svg-defs').innerHTML += "<clipPath id=\"mask" + key + "\">"
      + "<path d=\"" + value.shape + "\"/>"
      + "</clipPath>"
      + "<symbol id=\"shield" + key + "\">"
      + getRect(0, 0, value.width, value.height, COLORS.Argent, 'mask' + key)
      + getOutline(key, 10)
      + "</symbol>"
  }

  for (const [key, value] of Object.entries(COLORS)) {
    document.getElementById('svg-defs').innerHTML += "<symbol id=\"" + key + "\">"
    + "<path transform=\"scale(0.9 0.9) translate(110 90)\" fill=\"" + value + "\" d=\"" + SHIELD_SHAPES.Standard.shape + "\"/>"
    + "<path transform=\"scale(0.9 0.9) translate(110 90)\" stroke=\"black\" stroke-width=\"10\" fill=\"none\" d=\"" + SHIELD_SHAPES.Standard.shape + "\"/>"
    + "<path transform=\"scale(0.9 0.9) translate(-40 -40)\" fill=\"url(#pattern" + key + ")\" d=\"" + SHIELD_SHAPES.Standard.shape + "\"/>"
    + "<path transform=\"scale(0.9 0.9) translate(-40 -40)\" stroke=\"black\" stroke-width=\"10\" fill=\"none\" d=\"" + SHIELD_SHAPES.Standard.shape + "\"/>"
    + "</symbol>"
  }
}

function getDivision(division, count, color, color2, mask) {
  var shield = SHIELD_SHAPES[shieldType];
  var d = "";
  switch (division) {
    case 'none':
      return "";
    case 'PartyPale':
      return getRect(shield.center[0], 0, shield.width-shield.center[0], shield.height, color, mask);
    case 'PartyFess':
      return getRect(0, shield.center[1], shield.width, shield.height-shield.center[1], color, mask);
    case 'PartyBend':
      return getPolygon([[0,0],[0,shield.height],[shield.width,shield.height],[shield.width,shield.center[1]*2]], color, mask);
    case 'PartyBendS':
      return getPolygon([[0,0],[shield.width,0],[0,shield.center[1]*2]], color, mask);
    case 'PartyChevron':
      return getPolygon([[0,shield.height*0.9],[shield.center[0],shield.center[1]-shield.height*0.1],[shield.width,shield.height*0.9],[shield.width,shield.height],[0,shield.height]], color, mask);
    case 'PartySaltire':
      return getPolygon([[0,0],[shield.width,shield.center[1]*2], [shield.width,0], [0,shield.center[1]*2]], color, mask);
    case 'TiercedPale':
      return getRect(0, 0, (shield.width)/3, shield.height, color, mask) 
      + getRect((shield.width/3)*2, 0, shield.width/3, shield.height, color2, mask);
    case 'TiercedFess':
      return getRect(0, 0, shield.width, shield.height/3, color, mask) 
      + getRect(0, (shield.height/3)*2, shield.width, shield.height/3, color2, mask);
    case 'Quarterly':
      return getPolygon([[0,shield.center[1]],[shield.width,shield.center[1]],[shield.width,0],[shield.center[0],0],[shield.center[0],shield.height],[0,shield.height]], color, mask);
    case 'Gyronny':
      return getPolygon([[0,0],[shield.width,shield.center[1]*2],[shield.width,shield.center[1]],[0,shield.center[1]]], color, mask) 
      + getPolygon([[shield.center[0],0],[shield.width,0],[0,shield.center[1]*2],[0,shield.height],[shield.center[0],shield.height]], color, mask);
    case 'Paly':
      for (let i = 0; i < count/2; i++) {
        d += getRect((shield.width/count)*(i*2+1), 0, shield.width/count, shield.height, color, mask);
      }
      return d;
    case 'Barry':
      for (let i = 0; i < count/2; i++) {
        d += getRect(0, (shield.height/count)*(i*2+1), shield.width, shield.height/count, color, mask);
      }
      return d;
    case 'Bendy':
      for (let i = -count/4; i < count/4; i++) {
        d += getPolygon([[0,(shield.height/count*2)*(i*2)],[shield.width,shield.center[1]*2+(shield.height/count*2)*(i*2)],[shield.width,shield.center[1]*2+(shield.height/count*2)*(i*2+1)],[0,(shield.height/count*2)*(i*2+1)]], color, mask);
      }
      return d;
    case 'BendyS':
      for (let i = -count/4; i < count/4; i++) {
        d += getPolygon([[shield.width,(shield.height/count*2)*(i*2)],[0,shield.center[1]*2+(shield.height/count*2)*(i*2)],[0,shield.center[1]*2+(shield.height/count*2)*(i*2+1)],[shield.width,(shield.height/count*2)*(i*2+1)]], color, mask);
      }
      return d;
    case 'Chevronny':
      for (let i = Math.floor(-count/4); i < count/4; i++) {
        d += getPolygon([[0,shield.height + (shield.height/count*2)*(i*2+1)],[0,shield.height+(shield.height/count*2)*(i*2)],[shield.center[0],(shield.height/count*2)*(i*2)], [shield.width,shield.height+(shield.height/count*2)*(i*2)], [shield.width,shield.height + (shield.height/count*2)*(i*2+1)], [shield.center[0],(shield.height/count*2)*(i*2+1)]], color, mask);
      }
      return d;
    case 'Chequy':
      for (let i = 0; i < count/2; i++) {
        for (let j = 0; j < count*1.5; j++) {
          d += getRect((shield.width/count)*((i*2+1)+(j%2)-1), (shield.width/count)*j, shield.width/count, shield.width/count, color, mask);
        } 
      }
      return d;
    case 'Lozengy':
      var w = shield.width/count;
      for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          d += getPolygon([[w*(i*2),w*(j*2)],[w*(i*2+1),w*(j*2+1)],[w*(i*2),w*(j*2+2)],[w*(i*2-1),w*(j*2+1)]], color, mask);
        } 
      }
      return d;
    case 'Pily':
      var a = [];
      for (let i = 0; i < count/2; i++) {
        a.push([(shield.width/count)*(i*2), shield.center[1]-shield.height*0.25]);
        a.push([(shield.width/count)*(i*2+1), shield.center[1]+shield.height*0.25]);
      }
      return getPolygon(a.concat([[shield.width,shield.height*0.2],[shield.width, 0],[0,0]]), color, mask);
  }
}

function getOrdinary(type, width, color, mask) {
  width = Number(width);
  var shield = SHIELD_SHAPES[shieldType];
  var outlineOffset = 3;
  switch (type) {
    case 'none':
      return "";
    case 'Chief':
      return "";
    case 'Pale':
      return getRectLine([shield.center[0],0],[shield.center[0],shield.height], width, color, mask);
    case 'Fess':
      return getRectLine([0,shield.center[1]],[shield.width,shield.center[1]], width, color, mask);
    case 'Cross':
      return getRectLine([shield.center[0],0],[shield.center[0],shield.height], width, color, mask) 
      + getRectLine([0,shield.center[1]],[shield.width,shield.center[1]], width, color, mask) 
      + getRectLine([shield.center[0],0],[shield.center[0],shield.height], width-outlineOffset, color, mask, false); // outline cover
    case 'CrossFixed':
      return getRect(shield.width/3, 0, shield.width/3, shield.height, color, mask) 
      + getRect(0, (shield.center[1]/3)*2, shield.width, (shield.center[1]/3)*2, color, mask)
      + getRect(shield.width/3+outlineOffset, 0, shield.width/3-outlineOffset*2, shield.height, color, mask, false); // outline cover
    case 'Bend':
      return getRectLine([0,0],[shield.width, shield.center[1]*2], width, color, mask);
    case 'BendS':
      return getRectLine([shield.width,0],[0, shield.center[1]*2], width, color, mask);
    case 'Chevron':
      return getPolygon([[0,shield.center[1]*2+width*1.5], [0,shield.center[1]*2-width*1.5],[shield.center[0], shield.center[1]-width*1.5],[shield.width, shield.center[1]*2-width*1.5], [shield.width, shield.center[1]*2+width*1.5], [shield.center[0], shield.center[1]+width*1.5]], color, mask);
    case 'Saltire':
      return getRectLine([0,0],[shield.width, shield.center[1]*2], width, color, mask) 
      + getRectLine([shield.width,0],[0, shield.center[1]*2], width, color, mask)
      + getRectLine([0,0],[shield.width, shield.center[1]*2], width-outlineOffset, color, mask, false); // outline cover
    case 'Pall':
      return getRectLine([0,0],[shield.center[0], shield.center[1]], width, color, mask) 
      + getRectLine([shield.width,0],[shield.center[0], shield.center[1]], width, color, mask) 
      + getRectLine([shield.center[0],shield.height],[shield.center[0], shield.center[1]], width, color, mask)
      + getRectLine([0,0],[shield.center[0], shield.center[1]], width-outlineOffset, color, mask, false) // outline cover
      + getRectLine([shield.width,0],[shield.center[0], shield.center[1]], width-outlineOffset, color, mask, false) // outline cover
      + getRectLine([shield.center[0],shield.height],[shield.center[0], shield.center[1]], width-outlineOffset, color, mask, false); // outline cover
    case 'Pile':
      return getPolygon([[shield.width*0.1,0],[shield.center[0],shield.height*0.8],[shield.width*0.9,0]], color, mask);
      
  }
}

function setChargePoints() {
  var shield = SHIELD_SHAPES[shieldType];
  charge_points = [];

  charge_points.push(s_array([[shield.width/6, shield.height/6], [shield.center[0]/2, shield.height/6], [shield.center[0], shield.height/6], [(shield.center[0]/2)*3, shield.height/6], [(shield.width/6)*5, shield.height/6]]))
  charge_points.push(s_array([[shield.width/6, shield.center[1]/2], [shield.center[0]/2, shield.center[1]/2], [shield.center[0], shield.center[1]/2], [(shield.center[0]/2)*3, shield.center[1]/2], [(shield.width/6)*5, shield.center[1]/2]]))
  charge_points.push(s_array([[shield.width/6, shield.center[1]], [shield.center[0]/2, shield.center[1]],             shield.center,                 [(shield.center[0]/2)*3, shield.center[1]], [(shield.width/6)*5, shield.center[1]]]))
  charge_points.push(s_array([[shield.width/6, (shield.height/6)*3], [shield.center[0]/2, (shield.height/6)*3], [shield.center[0], (shield.height/6)*3], [(shield.center[0]/2)*3, (shield.height/6)*3], [(shield.width/6)*5, (shield.height/6)*3]]))
  charge_points.push(s_array([[shield.width/6, (shield.center[1]/2)*3], [shield.center[0]/2, (shield.center[1]/2)*3], [shield.center[0], (shield.center[1]/2)*3], [(shield.center[0]/2)*3, (shield.center[1]/2)*3], [(shield.width/6)*5, (shield.center[1]/2)*3]]))
  charge_points.push(s_array([[shield.width/6, (shield.height/6)*5], [shield.center[0]/2, (shield.height/6)*5], [shield.center[0], (shield.height/6)*5], [(shield.center[0]/2)*3, (shield.height/6)*5], [(shield.width/6)*5, (shield.height/6)*5]]))
}

function getCharge(type, position, color, mask) {
  var point = charge_points[position[0]][position[1]];
  var b = '';
  if (showOutlines) b = 'stroke:black; stroke-width:5;';
  switch (type) {
    case 'none':
      return "";
    case 'Circle':
      return "<circle style=\"fill:" + color + ";" + b + "\" cx=\"" + point[0] + "\" cy=\"" + point[1] + "\" r=\"50\" clip-path=\"url(#" + mask + ")\"/>";
    case 'Diamond':
      return "<polygon style=\"fill:" + color + ";" + b + "\" points=\"" + (point[0]-50) + "," + point[1] + " " + point[0] + "," + (point[1]-70) + " " + (point[0]+50) + "," + point[1] + " " + point[0] + "," + (point[1]+70) + "\" clip-path=\"url(#" + mask + ")\"/>";
    case 'Fleur-De-Lis':
      return '<g clip-path=\"url(#' + mask + ')\"><path style="fill:' + color + ';' + b + '\" \
      d="m 0.0808125,-292.64844 -2.6221875,3.33093 c -45.388125,50.98594 -75.8625,109.9425 -62.725312,179.08782 7.24875,38.147806 24.818437,73.479369 37.209375,110.22936918458 7.62,22.67624981542 9.628125,46.34999981542 8.82,70.17937481542 h -8.21625 c -0.984375,-36.770625 -9.78,-70.98937482 -26.056875,-103.425 -43.081875,-94.454064 -174.669373,-92.197494 -145.663123,23.3212502 10.68937,42.5681248 47.00062,67.5871868 90.13781,71.8781248 -3.11344,-11.21625 -20.23875,-50.867813 -6.41437,-58.6246878 22.106245,0.87 49.557183,40.6828128 56.159058,59.6690628 0.795,2.275312 0.78,4.83375 1.359375,7.18125 h -33.56625 v 30.947816 h 52.467187 c -8.85,23.79187 -40.65,65.33156 -57.733125,77.35875 -4.522495,3.18375 21.615,-1.83281 33.317813,-4.50656 15.34875,-3.50625 35.297812,-20.55 34.83,-14.53407 -0.04313,27.54375 7.387499,73.50469 26.759062,94.62282 l 1.8346875,2.03625 1.895625,-2.03625 C 21.234562,230.52999 28.534875,189.14593 28.632375,159.44499 c -0.46875,-6.01593 19.48125,11.02875 34.83,14.53407 11.702813,2.67375 37.839375,7.69031 33.31875,4.50656 -17.085,-12.02719 -48.86625,-53.56688 -57.715313,-77.35875 H 91.802063 V 70.179054 H 57.930188 c 0.580312,-2.3475 0.565312,-4.905938 1.36125,-7.18125 6.600937,-18.98625 34.051875,-58.7990628 56.158122,-59.6690628 13.82531,7.7568748 -3.3,47.4093748 -6.41437,58.6246878 43.13718,-4.290938 79.4475,-29.31 90.13594,-71.8781248 C 228.17737,-125.44344 96.589875,-127.70001 53.508938,-33.246884 37.231125,-0.81032082 28.437375,33.408429 27.453,70.178116 H 19.207688 C 17.583938,46.191241 21.5655,22.922491 28.073625,-3.2081542e-4 39.879562,-36.979071 57.841125,-72.052821 65.283,-110.22969 79.1955,-181.60438 46.538625,-235.43188 2.7555,-289.09063 Z" \
      transform="translate(' + point[0] + ',' + point[1] + ') scale(0.25)" /></g>'
  }
}

function setShield(type) {
  mask = "<clipPath id=\"mask" + type + "\">\n"
  + "<path\n"
  + "d=\"" + SHIELD_SHAPES[type].shape + "\"/>\n"
  + "</clipPath>\n"

  defs = "<defs>\n"
  + patternDefs
  + mask
  + "</defs>\n"

  outline = getOutline(type, 10);
  setField(fieldDivision, divisionCount, fieldColor, divisionColor1, divisionColor2);
  setOrdinary(ordinaryType, ordinaryWidth, ordinaryColor);
  setChargePoints();
  setCharges(chargeArray);

  updateCOA();
}

function setField(division, count, color, color2, color3) {
  var c1, c2, c3;
  if (showColors) {
    c1 = COLORS[color];
    c2 = COLORS[color2];
    c3 = COLORS[color3];
  } else {
    c1 = 'url(#pattern' + color + ')';
    c2 = 'url(#pattern' + color2 + ')';
    c3 = 'url(#pattern' + color3 + ')';
  }
  field = "<g id=\"field\">\n"
  + getRect(0, 0, SHIELD_SHAPES[shieldType].width, SHIELD_SHAPES[shieldType].height, c1, 'mask'+shieldType)
  + getDivision(division, count, c2, c3, 'mask' + shieldType)
  + " </g>\n";
  updateCOA();
}

function setOrdinary(type, width, color) {
  var c;
  if (showColors) c = COLORS[color];
  else c = 'url(#pattern' + color + ')';
  ordinary = "<g id=\"ordinary\">\n"
  + getOrdinary(type, width, c, 'mask' + shieldType)
  + " </g>\n";
  updateCOA();
}

function setCharges(array) {
  charges = "<g id=\"charges\">\n"
  for (let i = 0; i < array.length; i++) {
    var c;
    if (showColors) c = COLORS[array[i][2]];
    else c = 'url(#pattern' + array[i][2] + ')';
    charges += getCharge(array[i][0], array[i][1], c, 'mask' + shieldType);
  }
  charges += " </g>\n";
  fillChargesList(array)
  updateCOA();
}

function fillChargesList(array) {
  var list = document.getElementById('charges-list');
  list.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    var item = '<li class="w3-display-container" onclick="selectCharge(' + i + ')">' + array[i][0] + '<span onclick="deleteCharge(' + i + ')" class="w3-button w3-display-right">&times;</span></li>';
    list.innerHTML += item;
  }
}

function selectCharge(index) {
  var item = document.getElementById('charges-list').children.item(selectedChargeIndex);
  item.classList.remove('selected');
  selectedChargeIndex = index;
  var item = document.getElementById('charges-list').children.item(index);
  item.classList.add('selected');
}

function updateChargeType(type) {
  var item = chargeArray[selectedChargeIndex];
  chargeArray[selectedChargeIndex] = [type, item[1], item[2]];
  setCharges(chargeArray);
}

function updateChargePosition(direction) {
  var item = chargeArray[selectedChargeIndex];
  if (item[1][0] + direction[0] >= 0 && item[1][0] + direction[0] < charge_points.length &&  item[1][1] + direction[1] >= 0 && item[1][1] + direction[1] < charge_points[0].length) {
    var position = [item[1][0] + direction[0], item[1][1] + direction[1]];
    chargeArray[selectedChargeIndex] = [item[0], position, item[2]];
    setCharges(chargeArray);
  }
}

function updatechargecolor(color) {
  var item = chargeArray[selectedChargeIndex];
  chargeArray[selectedChargeIndex] = [item[0], item[1], color];
  setCharges(chargeArray);
}

function addCharge() {
  chargeArray.push(["Circle", [0,0], "Sable"]);
  setCharges(chargeArray);
  selectCharge(chargeArray.length - 1);
}

function deleteCharge(index) {
  chargeArray.splice(index, 1);
  setCharges(chargeArray)
}

function updateCOA() {
  document.getElementById('coatofarms').innerHTML = field + ordinary + charges + outline;
}

function openTab(evt, name) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " selected";
}

// Function to download data to a file
function download(filename, type) {
  var dimensions = "height=\"" + (SHIELD_SHAPES[shieldType].height + 2*MARGIN) + "\" width=\"" + (SHIELD_SHAPES[shieldType].width + 2*MARGIN) + "\" >\n";
  svg = header + dimensions + defs + field + ordinary + charges + outline + "</svg>\n"
  var file = new Blob([svg], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}
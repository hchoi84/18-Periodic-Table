var squareSize = 40;
var symbol = {
    1: "H",    2: "He",    3: "Li",    4: "Be",    5: "B",    6: "C",    7: "N",    8: "O",    9: "F",    10: "Ne",
    11: "Na",    12: "Mg",    13: "Al",    14: "Si",    15: "P",    16: "S",    17: "Cl",    18: "Ar",    19: "K",
    20: "Ca",    21: "Sc",    22: "Ti",    23: "V",    24: "Cr",    25: "Mn",    26: "Fe",    27: "Co",    28: "Ni",
    29: "Cu",    30: "Zn",    31: "Ga",    32: "Ge",    33: "As",    34: "Se",    35: "Br",    36: "Kr",    37: "Rb",
    38: "Sr",    39: "Y",    40: "Zr",    41: "Nb",    42: "Mo",    43: "Tc",    44: "Ru",    45: "Rh",    46: "Pd",
    47: "Ag",    48: "Cd",    49: "In",    50: "Sn",    51: "Sb",    52: "Te",    53: "I",    54: "Xe",    55: "Cs",
    56: "Ba",    57: "La",    58: "Ce",    59: "Pr",    60: "Nd",    61: "Pm",    62: "Sm",    63: "Eu",    64: "Gd",
    65: "Tb",    66: "Dy",    67: "Ho",    68: "Er",    69: "Tm",    70: "Yb",    71: "Lu",    72: "Hf",    73: "Ta",
    74: "W",    75: "Re",    76: "Os",    77: "Ir",    78: "Pt",    79: "Au",    80: "Hg",    81: "Tl",    82: "Pb",
    83: "Bi",    84: "Po",    85: "At",    86: "Rn",    87: "Fr",    88: "Ra",    89: "Ac",    90: "Th",    91: "Pa",
    92: "U",    93: "Np",    94: "Pu",    95: "Am",    96: "Cm",    97: "Bk",    98: "Cf",    99: "Es",    100: "Fm",
    101: "Md",    102: "No",    103: "Lr",    104: "Rf",    105: "Db",    106: "Sg",    107: "Bh",    108: "Hs",    109: "Mt",
    110: "Ds",    111: "Rg",    112: "Cn",    113: "Nh",    114: "Fl",    115: "Mc",    116: "Lv",    117: "Ts",    118: "Og"
}

var mass = {
    1: 1.008,    2: 4.003,    3: 6.968,    4: 9.012,    5: 10.81,    6: 12.01,    7: 14.01,    8: 16.00,    9: 19.00,    10: 20.18,
    11: 22.99,    12: 24.31,    13: 26.98,    14: 28.09,    15: 30.97,    16: 32.07,    17: 35.45,    18: 39.95,    19: 39.10,
    20: 40.08,    21: 44.96,    22: 47.87,    23: 50.94,    24: 52.00,    25: 54.94,    26: 55.85,    27: 58.93,    28: 58.69,
    29: 63.55,    30: 65.38,    31: 69.72,    32: 72.63,    33: 74.92,    34: 78.97,    35: 79.90,    36: 83.80,    37: 85.47,
    38: 87.62,    39: 88.91,    40: 91.22,    41: 92.91,    42: 95.95,    43: 98,    44: 101.1,    45: 102.9,    46: 106.4,
    47: 107.9,    48: 112.4,    49: 114.8,    50: 118.7,    51: 121.8,    52: 127.6,    53: 126.9,    54: 131.3,    55: 132.9,
    56: 137.3,    57: 138.9,    58: 140.1,    59: 140.9,    60: 144.2,    61: 145,    62: 150.4,    63: 152.0,    64: 157.3,
    65: 158.9,    66: 162.5,    67: 164.9,    68: 167.3,    69: 168.9,    70: 173.1,    71: 175.0,    72: 178.5,    73: 180.9,
    74: 183.8,    75: 186.2,    76: 190.2,    77: 192.2,    78: 195.1,    79: 197.0,    80: 200.6,    81: 204.4,    82: 207.2,
    83: 209.0,    84: 209,    85: 210,    86: 222,    87: 223,    88: 226,    89: 227,    90: 232.0,    91: 231.0,    92: 238.0,
    93: 237,    94: 244,    95: 243,    96: 247,    97: 247,    98: 251,    99: 252,    100: 257,    101: 258,    102: 259,
    103: 262,    104: 267,    105: 268,    106: 271,    107: 272,    108: 270,    109: 276,    110: 281,    111: 280,    112: 285,
    113: 284,    114: 289,    115: 288,    116: 293,    117: 292,    118: 294,
}

var table = [
    1,  0,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   2,
    3,  4,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   5,   6,   7,   8,   9,   11,
    11, 12, 0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   13,  14,  15,  16,  17,  18,
    19, 20, 21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,
    37, 38, 39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,
    55, 56, 71,  72,  73,  74,  75,  76,  77,  78,  79,  80,  81,  82,  83,  84,  85,  86,
    87, 88, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
    0,  0,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  0,   0,
    0,  0,  89,  90,  91,  92,  93,  94,  95,  96,  97,  98,  99,  100, 101, 102, 0,   0,]

drawSquares();

function drawSquares(){
    var output = "";
    var tableNum = 0;
    var atomicNum = 1;
    for (var y = 1; y <= 9; y++){
        output += "<div class='row" + y + "'>"
        for (var x = 0; x < 18; x++){
            output += "<div class='squares'>";
            if(table[tableNum] == 0){
                tableNum++
            }
            else{
                output += ("<p>" + table[tableNum] + "</p>");
                output += ("<h3>" + symbol[table[tableNum]] + "</h3>");
                output += ("<p>" + mass[table[tableNum]] + "</p>");
                tableNum++;
                atomicNum ++;
            }
            output += "</div>";
        }
        output += "</div>"
    }
    document.getElementById("table").innerHTML = output;
}
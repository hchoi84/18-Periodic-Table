var squareSize = 40;
var elements =[
    { symbol: "H", mass: 1.008, color: "blue" },    { symbol: "He", mass: 4.003, color: "yellow" },
    { symbol: "Li", mass: 6.968, color: "blue" },    { symbol: "Be", mass: 9.012, color: "blue" },
    { symbol: "B", mass: 10.81, color: "yellow" },    { symbol: "C", mass: 12.01, color: "yellow" },
    { symbol: "N", mass: 14.01, color: "yellow" },    { symbol: "O", mass: 16.00, color: "yellow" },
    { symbol: "F", mass: 19.00, color: "yellow" },    { symbol: "Ne", mass: 20.18, color: "yellow" },
    { symbol: "Na", mass: 22.99, color: "blue" },    { symbol: "Mg", mass: 24.31, color: "blue" },
    { symbol: "Al", mass: 26.98, color: "yellow" },    { symbol: "Si", mass: 28.09, color: "yellow" },
    { symbol: "P", mass: 30.97, color: "yellow" },    { symbol: "S", mass: 32.07, color: "yellow" },
    { symbol: "Cl", mass: 35.45, color: "yellow" },    { symbol: "Ar", mass: 39.95, color: "yellow" },
    { symbol: "K", mass: 39.10, color: "blue" },    { symbol: "Ca", mass: 40.08, color: "blue" },
    { symbol: "Sc", mass: 44.96, color: "red" },    { symbol: "Ti", mass: 47.87, color: "red" },
    { symbol: "V", mass: 50.94, color: "red" },    { symbol: "Cr", mass: 52.00, color: "red" },
    { symbol: "Mn", mass: 54.94, color: "red" },    { symbol: "Fe", mass: 55.85, color: "red" },
    { symbol: "Co", mass: 58.93, color: "red" },    { symbol: "Ni", mass: 58.69, color: "red" },
    { symbol: "Cu", mass: 63.55, color: "red" },    { symbol: "Zn", mass: 65.38, color: "red" },
    { symbol: "Ga", mass: 69.72, color: "yellow" },    { symbol: "Ge", mass: 72.63, color: "yellow" },
    { symbol: "As", mass: 74.92, color: "yellow" },    { symbol: "Se", mass: 78.97, color: "yellow" },
    { symbol: "Br", mass: 79.90, color: "yellow" },    { symbol: "Kr", mass: 83.80, color: "yellow" },
    { symbol: "Rb", mass: 85.47, color: "blue" },    { symbol: "Sr", mass: 87.62, color: "blue" },
    { symbol: "Y", mass: 88.91, color: "red" },    { symbol: "Zr", mass: 91.22, color: "red" },
    { symbol: "Nb", mass: 92.91, color: "red" },    { symbol: "Mo", mass: 95.95, color: "red" },
    { symbol: "Tc", mass: 98, color: "red" },    { symbol: "Ru", mass: 101.1, color: "red" },
    { symbol: "Rh", mass: 102.9, color: "red" },    { symbol: "Pd", mass: 106.4, color: "red" },
    { symbol: "Ag", mass: 107.9, color: "red" },    { symbol: "Cd", mass: 112.4, color: "red" },
    { symbol: "In", mass: 114.8, color: "yellow" },    { symbol: "Sn", mass: 118.7, color: "yellow" },
    { symbol: "Sb", mass: 121.8, color: "yellow" },    { symbol: "Te", mass: 127.6, color: "yellow" },
    { symbol: "I", mass: 126.9, color: "yellow" },    { symbol: "Xe", mass: 131.3, color: "yellow" },
    { symbol: "Cs", mass: 132.9, color: "blue" },    { symbol: "Ba", mass: 137.3, color: "blue" },
    { symbol: "La", mass: 138.9, color: "green" },    { symbol: "Ce", mass: 140.1, color: "green" },
    { symbol: "Pr", mass: 140.9, color: "green" },    { symbol: "Nd", mass: 144.2, color: "green" },
    { symbol: "Pm", mass: 145, color: "green" },    { symbol: "Sm", mass: 150.4, color: "green" },
    { symbol: "Eu", mass: 152.0, color: "green" },    { symbol: "Gd", mass: 157.3, color: "green" },
    { symbol: "Tb", mass: 158.9, color: "green" },    { symbol: "Dy", mass: 162.5, color: "green" },
    { symbol: "Ho", mass: 164.9, color: "green" },    { symbol: "Er", mass: 167.3, color: "green" },
    { symbol: "Tm", mass: 168.9, color: "green" },    { symbol: "Yb", mass: 173.1, color: "green" },
    { symbol: "Lu", mass: 175.0, color: "red" },    { symbol: "Hf", mass: 178.5, color: "red" },
    { symbol: "Ta", mass: 180.9, color: "red" },    { symbol: "W", mass: 183.8, color: "red" },
    { symbol: "Re", mass: 186.2, color: "red" },    { symbol: "Os", mass: 190.2, color: "red" },
    { symbol: "Ir", mass: 192.2, color: "red" },    { symbol: "Pt", mass: 195.1, color: "red" },
    { symbol: "Au", mass: 197.0, color: "red" },    { symbol: "Hg", mass: 200.6, color: "red" },
    { symbol: "Tl", mass: 204.4, color: "yellow" },    { symbol: "Pb", mass: 207.2, color: "yellow" },
    { symbol: "Bi", mass: 209.0, color: "yellow" },    { symbol: "Po", mass: 209, color: "yellow" },
    { symbol: "At", mass: 210, color: "yellow" },    { symbol: "Rn", mass: 222, color: "yellow" },
    { symbol: "Fr", mass: 223, color: "blue" },    { symbol: "Ra", mass: 226, color: "blue" },
    { symbol: "Ac", mass: 227, color: "green" },    { symbol: "Th", mass: 232.0, color: "green" },
    { symbol: "Pa", mass: 231.0, color: "green" },    { symbol: "U", mass: 238.0, color: "green" },
    { symbol: "Np", mass: 237, color: "green" },    { symbol: "Pu", mass: 244, color: "green" },
    { symbol: "Am", mass: 243, color: "green" },    { symbol: "Cm", mass: 247, color: "green" },
    { symbol: "Bk", mass: 247, color: "green" },    { symbol: "Cf", mass: 251, color: "green" },
    { symbol: "Es", mass: 252, color: "green" },    { symbol: "Fm", mass: 257, color: "green" },
    { symbol: "Md", mass: 258, color: "green" },    { symbol: "No", mass: 259, color: "green" },
    { symbol: "Lr", mass: 262, color: "red" },    { symbol: "Rf", mass: 267, color: "red" },
    { symbol: "Db", mass: 268, color: "red" },    { symbol: "Sg", mass: 271, color: "red" },
    { symbol: "Bh", mass: 272, color: "red" },    { symbol: "Hs", mass: 270, color: "red" },
    { symbol: "Mt", mass: 276, color: "red" },    { symbol: "Ds", mass: 281, color: "red" },
    { symbol: "Rg", mass: 280, color: "red" },    { symbol: "Cn", mass: 285, color: "red" },
    { symbol: "Nh", mass: 284, color: "yellow" },    { symbol: "Fl", mass: 289, color: "yellow" },
    { symbol: "Mc", mass: 288, color: "yellow" },    { symbol: "Lv", mass: 293, color: "yellow" },
    { symbol: "Ts", mass: 292, color: "yellow" },    { symbol: "Og", mass: 294, color: "yellow" }
]
var table = [
    1,  0,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   2,
    3,  4,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   5,   6,   7,   8,   9,   10,
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
            if(table[tableNum] == 0){
                output += "<div class='blank'></div>";
                tableNum++
            }
            else{
                output += "<div class='squares " + elements[table[tableNum] - 1]["color"] + "'>";
                output += ("<p>" + table[tableNum] + "</p>");
                output += ("<h3>" + elements[table[tableNum] - 1]["symbol"] + "</h3>");
                output += ("<p>" + elements[table[tableNum] - 1]["mass"] + "</p>");
                tableNum++;
                atomicNum ++;
                output += "</div>";
            }
        }
        output += "</div>"
    }
    document.getElementById("table").innerHTML = output;
}
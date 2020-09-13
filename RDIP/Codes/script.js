var eng = [
    ["John ate an apple before afternoon", "Before afternoon John ate an apple", "John before afternoon ate an apple"],
    ["Some students like to study in the night", "At night some students like to study"],
    ["John and Mary went to church", "Mary and John went to church"],
    ["John went to church after eating", "After eating John went to church", "John after eating went to church"],
    ["did he go to market", "he did go to market"],
    ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"],
    ["John goes to the library and studies", "John studies and goes to the library"],
    ["John ate an apple so did she", "she ate an apple so did John"],
    ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"],
    ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"]
];

var hindi = [
    ["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"],
    ["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"],
    ["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"],
    ["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"],
    ["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"],
    ["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"],
    ["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"]
];
var corparr = ["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम", "राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी", "मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम", "राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम", "बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को", "एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब", "एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब", "John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple", "some students like to study in the night", "at night some students like to study", "John and Mary went to church", "Mary and John went to church", "John went to church after eating", "after eating John went to church", "John after eating went to church", "did he go to market", "he did go to market", "the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics", "John goes to the library and studies", "John studies and goes to the library", "John ate an apple so did she", "she ate an apple so did John", "the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book", "I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"];
var comp, bef, r;
var ans = "";
var j;
let select = document.getElementById("options");

function compare() {

    var str = finalsentence.trim();
    for (let i = 0; i < corparr.length; i++) {
        var str1 = corparr[i];
        var n = str1.localeCompare(str);
        if (n == 0) {
            document.getElementById('a8').innerHTML = "RIGHT!";
            return;
        }
    }
    document.getElementById('a9').innerHTML = "WRONG!!!";
    document.getElementById("a10").innerHTML = "<center><button id='showansbtn' onclick='getans()'>Get Correct Sentence</button></center>"
}

function getans() {

    ans = "";
    document.getElementById("correctans").innerHTML = ""
    var total = 0;

    if (select.value == 'english') {
        total = eng[r].length - 1;
        document.getElementById('a10').innerHTML = "<center><button id='showansbtn' onclick='hide()'>Hide answer</button></center>"
        for (i = 0; i <= total; i++) {
            ans += "<center>" + eng[r][i] + "<br></center>"
        }
        document.getElementById("correctans").innerHTML = ans;
    } else if (select.value == 'hindi') {
        total = hindi[r].length - 1;
        document.getElementById('a10').innerHTML = "<center><button id='showansbtn' onclick='hide()'>Hide answer</button></center>"
        for (i = 0; i <= total; i++) {
            ans += "<center>" + hindi[r][i] + "<br></center>"
        }
        document.getElementById("correctans").innerHTML = ans;
    }

}

function hide() {
    document.getElementById('a10').innerHTML = "<center><button id='showansbtn' onclick='toggle()'>Get Correct Sentence</button></center>"
    document.getElementById("correctans").innerHTML = "";
}

function toggle() {
    while (document.getElementById("correctans").innerHTML == "") {

        document.getElementById('a10').innerHTML = "<center><button id='showansbtn' onclick='hide()'>Hide answer</button></center>"
        document.getElementById("correctans").innerHTML = ans;
    }
}

function shuffle(jumbled) {
    var jumble = jumbled.split(" ");
    var i = jumble.length,
        temp, rand;
    while (0 !== i) {
        rand = Math.floor(Math.random() * i);
        i -= 1;
        temp = jumble[i];
        jumble[i] = jumble[rand];
        jumble[rand] = temp;
    }
    return jumble;
}

var finalsentence = "";

function finals(id, value) {

    document.getElementById("a4").innerHTML = "Formed Sentence (after selecting words):";
    finalsentence += value + " ";
    document.getElementById("a5").innerHTML = finalsentence;
    document.getElementById(id).style.display = "none";
    document.getElementById("a6").innerHTML = "<button id='reform' onclick='reset()'>Re-form the sentence</button>"
    comp++;
    if (bef == comp) {
        document.getElementById("a7").innerHTML = "<center><button id='correctness'  onclick='compare()'>Check the correctness</button></center>"
    }

}

function reset() {
    for (i = 0; i <= j.length - 1; i++) {
        document.getElementById('btn' + i).style.display = "";
    }
    finalsentence = "";

    document.getElementById("a5").innerHTML = "";
    document.getElementById("correctans").innerHTML = "";
    document.getElementById("a7").innerHTML = "";
    document.getElementById("a6").innerHTML = "";
    document.getElementById('a10').innerHTML = "";
    document.getElementById("a4").innerHTML = "";
    document.getElementById("a8").innerHTML = "";
    document.getElementById("a9").innerHTML = "";
    comp = 0;
}

function myFunc() {
    if (select.value === "english") {

        ans = "";
        document.getElementById("correctans").innerHTML = ""

        finalsentence = "";
        document.getElementById("a4").innerHTML = "";
        document.getElementById("a5").innerHTML = "";
        document.getElementById("a6").innerHTML = "";
        document.getElementById("a7").innerHTML = "";
        document.getElementById("a8").innerHTML = "";
        document.getElementById("a9").innerHTML = "";
        document.getElementById("a10").innerHTML = "";

        document.getElementById("a2").innerHTML = "(select the buttons in proper order)"
        document.getElementById("a1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"

        r = Math.floor(Math.random() * eng.length);
        var jumbled = eng[r][0];
        j = shuffle(jumbled);
        bef = 0;
        comp = 0;
        var bu = "";
        var fbu = "";
        for (i = 0; i <= j.length - 1; i++) {
            val = j[i];
            bu = "  <button id='btn" + i + "' onclick='finals(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            fbu += bu;
            bef++

        }
        a3.innerHTML = fbu.trim();


    } else if (select.value === "hindi") {
        ans = "";
        document.getElementById("correctans").innerHTML = ""

        finalsentence = "";
        document.getElementById("a4").innerHTML = "";
        document.getElementById("a5").innerHTML = "";
        document.getElementById("a6").innerHTML = "";
        document.getElementById("a7").innerHTML = "";
        document.getElementById("a8").innerHTML = "";
        document.getElementById("a9").innerHTML = "";
        document.getElementById("a10").innerHTML = "";


        document.getElementById("a2").innerHTML = "(select the buttons in proper order)"
        document.getElementById("a1").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"
        r = Math.floor(Math.random() * hindi.length);
        var jumbled = hindi[r][0];
        j = shuffle(jumbled);
        bef = 0;
        comp = 0;
        var bu = "";
        var fbu = "";
        for (i = 0; i <= j.length - 1; i++) {
            val = j[i];
            bu = "  <button id='btn" + i + "'onclick='finals(this.id,this.value)' value='" + val + "'>" + val + "</button>  ";
            fbu += bu;
            bef++;
        }
        a3.innerHTML = fbu.trim();
    } else if (select.value === "default") {

        ans = "";
        document.getElementById("correctans").innerHTML = ""
        finalsentence = "";
        document.getElementById("a1").innerHTML = "";
        document.getElementById("a2").innerHTML = "";
        document.getElementById("a3").innerHTML = "";
        document.getElementById("a4").innerHTML = "";
        document.getElementById("a5").innerHTML = "";
        document.getElementById("a6").innerHTML = "";
        document.getElementById("a7").innerHTML = "";
        document.getElementById("a8").innerHTML = "";
        document.getElementById("a9").innerHTML = "";
        document.getElementById("a10").innerHTML = "";

    }
}
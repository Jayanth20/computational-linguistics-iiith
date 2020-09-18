var corpus = [
    [
        'The child liked the chocolate.',
        'She was stopped by the bravest knight.',
        'Mary baked a cake for his birthday',
        'She decorated the cake carefully',
        'Mary wore a dress with polka dots.',
    ],
    [
        'राम ने सीता के लिए फल तोड़ा।',
        'छोटे बच्चे पाठशाला जल्दी आयेंगे।',
        'मेहनत का फल मीठा होता है।',
        'वाह! वह खूबसूरत है।',
        'पेड़ से पत्ते गिर गए।',
    ],
];
var eng = document.getElementById('eng').value;
var hin = document.getElementById('hin').value;
console.log(eng);
console.log(hin);
let select = document.getElementById('options1');

function display() {
    if (select.value === 'english') {
        document.getElementById('options2').style.display = "block";
    } else if (select.value === 'hindi') {
        document.getElementById('options3').style.display = "inline";
    } else {
        alert('Please select a Language');
        document.getElementById('options2').style.display = "none";
        document.getElementById('options3').style.display = "none";
    }
}

function display2() {
    document.getElementById('tablehead').style.display = "block";
    document.getElementById('pos').style.display = "block";
}
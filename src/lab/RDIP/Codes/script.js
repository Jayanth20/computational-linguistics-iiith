var corpus = [
    ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."],
    ["A wolf carried off a lamb. The lamb said, ' I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."],
    ["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair."]
]
var corp1 = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."]
var corp2 = ["A wolf carried off a lamb. The lamb said, ' I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock."]
var corp3 = ["A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair."]
var arr = ["A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. 'How shall I climb out?' said the mouse. 'oh, how shall I climb out?' Just then a rat came along, and he heard the mouse. 'Mouse,' said the rat, 'if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.", "A wolf carried off a lamb. The lamb said, ' I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.' The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.", "A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. 'Why does he not make a pet of me?' said the donkey. 'It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master's knee. It is not fair.' Then the donkey said to himself, 'If I do what the dog does, he may make a pet of me.' So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master's knee. The master thought the donkey was mad, and he shouted, 'Help! Help!' Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. 'I only did what the dog does,' said the donkey,' and yet they make a pet of the dog, and they beat me with sticks. It is not fair."]
let select = document.getElementById('options');
var Snowball = require(['Snowball']);
var stemmer = new Snowball('english');

function display() {
    if (select.value === 'corpus1') {
        document.getElementById('c1').innerHTML = 'Corpus 1';
        document.getElementById('corp1').innerHTML = corp1;
        document.getElementById('tableheading').innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("container").style.display = "block";
    } else if (select.value === 'corpus2') {
        document.getElementById('c1').innerHTML = 'Corpus 2';
        document.getElementById('corp1').innerHTML = corp2;
        document.getElementById('tableheading').innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("container").style.display = "block";
    } else if (select.value === 'corpus3') {
        document.getElementById('c1').innerHTML = 'Corpus 3';
        document.getElementById('corp1').innerHTML = corp3;
        document.getElementById('tableheading').innerHTML = "Enter the number of tokens and types for the above corpus:";
        document.getElementById("container").style.display = "block";
    } else {
        alert('Select a Corpus');
        document.getElementById('c1').innerHTML = '';
        document.getElementById('corp1').innerHTML = "";
        document.getElementById('tableheading').innerHTML = "";
        document.getElementById('container').style.display = "none";
    }
}

function Submit() {
    var tok = document.getElementById('tokencnt').value;
    var type = document.getElementById('tokentype').value;
    if (select.value === 'corpus1' && tok === '169' && type === '80') {
        document.getElementById('tokencnt').style.backgroundColor = '#008000';
        document.getElementById('tokentype').style.backgroundColor = '#008000';
        document.getElementById('status').innerHTML = 'Right Answer !!!';
        document.getElementById('continue').style.display = 'block';
    } else if (select.value === 'corpus2' && tok === '111' && type === '65') {
        document.getElementById('tokencnt').style.backgroundColor = '#008000';
        document.getElementById('tokentype').style.backgroundColor = '#008000';
        document.getElementById('status').innerHTML = 'Right Answer !!!';
        document.getElementById('continue').style.display = 'block';
    } else if (select.value === 'corpus3' && tok === '219' && type === '95') {
        document.getElementById('tokencnt').style.backgroundColor = '#008000';
        document.getElementById('tokentype').style.backgroundColor = '#008000';
        document.getElementById('status').innerHTML = 'Right Answer !!!'
        document.getElementById('continue').style.display = 'block';
    } else {
        document.getElementById('tokencnt').style.backgroundColor = '#FF0000';
        document.getElementById('tokentype').style.backgroundColor = '#FF0000';
        document.getElementById('status').innerHTML = 'Wrong Answer !!!';
        document.getElementById('status').style.color = '#FF0000';
    }
}

function Continue() {
    var status = document.getElementById('status').innerHTML;
    var cont = document.getElementById('continue').innerHTML;
    document.getElementById('status').style.display = 'none';
    document.getElementById('continue').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('submit2').style.display = 'block';
    document.getElementById('newtype').innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.";
    document.getElementById('container2').style.display = "block";
}

function Final() {
    var newArr = [];
    document.getElementById('type').value = "";
    for (i = 0; i < arr.length; i++) {
        var x = arr[i];
        stemmer.setCurrent(x);
        stemmer.stem();
        var z = stemmer.getCurrent();
        if (!newArr.includes(z)) {
            newArr.push(z);
        }
    }
    check();
}

function check() {
    var newInp = parseInt(document.getElementById('type').value);
    console.log(newInp);
    if (newArr.length === newInp) {
        document.getElementById('type').style.background = "#008000";
        document.getElementById('status2').innerHTML = "Right Answer!!!";
        document.getElementById('status2').style.color = "#008000";

    } else {
        document.getElementById('type').style.background = "#FF0000";
        document.getElementById('status2').innerHTML = "Wrong Answer!!!";
        document.getElementById('status2').style.color = "#FF0000";
    }
}
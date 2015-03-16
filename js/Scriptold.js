// JavaScript source code
//var elem = document.getElementById('cat');
//var counter = document.getElementById('clicks');
//var clickCount1 = '0';
//var clickCount2 = '0';

//var cat1 = {
//    "name": "Molly"
//}
//var cat2 = {
//    "name": "Henry"
//}

//$('#cat1Name').text(cat1.name);
//$('#cat2Name').text(cat2.name);

//$('#cat1').click(function (e) {
//    clickCount1++;
//    $('#clicks1').text(clickCount1);

//});

//$('#cat2').click(function (e) {
//    clickCount2++;
//    $('#clicks2').text(clickCount2);

//});

var cat = {
    "cats": [
        {
            "name": "Molly",
            "image": "images/molly.jpg"
        },

        {
            "name": "Molly",
            "image": "images/molly.jpg"
        },

         {
             "name": "Molly",
             "image": "images/cat1.jpg"
         },

        {
            "name": "Molly",
            "image": "images/cat1.jpg"
        },

         {
             "name": "Molly",
             "image": "images/cat1.jpg"
         },

        {
            "name": "Molly",
            "image": "images/cat1.jpg"
        }
    ]
}

var view = function () {
    
}
cat.list = function () {
    for (i = 0; i < cat.cats.length; i++) {
        $('#catLinks').append('<li class="list" id="' + cat.cats[i].name +'">' + cat.cats[i].name + '</li>');
    }
}

cat.list();

$('li').click(function (e) {
    $('#catPic').append('<img class="bgimg" src="images/'+$(this).attr('id')+'.jpg">');
})
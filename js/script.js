var model = {
     currentCat: null,
    cats: [
        {
            name: 'Molly',
            image: 'images/molly.jpg',
            clicks: 0
        },

        {
            name: 'Henry',
            image: 'images/cat1.jpg',
            clicks: 0
        },

         {
             name: 'Saly',
             image: 'images/cat2.jpg',
             clicks: 0
         },

        {
            name: 'Bo',
            image: 'images/cat3.jpg',
            clicks: 0
        },

         {
             name: 'Ruben',
             image: 'images/cat4.jpg',
             clicks: 0
         },

        {
            name: 'Lilly',
            image: 'images/cat5.jpg',
            clicks: 0
        }
    ]
};

var controller = {

    init: function () {
        model.currentCat = model.cats[0];
        listView.init();
        catView.init();
       // adminView.init();
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getList: function () {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    incrementCounter: function () {
        model.currentCat.clicks++;
        catView.render();
    },

    toggleAdmin: function () {
        $('#form-container')[0].reset();
        $('#form-container').toggle();
    },

    saveCat: function () {
        var newName = $('#name:text').val();
        var image = $('#url:text').val();
        var clicks = $('#count:text').val();
        controller.toggleAdmin();
        model.currentCat.name = newName;
        model.currentCat.image = image;
        model.currentCat.clicks = clicks;
        catView.render();
        listView.render();
    }
};

var listView = {

    init: function () {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('catLinks');

        // render this view (update the DOM elements with the right values)
        this.render();
    },
    render: function () {
        var cat, elem, i;
        var list = controller.getList();

        this.catListElem.innerHTML = '';

        for (i = 0; i < list.length; i++) {
            cat = list[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    controller.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
            // finally, add the element to the list
           $('#catLinks').append(elem);

        }
        //var currentCat = controller.getCurrentCat();
        //$('li').click(function (e) {
        //    $('#catPic').src = currentCat.image;
        //})
    }

};

var catView = {
    init: function () {
        var catPic = document.getElementById('catPic');
        catPic.addEventListener('click', function () {
            controller.incrementCounter();
        });
        var admin = document.getElementById('admin');
        admin.addEventListener('click', function () {
            controller.toggleAdmin();
        });
        var cancel = document.getElementById('cancel-btn');
        cancel.addEventListener('click', function () {
            controller.toggleAdmin();
        });
        this.render();
    },

    render: function () {
        var currentCat = controller.getCurrentCat();
        $('#catPic').attr('src', currentCat.image);
        $('#catName').empty();
        $('#catName').append(currentCat.name);
        $('#clicks').empty();
        $('#clicks').append(currentCat.clicks);
        $('#name').attr('value', currentCat.name);
        $('#url').attr('value', currentCat.image);
        $('#count').attr('value', currentCat.clicks);

        var submit = document.getElementById('submit-btn');
        submit.addEventListener('click', function (event) {
            event.preventDefault(event);
            controller.saveCat();
        });


       // $('#form-container').submit(controller.saveCat());
    }
};

var adminView = {

    init: function () {
        $('#form-container').hide();

        var admin = document.getElementById('admin');
        admin.addEventListener('click', function () {
            controller.toggleAdmin();
        });
        

        //var submit = document.getElementById('submit-btn');
        //submit.addEventListener('click', function () {
        //    controller.saveCat();
        //});
    },

    render: function () {
        var currentCat = controller.getCurrentCat();
        
    }
};
controller.init();

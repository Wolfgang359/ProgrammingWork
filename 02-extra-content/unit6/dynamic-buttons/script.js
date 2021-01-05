const animals = ['Goat', 'Llama', 'Alpaca', 'Lemur', 'Weazel'];

function createAnimalBtns() {
    animals.forEach(function (animal) {
        const animalBtn = $('<button>').attr('data-type', animal).text(animal).attr('type', 'button').addClass('animal');
        $('.animal-container').append(animalBtn);
    });
}

createAnimalBtns();

console.log($('[name="add-animal-button"]'));

$('[name="add-animal-button"]').on('click', function () {
    console.log('TEST EVENT LISTENER');
    animals.push($('[name="add-animal"').val());
    $('.animal-container').empty();
    createAnimalBtns();
});

$('body').on('click', '.animal', function () {
    console.log($(this).data('type'));
});





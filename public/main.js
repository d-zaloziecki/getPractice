let dogs = [];
const source = $('#dogs-template').html()
const template = Handlebars.compile(source);
const $dogs = $('.dogs')

const renderDogs = function(){
    $dogs.empty();

    const newHTML = template({dogs});
    $dogs.append(newHTML)
}

const fetchDogs = function(){
    $.get('/dogs').then((data)=>{
        dogs = JSON.parse(data);
        renderDogs()
    })
}

$('.btn').on("click", ()=>{
    fetchDogs()
})
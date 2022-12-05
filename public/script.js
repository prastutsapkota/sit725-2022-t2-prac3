const clickMe = () => {
    let cities, optext;
    cities = ["Adelaide", "Brisbane", "Canberra", "Darwin", "Hobart",
            "Melbourne", "Perth", "Sydney"];
    optext = "<ul>";
    for (let i = 0; i < cities.length; i++)
    {
        optext += "<li>" + cities[i] + "</li>";
    }
    optext += "</ul>";
    return document.getElementById("capital_cities").innerHTML = optext;
}

const cardList = [
    {
        title: "Kakadu National Park",
        image: "kakadu.png",
        link: "Australia's Capital Cities",
        desciption: "Located in Northern Territory, Towards the end-of-year dry season, the birds and reptiles of Kakadu National Park in the Northern Territory are crammed into ever shrinking wetlands."
    },
    {
        title: "Sydney Harbour Bridge",
        image: "sydhrb.png",
        link: "Australia's Capital Cities",
        desciption: "Located in Sydney of New South Wales, Climb to the dizzying heights of the Sydney Harbour Bridge for a 360-degree panorama of the world's greatest harbour."
    }
]
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
        '</div><div class="card-content">'+'<span class="card-title activator grey-text text-darken-4">'+item.title+
        '<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+
        '</a></p></div>'+'<div class="card-reveal">'+'<span class="card-title grey-text text-darken-4">'+item.title+
        '<i class="material-icons right">close</i></span>'+'<p class="card-text">'+item.desciption+'</p>'+'</div></div></div>';
        $("#card-section").append(itemToAppend);
        console.log(itemToAppend);
    });
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    addCards(cardList);
})
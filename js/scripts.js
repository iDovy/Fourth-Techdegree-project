function search() {
    var input, filter, gal, i, gallery, title;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    gallery = document.getElementsByClassName('gallery')[0];
    gal = gallery.getElementsByTagName('img');

    for (i = 0; i < gal.length; i++) {
        title = gal[i].getAttribute('alt');
        if (title.toUpperCase().indexOf(filter) > -1) {
            gal[i].style.display = "";
        } else {
            gal[i].style.display = "none";
        }
    }
}




$("img.01").colorbox({
    href: "photo_gallery_v3/photos/01.jpg",
    width: "600px",
    rel:"gal",
    title:"I love hay bales. Took this snap on a drive through the countryside past some straw fields."
});

$("img.02").colorbox({
    href: "photo_gallery_v3/photos/02.jpg",
    width: "600px",
    rel:"gal",
    title:"The lake was so calm today. We had a great view of the snow on the mountains from here."
});

$("img.03").colorbox({
    href: "photo_gallery_v3/photos/03.jpg",
    width: "600px",
    rel:"gal",
    title:"I hiked to the top of the mountain and got this picture of the canyon and trees below."
});

$("img.04").colorbox({
    href: "photo_gallery_v3/photos/04.jpg",
    width: "600px",
    rel:"gal",
    title:"It was amazing to see an iceberg up close, it was so cold but didn't snow today."
});

$("img.05").colorbox({
    href: "photo_gallery_v3/photos/05.jpg",
    width: "600px",
    rel:"gal",
    title:"The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
});

$("img.06").colorbox({
    href: "photo_gallery_v3/photos/06.jpg",
    width: "600px",
    rel:"gal",
    title:"Fall is coming, I love when the leaves on the trees start to change color."
});

$("img.07").colorbox({
    href: "photo_gallery_v3/photos/07.jpg",
    width: "600px",
    rel:"gal",
    title:"I drove past this plantation yesterday, everything is so green!"
});

$("img.08").colorbox({
    href: "photo_gallery_v3/photos/08.jpg",
    width: "600px",
    rel:"gal",
    title:"My summer vacation to the Oregon Coast. I love the sandy dunes!"
});

$("img.09").colorbox({
    href: "photo_gallery_v3/photos/09.jpg",
    width: "600px",
    rel:"gal",
    title:"We enjoyed a quiet stroll down this countryside lane."
});

$("img.10").colorbox({
    href: "photo_gallery_v3/photos/10.jpg",
    width: "600px",
    rel:"gal",
    title:"Sunset at the coast! The sky turned a lovely shade of orange."
});

$("img.11").colorbox({
    href: "photo_gallery_v3/photos/11.jpg",
    width: "600px",
    rel:"gal",
    title:"I did a tour of a cave today and the view of the landscape below was breathtaking."
});

$("img.12").colorbox({
    href: "photo_gallery_v3/photos/12.jpg",
    width: "600px",
    rel:"gal",
    title:"I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
});

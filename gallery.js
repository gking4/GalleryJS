var chico = [
  {description: "Bidwell Park" ,

   picture: "http://chicogardenshare.yolasite.com/resources/jp%20bidwell%20falls.jpg" ,

   from: "chicogardenshare"

  },

  {description: "One Mile" ,

   picture: "https://s-media-cache-ak0.pinimg.com/736x/ed/8c/9d/ed8c9d06c598f8e60c0edb2fe0a1a83e.jpg" ,

   from: "Pinterest" ,

  },
  {description: "Campus" ,

   picture: "http://www.csuchico.edu/maps/images/video-tour/video-tour-campus.jpg" ,

   from: "csuchico"

  },
  {description: "Celestinos" ,

   picture: "http://www.celestinospizza.com/images/home-location_salem.jpg" ,

   from: "celestinospizza"

  },
  {description: "Konkow" ,

   picture: "https://www.csuchico.edu/maps/images/buildings-photos/building-konkow.jpg" ,

   from: "csuchico"

  }];

var current = (Math.floor(Math.random() * chico.length))

function shuffleGallery()
{
  var rand = (Math.floor(Math.random() * chico.length));
  while(current == rand)
  {
    rand = (Math.floor(Math.random() * chico.length));
  }
  current = rand;
  document.getElementById("caption").innerHTML = chico[rand].description;
  document.getElementById("picture").src = chico[rand].picture;
  document.getElementById("source").innerHTML = chico[rand].from;
}

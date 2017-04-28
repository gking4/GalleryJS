var chico = ["Bidwell Park", "La Vista", "Campus", "Celestinos", "Konkow"];

var current = (Math.floor(Math.random() * chico.length))

function shuffleGallery()
{
  var rand = (Math.floor(Math.random() * chico.length));
  while(current == rand)
  {
    rand = (Math.floor(Math.random() * chico.length));
  }
  current = rand;
  console.log(chico[rand]);
}

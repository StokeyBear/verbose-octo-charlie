$(function () {
  console.log("bring the wow");

  // $("#draggable").draggable();

  var $drag_counter = $("#event-drag"),
    counts = 0;

  $("#resetGame").click(function () {
    console.log("clicked button");
    counts = 0;
    $("span.count").text(counts);
    $("#gameOutput").text("");
  });

  $("#draggable").draggable({
    drag: function () {
      counts++;
      updateCounterStatus($drag_counter, counts);
    },
  });

  function updateCounterStatus($event_counter, new_count) {
   

    var game_msg = "";

    if (new_count < 150) {
      game_msg = "He's still confused - keep helping!";
      $("img").attr(
        "src",
       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2g2y7q.jpg&f=1&nofb=1&ipt=02333d99e6aee09c1c559bffaae36f344b68f7306b11d203065fcd5055ed8e70&ipo=images"
      );
      } else if (new_count == 150 ) {
      game_msg = "Now he understands!";
      $("img").attr(
        "src",
        "https://animalcorner.org/wp-content/uploads/2015/02/goat9-1.jpg"
      );
    } else {
      game_msg = "Spongebob is on his way to being a front end web developer!";
      $("img").attr(
        "src",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F121wq7.jpg&f=1&nofb=1&ipt=3606a0326153357f88992101d90f29cf43b01184cf22a58b1466724e2a3e4904&ipo=images"
      );
    }

    $("#gameOutput").text(game_msg);
    $("span.count", $event_counter).text(new_count);
  }
});
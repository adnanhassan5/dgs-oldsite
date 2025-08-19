$(function () {
  $(".demo1").bootstrapNews({
    newsPerPage: 3,
    autoplay: false,
    pauseOnHover: true,
    direction: "up",
    newsTickerInterval: 1000,
    onToDo: function () {
      //console.log(this);
    },
  });

  $(".demo2").bootstrapNews({
    newsPerPage: 4,
    autoplay: false,
    pauseOnHover: true,
    navigation: false,
    direction: "down",
    newsTickerInterval: 2500,
    onToDo: function () {
      //console.log(this);
    },
  });

  $("#demo3").bootstrapNews({
    newsPerPage: 3,
    autoplay: false,

    onToDo: function () {
      //console.log(this);
    },
  });
});

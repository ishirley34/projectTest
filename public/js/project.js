/* global moment */

// When user clicks add-btn
$("#project-submit").on("click", function(project) {
  project.preventDefault();

  // Make a Project object
  var newProject = {
    name: $('#project_name').val().trim(),
    author: $("#author").val().trim(),
    description: $("#description").val().trim(),
    s_date: moment($('#s_date')).format("YYYY-MM-DD HH:mm:ss"),
    e_date: moment($('#e_date')).format("YYYY-MM-DD HH:mm:ss"),
    team_name: $('#team_name').val().trim(),
    roles: $('#roles').val().trim(),
    members: $('#members').val().trim()
  };

  console.log(newProject);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newProject)
    // On success, run the following code
    .done(function() {
      

      var row = $("<div>");
      row.addClass("projects-created");

      row.append("<p>" + newProject.name + " projects: </p>");
      row.append("<p>" + newProject.team_name + "</p>");
      row.append("<p>" + newProject.roles + "</p>");
      row.append("<p>" + newProject.members + "</p>");
      row.append("<p>" + newProject.author + "</p>");
      row.append("<p>" + newProject.description + "</p>");
      row.append("<p>At " + moment(newProject.s_date).format("h:mma on dddd") + "</p>");
      row.append("<p>At " + moment(newProject.e_date).format("h:mma on dddd") + "</p>");

      $("#projects-post").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#description").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  $.done(function(data) {
    alert( "$.get succeeded" );
  });
  $.fail(function(data) {
    alert( "$.get failed!" );
  });


  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("projects-created");

      row.append("<p>" + data[i].author + " projects.. </p>");
      row.append("<p>" + data[i].description+ "</p>");
      row.append("<p>Starts " + moment(data[i].s_date).format("h:mma on dddd") + "</p>");
      row.append("<p>Ends " + moment(data[i].e_date).format("h:mma on dddd") + "</p>");

      $("#projects-post").prepend(row);

    }

  }

});

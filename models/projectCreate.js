// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "event" model that matches up with DB
var Projects = sequelize.define("project", {
  project_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author: {
    type: Sequelize.STRING
  },
  project_name: {
    type: Sequelize.STRING
  },
  team_name: {
    type: Sequelize.STRING
  },
  members: {
    type: Sequelize.TEXT
  },
  s_date: {
    type: Sequelize.DATE
  },
  e_date: {
    type: Sequelize.DATE
  },
  roles: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});
console.log(Projects);
// Syncs with DB
Projects.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Projects;

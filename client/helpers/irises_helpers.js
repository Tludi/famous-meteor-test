// iris_test_helpers.js

Template.irises.helpers({

  irises: function(){
    return Irises.find();
  },

  showSearch: function(){
  	console.log("search found");
  }

});

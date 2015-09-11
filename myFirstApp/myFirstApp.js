if (Meteor.isClient) {

  Template.addNumber.events({
    "submit .form": function (e) {
      // increment the counter when button is clicked
       e.preventDefault();
       Session.setDefault('counter', 0);
       x=e.target.a.value;
       y=e.target.b.value;
       res= parseInt(x)+parseInt(y);
       alert("result=" +res);
       Session.set('counter', res);
       }
  });

  Template.addNumber.helpers({
     counter: function () {
        return Session.get('counter');
     }
  });

}

if (Meteor.isServer)
{

}


  var config = {
    apiKey: "AIzaSyAlNdocuYjlXfkebHmTMsx6u8L0dp_zpSA",
    authDomain: "fir-homework-c86fd.firebaseapp.com",
    databaseURL: "https://fir-homework-c86fd.firebaseio.com",
    projectId: "fir-homework-c86fd",
    storageBucket: "fir-homework-c86fd.appspot.com",
    messagingSenderId: "122650898736"
  };

  firebase.initializeApp(config);


var trainData = firebase.database();


$("#add-train-btn").on("click", function() {

 
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();


  var newTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  trainData.ref().push(newTrain);

  alert("Train successfully added");


  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");


  return false;
});


trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {

      console.log(childSnapshot.val());

      var tName = childSnapshot.val().name;
      var tDestination = childSnapshot.val().destination;
      var tFrequency = childSnapshot.val().frequency;
      var tFirstTrain = childSnapshot.val().firstTrain;

      var timeArr = tFirstTrain.split(":");
      var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
      var maxMoment = moment.max(moment(), trainTime);
      var tMinutes;
      var tArrival;

      
        $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
          tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
      });
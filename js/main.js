
const mobiData = [
  {
    "Brand": "Redmi",
    "Model": "Redmi9",
    "OS": "Android",
    "Price": "9999",
    "RAM": "4GB",
    "InternalStorage": "64GB",
    "Display size": "6.5",
    "Display Quality": "HD+",
    "Battery capacity": "5000"

  },
  {
    "Brand": "Redmi",
    "Model": "RedmiNote",
    "OS": "Android",
    "Price": "14000",
    "RAM": "4GB",
    "InternalStorage": "128GB",
    "Display size": "6.5 ",
    "Display Quality": "FHD",
    "Battery capacity": "5020"

  },
  {
    "Brand": "RealMe",
    "Model": "RealMeC12",
    "OS": "Android",
    "Price": "9000",
    "RAM": "3GB",
    "InternalStorage": "32GB",
    "Display size": "6.5 ",
    "Display Quality": "HD+",
    "Battery capacity": "6000"

  },
  {
    "Brand": "RealMe",
    "Model": "RealMeNARZO20A",
    "OS": "Android",
    "Price": "8000",
    "RAM": "3GB",
    "InternalStorage": "32GB",
    "Display size": "6.5",
    "Display Quality": "HD+",
    "Battery capacity": "6000"
  }
];
var question = [
  "Select OS ==> Android, IOS, Windows",
  "Brand",
  "Price",
  "RAM",
  "InternalStorage"
]
const url = "http://localhost:3000/mobile";
// var mobiData = JSON.parse();
var index = 0;
var filterDataObject = [{}];

$(document).ready(function () {
  //Toggle fullscreen
  $('.chat-bot-icon').click(function (e) {
    $(this).children('img').toggleClass('hide');
    $(this).children('svg').toggleClass('animate');
    $('.chat-screen').toggleClass('show-chat');
  });
  $('.chat-mail button').click(function () {
    $('.chat-mail').addClass('hide');
    $('.chat-body').removeClass('hide');
    $('.chat-input').removeClass('hide');
    $('.chat-header-option').removeClass('hide');
  });
  $('.end-chat').click(function () {
    $('.chat-body').addClass('hide');
    $('.chat-input').addClass('hide');
    $('.chat-session-end').removeClass('hide');
    $('.chat-header-option').addClass('hide');
  });
  $('.send').click(function () {
    var reply = document.getElementById('reply').value;
    if (reply != 'No' && index <= 5) {
      $('.chat-body').append('<div class="chat-bubble me">' + reply + '</div>');
      if (index != 5) {
        $('.chat-body').append('<div class="chat-bubble you">' + question[index] + '</div>');
      }
      console.log(index);
      var answer = $('#reply').val();
      $('#reply').val('');
      if (index == 1) {
        filterDataObject.push({ "OS": answer });
      } else if (index == 2) {
        filterDataObject.push({ "Brand": answer });
      } else if (index == 3) {
        filterDataObject.push({ "Price": answer });
      } else if (index == 4) {
        filterDataObject.push({ "RAM": answer });
      } else if (index == 5) {
        filterDataObject.push({ "InternalStorage": answer });
        const fdata = filterMobile();
        console.log(fdata);
        $('.chat-body').append('<div class="chat-bubble you">' + JSON.stringify(fdata[0].Model) + '</div>');

      }
      index = index + 1;
    } else if (reply == 'No') {
      $('.chat-body').append('<div class="chat-bubble me">' + reply + '</div>');
      $('.chat-body').append('<div class="chat-bubble you">' + "Thank you! visit again..." + '</div>');
      $('#reply').val('');
    }

  });
});

// async function getapi(url) {
//     const response = await fetch(url);
//     mobiData = await response.json();
//     // console.log(mobiData);
// }
// // Calling that async function 
// getapi(url);

function filterMobile() {
  console.log(filterDataObject);
  return mobiData.filter(mobile => mobile.OS == filterDataObject[1].OS)
    .filter(mobile => mobile.Brand == filterDataObject[2].Brand)
    .filter(mobile => mobile.Price == filterDataObject[3].Price)
    .filter(mobile => mobile.RAM == filterDataObject[4].RAM)
    .filter(mobile => mobile.InternalStorage == filterDataObject[5].InternalStorage)
}
var name = "";
function addName() {
  name = document.getElementById('name').value;
}

async function startChat() {
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var n = new Date();
  var d = n.getDay();
  document.getElementById("date").innerHTML = day[d] + ", " + n.getHours() + ":" + n.getMinutes();
  // name = document.getElementById('name').value;
  console.log(name);
  document.getElementById('username').innerHTML = name;
}

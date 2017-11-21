var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}

//console.log(hotel.rooms[1].price);

//console.log(document.getElementById("radio").nodeName);
//console.log(document.getElementById("label").nodeName);

for (var i= 0; i < hotel.rooms.length; i++)  {
    var radioBtn = document.createElement("INPUT")
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name","roomType");
    radioBtn.setAttribute("value","i");
    radioBtn.setAttribute("id", "room" + i);
    
    var radioLbl = document.createElement("LABEL");
    radioLbl.innerHTML = hotel.rooms[i].name; 
    document.getElementById("radialSection").appendChild(radioBtn);
    document.getElementById("radialSection").appendChild(radioLbl);
    
}
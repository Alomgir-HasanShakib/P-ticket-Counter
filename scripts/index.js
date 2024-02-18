// select the neccesery items

const allSeat = document.getElementsByClassName("seat");
const totalPriceContainer = document.getElementById("total-price");
const seatNameContainer = document.getElementById("seatNameContainer");
const clasNameContainer = document.getElementById("classNameContainer");
const priceContainer = document.getElementById("PriceContainer");
const numberOfSeatSelect = document.getElementById("numberOfseatSelect");
const className = "Economy";

// ticket price and total price
const ticketPrice = 550;
let totalPrice = 0;
let numberOfSeat = 0;

// total seat
let totalSeat = 40;

let stopClicking;

for (const seat of allSeat) {
  seat.addEventListener(
    "click",
    (stopClicking = function (event) {
      numberOfSeat++;
    //   this condition for select only 4 seat at a time 
      if (numberOfSeat <= 4) {
        totalSeat--;
        document.getElementById("seat-left").innerText = totalSeat;
        seat.classList.toggle("bg-green-400");

        // calculate the total ticket price
        totalPrice += ticketPrice;
        totalPriceContainer.innerText = totalPrice;
        // display the selected seat , class and price by create and append tag
        const seatName = event.target.innerText;
        const h3 = document.createElement("h3");

        h3.innerText = seatName;
        const classNameHolder = document.createElement("h3");
        const priceHolder = document.createElement("h3");

        classNameHolder.innerText = className;
        priceHolder.innerText = ticketPrice;
        seatNameContainer.appendChild(h3);
        clasNameContainer.appendChild(classNameHolder);
        priceContainer.appendChild(priceHolder);

        numberOfSeatSelect.innerText = numberOfSeat;
      } else {
        seat.removeEventListener("click", stopClicking);
      }
    })
  );
}

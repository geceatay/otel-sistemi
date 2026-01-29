const rooms = [
  { number: "101", status: "available" },
  { number: "102", status: "occupied" },
  { number: "103", status: "needs_cleaning" },
  { number: "104", status: "available" }
];

const container = document.getElementById("rooms");

rooms.forEach(room => {
  const div = document.createElement("div");
  div.className = `room ${room.status}`;
  div.innerText = `Oda ${room.number}`;
  container.appendChild(div);
});
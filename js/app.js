const burger = document.querySelector(".burger");
const list = document.querySelector(".main-navigation");
const timesDiv = document.querySelector(".timesDiv");

burger.addEventListener("click", () => {
  list.classList.remove("hidden");
  timesDiv.classList.remove("hidden");
});

timesDiv.addEventListener("click", () => {
  list.classList.add("hidden");
  timesDiv.classList.add("hidden");
});

const helpline = document.querySelectorAll(".helpline");

helpline.forEach((line) => {
  line.addEventListener("click", () => {
    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");
    backdrop.style = backdropStyles;
    document.body.appendChild(backdrop);

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = "Need help? Call us at 0331-7354962";
    backdrop.appendChild(popup);
    popup.style = popupStyles;

    const times = document.createElement("i");
    times.classList.add("fa-solid");
    times.classList.add("fa-xmark");
    times.classList.add("timez");
    times.style = timesStyle;
    popup.appendChild(times);

    times.addEventListener("click", close);
  });
});

const close = () => {
  // document.querySelector(".fa-solid").remove();
  document.querySelector(".timez").remove();
  document.querySelector(".popup").remove();
  document.querySelector(".backdrop").remove();
};

const timesStyle = `
    color: #000;
    position:absolute;
    right:20px;
    top:20px;
    font-size:20px;
    cursor:pointer;
`;

const popupStyles = `
    color: #000;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:90%;
    margin: auto;
    max-width:700px;
    padding: 20px 40px;
    z-index:15;
    background:#fff;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.35);
`;

const backdropStyles = `
    width: 100%;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    backdrop-filter: blur(5px);
    background: rgba(0,0,0,0.55);
    z-index:14;
`;

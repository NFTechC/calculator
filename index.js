function clearResult() {
  document.getElementById("result").innerHTML = "";
  console.log("cleared");
}

function removeOneCharacter() {
  document.getElementById("result").innerHTML = document
    .getElementById("result")
    .innerHTML.slice(0, document.getElementById("result").innerHTML.length - 1);
}

function pow(val) {
  document.getElementById("result").innerHTML = Math.pow(
    document.getElementById("result").innerHTML,
    2
  );
}

function sqrt(val) {
  document.getElementById("result").innerHTML = Math.sqrt(
    document.getElementById("result").innerHTML,
    2
  );
}

function add(val) {
  document.getElementById("result").innerHTML += val;
  console.log(val);
}

function calc() {
  document.getElementById("result").innerHTML = eval(
    document.getElementById("result").innerHTML
  );
}

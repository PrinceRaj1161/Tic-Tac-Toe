const data = document.getElementsByClassName("box");
const output = document.getElementsByClassName("output")[0]; // Access the first element in the HTMLCollection
let chance = "X";
const boxes = Array.from(data);
const resetbtn = document.getElementsByClassName("reset")[0];
const table = document.getElementsByClassName("game-container")[0];




const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6], 
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]; 

function checkwin() 
{
    for(let pattern of winpattern)
    {
        let val1 = boxes[pattern[0]].innerText; 
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!="")
        {
            if(val1==val2 && val2==val3)
            {
                output.innerText = `The winner is ${val1}`;
                // table.style.display = "none";
                boxes.forEach((box) => {
                    box.onclick = null;
                }); 
                return; 
            }
        }
    }
}

resetbtn.onclick = () => {
  boxes.forEach((box) => {
    box.innerText = ""; // Clear the box
    box.style.pointerEvents = "auto"; // Allow clicking again

    // Restore the original onclick event
    box.onclick = () => {
      if (box.innerText == "") {
        box.innerText = chance;
        chance = chance == "X" ? "0" : "X";
        output.innerText = `${chance} move`;
        checkwin();
      } else {
        output.innerText = "Press in the right place";
      }
    };
  });

  chance = "X"; // Reset turn to 'X'
  output.innerText = "X Move";
  table.style.display = "flex"; // Ensure table is visible
};



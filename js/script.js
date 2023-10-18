
const btn = document.querySelector('button');

btn.addEventListener('click',
function()
{
    const squareContainer = document.getElementById('grid_container');

    // generare n numeri elementi
    for(let i = 1; i <= 100; i ++)
    {
        let square = getSquare(i);
        squareContainer.append(square)
    }
    
});

function getSquare(squareIndex)
{
    // creare elementi e applicare lo sitle
    const square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = squareIndex;
    return square;
};
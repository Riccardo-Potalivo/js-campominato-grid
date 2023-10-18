
const btn = document.querySelector('button');

btn.addEventListener('click',
function()
{
    const squareContainer = document.getElementById('grid_container');

    // generare n numeri elementi
    for(let i = 1; i <= 35; i ++)
    {
        let square = getSquare();
        squareContainer.append(square)
    }
    
});

function getSquare()
{
    // creare elementi e applicare lo sitle
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
};
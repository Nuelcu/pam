/*start of code!

* variable declaration
@#sizePicker: Select size input
@makeGrid: When size is submitted by the user, call makeGrid()
@function makeGrid: //using loop to iterate over the value of i and j
*/

var height, width, color; 
    $('#sizePicker').submit(function(event) {
            event.preventDefault();
        height = $('#inputHeight').val();
        width = $('#inputWeight').val();
    makeGrid(height, width);
});


function makeGrid(n, m) {
    $('tr').remove();
        for(var i=1; i<=n; i++){
            //adding row to design canverse
            $('#pixelCanvas').append('<tr id=grid'+i+'></tr>');
                //using loop to iterate over the value of j
                for (var j = 1; j<= m; j++){
                    //adding column to design canverse
                    $('#grid'+i).append('<td></td>');
                }
        }



    $('td').click(function(){
        //select color input
        color = $('#colorPicker').val();
            if($(this).attr('style')){
                $(this).removeAttr('style');
            }else {
                //add color to td once clicked on.
                $(this).attr('style', 'background-color:' + color);
            }
    });
}
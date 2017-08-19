$(function ()
{
    $('#disclaimer').popover(
        {
            trigger: 'hover',
            html: true,
            placement: 'bottom',
            content: 'Students full name need to input here. Name should be same as the Transfer Certificate mentioned.'
        });
});


//ajax part for selectbox fields

$(document).ready(function($) {
    var list_target_id = 'list-target'; //first select list ID
    var list_select_id = 'list-select'; //second select list ID
    var initial_target_html = '<option value="">Please select a class first...</option>'; //Initial prompt for target select

    $('#'+list_target_id).html(initial_target_html); //Give the target select the prompt option

    $('#'+list_select_id).change(function(e) {
        //Grab the chosen value on first select list change
        var selectvalue = $(this).val();

        //Display 'loading' status in the target select list
        $('#'+list_target_id).html('<option value="">Loading...</option>');

        if (selectvalue == "") {
            //Display initial prompt in target select if blank value selected
            $('#'+list_target_id).html(initial_target_html);
        } else {
            //Make AJAX request, using the selected value as the GET
            $.ajax({url: 'http://localhost/school/public/index.php/bikash?svalue='+selectvalue,
                success: function(output) {
                    //alert(output);
                    $('#'+list_target_id).html(output);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status + " "+ thrownError);
                }});
        }
    });
});









//datatable code
$(document).ready(function() {
    $('#example').dataTable({
        "bPaginate": true,
        "bLengthChange": true,
        "bFilter": true,
        "bSort": true,
        "bInfo": true,
        "bAutoWidth": true,
        "sPaginationType": "full_numbers"
    });
} );

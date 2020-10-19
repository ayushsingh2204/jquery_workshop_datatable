$('document').ready(()=>
{

    $.ajax({
        url : "https://jsonplaceholder.typicode.com/users",
        method:"GET",
        success:(x)=>
        {
            console.log(x);

            for(let i=0;i<x.length;i++)
            {
                $('#tbody').append('<tr>'+'<td>'+x[i].id+'</td>'+'<td>'+x[i].name+'</td>'+'<td>'
                +x[i].email+'</td>'+'<td>'+x[i].username+'</td>'+'<td>'+x[i].phone+'</td>'+'</tr>');
            }
            $('#table_id').DataTable();
        }
    });
});
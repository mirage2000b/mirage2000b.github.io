
function test(){

    let item = {
    width: '3',
    label: '姓名',
    type: "text",
    name: "name"
    value: "",
    valid: "required",
    option: "單選1|單選2|單選3"

    };

    for(let i in item)
    {
        console.log(i + ':', item[i]);
    }

//     let form_item = [
//         {
//             width: '3',
//             label: '姓名',
//             type: "text",
//             name: "name"
//             value: "",
//             valid: "required",
//             option:""
//         },
//         {


//         },
//         {

//         }]

//     console.log(item.width, item['label']);
}
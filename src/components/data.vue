<template></template>
<script>
import fetch from '../assets/js/wacth-fetch'
import {getData} from '../service/api'
getData('18185445371', '123').then(res => {
    console.log('123');
})
console.log('123')
// url = 'browser'+'admin/account/login.json'
// myFetch(Url)
// function myFetch(Url){
//     fetch(Url)
//         .then(function(response) {
//             console.log(response);
//             return response.text();
//         })
//         .then((data) => {
//             console.log(data);
//         }).catch(e=>{
//             console.log(e);
//             })
// }
</script>


/**
 * Created by ShangLvInc. on 2017/6/19.
 */


var stream = weex.requireModule('stream')

/*

POST
Collect/GetPageCollectHotellist
http://api.zmjiudian.com/api/
{
userid: 4512657
start: 0
count: 10
}
* */

module.exports = {

    collection(){

     return new Promise((resolve, reject) => {
             stream.fetch({

                 method: 'POST',
                 url: 'http://api.zmjiudian.com/api/Collect/GetPageCollectHotellist',
                 type: 'json',
                 body: 'userid=4512657&start=0&count=10',
                 headers:{
                     "Content-Type": 'application/x-www-form-urlencoded',
                 }

         }, (ret) => {
             //回调
             resolve(ret.data)

        })
    })

    },
}
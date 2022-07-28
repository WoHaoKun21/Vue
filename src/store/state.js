let defaultCity = "北京";
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) { console.log(error.message) }
export default {// state变量名
    city: defaultCity
}
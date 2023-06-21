import { array } from "..";

const updateArray = (param1, Param2) => {
    array.push({
        Name: param1.value,
        Score: Param2.value
    });
    localStorage.setItem('Data', JSON.stringify(array));
    param1.value = '';
    Param2.value = '';
}

export default updateArray;
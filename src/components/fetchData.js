const URL = "https://bright-bee-sari.cyclic.app/"

const getData = async(path)=>{
    const response = await fetch(`${URL}${path}`);
    const result = await response.json();
    return result;
}

module.exports = {getData,URL};

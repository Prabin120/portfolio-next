
const getData = async(path)=>{
    const response = await fetch(`http://127.0.0.1:8000/${path}`);
    const result = await response.json();
    return result;
}

module.exports = getData;

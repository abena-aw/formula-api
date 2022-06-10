document.querySelector('button').addEventListener('click', getFormula)

async function getFormula(){
    const shape = document.querySelector('input').value
    try{
        const response = await fetch('http://localhost:8000/api/formulae/'+shape)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText+=  ` ${data.area}`
    }catch(err){
        console.log(err)
    }
}
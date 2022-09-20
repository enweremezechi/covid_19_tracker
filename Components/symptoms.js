document.querySelector('#symp').addEventListener('click', function(e){
    e.preventDefault();
    const symptom = document.getElementById('symptoms');
    symptom.scrollIntoView({
        behavior : 'smooth'
    })
})


let endpoint = "https://api.covid19api.com";

const cubeTotal = document.querySelector('.cube-1 .total-case');
const cubeActive = document.querySelector('.cube-2 .active-case');
const Cuberecover = document.querySelector('.cube-3 .recover');
const cubeDeath = document.querySelector('.cube-4 .total-death');
const cubecount = document.querySelector('.cube-5 .new-case');
const activecountcube = document.querySelector('.cube-6 .new-death');

const currentData = async () => {
    try{
        let respond = await fetch(`${endpoint}/summary`);
        let Countriesdata = await respond.json();
        let globalInfor = Countriesdata.Countries;
        // console.log(globalInfor)
        let singleCountry = globalInfor[0];
        // console.log(singleCountry)
        cubeTotal.textContent = singleCountry.TotalConfirmed;
        cubeActive.textContent = `${singleCountry.TotalConfirmed - singleCountry.NewConfirmed}`;
        Cuberecover.textContent = singleCountry.TotalRecovered;
        cubeDeath.textContent = singleCountry.TotalDeaths;
        cubecount.textContent = singleCountry.NewConfirmed;
        activecountcube.textContent = singleCountry.NewDeaths;
      } catch(erro){
      console.log(erro)
    }
}

currentData()



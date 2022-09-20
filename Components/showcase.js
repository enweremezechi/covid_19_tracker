let covidurl = "https://api.covid19api.com";

const totalCase = document.querySelector('.col-1 h1');
const activeCase = document.querySelector('.col-2 h1');
const Recovered = document.querySelector('.col-3 h1');
const totalDeath = document.querySelector('.col-4 h1');
const totalcount = document.querySelector('.col-1 p');
const activecount = document.querySelector('.col-2 p');
const recovercount = document.querySelector('.col-3 p');
const deathecount = document.querySelector('.col-4 p');


const countryTable = document.querySelector('.countries-content');
countryTable.addEventListener('click', (e) => {
  e.preventDefault()
  let turglingcountryname = document.querySelector('.contri-nme');
  let getvalue = e.target.value;
  // console.log(getvalue)
  turglingcountryname.textContent = getvalue;
  MycountryApi(getvalue)
 })

const MycountryApi = async (mydata) => {
    try{
        let countryresp = await fetch(`${covidurl}/country/${mydata}`);
        const countrys = await countryresp.json()
        let ezechi = countrys;
        console.log(ezechi)
        let eze = ezechi[ezechi.length-1];
        // console.log(eze)
        document.querySelector('.card-cubes').innerHTML = `
        <div class="flex-one"><!--flex-one-->
        <div class="cube-1">
          <p>Total Cases</p>
          <p class="total-case">${eze.Confirmed}</p>
        </div>
        <div class="cube-2">
          <p>Active Cases</p>
          <p class="active-case">${eze.Active}</p>
        </div>
      </div><!--flex-one-->
      <div class="flex-two"><!--flex-two-->
        <div class="cube-3">
          <p>Recovered</p>
          <p class="recover">${eze.Recovered}</p>
        </div>
        <div class="cube-4">
          <p>Total Deaths</p>
          <p class="total-death">${eze.Deaths}</p>
        </div>
      </div><!--flex-three-->
      <div class="flex-two"><!--flex-two-->
        <div class="cube-5">
          <p>New Cases</p>
          <p class="new-case">${eze.Active - eze.Deaths}</p>
        </div>
        <div class="cube-6">
          <p>New Deaths</p>
          <p class="new-death">${eze.Confirmed - eze.Active - eze.Deaths}</p>
        </div>
      </div><!--flex-three-->
        `;
       
        
    }catch(err){
        console.log(err)
    }
    
}

let loadApi = async () => {
    try{
        let res = await fetch(`${covidurl}/summary`);
        const glob = await res.json()
        let caseForm = glob.Global;
        // console.log(caseForm)
        totalCase.textContent = caseForm.TotalConfirmed;
        totalcount.textContent = (`+${caseForm.NewConfirmed}`);
        let Count = activeCase.textContent =  `${(caseForm.TotalConfirmed) - (caseForm.NewDeaths + caseForm.NewRecovered)}`;
        activecount.textContent = `+${(caseForm.NewConfirmed) - (caseForm.NewDeaths + caseForm.NewRecovered)}`;
        Recovered.textContent = caseForm.TotalRecovered;
        recovercount.textContent = (`+${caseForm.NewRecovered}`);
        totalDeath.textContent = caseForm.TotalDeaths;
        deathecount.textContent = `+${caseForm.NewDeaths}`;
    } catch(erro){
    console.log(erro)
    }
}

loadApi();

const countryApi = async () => {
    try{
       let response = await fetch(`${covidurl}/summary`)
        let testing = await response.json() 
        // console.log(testing)
        // console.log(testing.Countries)
      CountriesDetails(testing.Countries)

        
    }catch(err){
        console.log(`${err} NOT FOUND`)
    }
}
function CountriesDetails(opt){
  // console.log(opt)
 let countryarr = opt.map(el =>{
    return `
    <option class="rol-1">
      <p class="name">${el.Country}</p>
    </option>
    `;
 })
 .join('')
 countryTable.innerHTML = countryarr;

}



countryApi()



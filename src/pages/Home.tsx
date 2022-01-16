import { useEffect, useState } from "react";
import { Portfolio } from "../model/portfolio";
import { portfolioData1, portfolioData2, portfolioData3, themes } from "../utils/data";

function Home() {


  const [themed, setTheme]=useState(themes.Light)
  const [invData, setInvData]=useState(portfolioData1)
  const [result, setResult]= useState(0)
  const [data1,setData1]=useState(NaN)
  const [data2,setData2]=useState(NaN)
  const [investment, setInvestmen]=useState(0)

  useEffect(function (){
    
  }, [])

  const tooglePortfolio=(event: number)=>{
    switch (event) {
      case 1:
        setInvData(portfolioData1)
        break;

      case 2:
        setInvData(portfolioData2)
        break;


      case 3:
        setInvData(portfolioData3)
        break;
    
      default:
        break;
    }

    calc()
  }

  const selectDate=(index: number, isFirstDate:boolean)=>{
    
    if(isFirstDate){
      setData1(index);
      console.log(data2, index)
      if(index!=NaN && data2!=NaN){
        let sum=0;
        for(let i=index; i<=data2; i++){
          console.log(invData.profit[i])
            sum=sum+invData.profit[i]
        }
        sum=sum*investment
        setResult(sum);
      }
    }else{
      setData2(index);
      console.log(index, data1)
      if(data1!=NaN && index!=NaN){
        let sum=0;
        for(let i=data1; i<=index; i++){
          
            sum=sum+invData.profit[i]
        }
        sum=sum*investment
        setResult(sum);
      }
    }

  }


  const calc=()=>{
    let sum=0;
    if(data1!=NaN && data2!=NaN){
      for(let i=data1; i<=data2; i++){
      
        sum=sum+invData.profit[i]
      }
      sum=sum*investment
      setResult(sum);
    }
    
  }

  return (<div data-theme={themed}>


<div>
  <button className="btn btn-outline btn-secondary m-5" onClick={
        function(){ themed==themes.Light?setTheme(themes.Happy):setTheme(themes.Light)}
      }>Change Theme</button> 
</div>
      

  <div className="md:container mx-auto px-4 md:grid grid-cols-4 gap-4">
    
    <div className="col-span-1 "></div>
    <select className="col-span-2 select select-bordered select-success w-full" onChange={function(event){tooglePortfolio(parseInt(event.target.value))}}>
      
      <option value="1">Portfolio number 1</option> 
      <option value="2">Portfolio number 2</option> 
      <option value="3">Portfolio number 3</option>
    </select> 
    <div ></div>
    <div className="col-span-1 "></div>
    <div className="col-span-2 grid grid-cols-2 my-1">

    <div className="col-span-1 form-control">
      <label className="label">
          <span className="label-text">Less Date</span>
        </label> 
        <select name="date1" className="select select-bordered select-accent w-full -ml-2" onChange={function(event){selectDate(parseFloat(event.target.value), event.target.name==="date1"?true:false)}}>
          <option value="selected">Less date</option> 
          {invData.date.map((value, index)=>
            <option value={index} key={index}>{value.toString().substr(4,11) +" | " + invData.profit[index] }</option> 
          )}
        </select> 
      </div> 
      <div className="col-span-1 form-control">
      <label className="label">
          <span className="label-text">Greater Date</span>
        </label> 
        <select name="date2" className="select select-bordered select-accent w-full mx-2" onChange={function(event){selectDate(parseFloat(event.target.value), event.target.name==="date1"?true:false)}}>
        <option value="selected">Greater date</option> 
        {invData.date.map((value, index)=>
            <option value={index} key={index}>{value.toString().substr(4,11) +" | " + invData.profit[index] }</option> 
          )}
      </select> 
      </div> 
      
    </div>
    
    <div ></div>

    <div className="col-span-1 "></div>
    <div className="col-span-2 form-control">
  <label className="label">
      <span className="label-text">Investment</span>
    </label> 
    <input type="text" placeholder="$" className="input input-secondary input-bordered" onChange={function(event){setInvestmen(parseFloat(event.target.value));calc();}}/>
  </div> 
    <div ></div>
    <div className="col-span-1 my-2"></div>
    <div className="stat col-span-2">
    <div className="stat-title">Profits</div> 
    <div className="stat-value">${result}</div> 
    <div className="stat-actions">
      <div className="grid grid-cols-2">
        {invData.stocks.map((value, index)=>
            <div key={index} className="badge badge-secondary mx-1 my-1">{value}</div> 
          )}
        
      </div>
    </div>
  </div>
    
    <div ></div>
  </div>


  
  

  
  
      
    </div>);
  }
  
  export default Home;
import {Truck} from "../type/Truck";

export async function getTruckData():Promise<any> {
    const response = await fetch("http://localhost:8080/api/truck",{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      });
    if(!response.ok){
        throw new Error(response.statusText);
    }else{
        return response.json();
    }
    
    
}

//http://localhost:8080/api/truck/detail?truckId=1236
//http://localhost:8080/api/truck/detail?1237
export async function getTruckById(truckId: string):Promise<any> {
  const response = await fetch(`http://localhost:8080/api/truck/detail?truckId=${truckId}`,{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    });
  if(!response.ok){
      throw new Error(response.statusText);
  }else{
      return response.json();
  }
  
  
}
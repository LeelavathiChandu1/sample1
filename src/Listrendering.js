function Listrendering(){
    const a=[1,2,3,4];
    const items=a.map((x,index)=> <li key={index}>{x*x}</li> );
    return(
        <>
        {
            <ul>{items}</ul>
            
        }
        </>
    )
}
function Listrendering2(){
    const nums=[1,2,3,4]
    return(
        <> 
           {
             nums.map((item) => <li>{item}</li>)
           }
        </>
    )
}
function Listrendering3(){
    const studdata=[
        {
            "id":"1",
            "name":'Leela',
            "branch":'IT'
        },
        {
            "id":"2",
            "name":'sumanth',
            "branch":'CSE'
        },
        {
            "id":"3",
            "name":'Leeela',
            "branch":'IT'
        }
    ]
    const res=studdata.map((item)=>{
        return (<ul>
            <li>{item.name}</li>
        <li>{item.branch}</li>
        <li>{item.id}</li>
        </ ul>)
    }
    )
    return(
        <> 
        {
         res
        }

        </>
    )
}

		
	
	


export {Listrendering,Listrendering2,Listrendering3}
import './style11.css'
function Reactclone1(){
    return(
        <>
        <div className='divv1'>
        <div className='ul1'>
           
                <a href="#">React</a>
            <pre>  </pre>
           
                <a href="#">Docs</a>
                <pre>  </pre>
           
                <a href="#">Tutorial</a>
                <pre>  </pre>
           
                <a href="#">Blogs</a>
                <pre>  </pre>
           
                <a href="#">Community</a>
            
        </div>
        </div>
        <div className='divv2'>
            <h1 className='hh1'>React</h1>
            <h5 className='hh5'>A JavaScript library for building user interfaces</h5>
        </div>
        </>
    )
}
function Reactclone2(props){
    return(
        <>
       <div className='div12345'>
       <div className='main1'>
       <div className='divv3'>{props.heading1} </div>
       <div className='pp1'>{props.text1}</div>
       </div>
       <div className='main2'>
       <div className='divv3'>{props.heading2}</div>
       <div className='pp1'>{props.text2}</div>
       
       </div>
       <div className='main3'>
       <div className='divv3'>{props.heading3}</div>
       <div className='pp1'>{props.text3}</div>
       </div>
        
</div>
</>
    )
}
export {Reactclone1,Reactclone2};
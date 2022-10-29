import React, { Component,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./styleSlider.css"

const Slider=()=>{
    const[checkTitle,setChecktitle]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

        return ()=> window.removeEventListener("scroll",handleScroll)

    },[])

    const handleScroll=()=>{
      
        if(document.querySelector(".slider-text")!.getBoundingClientRect().top<window.innerHeight){
            setChecktitle(true)
        }else{
            setChecktitle(false)
        }
       
    }

//https://theeverydayman.co.uk/wp-content/uploads/2017/05/Edit1.jpg //showthumbs false remueve los thubmnail
 //https://img.freepik.com/free-photo/jogging-young-woman-running-shore_273609-15005.jpg?w=1380&t=st=1665527517~exp=1665528117~hmac=345da4c9671061a732bec5c013210f6d9fb47e3dbd5ce1c11da0219c1ed20a07
    return(
      
        <Carousel autoPlay infiniteLoop interval={3000} showArrows={true} thumbWidth={50} showThumbs={false}   >
                <div className='slider-cont'  >
                <img src=""/>
                    <div  id='slider-cont-div1'style={{backgroundImage:"url(https://theeverydayman.co.uk/wp-content/uploads/2017/05/Edit1.jpg)", backgroundRepeat:"no-repeat",backgroundPosition:'center', backgroundSize:"cover"}}>
                        <div className='slider-text'>
                            <h3>Sale Off 50%</h3>
                            <p className='p-text'>Winter Offer Collection</p>
                         
                        </div>
                    </div>
                   
                </div>
                <div className='slider-cont' >
                <img src=""/>
                    <div className='slider-cont-div' id="slider2"style={{backgroundImage:"url(https://2.bp.blogspot.com/-hHe-nF8cJJc/UJg7IZ9CA6I/AAAAAAABOxw/9U2uYMqCr9g/s1600/mujer%2Bcorriendo%2Bcon%2Bsus%2Bperros%2Bjunto%2Ba%2Bla%2Bplaya%2Bde%2Barenas%2Bblancas.jpg)", backgroundRepeat:"no-repeat",backgroundPosition:'center', backgroundSize:"cover"}}>
                        <div className='slider-text'>
                            <h3>Sale Off 20%</h3>
                            <p className='p-text'>Summer Collection</p>
                            <p className='p-text'>New Arrivals</p>
                            
                        </div>
                    </div>
                    
                </div>
               
               
            </Carousel>
         //<div style={{backgroundImage:"url(https://hips.hearstapps.com/hmg-prod/images/woman-running-against-wall-royalty-free-image-930134532-1552999674.jpg?crop=0.668xw:1.00xh;0.294xw,0&resize=1200:*)", backgroundRepeat:"no-repeat",backgroundPosition:'center',  height:650}}>hola</div>  
    )//https://hips.hearstapps.com/hmg-prod/images/woman-running-against-wall-royalty-free-image-930134532-1552999674.jpg?crop=0.668xw:1.00xh;0.294xw,0&resize=1200:*
}

export default Slider

/*<div style={{height:650}}> para q se vea todo lo ancho, poner un img en alguno de los slides
                <p className="legend">Legend 3</p>
                <img src="https://www.womensrunning.com/wp-content/uploads/2020/06/woman-running-alone-outside-e1591815214520.jpg?crop=535:301&width=840&enable=upscale" />
                
                  
                   
                </div>*/
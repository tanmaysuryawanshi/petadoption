import {Component} from "react";

class Carousel extends Component{
    state={
        active:0
    }
    static defaultProps={
        images:["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    render(){
      //  throw new Error("lol")
        const {active}=this.state
        const {images}=this.props
        console.log("images inside render"+images)
        return (
            <div className='carousal'>
            <img src={images[active]} alt="animal hero"/>
            <div className='carousel-smaller'>
                {images.map((photo,index)=>{
                    <img 
                    key={photo}
                    src={photo}
                    className={index===active?"active":""}
                    alt="animal thumbnail"></img>
                })}
            </div>
            </div>
        )
    }

}

export default Carousel;
import"./Style.css";

function Jsx(){
return (<div style={{ border:"solid 1px black",maxwidth:"100vw" }} >

<h1 className="titlered">Your name here</h1>



<img src="/imageInSrc.jpg" ></img>



<img src="/imageInPublic.jpg" ></img>



<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" >
</source>
</video>
</div>
)


}
export default Jsx;
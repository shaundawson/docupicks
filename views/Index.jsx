import React from 'react';
import DefaultLayout from './DefaultLayout';


export default ({ title, children, props }) => (
  <div className="container">
<DefaultLayout {...props} />
<h1> My List </h1>
<div class="row">
  <div class="col-sm-3">
    <img class="card-img-top" src="https://i.imgur.com/k9d2u6o.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">The Staircase</h4>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
        <p class="card-text">The high-profile murder trial of American novelist Michael Peterson following the death of his wife in 2001.</p>
        <p><a href="#" class="btn btn-primary">Details</a></p>
      </div>
  </div>
  <div class="col-sm-3">
    <img class="card-img-top" src="https://i.imgur.com/tqbh166.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">Quincy</h4>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
        <p class="card-text">An intimate look into the life of icon Quincy Jones. A unique force in music and popular culture for 70 years..</p>
       <p><a href="#" class="btn btn-primary">Details</a></p>
      </div>
         </div>
        <div class="col-sm-3">
  <img class="card-img-top" src="https://i.imgur.com/WszGdcp.png" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">Reversing Roe</h4>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
        <p class="card-text">A deep historical look at one of the most controversial issues of our time, highlighting the abortion debate from...</p>
        <p><a href="#" class="btn btn-primary">Details</a></p>
      </div>
    </div>
     <div class="col-sm-3">
  <img class="card-img-top" src="https://i.imgur.com/4BseeU5.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">Paris is Burning</h4>
                      <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
         <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
         <span class="fa fa-star"></span>
        <p class="card-text">A chronicle of New York's drag scene in the 1980s, focusing on balls, voguing and the ambitions and dreams of those...</p>
         <p><a href="#" class="btn btn-primary">Details</a></p>
      </div>
    </div>
</div>
<h1> Trending </h1>
<div class="row">
  <div class="col-sm-3">
    <img class="card-img-top" src="https://i.imgur.com/lH5PqFh.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title"> Inside Look: The People v. O.J. Simpson, American Crime Story </h4>
        <p class="card-text">The story of the trial of former NFL superstar running back "OJ" Simpson...</p>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
  </div>
  <div class="col-sm-3">
    <img class="card-img-top" src="https://i.imgur.com/NaqMQDv.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">Wild Wild Country</h4>
        <p class="card-text">When the world's most controversial guru builds a utopian city deep in the Oregon desert, conflict with the locals escalates into a national scandal. A true story.</p>
    <a href="#" class="btn btn-primary">Details</a>
      </div>
         </div>
        <div class="col-sm-3">
  <img class="card-img-top" src="https://i.imgur.com/kQ8lMhr.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title"> Last Chance U</h4>
        <p class="card-text">Intense look inside the world of junior college football, chronicling the stories of players and coaches in the classroom and on the field.</p>
         <p><a href="#" class="btn btn-primary">Details</a></p>
      </div>
    </div>
     <div class="col-sm-3">
  <img class="card-img-top" src="https://i.imgur.com/YsTSQzK.jpg" alt="Card image cap"></img>
      <div class="card-body">
        <h4 class="card-title">Whitney</h4>
        <p class="card-text">An in-depth look at the life and music of Whitney Houston.</p>
        <a href="#" class="btn btn-primary">Details</a>
      </div>
    </div>
</div>
</div>
);




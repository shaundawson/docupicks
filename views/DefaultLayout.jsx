import React     from 'react';
import Nav from './Nav';
import PropTypes from 'prop-types';


export default ({ title, children, props }) => (
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/<react-version>/react-dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/<version>/react-bootstrap.min.js"></script>
<link rel="stylesheet" href="/css/styles.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
</head>
<body>
<div className="container">
<Nav {...props} />
  <div className="row">
      <div className="col-xs-12">
          <div className="jumbotron">
                <h2>WILD WILD COUNTRY</h2>
                <h3> TV Series</h3>
              <p> When the world's most controversial guru builds a utopian city deep in the Oregon desert, conflict with the locals escalates into a national scandal. A true story. </p>
              <p><a href="https://www.youtube.com/watch?v=WT7gn6nhsAc" target="_blank" class="btn btn-primary btn-lg" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal"> Watch Trailer</a></p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
);


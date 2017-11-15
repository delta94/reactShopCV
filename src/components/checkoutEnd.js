import React from "react";

export default () => {
  return (
          <div className="coverPage">
                <div className="jumbotron-fluid">
                        <h1 className="display-3">Hello, world!</h1>
                                <img className="tr" src="/src/img/tr.jpeg"></img>
                                <p className="lead">It was a pleasure having as a costumer! Learn more about me below!</p>
                                <hr className="my-4"/>
                                <p>Although this is just for fun...the skills are real!</p>
                                <p className="lead">
                                
                                <a href=""><i className="fa fa-github fa-3x coverPageLink"></i></a>
                                <a href=""><i className="fa fa-linkedin-square fa-3x coverPageLink"></i></a>
                                <a href="mailto:tmcrs123@gmail.com"><i className="fa fa-envelope fa-3x coverPageLink"></i></a>                                
                                </p>
                </div>
        </div>
    
  );
};

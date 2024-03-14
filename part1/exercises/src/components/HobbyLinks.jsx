import React from 'react';


function HobbyLinks(){
let hobbyLinks = [
    "https://example.com/hobby1",
    "https://example.com/hobby2",
    "https://example.com/hobby3"
];
return (
    <div>
       <h3>Hobby Websites</h3>
       <ul>
          {/* Map over the hobbyLinks array to generate list items for each hobby link */}
          {hobbyLinks.map((link, index) => (
             <li key={index}>
                {/* Create anchor tags for each hobby link */}
                <a href={link} target="_blank" rel="noopener noreferrer">Hobby {index + 1} Website</a>
             </li>
          ))}
       </ul>
       {/* Wrap the additional <a> tags inside a parent element */}
       <div>
          <a href={hobbyLinks[0]}>Link 1</a><br />
          <a href={hobbyLinks[1]}>Link 2</a><br />
          <a href={hobbyLinks[2]}>Link 3</a><br />
       </div>
    </div>
 );
}

export default HobbyLinks;

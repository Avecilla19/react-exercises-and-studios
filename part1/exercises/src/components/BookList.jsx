export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/81TmnPZWb0L._SL1500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/817Xh+bqwOL._SL1500_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/815GrZMJQcL._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dune 1965" style={{ maxWidth: '200px', height: 'auto' }} />
         <img src={book2} alt="Dune Messiah 1969" style={{ maxWidth: '200px', height: 'auto' }}/>
         <img src={book3} alt="Childern of Dune 1976" style={{ maxWidth: '200px', height: 'auto' }}/>
      </div>      
   );
}


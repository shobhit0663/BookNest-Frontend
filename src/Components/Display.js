import React, { useState, useEffect, useContext, createContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Display.css';
import axios from 'axios';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './navigationbar';
function Display() {
  // Static array of books
  const books = 
  [
   
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "price": 350,
      "isbnNumber": 9780061120084,
      "language": "English",
      "genre": "Fiction, Drama",
      "published": 1960,
      "description": "A young girl navigates racial injustice in the American South.",
      "interestingFact": "The novel is loosely based on Harper Lee’s own childhood experiences.",
      "notableQuotes": "\"You never really understand a person until you consider things from his point of view.\"",
      "setting": "Maycomb, Alabama",
      "themes": ["Racial injustice", "Moral growth", "Compassion"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/91SpClgnqDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "price": 299,
      "isbnNumber": 9780451524935,
      "language": "English",
      "genre": "Dystopian, Science Fiction",
      "published": 1949,
      "description": "A chilling vision of a totalitarian future where Big Brother watches everyone.",
      "interestingFact": "The book introduced terms like 'Big Brother' and 'Thoughtcrime' into popular culture.",
      "notableQuotes": "\"War is peace. Freedom is slavery. Ignorance is strength.\"",
      "setting": "Oceania, a fictional totalitarian state",
      "themes": ["Government surveillance", "Totalitarianism", "Freedom vs. control"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "price": 300,
      "isbnNumber": 9780316769488,
      "language": "English",
      "genre": "Fiction, Coming-of-age",
      "published": 1951,
      "description": "A teenager’s journey through alienation and self-discovery in New York City.",
      "interestingFact": "The novel has been both celebrated and banned for its controversial themes.",
      "notableQuotes": "\"Don’t ever tell anybody anything. If you do, you start missing everybody.\"",
      "setting": "New York City",
      "themes": ["Alienation", "Identity", "Youth"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "price": 450,
      "isbnNumber": 9780547928227,
      "language": "English",
      "genre": "Fantasy",
      "published": 1937,
      "description": "A hobbit embarks on an epic quest to reclaim a treasure guarded by a dragon.",
      "interestingFact": "Tolkien wrote the story for his children.",
      "notableQuotes": "\"In a hole in the ground there lived a hobbit.\"",
      "setting": "Middle-earth",
      "themes": ["Adventure", "Courage", "Friendship"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/91ZX8zNpwZL._UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 350,
      "isbnNumber": 9780062315007,
      "language": "English",
      "genre": "Fiction, Inspirational",
      "published": 1988,
      "description": "A shepherd boy journeys to find a hidden treasure and discovers his destiny.",
      "interestingFact": "The book has been translated into over 80 languages.",
      "notableQuotes": "\"And, when you want something, all the universe conspires in helping you to achieve it.\"",
      "setting": "Spain, Egypt",
      "themes": ["Dreams", "Destiny", "Self-discovery"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "price": 600,
      "isbnNumber": 9780544003415,
      "language": "English",
      "genre": "Fantasy",
      "published": 1954,
      "description": "A fellowship embarks on a quest to destroy a powerful ring and save Middle-earth.",
      "interestingFact": "Tolkien spent over 12 years writing the trilogy.",
      "notableQuotes": "\"All that is gold does not glitter, not all those who wander are lost.\"",
      "setting": "Middle-earth",
      "themes": ["Good vs. Evil", "Friendship", "Sacrifice"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/81j4C6j3dRL.jpg"
    },
    {
      "title": "The Kite Runner",
      "author": "Khaled Hosseini",
      "price": 400,
      "isbnNumber": 9781594631931,
      "language": "English",
      "genre": "Fiction, Drama",
      "published": 2003,
      "description": "A story of friendship, betrayal, and redemption set in Afghanistan.",
      "interestingFact": "The novel was the first English-language book by an Afghan author.",
      "notableQuotes": "\"For you, a thousand times over.\"",
      "setting": "Afghanistan, USA",
      "themes": ["Redemption", "Friendship", "Guilt"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "price": 380,
      "isbnNumber": 9780375831003,
      "language": "English",
      "genre": "Historical Fiction",
      "published": 2005,
      "description": "A young girl in Nazi Germany finds solace in stealing books and sharing them.",
      "interestingFact": "The book is narrated by Death.",
      "notableQuotes": "\"I have hated words and I have loved them, and I hope I have made them right.\"",
      "setting": "Nazi Germany",
      "themes": ["War", "Books", "Humanity"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/91JGwQlnu7L.jpg"
    },
    {
      "title": "The Hunger Games",
      "author": "Suzanne Collins",
      "price": 450,
      "isbnNumber": 9780439023481,
      "language": "English",
      "genre": "Dystopian, Science Fiction",
      "published": 2008,
      "description": "A dystopian world where teenagers are forced to compete in a deadly game.",
      "interestingFact": "The story was inspired by reality TV and the Iraq War.",
      "notableQuotes": "\"May the odds be ever in your favor.\"",
      "setting": "Panem",
      "themes": ["Survival", "Oppression", "Rebellion"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/71WSzS6zvCL.jpg"
    },
    {
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "price": 500,
      "isbnNumber": 9780064471190,
      "language": "English",
      "genre": "Fantasy",
      "published": 1950,
      "description": "A series of adventures in a magical land filled with talking animals and mythical creatures.",
      "interestingFact": "C.S. Lewis and J.R.R. Tolkien were close friends.",
      "notableQuotes": "\"Once a king or queen of Narnia, always a king or queen of Narnia.\"",
      "setting": "Narnia",
      "themes": ["Good vs. Evil", "Adventure", "Faith"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/81IsNyKSOmL.jpg"
    },
    {
      "title": "The Shining",
      "author": "Stephen King",
      "price": 420,
      "isbnNumber": 9780307743657,
      "language": "English",
      "genre": "Horror",
      "published": 1977,
      "description": "A family’s terrifying experience in an isolated haunted hotel.",
      "interestingFact": "Stephen King based the story on his own struggles with alcoholism.",
      "notableQuotes": "\"All work and no play makes Jack a dull boy.\"",
      "setting": "The Overlook Hotel",
      "themes": ["Madness", "Isolation", "Supernatural"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/91U7HNa2NQL.jpg"
    },
    {
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "price": 400,
      "isbnNumber": 9780385490818,
      "language": "English",
      "genre": "Dystopian",
      "published": 1985,
      "description": "A woman’s struggle for survival in a totalitarian society where women are oppressed.",
      "interestingFact": "The novel has inspired a popular TV series.",
      "notableQuotes": "\"Nolite te bastardes carborundorum.\"",
      "setting": "Gilead",
      "themes": ["Oppression", "Feminism", "Resistance"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/61yRxXpwl6L._UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Road",
      "author": "Cormac McCarthy",
      "price": 350,
      "isbnNumber": 9780307387899,
      "language": "English",
      "genre": "Post-apocalyptic",
      "published": 2006,
      "description": "A father and son journey through a bleak, post-apocalyptic world.",
      "interestingFact": "The novel won the Pulitzer Prize for Fiction in 2007.",
      "notableQuotes": "\"Keep a little fire burning; however small, however hidden.\"",
      "setting": "Post-apocalyptic America",
      "themes": ["Survival", "Love", "Hope"],
      "coverPhotoURL": "https://ramblinginthecity.com/wp-content/uploads/2014/11/trlg.jpg"
    },
    {
      "title": "The Girl with the Dragon Tattoo",
      "author": "Stieg Larsson",
      "price": 480,
      "isbnNumber": 9780307269751,
      "language": "English",
      "genre": "Mystery, Thriller",
      "published": 2005,
      "description": "A journalist and a hacker investigate a decades-old disappearance.",
      "interestingFact": "The author died before the book was published.",
      "notableQuotes": "\"Friendship- my definition- is built on two things. Respect and trust.\"",
      "setting": "Sweden",
      "themes": ["Crime", "Corruption", "Justice"],
      "coverPhotoURL": "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
      "title": "The Fault in Our Stars",
      "author": "John Green",
      "price": 320,
      "isbnNumber": 9780142424179,
      "language": "English",
      "genre": "Young Adult, Romance",
      "published": 2012,
      "description": "Two teenagers with cancer fall in love and navigate life’s challenges.",
      "interestingFact": "The book was inspired by a real-life friend of the author.",
      "notableQuotes": "\"Okay? Okay.\"",
      "setting": "Indiana, USA",
      "themes": ["Love", "Loss", "Hope"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/817tHNcyAgL.jpg"
    },
    {
      "title": "The Martian",
      "author": "Andy Weir",
      "price": 400,
      "isbnNumber": 9780553418026,
      "language": "English",
      "genre": "Science Fiction",
      "published": 2011,
      "description": "An astronaut stranded on Mars uses his ingenuity to survive.",
      "interestingFact": "The book was initially self-published.",
      "notableQuotes": "\"I’m going to have to science the shit out of this.\"",
      "setting": "Mars",
      "themes": ["Survival", "Problem-solving", "Isolation"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/81H6Z7QwcNL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Night Circus",
      "author": "Erin Morgenstern",
      "price": 380,
      "isbnNumber": 9780307744432,
      "language": "English",
      "genre": "Fantasy, Romance",
      "published": 2011,
      "description": "A magical competition between two illusionists in a mysterious circus.",
      "interestingFact": "The novel was written during NaNoWriMo (National Novel Writing Month).",
      "notableQuotes": "\"The circus arrives without warning.\"",
      "setting": "Le Cirque des Rêves",
      "themes": ["Magic", "Love", "Competition"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/71IuSejwJBL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Silent Patient",
      "author": "Alex Michaelides",
      "price": 420,
      "isbnNumber": 9781250301697,
      "language": "English",
      "genre": "Psychological Thriller",
      "published": 2019,
      "description": "A psychotherapist becomes obsessed with a patient who refuses to speak.",
      "interestingFact": "The book was a New York Times bestseller.",
      "notableQuotes": "\"Alicia Berenson’s diary is a lie.\"",
      "setting": "London",
      "themes": ["Mental health", "Secrets", "Obsession"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/81JJPDNlxSL.jpg"
    },
    {
      "title": "The Goldfinch",
      "author": "Donna Tartt",
      "price": 450,
      "isbnNumber": 9780316055437,
      "language": "English",
      "genre": "Fiction",
      "published": 2013,
      "description": "A young boy’s life is shaped by a stolen painting and a tragic event.",
      "interestingFact": "The novel won the Pulitzer Prize for Fiction in 2014.",
      "notableQuotes": "\"We can’t choose what we want and don’t want and that’s the hard lonely truth.\"",
      "setting": "New York, Las Vegas",
      "themes": ["Art", "Loss", "Identity"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/71ud9Tcj5YL.jpg"
    },
    {
      "title": "The Secret History",
      "author": "Donna Tartt",
      "price": 400,
      "isbnNumber": 9781400031702,
      "language": "English",
      "genre": "Fiction, Mystery",
      "published": 1992,
      "description": "A group of elite students becomes entangled in a murder.",
      "interestingFact": "The novel was Tartt’s debut and took eight years to write.",
      "notableQuotes": "\"Beauty is terror. Whatever we call beautiful, we quiver before it.\"",
      "setting": "Vermont",
      "themes": ["Morality", "Friendship", "Crime"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/81YhQfeiynL.jpg"
    },
    {
      "title": "The Name of the Wind",
      "author": "Patrick Rothfuss",
      "price": 500,
      "isbnNumber": 9780756404741,
      "language": "English",
      "genre": "Fantasy",
      "published": 2007,
      "description": "The story of Kvothe, a gifted young man who becomes a legendary figure.",
      "interestingFact": "The book is the first in the 'Kingkiller Chronicle' trilogy.",
      "notableQuotes": "\"It’s the questions we can’t answer that teach us the most.\"",
      "setting": "The Four Corners of Civilization",
      "themes": ["Magic", "Storytelling", "Destiny"],
      "coverPhotoURL": "https://m.media-amazon.com/images/I/611iKJa7a-L.jpg"
    },
    
      {
        "title": "The Nightingale",
        "author": "Kristin Hannah",
        "price": 400,
        "isbnNumber": 9780312577223,
        "language": "English",
        "genre": "Historical Fiction",
        "published": 2015,
        "description": "Two sisters in Nazi-occupied France face impossible choices during World War II.",
        "interestingFact": "The novel was inspired by the true story of a Belgian woman who helped Allied pilots escape.",
        "notableQuotes": "\"Men tell stories. Women get on with it.\"",
        "setting": "France, World War II",
        "themes": ["War", "Sacrifice", "Family"],
        "coverPhotoURL": "https://m.media-amazon.com/images/I/716ldVazj-L._UF1000,1000_QL80_.jpg"
      },
      {
        "title": "Educated",
        "author": "Tara Westover",
        "price": 380,
        "isbnNumber": 9780399590504,
        "language": "English",
        "genre": "Memoir",
        "published": 2018,
        "description": "A woman’s journey from a survivalist family in Idaho to earning a PhD from Cambridge University.",
        "interestingFact": "The memoir was a New York Times bestseller and won several awards.",
        "notableQuotes": "\"You can love someone and still choose to say goodbye to them.\"",
        "setting": "Idaho, USA",
        "themes": ["Education", "Family", "Self-discovery"],
        "coverPhotoURL": "https://m.media-amazon.com/images/I/71-4MkLN5jL.jpg"
      },
      {
        "title": "The Power of Now",
        "author": "Eckhart Tolle",
        "price": 300,
        "isbnNumber": 9781577314806,
        "language": "English",
        "genre": "Self-help, Spirituality",
        "published": 1997,
        "description": "A guide to spiritual enlightenment and living in the present moment.",
        "interestingFact": "The book has sold over 5 million copies worldwide.",
        "notableQuotes": "\"Realize deeply that the present moment is all you ever have.\"",
        "setting": "N/A",
        "themes": ["Mindfulness", "Spirituality", "Present Moment"],
        "coverPhotoURL": "https://image.makewebcdn.com/makeweb/m_1920x0/7GFEYsdVK/ContentPhoto/The_Power_of_Now.jpg"
      }
    
                                                                                                                                                                    ] 

  let { setCartItems } = useContext(CartContext);

  const navigate=useNavigate();
  function add(book) {
    alert('Book Added to Cart Successfully...!!!')
     
      setCartItems((prevItems) => {
          return [...prevItems, { ...book}];
        })
  }

  function viewDetails(book) {
    navigate("/bookdetails", { state: { book } });
  }

  if (books.length === 0) {
    return <h1 className="loading">No Books Available</h1>;
  }

  return (
    <>
    <NavigationBar/>
    <div className="container">
      {books.map((book) => (
        <Card className="card" key={book.isbnNumber}>
          <Card.Img variant="top" src={book.coverPhotoURL} className="card-img-top" />
          <Card.Body className="card-body">
            <Card.Title className="book-title">{book.title}</Card.Title>
            <Card.Text className="book-info">
              <span className="author">{book.author}</span>
              <br />
              <strong>${book.price}</strong>
            </Card.Text>
            <Button variant="success" onClick={() => { add(book); }}>Add To Cart</Button><br/>
            <Button variant="secondary" onClick={()=>{viewDetails(book)}}>View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Display;

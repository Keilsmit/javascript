movies = []
movies.push({ title: "Revolver", director: "Guy Richie", genre: "Thriller", year: "2005", actors: ["Jason Statham", "Ray Liotta", "André Benjamin"], stars: "", metascore: ""})

movies.push({ title: "Crimson Tide", director: "Tony Scott", genre: "Thriller", year: "1993", actors: ["Denzel Washington", "Gene Hackman", "James Gandolfini"]})

movies.push({ title: "The Dark Night", director: "Chris Nolan", genre: "Action", year: "2008", actors: ["Christian Bale", "Heath Ledger", "Morgan Freeman"]})

movies.push({ title: "Step Brothers", director: "Adam McCay", genre: "Comedy", year: "2008", actors: ["Will Ferrell", "John C. Reilly", "Mary Steenburgen"]})

movies.push({ title: "City of God", director: "Fernando Meirelles", genre: "Crime", year: "2002", actors: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"]})


movie_titles = movies.sort(function(film1 , film2) {
  if(film1.title < film2.title) return -1
  if(film1.title > film2.title) return 1
  return 0
})


console.log(JSON.stringify(movie_titles))

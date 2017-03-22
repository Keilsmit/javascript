movies = []
movies.push({ title: "Revolver", director: "Guy Richie", genre: "Thriller", year: "2005", actors: ["Jason Statham", "Ray Liotta", "André Benjamin"], stars: "6.5", metascore: "25"})

movies.push({ title: "Crimson Tide", director: "Tony Scott", genre: "Thriller", year: "1993", actors: ["Denzel Washington", "Gene Hackman", "James Gandolfini"], stars: "7.3", metascore: "66"})

movies.push({ title: "The Dark Knight", director: "Chris Nolan", genre: "Action", year: "2008", actors: ["Christian Bale", "Heath Ledger", "Morgan Freeman"], stars: "9.0", metascore: "82"})

movies.push({ title: "Step Brothers", director: "Adam McCay", genre: "Comedy", year: "2008", actors: ["Will Ferrell", "John C. Reilly", "Mary Steenburgen"], stars: "6.9", metascore: "52"})

movies.push({ title: "City of God", director: "Fernando Meirelles", genre: "Crime", year: "2002", actors: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen"], stars: "8.7", metascore: "79"})


// Bad films listed below
movies.push({ title: "Mighty Ducks 3", director: "Robert Lieberman", genre: "Comedy", year: "1996", actors: ["Emilio Estevez", "Jeffrey Nordling", "Joshua Jackson"], stars: "5.2", metascore: "20"})

movies.push({ title: "Howard the Duck", director: "Willard Huyck", genre: "Action", year: "1986", actors: ["Lea Thompson", "Jeffrey Jones", "Tim Robbins"], stars: "4.6", metascore: "15"})

// sorting functions below
movie_titles = movies.sort(function(film1 , film2) {
  if(film1.title < film2.title) return -1
  if(film1.title > film2.title) return 1
  return 0
})
console.log(movie_titles)
// Building my tables below

movie_titles.forEach(function(x){
  my_table_array = ""
    my_table_array += "<tr><td>" + x.title + "</td>"
    my_table_array += "<td>" + x.director + "</td>"
    my_table_array += "<td>" + x.genre + "</td>"
    my_table_array += "<td>" + x.year + "</td>"
    my_table_array += "<td>" + x.actors.join(", ") + "</td>"
    my_table_array += "<td>" + x.stars + "</td>"
    my_table_array += "<td>" + x.metascore + "</td></tr>"
    document.getElementById('movie_data').innerHTML += my_table_array
})

console.log(JSON.stringify(movie_titles))

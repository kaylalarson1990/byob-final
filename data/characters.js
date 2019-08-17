let characterList = [
  {
    show_name: "The Office",
    char_name: "Michael Scott",
    ethnicity: "American",
    name: "Steve Carell"
  },
  {
    show_name: "The Office",
    char_name: "Pam Beesly",
    ethnicity: "American",
    name: "Jenna Fischer"
  },
  {
    show_name: "The Office",
    char_name: "Jim Halpert",
    ethnicity: "American",
    name: "John Krasinski"
  },
  {
    show_name: "The Office",
    char_name: "Dwight Schrute",
    ethnicity: "American",
    name: "Rainn Wilson"
  },
  {
    show_name: "Stranger Things",
    char_name: "Eleven",
    ethnicity: "British",
    name: "Millie Bobby Brown"
  },
  {
    show_name: "Stranger Things",
    char_name: "Mike",
    ethnicity: "Canadian",
    name: "Millie Finn Wolfard"
  },
  {
    show_name: "Stranger Things",
    char_name: "Nancy",
    ethnicity: "American",
    name: "Millie Natalia Dyer"
  },
  {
    show_name: "The OA",
    char_name: "Prairie Johnson",
    ethnicity: "American",
    name: "Brit Marling"
  },
  {
    show_name: "Friends",
    char_name: "Rachel Green",
    ethnicity: "American",
    name: "Jennifer Aniston"
  },
  {
    show_name: "Friends",
    char_name: "Joey Tribbiani",
    ethnicity: "American",
    name: "Matt LeBlanc"
  },
  {
    show_name: "Friends",
    char_name: "Chandler Bing",
    ethnicity: "American",
    name: "Matthew Perry"
  },
  {
    show_name: "Friends",
    char_name: "Monica Geller",
    ethnicity: "American",
    name: "Courtney Cox"
  },
  {
    show_name: "Friends",
    char_name: "Ross Geller",
    ethnicity: "American",
    name: "David Schwimmer"
  },
  {
    show_name: "Friends",
    char_name: "Phoebe Buffay",
    ethnicity: "American",
    name: "Lisa Kudrow"
  },
  {
    show_name: "Handmaid's Tale",
    char_name: "June Osborne aka Offred",
    ethnicity: "American",
    name: "Elisabeth Moss"
  },
  {
    show_name: "Black Mirror",
    char_name: "Ashley O",
    ethnicity: "American",
    name: "Miley Cyrus"
  },
  {
    show_name: "Orange is the New Black",
    char_name: "Piper Chapman",
    ethnicity: "American",
    name: "Taylor Schilling"
  },
  {
    show_name: "Imposters",
    char_name: "Maddie",
    ethnicity: "Israeli",
    name: "Inbar Lavi"
  },
  {
    show_name: "The Act",
    char_name: "Gypsy Blanchard",
    ethnicity: "American",
    name: "Joey King"
  },
  {
    show_name: "Broadchurch",
    char_name: "Detective Alec Hardy",
    ethnicity: "Scottish",
    name: "David Tennant"
  },
  {
    show_name: "Parks and Rec",
    char_name: "Leslie Knope",
    ethnicity: "American",
    name: "Amy Poehler"
  },
  {
    show_name: "Silicon Valley",
    char_name: "Gilfoyle",
    ethnicity: "American",
    name: "Martin Starr"
  },
  {
    show_name: "Dear White People",
    char_name: "Samantha White",
    ethnicity: "American",
    name: "Logan Browning"
  },
  {
    show_name: "True Detective",
    char_name: "Rust Cohle",
    ethnicity: "American",
    name: "Matthew McConaughey"
  },
  {
    show_name: "Snowfall",
    char_name: "Franklin Saint",
    ethnicity: "English",
    name: "Damson Idris"
  },
  {
    show_name: "Claws",
    char_name: "Desna Simms",
    ethnicity: "American",
    name: "Niecy Nash"
  },
  {
    show_name: "Big Little Lies",
    char_name: "Madeline Martha Mackenzie",
    ethnicity: "American",
    name: "Reese Witherspoon"
  },
  {
    show_name: "Veep",
    char_name: "Selina Meyer",
    ethnicity: "American",
    name: "Julia Louis-Dreyfus"
  },
  {
    show_name: "Insecure",
    char_name: "Issa Dee",
    ethnicity: "American",
    name: "Issa Rae"
  },
  {
    show_name: "Seinfield",
    char_name: "Jerry Seinfield",
    ethnicity: "American",
    name: "Jerry Seinfield"
  },
  {
    show_name: "Entourage",
    char_name: "Vincent Chase",
    ethnicity: "American",
    name: "Adrian Grenier"
  },
  {
    show_name: "Sex and the City",
    char_name: "Carrie Bradshaw",
    ethnicity: "American",
    name: "Sarah Jessica Parker"
  },
  {
    show_name: "Madmen",
    char_name: "Don Draper",
    ethnicity: "American",
    name: "Jon Hamm"
  },
  {
    show_name: "Breaking Bad",
    char_name: "Walter White",
    ethnicity: "American",
    name: "Bryan Cranston"
  },
  {
    show_name: "Bates Motel",
    char_name: "Norman Bates",
    ethnicity: "English",
    name: "Freddie Highmore"
  },
  {
    show_name: "Girls",
    char_name: "Hannah Horvath",
    ethnicity: "American",
    name: "Lena Dunham"
  },
  {
    show_name: "Schitts Creek",
    char_name: "David Rose",
    ethnicity: "Canadian",
    name: "Daniel Levy"
  },
  {
    show_name: "The SInner",
    char_name: "Cora",
    ethnicity: "American",
    name: "Jessica Biel"
  },
  {
    show_name: "Arrested Development",
    char_name: "Michael Bluth",
    ethnicity: "American",
    name: "Jason Bateman"
  },
  {
    show_name: "Chernobyl",
    char_name: "Boris Shcherbina",
    ethnicity: "Swedish",
    name: "Stellan Skarsgard"
  },
  {
    show_name: "Dark",
    char_name: "Jonas Kahnwald",
    ethnicity: "German",
    name: "Louis Hofmann"
  },
  {
    show_name: "Game of Thrones",
    char_name: "Daenerys Targaryen",
    ethnicity: "British",
    name: "Emilia Clarke"
  },
  {
    show_name: "Game of Thrones",
    char_name: "Jon Snow",
    ethnicity: "English",
    name: "Kit Harington"
  },
  {
    show_name: "Game of Thrones",
    char_name: "Arya Stark",
    ethnicity: "English",
    name: "Maisie Williams"
  },
  {
    show_name: "The Path",
    char_name: "Eddie Lane",
    ethnicity: "American",
    name: "Aaron Paul"
  },
  {
    show_name: "The Path",
    char_name: "Cal Robertson",
    ethnicity: "English",
    name: "Hugh Dancy"
  },
  {
    show_name: "The Path",
    char_name: "Sarah Lane",
    ethnicity: "American",
    name: "Michelle Monaghan"
  },
  {
    show_name: "Sherlock",
    char_name: "Sherlock Holmes",
    ethnicity: "British",
    name: "Benedict Cumberbatch"
  },
  {
    show_name: "Dexter",
    char_name: "Dexter Morgan",
    ethnicity: "American",
    name: "Michael C. Hall"
  },
  {
    show_name: "Dexter",
    char_name: "Debra Morgan",
    ethnicity: "American",
    name: "Jennifer Carpenter"
  }
];

module.exports = characterList;

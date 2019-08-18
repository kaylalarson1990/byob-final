let showsList = [
  {
    title: "The Office",
    date: "March 24, 2005",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_UY268_CR7,0,182,268_AL_.jpg",
    characters: [
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
      }
    ]
  },
  {
    title: "Stranger Things",
    date: "July 15, 2016",
    tv_source: "Netflix",
    cover_image:
      "https://pbs.twimg.com/profile_images/1141764757839634432/dyrfxzTV.jpg",
    characters: [
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
      }
    ]
  },
  {
    title: "The OA",
    date: "December 16, 2016",
    tv_source: "Netflix",
    cover_image:
      "http://seriexpert.com.br/wp-content/uploads/2016/12/OA-696x411.jpg",
    characters: [
      {
        show_name: "The OA",
        char_name: "Prairie Johnson",
        ethnicity: "American",
        name: "Brit Marling"
      }
    ]
  },
  {
    title: "Friends",
    date: "September 22, 1994",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    characters: [
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
      }
    ]
  },
  {
    title: "Handmaid's Tale",
    date: "April 26, 2017",
    tv_source: "Hulu",
    cover_image: "https://i.ytimg.com/sh/vEQdsO-JmQW4Kl1UO2MImg/market.jpg",
    characters: [
      {
        show_name: "Handmaid's Tale",
        char_name: "June Osborne aka Offred",
        ethnicity: "American",
        name: "Elisabeth Moss"
      }
    ]
  },
  {
    title: "Black Mirror",
    date: "December 4, 2011",
    tv_source: "Netflix",
    cover_image:
      "https://www.endemolshinegroup.com/wp-content/uploads/2018/05/Black-mirror-for-web.png",
    characters: [
      {
        show_name: "Black Mirror",
        char_name: "Ashley O",
        ethnicity: "American",
        name: "Miley Cyrus"
      }
    ]
  },
  {
    title: "Orange is the New Black",
    date: "July 11, 2013",
    tv_source: "Netflix",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51I5yhhBHiL._SY445_.jpg",
    characters: [
      {
        show_name: "Orange is the New Black",
        char_name: "Piper Chapman",
        ethnicity: "American",
        name: "Taylor Schilling"
      },
      {
        show_name: "Orange is the New Black",
        char_name: "Alex Vause",
        ethnicity: "American",
        name: "Laura Prepon"
      },
      {
        show_name: "Orange is the New Black",
        char_name: "Nicky Nichols",
        ethnicity: "American",
        name: "Natasha Lyonne"
      }
    ]
  },
  {
    title: "Imposters",
    date: "February 7, 2017",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BNzYzMTY2MzYyNF5BMl5BanBnXkFtZTgwMjE2NDMzNTM@._V1_.jpg",
    characters: [
      {
        show_name: "Imposters",
        char_name: "Maddie",
        ethnicity: "Israeli",
        name: "Inbar Lavi"
      }
    ]
  },
  {
    title: "The Act",
    date: "March 20, 2019",
    tv_source: "Hulu",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BZDVkYzAwMDUtZmRlMC00ZGE4LWFkNDktYjE0YjcxYzgxOTU5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
    characters: [
      {
        show_name: "The Act",
        char_name: "Gypsy Blanchard",
        ethnicity: "American",
        name: "Joey King"
      },
      {
        show_name: "The Act",
        char_name: "Dee Dee Blanchard",
        ethnicity: "American",
        name: "Patricia Arquette"
      }
    ]
  },
  {
    title: "Broadchurch",
    date: "March 4, 2013",
    tv_source: "Netflix",
    cover_image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Broadchurch_Series_3.png/220px-Broadchurch_Series_3.png",
    characters: [
      {
        show_name: "Broadchurch",
        char_name: "Detective Alec Hardy",
        ethnicity: "Scottish",
        name: "David Tennant"
      }
    ]
  },
  {
    title: "Parks and Rec",
    date: "April 9, 2009",
    tv_source: "Netflix",
    cover_image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Parks_and_Recreation_Season_6_Box_Art.jpg/220px-Parks_and_Recreation_Season_6_Box_Art.jpg",
    characters: [
      {
        show_name: "Parks and Rec",
        char_name: "Leslie Knope",
        ethnicity: "American",
        name: "Amy Poehler"
      },
      {
        show_name: "Parks and Rec",
        char_name: "April Ludgate",
        ethnicity: "American",
        name: "Aubrey Plaza"
      }
    ]
  },
  {
    title: "Silicon Valley",
    date: "April 6, 2014",
    tv_source: "Hulu",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/91WkV6-KBAL._RI_.jpg",
    characters: [
      {
        show_name: "Silicon Valley",
        char_name: "Gilfoyle",
        ethnicity: "American",
        name: "Martin Starr"
      },
      {
        show_name: "Silicon Valley",
        char_name: "Richard Hendricks",
        ethnicity: "Canadian",
        name: "Thomas Middleditch"
      },
      {
        show_name: "Silicon Valley",
        char_name: "Jared Dunn",
        ethnicity: "American",
        name: "Richard Hendricks "
      },
      {
        show_name: "Silicon Valley",
        char_name: "Dinesh",
        ethnicity: "American-Pakistani",
        name: "Kumail Nanjiani"
      },
      {
        show_name: "Silicon Valley",
        char_name: "Erlich Bachman",
        ethnicity: "American",
        name: "T.J. Miller"
      }
    ]
  },
  {
    title: "Dear White People",
    date: "April 28, 2017",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BMTU3NTg0NDY3N15BMl5BanBnXkFtZTgwMTYxMTIzNTM@._V1_SY1000_CR0,0,735,1000_AL_.jpg",
    characters: [
      {
        show_name: "Dear White People",
        char_name: "Samantha White",
        ethnicity: "American",
        name: "Logan Browning"
      }
    ]
  },
  {
    title: "True Detective",
    date: "January 12, 2014",
    tv_source: "HBO",
    cover_image:
      "https://vignette.wikia.nocookie.net/cinemorgue/images/f/fd/True_Detective.jpg/revision/latest?cb=20160307003214",
    characters: [
      {
        show_name: "True Detective",
        char_name: "Rust Cohle",
        ethnicity: "American",
        name: "Matthew McConaughey"
      },
      {
        show_name: "True Detective",
        char_name: "Martin Hart",
        ethnicity: "American",
        name: "Woody Harrelson"
      }
    ]
  },
  {
    title: "Snowfall",
    date: "July 5, 2017",
    tv_source: "Hulu",
    cover_image:
      "https://ib1.hulu.com/user/v3/artwork/ce0d176c-8a89-454d-bed4-b91ad2e0d6e6?base_image_bucket_name=image_manager&base_image=781fc77f-9620-4388-96c6-cc9ab56bdcbd&size=400x600&format=jpeg",
    characters: [
      {
        show_name: "Snowfall",
        char_name: "Franklin Saint",
        ethnicity: "English",
        name: "Damson Idris"
      }
    ]
  },
  {
    title: "Claws",
    date: "June 11, 2017",
    tv_source: "Hulu",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BYjdkYWVmMGYtMzQ3YS00MmE0LWEyNWItNzM4ZjBhMzVhMTE3XkEyXkFqcGdeQXVyODQyNDU2MTU@._V1_.jpg",
    characters: [
      {
        show_name: "Claws",
        char_name: "Desna Simms",
        ethnicity: "American",
        name: "Niecy Nash"
      }
    ]
  },
  {
    title: "Big Little Lies",
    date: "February 19, 2017",
    tv_source: "HBO",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/917HST0bueL._SX300_.jpg",
    characters: [
      {
        show_name: "Big Little Lies",
        char_name: "Madeline Martha Mackenzie",
        ethnicity: "American",
        name: "Reese Witherspoon"
      },
      {
        show_name: "Big Little Lies",
        char_name: "Celeste Wright",
        ethnicity: "American-Australian",
        name: "Nicole Kidman"
      },
      {
        show_name: "Big Little Lies",
        char_name: "Jane Chapman",
        ethnicity: "American",
        name: "Shailene Woodley"
      }
    ]
  },
  {
    title: "Veep",
    date: "April 22, 2012",
    tv_source: "HBO",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BOWE3MDgzZGYtOTY5Mi00ZThhLWEyYjMtZDI4N2QwZmNlOTIzXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    characters: [
      {
        show_name: "Veep",
        char_name: "Selina Meyer",
        ethnicity: "American",
        name: "Julia Louis-Dreyfus"
      }
    ]
  },
  {
    title: "Insecure",
    date: "October 9, 2016",
    tv_source: "HBO",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BMjMyMTIxNzU2NV5BMl5BanBnXkFtZTgwNDQxMzEyNjM@._V1_.jpg",
    characters: [
      {
        show_name: "Insecure",
        char_name: "Issa Dee",
        ethnicity: "American",
        name: "Issa Rae"
      }
    ]
  },
  {
    title: "Seinfeld",
    date: "July 5, 1989",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    characters: [
      {
        show_name: "Seinfeld",
        char_name: "Jerry Seinfeld",
        ethnicity: "American",
        name: "Jerry Seinfeld"
      },
      {
        show_name: "Seinfeld",
        char_name: "Elaine Benes",
        ethnicity: "American",
        name: "Julia Louis-Dreyfus"
      },
      {
        show_name: "Seinfeld",
        char_name: "George Costanza",
        ethnicity: "American",
        name: "Jason Alexander"
      },
      {
        show_name: "Seinfeld",
        char_name: "Kramer",
        ethnicity: "American",
        name: "Michael Richards"
      }
    ]
  },
  {
    title: "Entourage",
    date: "July 18, 2004",
    tv_source: "HBO",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/41hHm2eBbvL.jpg",
    characters: [
      {
        show_name: "Entourage",
        char_name: "Vincent Chase",
        ethnicity: "American",
        name: "Adrian Grenier"
      },
      {
        show_name: "Entourage",
        char_name: "Eric Murphy",
        ethnicity: "American",
        name: "Kevin Connolly"
      }
    ]
  },
  {
    title: "Sex and the City",
    date: "June 6, 1998",
    tv_source: "HBO",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BNGEyNDRjM2QtY2VlYy00OWRhLWI4N2UtZTM4NDc0MGM0YzBkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
    characters: [
      {
        show_name: "Sex and the City",
        char_name: "Carrie Bradshaw",
        ethnicity: "American",
        name: "Sarah Jessica Parker"
      },
      {
        show_name: "Sex and the City",
        char_name: "Samantha Jones",
        ethnicity: "British-Canadian",
        name: "Kim Cattrall"
      },
      {
        show_name: "Sex and the City",
        char_name: "Charlotte York Goldenblatt",
        ethnicity: "American",
        name: "Kristin Davis"
      },
      {
        show_name: "Sex and the City",
        char_name: "Miranda Hobbes",
        ethnicity: "American",
        name: "Cynthia Nixon"
      }
    ]
  },
  {
    title: "Madmen",
    date: "July 19, 2007",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BMjMwNzk5Nzg2OV5BMl5BanBnXkFtZTgwMjg1OTk1NDE@._V1_.jpg",
    characters: [
      {
        show_name: "Madmen",
        char_name: "Don Draper",
        ethnicity: "American",
        name: "Jon Hamm"
      },
      {
        show_name: "Madmen",
        char_name: "Joan Holloway",
        ethnicity: "American",
        name: "Christina Hendricks"
      },
      {
        show_name: "Madmen",
        char_name: "Betty Drapper",
        ethnicity: "American",
        name: "January Jones"
      }
    ]
  },
  {
    title: "Breaking Bad",
    date: "January 20, 2008",
    tv_source: "Netflix",
    cover_image:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/01/Breaking-Bad-Movie-Characters.jpg",
    characters: [
      {
        show_name: "Breaking Bad",
        char_name: "Walter White",
        ethnicity: "American",
        name: "Bryan Cranston"
      }
    ]
  },
  {
    title: "Bates Motel",
    date: "March 18, 2013",
    tv_source: "Netflix",
    cover_image:
      "https://vignette.wikia.nocookie.net/batesmotel/images/d/d5/Season2.jpg/revision/latest?cb=20141103233619",
    characters: [
      {
        show_name: "Bates Motel",
        char_name: "Norman Bates",
        ethnicity: "English",
        name: "Freddie Highmore"
      },
      {
        show_name: "Bates Motel",
        char_name: "Norma Bates",
        ethnicity: "American",
        name: "Vera Farmiga"
      }
    ]
  },
  {
    title: "Girls",
    date: "May 12, 2018",
    tv_source: "HBO",
    cover_image:
      "https://hbowatch.com/wp-content/uploads/2016/01/GirlsofGIRLS.jpg",
    characters: [
      {
        show_name: "Girls",
        char_name: "Hannah Horvath",
        ethnicity: "American",
        name: "Lena Dunham"
      },
      {
        show_name: "Girls",
        char_name: "Jessa Johansson",
        ethnicity: "English-American",
        name: "Jemima Kirke"
      },
      {
        show_name: "Girls",
        char_name: "Marnie Michaels",
        ethnicity: "American",
        name: "Allison Williams"
      }
    ]
  },
  {
    title: "Schitts Creek",
    date: "January 13, 2015",
    tv_source: "Netflix",
    cover_image: "https://i.ytimg.com/sh/zHT7rJoHumdd4AqongsW9g/market.jpg",
    characters: [
      {
        show_name: "Schitts Creek",
        char_name: "David Rose",
        ethnicity: "Canadian",
        name: "Daniel Levy"
      }
    ]
  },
  {
    title: "The Sinner",
    date: "August 2, 2017",
    tv_source: "Netflix",
    cover_image:
      "https://resizing.flixster.com/eefS4ufoBOj9ZHSsDL_znSoATic=/206x305/v1.dDszMjUxODM7ajsxODEzODsxMjAwOzIwMDA7MzAwMA",
    characters: [
      {
        show_name: "The Sinner",
        char_name: "Cora Tannetti",
        ethnicity: "American",
        name: "Jessica Biel"
      },
      {
        show_name: "The Sinner",
        char_name: "Detective Harry Ambrose",
        ethnicity: "American",
        name: "Bill Pullman"
      },
      {
        show_name: "The Sinner",
        char_name: "Vera Walker",
        ethnicity: "American",
        name: "Carrie Coon"
      },
      {
        show_name: "The Sinner",
        char_name: "Mason Tannetti",
        ethnicity: "American",
        name: "Christopher Abbott"
      }
    ]
  },
  {
    title: "Arrested Development",
    date: "November 2, 2003",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    characters: [
      {
        show_name: "Arrested Development",
        char_name: "Michael Bluth",
        ethnicity: "American",
        name: "Jason Bateman"
      },
      {
        show_name: "Arrested Development",
        char_name: "Tobias Funke",
        ethnicity: "American",
        name: "David Cross"
      },
      {
        show_name: "Arrested Development",
        char_name: "George Michael Bluth",
        ethnicity: "American",
        name: "Michael Cera"
      }
    ]
  },
  {
    title: "Chernobyl",
    date: "May 6, 2019",
    tv_source: "HBO",
    cover_image:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg",
    characters: [
      {
        show_name: "Chernobyl",
        char_name: "Boris Shcherbina",
        ethnicity: "Swedish",
        name: "Stellan Skarsgard"
      },
      {
        show_name: "Chernobyl",
        char_name: "Valery Legasov",
        ethnicity: "British",
        name: "Jared Harris"
      },
      {
        show_name: "Chernobyl",
        char_name: "Ulana Khomyuk",
        ethnicity: "English",
        name: "Emily Watson"
      }
    ]
  },
  {
    title: "Dark",
    date: "December 1, 2017",
    tv_source: "Netflix",
    cover_image:
      "https://static.next-episode.net/tv-shows-images/huge/dark.jpg",
    characters: [
      {
        show_name: "Dark",
        char_name: "Jonas Kahnwald",
        ethnicity: "German",
        name: "Louis Hofmann"
      },
      {
        show_name: "Dark",
        char_name: "Martha Nielsen",
        ethnicity: "German",
        name: "Lisa Vicari"
      }
    ]
  },
  {
    title: "Game of Thrones",
    date: "April 17, 2011",
    tv_source: "HBO",
    cover_image: "https://i.ytimg.com/sh/ow8-ZftRoZelY710tvO45Q/market.jpg",
    characters: [
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
      }
    ]
  },
  {
    title: "The Path",
    date: "March 30, 2016",
    tv_source: "Hulu",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BMjQ4MzMzNzUyN15BMl5BanBnXkFtZTgwODU2NTI0NDM@._V1_.jpg",
    characters: [
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
      }
    ]
  },
  {
    title: "Sherlock",
    date: "July 25, 2010",
    tv_source: "Netflix",
    cover_image:
      "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L._SY445_.jpg",
    characters: [
      {
        show_name: "Sherlock",
        char_name: "Sherlock Holmes",
        ethnicity: "British",
        name: "Benedict Cumberbatch"
      }
    ]
  },
  {
    title: "Dexter",
    date: "October 1, 2006",
    tv_source: "Netflix",
    cover_image:
      "https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_.jpg",
    characters: [
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
    ]
  }
];

module.exports = showsList;

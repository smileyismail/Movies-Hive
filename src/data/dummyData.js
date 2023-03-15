const dummyData = [
  {
    id: 1,
    title: "Hyacinthie Andren",
    releaseDate: "12/27/2022",
    genre: "Drama",
    poster: "http://dummyimage.com/1296x1920.png/5fa2dd/ffffff",
    description:
      "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
  },
  {
    id: 2,
    title: "Felicio Craddock",
    releaseDate: "2/1/2023",
    genre: "Crime",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem",
  },
  {
    id: 3,
    title: "Zared Powell",
    releaseDate: "11/16/2022",
    genre: "Triller",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
  },
  {
    id: 4,
    title: "Giulia Bus",
    releaseDate: "9/4/2022",
    genre: "Triller",
    poster: "http://dummyimage.com/1296x1920.png/ff4444/ffffff",
    description:
      "cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis",
  },
  {
    id: 5,
    title: "Eveleen Clipsham",
    releaseDate: "4/26/2022",
    genre: "Triller",
    poster: "http://dummyimage.com/1296x1920.png/ff4444/ffffff",
    description:
      "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
  },
  {
    id: 6,
    title: "Dimitry Randleson",
    releaseDate: "8/19/2022",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/5fa2dd/ffffff",
    description:
      "nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat",
  },
  {
    id: 7,
    title: "Janka Prahm",
    releaseDate: "12/2/2022",
    genre: "Drama",
    poster: "http://dummyimage.com/1296x1920.png/5fa2dd/ffffff",
    description:
      "dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non",
  },
  {
    id: 8,
    title: "Tess Clixby",
    releaseDate: "10/5/2022",
    genre: "Science fiction",
    poster: "http://dummyimage.com/1296x1920.png/5fa2dd/ffffff",
    description:
      "convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum",
  },
  {
    id: 9,
    title: "Deeanne Oen",
    releaseDate: "3/12/2023",
    genre: "Action",
    poster: "http://dummyimage.com/1296x1920.png/dddddd/000000",
    description:
      "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
  },
  {
    id: 10,
    title: "Chad Noel",
    releaseDate: "8/24/2022",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/5fa2dd/ffffff",
    description:
      "mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue",
  },
  {
    id: 11,
    title: "Hunt Gadsdon",
    releaseDate: "1/25/2023",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
  },
  {
    id: 12,
    title: "Sigfrid Comberbeach",
    releaseDate: "10/11/2022",
    genre: "Action",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus",
  },
  {
    id: 13,
    title: "Lonee Shovlin",
    releaseDate: "9/15/2022",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar",
  },
  {
    id: 14,
    title: "Eolanda Merriment",
    releaseDate: "12/17/2022",
    genre: "Comedy",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus",
  },
  {
    id: 15,
    title: "Nickie Anthon",
    releaseDate: "1/17/2023",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis",
  },
  {
    id: 16,
    title: "Rosina Puddle",
    releaseDate: "6/4/2022",
    genre: "Drama",
    poster: "http://dummyimage.com/1296x1920.png/ff4444/ffffff",
    description:
      "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui",
  },
  {
    id: 17,
    title: "Werner Mallabon",
    releaseDate: "5/20/2022",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/cc0000/ffffff",
    description:
      "turpis donec posuere metus vitae ipsum aliquam non mauris morbi non",
  },
  {
    id: 18,
    title: "Reuven Maiden",
    releaseDate: "6/9/2022",
    genre: "Crime",
    poster: "http://dummyimage.com/1296x1920.png/dddddd/000000",
    description:
      "dui proin leo odio porttitor id consequat in consequat ut nulla",
  },
  {
    id: 19,
    title: "Katrina Shackel",
    releaseDate: "9/29/2022",
    genre: "Drama",
    poster: "http://dummyimage.com/1296x1920.png/ff4444/ffffff",
    description:
      "morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
  },
  {
    id: 20,
    title: "Sherm Parnell",
    releaseDate: "5/10/2022",
    genre: "Horror",
    poster: "http://dummyimage.com/1296x1920.png/5fa2dd/ffffff",
    description:
      "fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
  },
];

export default dummyData;

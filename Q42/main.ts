function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  function show_magicians(magicians: string[]) {
    console.log(magicians);
  }
  
  const magicians: string[] = ['Arifa', 'Shaheena', 'Faheem', 'Hayat', 'Shehzad', 'Rose'];
  make_great(magicians);
  show_magicians(magicians);
const people = ['Major Tom', 'Ziggy Stardust', 'Aladdin Sane', 'Halloween Jack', 'The Thin White Duke', 'The DJ', 'Pierrot', 'Screaming Lord Byron', 'Jareth The Goblin King', 'The Man Who Fell to Earth', 'Nathan Adler', 'The Blind Prophet', 'The Soul Man']
const adjectives = ['strange', 'bizarre', 'curious', 'peculiar', 'eccentric', 'phantasmagoric', 'outlandish', 'kinky', 'spaced-out', 'righteous', 'capricious', 'mercurial', 'puckish', 'tempermental', 'vacillating', 'mischievious', 'impish', 'knavish', 'roguish', 'naughty', 'scampish', 'sprightly', 'tricksy', 'pallid', 'coquettish', 'promethean', 'lysergic', 'glamorous', 'ephemeral']
const places = ['spaceship full of endearingly freaky little creatures', 'moon of freaky freaky incredulity', 'pirouhetting planets of flippant freakiness', 'sun of funky funky androgeny', 'galaxy of freaky freaky oddities', 'solar system of freaky freaky despondency', 'star of funky funky nightmares', 'black hole of freaky freaky glamor', 'white dwarf star of funky funky terminity', 'red giant star of soporific psychedelia', 'asteroid belt of tranquility and trippiness', 'comet dancing across the funky funky sky', 'cosmic ocean of serindipitous sadness']
const lyrics = ['Im an alligator, Im a mama-papa coming for you. Im the space invader, Ill be a rock-n-rolling bitch for you...', 
                'Keep your mouth shut, youre squawking like a pink monkey bird, and Im busting up my brains for the words...', 
                'Keep your electric eye on me, babe, put your ray gun to my head. Press your space face close to mine, love. Freak out in a moonage daydream yeah...',  
                'We live for just these twenty years, do we have to die for the fifty more?...', 
                'Oh no, love, youre not alone. No matter what or who youve been, no matter when or where youve seen. All the knives seem to lacerate your brain. Ive had my share, Ill help you with the pain...', 
                'Memories that flutter like bats out of hell, stab you from the city spires. Life wasnt worth the balance, or the crumpled paper it was written on...', 
                'All my violence, raining tears upon the sheet. Im bewildered, for were strangers when we meet...', 
                'Ashes to ashes funk to funky, we know Major Toms a junkie. Strung out in heavens high, hitting an all time low...',
                'When its good, its really good, and when its bad- I go to pieces...', 
                'Ha ha ha, hee hee hee. Im a laughing gnome and you cant catch me!', 
                'And these children that you spit on, as they try to change their worlds, are immune to your consultations. Theyre quite aware of what theyre going through...', 
                'And it makes me sad, so Ill dance my life away- a million dreams, a million scars...', 
                'I smiled sadly for a love I could not obey, Lady Stardust sang his songs of sadness and dismay...', 
                'I look out my window, what do I see? A crack in the sky and a hand reaching down to me. All the nightmares came today, and it looks as though theyre here to stay...']

let getRandomElement = arr => {
    return arr[Math.floor(Math.random()* arr.length)];
}

let generateMessage = () => {
    const person = getRandomElement(people);
    const adjective = getRandomElement(adjectives);
    const place = getRandomElement(places);
    const lyric = getRandomElement(lyrics);

    return `As ${person} turned his bleary eyes skyward, towards the ${adjective} ${place}, he thought to himself, "${lyric}"`;
}

console.log(generateMessage());

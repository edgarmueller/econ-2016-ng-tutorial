/// <reference path="../_references.ts" />

class AlbumRepository extends InMemoryRepository<Album> { }

angular
    .module('econTutorial').service('AlbumRepository', AlbumRepository)
    .run(['AlbumRepository', (repo) => {
        let backToBlack = new Album(0,
            "Back to Black",
            [
                "Rehab",
                "You Know I'm No Good",
                "Me And Mr Jones",
                "Just Friends",
                "Back To Black",
                "Love Is A Losing Game",
                "Tears Dry On Their Own",
                "Wake Up Alone",
                "Some Unholy War",
                "He Can Only Hold Her",
                "Addicted"
            ],
            2006);

        let frank = new Album(0,
            "Frank",
            [
                "Intro",
                "Stronger Than Me",
                "You Sent Me Flying",
                "Cherry",
                "Know You Now",
                "Fuck Me Pumps",
                "I Heard Love Is Blind",
                "Moody's Mood For Love",
                "Teo Licks",
                "(There Is) No Greater Love",
                "In My Bed",
                "Take The Box",
                "October Song",
                "What Is It About Men?",
                "Help Yourself",
                "Amy Amy Amy",
                "Outro",
                "Mr. Magic (Through The Smoke)"
            ],
            2003
        );


        let dummy = new Album(1,
            "Dummy",
            [
                "Mysterons",
                "Sour Times",
                "Strangers",
                "It Could Be Sweet",
                "Wandering Star",
                "It's A Fire",
                "Numb",
                "Roads",
                "Pedestal",
                "Biscuit",
                "Glory Box",
                "Sour Sour Times",
                "Theme From To Kill A Dead Man"
            ],
            1995);

        let portishead = new Album(1,
            "Portishead",
            [
                "Cowboys",
                "All Mine",
                "Undenied",
                "Half Day Closing",
                "Over",
                "Humming",
                "Mourning Air",
                "Seven Months",
                "Only You",
                "Elysium",
                "Western Eyes"
            ],
            1997
        );

        let velvetUnderground = new Album(2,
            "The Velvet Underground & Nico",
            [
                "Sunday Morning",
                "I'm Waiting For The Man",
                "Femme Fatale",
                "Venus In Furs",
                "Run, Run, Run",
                "All Tomorrow's Parties",
                "Heroin",
                "There She Goes Again",
                "I'll Be Your Mirror",
                "Black Angel's Death Song",
                "European Son To Delmore Schwartz"
            ],
            1995);

        let loaded = new Album(2,
            "Loaded",
            [
                "Who Loves The Sun",
                "Sweet Jane",
                "Rock & Roll",
                "Cool It Down",
                "New Age",
                "Head Held High",
                "Lonesome Cowboy Bill",
                "I Found A Reason",
                "Train Round The Bend",
                "Oh Sweet Nuthin'"
            ],
            1970
        );

        let roxyMusic = new Album(3,
            "Roxy Music",
            [
                "Remake/Re-Model",
                "Ladytron",
                "If There Is Something",
                "2 H.B.",
                "The Bob (Medley)",
                "Chance Meeting",
                "Would You Believe?",
                "Sea Breezes",
                "Bitters End",
            ],
            1972
        );

        let doors = new Album(4,
            "The Doors",
            [
                "Break On Through (To The Other Side)",
                "Soul Kitchen",
                "The Crystal Ship",
                "Twentieth Century Fox",
                "Alabama Song (Whisky Bar)",
                "Light My Fire",
                "Back Door Man",
                "I Looked At You",
                "End Of The Night",
                "Take It As It Comes",
                "The End"
            ],
            1967
        );

        repo.create(backToBlack);
        repo.create(frank);
        repo.create(dummy);
        repo.create(portishead);
        repo.create(velvetUnderground);
        repo.create(loaded);
        repo.create(roxyMusic);
        repo.create(doors);
    }]);


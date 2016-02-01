/// <reference path="../_references.ts"/>

describe('The Album repository', () => {

    var albumRepo: AlbumRepository;

    // load all necessary modules and templates
    beforeEach(angular.mock.module('econTutorial'));
    beforeEach(angular.mock.inject((AlbumRepository) => {
        albumRepo = AlbumRepository;
    }));
    beforeEach(() => { albumRepo.clear(); });

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

    it("should support creating new albums", () => {
        albumRepo.create(backToBlack);
        albumRepo.all().then((result) => {
           expect(result.length).toBe(1);
        });
    });

});


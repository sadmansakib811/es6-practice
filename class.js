// syntactic sugar
// module 32-7
class Instructor {
    name;
    designation ='Web course instructor' 
    team = 'web team'
    location;
    constructor(name, location){
       this.name = name;
       this.location = location;
    }

    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }

    createQuiz(module){
        console.log(`create quiz of module ${module}`)
    }

}

const sadman = new Instructor('Sadman', 'Dortmund');
console.log(sadman);
sadman.createQuiz(60);
sadman.startSupportSession('9 AM morning')

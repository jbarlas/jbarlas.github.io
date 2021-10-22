var commandText = function(text){
    return "[[b;;]" + text + "]";
}

var titleText = function(text){
    return "[[u;inherit;]" + text + "]";
}

var AnimatedText = function(text, bool){
    console.log(bool)
    if (bool){
        return this.echo(text, {typing: true, delay: 200});
    }
    else {
        return this.echo(text)
    }
}

var App = {
    /*
    motd: function(ret){
        if (typeof ret === 'undefined') ret = false;
        var greetText = 
         
            "_____________________________________________________\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "|\tWelcome to my personal website!\t|\n"+
            "|\tPlease type " + commandText('help') + " for a list of commands.  \t\t\t\t\t\t\t\t\t|\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "####################################################################################\n";

        if (!ret) {
            this.echo("\n" + greetText);
        } else {
            return greetText;
        }
    }
    , */   

    help: function(){
        this.echo();
        this.echo("|  " + commandText("about") + "              > Summary of me");
        this.echo("|  " + commandText("exp") + "                > Work experiences");
        this.echo("|  " + commandText("proj") + "               > Projects I've worked on"); 
        this.echo("|  " + commandText("lang") + "               > Language proficiencies");
        this.echo();
        this.echo("|  " + commandText("github") + "             > View my repositories on GitHub");
        this.echo("|  " + commandText("linkedin") + "           > Connect with me on LinkedIn");
        this.echo("|  " + commandText("resume") + "             > Returns my experiences and projects");
        this.echo("     --open             - Use this flag to directly open link");
        this.echo();
        this.echo("|  " + commandText("contact") + "            > Contact me")
        this.echo("|  " + commandText("credits") + "            > Credits for this website");
        this.echo();
        this.echo("|  " + commandText("all") + "                > Run all commands");
        this.echo();
    },

    github: function(link){
        if (link == "--open" || link =="-o"){
            window.open("http://www.github.com/jbarlas", '_blank');
        }
        else {
            this.echo();
            this.echo("|  http://www.github.com/jbarlas");
            this.echo();
        }
    },


    linkedin: function(link){
        if (link == "--open" || link =="-o"){
            window.open("http://www.github.com/jbarlas", '_blank');
        }
        else {
            this.echo();
            this.echo("|  http://www.linkedin.com/in/jbarlas1");
            this.echo();
        }
    },

    resume: function(link){
        if (link == "--open" || link =="-o"){
            window.open('files/Resume.pdf', '_blank');
        }
        else {
            this.exec('exp')
            this.exec('proj')
            this.exec('lang')
        }
    },



    about: function(){
        this.echo();
        this.echo("|  Name:              Justin Barlas");
        this.echo("|  Phone:             727-542-4343");
        this.echo("|  Email:             justin_barlas@brown.edu");
        this.echo();
        this.echo("|  Education:         Brown University \n" + 
                  "                      Sc.B. Candidate Applied Mathematics – Computer Science, Urban Studies; 4.0 GPA");
        this.echo();
        this.echo("|  Bio:               I am a student interested in the intersection of math/cs and urban issues, and especially passionate about education equity.\n" +
                  "                      My goal is to bridge these two interests, combining education and technology in a way that is accessible to all.");
        this.echo();
        this.echo("|  Interests:         Ultimate frisbee, longboarding, esports, traveling, hiking, and chess");
        this.echo();
    },

    echo: function(text){
        this.echo(text, {typing: true, delay: 40})
    },

    proj: function(){
        this.echo();
        this.echo("|  " + commandText('Feature Matching') + ", [[i;;]Python]                    > Local feature matching algorithm which gathers interest points from two input images through Harris corner detector\n" + 
        "                                                  detects features using a SIFT-like algorithm, matches features between images using NNDR\n");
        this.echo("|  " + commandText('Adversarial Search') + ", [[i;;]Python]                  > Implements adversarial search algorithms minimax and alpha-beta pruning to solve instances of tic-tac-toe and connect 4\n");
        this.echo("|  " + commandText('Personal Website') + ", [[i;;]Javascript, HTML]          > Personal website created with JQuery Terminal library in Javascript and HTML\n");
        this.echo("|  " + commandText('Search') + ", [[i;;]Java]                                > Search program with simple repl to handle user queries; the search parses XML files, and determines word relevancy \n" + 
                  "                                                  using idf and term frequency, and dermines document authroity through implementing PageRank to score documents\n");
        this.echo("|  " + commandText('stdpNeuralNet') + ", [[i;;]Python]                       > In progress implementation a spike timing dependent plasticity neural network\n");
        this.echo("|  " + commandText('Some Data Thing') + ", [[i;;]Python (Pandas)]            > In progress analysis of Overwatch League data gathered from Kaggle\n");
        this.echo("|  " + commandText('Chess') + ", [[i;;]Java]                                 > In progress implementation of chess with simple repl\n")
        this.echo();
    },

    exp: function(){
        this.echo();
        this.echo("|  " + commandText('Self-employed') + ", [[i;;]Tutor]                        > Explain key concepts in subjects in mathematics ranging from Algebra I to Calculus II \n" +
                  "     Nov 2016-Present                          > Mentor 2-3 students per week on college admissions, providing insight on SAT/ACT content preparation\n" +
                  "                                               > Create curricula to focus student learning, collaborating with parents to ensure maximum student growth");
        this.echo();
        this.echo("|  " + commandText('Teaching Assistant') + ", [[i;;]Computer Science TA]     > Hold office hours for students to ask questions in Pyret (functional) and Python (object oriented) \n" +
                  "     Aug 2021-Present                          > Lead lab section with 25 students per week, supplementing their understanding of the course material\n");
        this.echo();
        this.echo("|  " + commandText('Annenberg Insititute') + ", [[i;;]Fellow]                > Used Stata to clean and summarize data collected from an experiment \n" + 
                  "     Summmer 2021                                  which was designed to aid student socioemotional development through a texting program\n" +
                  "                                               > Performed tasks such as merging and reshaping data sets, creating summary tables, and running linear regressions\n" + 
                  "                                               > Collaborated with two other undergraduate fellows to assist the research team \n" + 
                  "                                                   in data analysis and performing a literature review")                                       
        this.echo();
        this.echo("|  " + commandText('Undergraduate Math Project') + ", [[i;;]Participant]     > Conducted research in number theory investigating repeating decimals, \n" + 
                  "     Summer 2020                                   aiming to determine patterns in their period \n" +
                  "                                               > Collaborated in the research process with two other students to help develop rigorous proofs \n" + 
                  "                                               > Authored findings in a short research paper under the direction of a faculty advisor")
        this.echo();
    },

    lang: function(){
        this.echo();
        this.echo("|  " + commandText('Java') + "               [###################      ]");
        this.echo("|  " + commandText('Python') + "             [##################       ]");
        this.echo("|  " + commandText('Stata') + "              [###############          ]");
        this.echo("|  " + commandText('MATLAB') + "             [#############            ]");
        this.echo("|  " + commandText('Javascript') + "         [##########               ]");
        this.echo("|  " + commandText('HTML') + "               [#########                ]")
        this.echo();
    },

    contact: function(){
        this.echo();
        this.echo("|  " + commandText("Phone") + ":         727-542-4343");
        this.echo("|  " + commandText("Email") + ":         justin_barlas@brown.edu");
        this.echo();
    },

    credits: function(bool){
        text = "\n|  This website was created with " + commandText('Jquery Terminal') + " library by " + commandText('Jakub Jankiewicz') + ": https://terminal.jcubic.pl\n"
        if (bool){
            this.echo(text, {typing: true, delay: 5});
        }
        else {this.echo(text);}
    },


    all: function(){
        this.exec('about');
        this.exec('exp')
        this.exec('proj');
        this.exec('lang')
        this.exec('github');
        this.exec('linkedin');
        this.exec('contact');
        this.exec('credits');
    },

    ls: function(){
        this.exec('help');
    }
}

jQuery((function($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "http://www.linkedin.com/in/jbarlas1";
    } else {
        $('body').terminal(App, {
            greetings: greetings.innerHTML,
            prompt: "[[;plum;]>>> ]",

            onBlur: function() {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    }
}));
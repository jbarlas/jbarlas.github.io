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
        this.echo("|  " + commandText("experiences") + "        > Work experiences");
        this.echo("|  " + commandText("projects") + "           > A list of projects I've worked on"); 
        this.echo();
        this.echo("|  " + commandText("github") + "             > View my repositories on GitHub");
        this.echo("|  " + commandText("linkedin") + "           > Connect with me on LinkedIn");
        this.echo("|  " + commandText("resume") + "             > Returns my experiences and projects ");
        this.echo("     --open             - Directly open link");
        this.echo();
        this.echo("|  " + commandText("contact") + "            > Contact me")
        this.echo("|  " + commandText("credits") + "            > Credits for this website");
        this.echo();
        this.echo("|  " + commandText("all") + "                > Run all commands");
        this.echo();
    },

    github: function(link){
        if (link == "--open"){
            window.open("http://www.github.com/jbarlas", '_blank');
        }
        else {
            this.echo();
            this.echo("|  http://www.github.com/jbarlas");
            this.echo();
        }
    },


    linkedin: function(link){
        if (link == "--open"){
            window.open("http://www.github.com/jbarlas", '_blank');
        }
        else {
            this.echo();
            this.echo("|  http://www.linkedin.com/in/jbarlas1");
            this.echo();
        }
    },

    resume: function(link){
        if (link == "--open"){
            window.open('files/Resume.pdf', '_blank');
        }
        else {
            this.exec('experiences')
            this.exec('projects')
        }
    },



    about: function(){
        this.echo();
        this.echo("|  Name:            Justin Barlas");
        this.echo("|  Phone:           727-542-4343");
        this.echo("|  Email:           justin_barlas@brown.edu");
        this.echo();
        this.echo("|  Education:       Brown University \n" + 
                  "                    Sc.B. Candidate Applied Mathematics – Computer Science, Urban Studies, 4.0 GPA");
        this.echo();
        this.echo("|  Bio:             This is where my bio will go once I write one (:");
        this.echo();
        this.echo("|  Interests:       Ultimate frisbee, running, esports, guitar, and chess");
        this.echo();
    },

    projects: function(){
        this.echo();
        this.echo("|  " + commandText('Search') + ", Java                                Descriptions go here (:        ");
        this.echo("|  " + commandText('Adversarial Search') + ", Python                  Descriptions go here (:        ");
        this.echo("|  " + commandText('Feature Matching') + ", Python                    Descriptions go here (:        ");
        this.echo("|  " + commandText('Neural Net Thing') + ", Python                    Descriptions go here (:        ");
        this.echo("|  " + commandText('Some Data Thing') + ", Python (Pandas)            Descriptions go here (:        ");
        this.echo("|  " + commandText('Chess') + ", Java                                 In progress implementation of chess with simple repl")
        this.echo();
    },

    experiences: function(){
        this.echo();
        this.echo("|  " + commandText('Research'));
        this.echo();
        this.echo("|  " + commandText('Communication'));
        this.echo();
        this.echo("|  " + commandText('Education'));
        this.echo();
    },

    contact: function(){
        this.echo();
        this.echo("|  " + commandText("Email") + ":         justin_barlas@brown.edu");
        this.echo("|  " + commandText("Phone") + ":         727-542-4343");
        this.echo();
    },

    credits: function(bool){
        text = "\n|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl\n"
        if (bool){
            this.echo(text, {typing: true, delay: 20});
        }
        else {this.echo(text);}
    },


    all: function(){
        this.exec('about');
        this.exec('projects');
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
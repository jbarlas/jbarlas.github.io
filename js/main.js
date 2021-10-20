var commandText = function(text){
    return "[[b;;]" + text + "]";
}

var titleText = function(text){
    return "[[u;inherit;]" + text + "]";
}

var App = {
    
    motd: function(ret){
        if (typeof ret === 'undefined') ret = false;
        var greetText = 
         
            "_____________________________________________________\n"+
            "|\tWelcome to my personal website!\t|\n"+
            "|\tPlease type " + commandText('menu') + " for a list of commands.  \t\t\t\t\t\t\t\t\t|\n"+
            "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
            "####################################################################################\n";

        if (!ret) {
            this.echo("\n" + greetText);
        } else {
            return greetText;
        }
    }
    ,    

    help: function(){
        this.echo();
        this.echo("|  " + commandText("about") + "              - Summary of me");
        this.echo("|  " + commandText("projects") + "           - Some recent projects of mine");
        this.echo("|  " + commandText("experiences") + "             - What I can do");
        this.echo();
        this.echo("|  " + commandText("github") + "             - Das github");
        this.echo("|  " + commandText("linkedin") + "           - How I connect for work things");
        this.echo();
        this.echo("|  " + commandText("contact") + "            - Contact me")
        this.echo("|  " + commandText("credits") + "            - Credits for this website");
        this.echo();
        this.echo("|  " + commandText("all") + "                - Run all commands");
        this.echo();
    },

    github: function(){
        this.echo();
        this.echo("|  http://www.github.com/jbarlas");
        this.echo();
    },


    linkedin: function(){
        this.echo();
        this.echo("|  www.linkedin.com/in/jbarlas1");
        this.echo();
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
        this.echo("|  " + commandText('Search') + "                                      Descriptions go here (:        ");
        this.echo("|  " + commandText('Adversarial Search') + "                          Descriptions go here (:        ");
        this.echo("|  " + commandText('Feature Matching') + "                            Descriptions go here (:        ");
        this.echo("|  " + commandText('Neural Net Thing') + "                            Descriptions go here (:        ");
        this.echo("|  " + commandText('Some Data Thing') + "                             Descriptions go here (:        ");
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

    credits: function(){
        this.echo();
        this.echo("|  Site based on the personal website of " + commandText('Ronnie Pyne'));
        this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
        this.echo();
    },


    all: function(){
        this.clear();
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        this.exec('awards');
        this.exec('github');
        this.exec('linkedin');
        this.exec('facebook');
        this.exec('twitter');
        this.exec('contact');
        this.exec('credits');
    },

    ls: function(){
        this.exec('help');
    }
}

jQuery(document).ready(function($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "https://www.linkedin.com/profile/view?id=298500285";
    } else {
        $('body').terminal(App, {
            greetings: greetings.innerHTML,

            onBlur: function() {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    }
});
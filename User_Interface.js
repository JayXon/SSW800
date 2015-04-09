// User Interface
// - mgmgmg
//
// Requires:
// - ...
//
// Authors: Frank DiCola, Sen Jiang, Slavik Turets


pc.script.create('User_Interface', function (app) {

    var User_Interface = function (entity) {
        this.entity = entity;
        this.currentHP = "99999";
    };

    User_Interface.prototype = {

        initialize: function () {
            console.log("User_Interface... Initialized.");
            
            if ( pc.input.Mouse.isPointerLocked() )
            {
                console.log("lockeeeeeeeeeed");
                app.mouse.disablePointerLock();
            }
            
            var buttonMenu = document.createElement('div');
            buttonMenu.id = 'buttMenu';             
            buttonMenu.style.position = 'absolute';
            buttonMenu.style.left = '45%';
            buttonMenu.style.top = '35%';
            //sbuttonMenu.style.zIndex = 1020;

            var playButton = document.createElement('div');
             playButton.className = "ui button green";
             playButton.style.width = '200px';   
             playButton.style.margin = '10px';   
             playButton.id = 'PlayButton';              
             playButton.innerHTML = "<i class=\"play icon\"></i> Play Game ";//"About Game Development"; //divContent;             
             playButton.onclick = this.playGame.bind(this);
             buttonMenu.appendChild(playButton);

             buttonMenu.appendChild(document.createElement('br'));

             var settingsButton = document.createElement('div');
             settingsButton.className = "ui button green";       //"ui vertical labeled icon buttons";
             settingsButton.style.width = '200px';
             settingsButton.style.margin = '10px'; 
             settingsButton.id = 'settingsButton';                         
             settingsButton.innerHTML = "<i class=\"settings icon\"></i> Settings";
             settingsButton.onclick = this.showSettingsuiPanel.bind(this);
             buttonMenu.appendChild(settingsButton); 

             buttonMenu.appendChild(document.createElement('br'));

             var helpButton = document.createElement('div');
             helpButton.className = "ui button green";       //"ui vertical labeled icon buttons";
             helpButton.style.width = '200px';
             helpButton.style.margin = '10px'; 
             helpButton.id = 'helpButton';                         
             helpButton.innerHTML = "<i class=\"help icon\"></i> Help";
             helpButton.onclick = this.showHelpuiPanel.bind(this);
             buttonMenu.appendChild(helpButton); 

             buttonMenu.appendChild(document.createElement('br'));

             var creditsButton = document.createElement('div');
             creditsButton.className = "ui button green";       //"ui vertical labeled icon buttons";
             creditsButton.style.width = '200px';
             creditsButton.style.margin = '10px'; 
             creditsButton.id = 'creditsButton';                         
             creditsButton.innerHTML = "<i class=\"book icon\"></i> Credits";
             creditsButton.onclick = this.showDevelopmentuiPanel.bind(this);
             buttonMenu.appendChild(creditsButton); 
             
            document.querySelector('body').appendChild(buttonMenu);
            
            this.loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.6/semantic.min.css","css");

            var healthDisplay = document.createElement('div');
            healthDisplay.id = 'HP';
            healthDisplay.className = 'ui label';
            healthDisplay.style.position = 'relative';
            healthDisplay.style.color = 'red';

            document.querySelector('body').appendChild(healthDisplay);
            // Set initial values
            this.setHealthDisplay( 50 );

            var uiPanel = document.createElement('div');
            uiPanel.className = "ui modal";
            uiPanel.id = 'uiPanel';
            uiPanel.style.top = '10%';
            //uiPanel.style.height = '75%';
            //uiPanel.style.width = '800px';
            //uiPanel.style.margin = 'auto';
            uiPanel.style.zIndex = 1001;
            uiPanel.style.visibility = 'hidden';
            uiPanel.style.position = 'relative';
            uiPanel.style.color = '#295f48';
            uiPanel.style.backgroundColor = 'rgba(172,217,44,0.9)';
            uiPanel.style.boxShadow = '6px 12px 14px 2px rgba(0,0,0,0.64)';

            var closeButton = document.createElement('i');
            closeButton.className = "close icon";
            uiPanel.appendChild(closeButton);

            var bulletsDisplay = document.createElement('div');
            bulletsDisplay.id = 'Bullets';
            bulletsDisplay.className = 'ui label';
            bulletsDisplay.style.position = 'relative';
            bulletsDisplay.style.color = 'gray';
            
            document.querySelector('body').appendChild(bulletsDisplay);
            this.setBulletsDisplay( 50 );

            var title = document.createElement('div');
            title.className = "header";
            title.id = 'uiTitle';
            //stitle.style.color = 'gray';
            //title.style.padding = '8px';
            uiPanel.appendChild(title);
             
            var description = document.createElement('div');
            description.className = "content";
            description.id = 'desc';
            //description.style.fontSize = '24px';
            //description.style.padding = '8px';
            uiPanel.appendChild(description);

            


            document.querySelector('body').appendChild(uiPanel);
            
        },

        update: function (dt) {
        },
        
        setHealthDisplay : function ( hp ) {
            document.getElementById('HP').innerHTML = '<i class="heart icon"></i>' + hp;
        },
        
        setBulletsDisplay : function ( bullets ) {
            document.getElementById('Bullets').innerHTML = '<i class="circle icon"></i>' + bullets;
        },

        /*showUIMenu: function (){
             
             // Play button creation and configuration
             var aboutButton = document.createElement('button');
             //aboutButton.className = "ui button";       //"ui vertical labeled icon buttons";
             aboutButton.id = 'Development';
             aboutButton.style.position = 'fixed';
             aboutButton.style.left = '45%';
             aboutButton.style.top = '35%';
             //var divContent = "<div class= \"ui green button\"> <i class=\"book icon\"></i> About Game Development </div>";
             //var divContent = "<div class= \"ui green button\" > <i class=\"play icon\" ></i> Play Game </div> <div class= \"ui green button\"> <i class=\"settings icon\"></i> Settings </div> <div class= \"ui green button\"> <i class=\"help circle icon\"></i> Help </div> <div class= \"ui green button\"> <i class=\"book icon\"></i> About Game Development </div>";
             aboutButton.innerHTML = "About Game Development"; //divContent;
             aboutButton.onclick = this.showDevelopmentuiPanel.bind(this);
             document.querySelector('body').appendChild(aboutButton);
              
              
            
         },*/

         showDevelopmentuiPanel: function (){
            console.log("show uiPanel");
            
            document.getElementById('uiTitle').innerHTML = "Credits";
            //document.getElementById('buttMenu').style.visibility = 'hidden';
            document.getElementById('desc').innerHTML = "The game \"STEM PARADISE\" was developed by Frank Dicola, Sen Jiang and Svyatoslav Turets. \
                                                         All of them have been graduate students in Stevens Institute of Technology. \"STEM PARADISE\" was their master project in software engineering program.";
            document.getElementById('uiPanel').style.visibility = 'visible';
            //app.mouse.enablePointerLock();
            $('#uiPanel').modal('show');

        },
        
         showSettingsuiPanel: function (){
            console.log("show uiPanel");
            
            document.getElementById('uiTitle').innerHTML = "Settings";
            //document.getElementById('buttMenu').style.visibility = 'hidden';
            document.getElementById('desc').innerHTML = "";
            document.getElementById('uiPanel').style.visibility = 'visible';
             $('#uiPanel').modal('show');
            //app.mouse.enablePointerLock();
         },

         showHelpuiPanel: function (){
            console.log("show uiPanel");
            
            document.getElementById('uiTitle').innerHTML = "Help";
            //document.getElementById('buttMenu').style.visibility = 'hidden';
            document.getElementById('desc').innerHTML = "The goal of the game is to provide high school students with  basic knowledge in C++. The player \
                                                          has to bump into the treasury chests to get questions. The treasury box provides either ammunition or health \
                                                           in case the player answers the question correctly.";
            document.getElementById('uiPanel').style.visibility = 'visible';
             $('#uiPanel').modal('show');
            //app.mouse.enablePointerLock();
         },

        loadjscssfile:function (filename, filetype){
             if (filetype=="js"){ //if filename is a external JavaScript file
             var fileref=document.createElement('script');
             fileref.setAttribute("type","text/javascript");
            fileref.setAttribute("src", filename);
            }
            else if (filetype=="css"){ //if filename is an external CSS file
            var fileref=document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
            }
            if (typeof fileref!="undefined")
               document.getElementsByTagName("head")[0].appendChild(fileref);
        },

        closeuiPanel : function () {
            document.getElementById('uiPanel').style.visibility = 'hidden';
            document.getElementById('buttMenu').style.visibility = 'visible';
        },
        
        playGame: function() {
            document.getElementById('buttMenu').style.visibility = 'hidden';   
            var player = app.root.findByName('Player');
            player.script.Third_Person_Camera.unlockInput();
            player.script.Player_Input.unlockInput();

            // random position and angle
            var x = Math.random() * 250 - 175;
            var y = Math.random() * 25;
            var z = Math.random() * 250 - 75;
            var ey = Math.random() * 360;

            player.rigidbody.teleport(x, y, z, 0, ey, 0);

            var data = {
                x : x,
                y : y,
                z : z,
                ex : 0,
                ey : ey
            }
            // send join message to server
            app.root.getChildren()[0].script.Client.send('player_joined', data);
        }
    };

    

    return User_Interface;
});
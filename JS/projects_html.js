// PROJECTS
let projects = [

    {
        "name": "PIXELMUG",
        "code": "0000 0000",
        "github": "",
        "specs-name": "INFO",
        "desc":
            "<p>" +
            "...???.... " +
            "<br><br>" +
            "This is why in 2020 I decided to <b>create a team of students to design and develop small " +
            "videogames</b> as a way to start moving our first steps in the industry while still in university." +
            "<br><br>" +
            "After a year of attempts I managed to gather enough interest and little after that Pixelmug was born, " +
            "and we started building <b>our first prototype</b>." +
            "<br><br>" +
            "You can find our website and projects " +
            "<a target='_blank' href='' class='about-a'>here</a>." +
            "</p>",

        "specs":

            "<p class=\"project-page-proj-expl\">" +
            "The team consists of 11 people, divided between three main departments with one manager each. " +
            "As the team leader my role is that of supervising the advancement of each project and coordinating " +
            "everyone." +
            "</p>" +

            "<h5 class='subsession-title'>ART & ANIMATION</h5>" +

            "<p class='project-page-proj-expl'>" +
            "TODO" +
            "</p>" +

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/Pixelmug/02_PERSONAGGI.jpg' " +
            "alt='Character creation' " +
            "title='Character creation'>" +

            "<p class='project-page-proj-expl'>" +
            "TODO" +
            "</p>" +

            "<h5 class='subsession-title'>PROGRAMMING & LEVEL DESIGN</h5>" +

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/web1.png' " +
            "alt='Character creation' " +
            "title='Character creation'>" +

            "<p class='project-page-proj-expl'>" +
            "TODO" +
            "</p>" +

            "<h5 class='subsession-title'>SOUND & MUSIC</h5>" +

            "<p class='project-page-proj-expl'>" +
            "TODO" +
            "</p>" +

            "<audio src='/media/cc0-audio/t-rex-roar.mp3'> Your browser does not support the <code>audio</code> element." +
            "</audio>" +

            "<h5 class='subsession-title'>PROJECTS</h5>" +

            "<h6 class='subproject-title'>DEMO</h6>" +

            "<p class='project-page-proj-expl'>" +
            "TODO" +
            "</p>"
    },

    {
        "name": "ASU Software",
        "code": "0000 0001",
        "github": "",
        "specs-name": "INFO",
        "desc":
            "<p>" +
            "The Autonomous System Unit (ASU) is part of the necessary control system for the autonomous vehicle." +
            "<br><br>" +
            "Its main task is assuring that anything connected to the Autonomous System works properly " +
            "and within the safety requirements given by the official Formula Students’ rules." +
            "<br>" +
            "This is why its software is largely based upon the rules themselves, from measurements' ranges, " +
            "to sensors' data checks." +
            "<br><br>" +
            "That said the ASU it’s also a necessary component for the driving capabilities of the Autonomous " +
            "Vehicle itself: all the software responsible for the correct movements of the vehicle is all managed " +
            "by the ASU." +
            "<br><br>" +
            "All the code was written in C, in order for it to run on a STM32 embedded device" +
            "</p>",
        "specs":
            "<h5 class=\"subsession-title\">CODE UNDER NDA</h5><hr>\n" +
            "<h5 class=\"subsession-title\">WEBSITE</h5><br>\n" +
            "<embed type='text/html' src='https://www.dynamisprc.com' width='100%' height='100%'" +
            " style='2px solid black'>"
    },

    {
        "name": "Blender 3D Models",
        "code": "0000 0010",
        "github": "",
        "specs-name": "GALLERY",
        "desc":
            "<p>" +
            "In an effort to improve at creating and making games, I have decided to start making small " +
            "3D models in Blender. This was more as a way to create scene in <b>Unity</b> to play and thinker with." +
            "<br><br>" +
            "Here you can find some examples." +
            "</p>",
        "specs":

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/web1.png' " +
            "alt='Home page image' " +
            "title='Home page'>" +

            "<p>TODO: add more images</p>"
    },

    {
        "name": "Game Boy Emulator",
        "code": "0000 0011",
        "github": "https://github.com/nixetheus/GBEmulator",
        "specs-name": "CODE",
        "desc":
            "<p>" +
            "The Game Boy has been my first ever console when I was a child. So when I got into game design and I " +
            "wanted to know how old console worked, emulating it was my big objective." +
            "<br><br>" +
            "After first emulating a CHIP-8, I dove into a detailed Game Boy manual containing all the information " +
            "about specifics and hardware details, plus all the opcodes in ASSEMBLY format." +
            "<br><br>" +
            "Although I never got to finish it (yet), this project is one of my favourites ever because of its " +
            "uniqueness and the fun it has been to virually simulate the hardware of the console and of its " +
            "cartridges." +
            "<br><br>" +
            "My hope is to one day get back to it and make an actual IRL Game Boy with this code." +
            "</p>",
        "specs":
            "<p class=\"project-page-proj-expl\">" +
            "My main goal was to write a clean and elegant code to simulate the behaviour of a Game Boy. " +
            "The biggest challenge was to understand all the complexity of the hardware caused by " +
            "the limits technology had at the time, such as memory size and storage. Something evident when looking " +
            "at all the types of supported cartridges, which vary greatly in specifics and formats." +
            "</p>" +

            "<h5 class=\"subsession-title\">CYCLES AND OPCODES</h5>" +
            "<p class=\"project-page-proj-expl\">" +
            "Similar to the 8080, 8085, & Z80 microprocessors, the Game Boy works by executing a series of " +
            "instructions determined by the opcodes contained in its RAM. These opcodes are found both in the Game " +
            "Boy memory itself and in the cartridges themselves to make the most out of the memory available at the " +
            "time." +
            "<br>" +
            "<br>" +
            "Here's and example of an instruction that could have been executed by the Game Boy:" +
            "</p>" +

            "<p class=\"project-page-proj-code\">" +
            "<br>" +
            "//  LDD (HL), A<br>" +
            "else if (instruction == 0x32)<br>" +
            "{<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;memory_write((reg_H << 8u) | reg_L, reg_A);<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;unsigned dec_HL = ((reg_H << 8u) | reg_L) - 1;<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;reg_H = dec_HL & 0xFF00;<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;reg_L = dec_HL & 0xFF;<br>" +
            "}<br>" +
            "//  LDI A, (HL)<br>" +
            "else if (instruction == 0x2A)<br>" +
            "{<br>" +
            "...<br>" +
            "</p>" +

            "<p class=\"project-page-proj-expl\">" +
            "A detailed list of all the Game Boy instructions, plus more information on its inner workings, can be " +
            "found in " +
            "<a target='_blank' href='http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf'>this</a> " +
            "manual, which is also the one I used for the project." +
            "</p>" +

            "<h5 class=\"subsession-title\">MEMORY</h5>" +

            "<img class='project-page-proj-img' alt='game boy memory visualization' " +
            "src='../Imgs/projects/gb1.png' title='Game boy memory'>" +

            "<p class=\"project-page-proj-expl\">" +
            "The way memory works in the Game Boy is intended to make use of the most possible space " +
            "while also assure a certain degree of redundancy." +
            "<br><br>" +
            "For example, the addresses E000-FE00 appear to access the internal\n" +
            "RAM the same as C000-DE00. (i.e. If you write a byte to\n" +
            "address E000 it will appear at C000 and E000.\n" +
            "Similarly, writing a byte to C000 will appear at C000\n" +
            "and E000.)\n" +
            "</p>"
    },

    {
        "name": "Cate",
        "code": "0000 0100",
        "github": "https://github.com/nixetheus/CATE",
        "specs-name": "CODE",
        "desc":
            "<p>" +
            "CATE (Code And Text Editor) is a side project I programmed when I was in high school." +
            "<br><br>" +
            "As the name implies its main use is that of a code editor, particularly for Python and C." +
            "More complex, IDE-like features, such as syntax highlighting and code completion " +
            "are only available for these languages." +
            "<br><br>" +
            "The editor was completely written in Python with the help of the Tkinter library and has a lot of " +
            "customization options, in the form of themes and color changes." +
            "<br>" +
            "It also features a primitive internal python interpreter." +
            "</p>",
        "specs":
            "<p class=\"project-page-proj-expl\">" +
            "Created in 2016, CATE has been my first ever big project since I started programming. It is a " +
            "simple code and text editor, with a few more advanced and interesting IDE features like a syntax " +
            "highlighting and code completition." +
            "</p>" +

            "<img class='project-page-proj-img' alt='cate-png' " +
            "src='../Imgs/projects/cate.png' title='CATE editor interface'>" +

            "<h5 class=\"subsession-title\">FEATURES</h5>" +

            "<p class=\"project-page-proj-expl\">" +
            "When I started making CATE, I wanted something as close as possible to a modern IDE. This is why it " +
            "features syntax highlighining, code completition (with differentiations between various objects such as " +
            "classes and variables, the abilty to search through a document and replace part of it combined with " +
            "a case matching option, and command shortcuts." +
            "</p>" +

            "<h5 class=\"subsession-title\">CUSTOMIZATION</h5>" +

            "<p class=\"project-page-proj-expl\">" +
            "Customization had a big focus during the creation of CATE, mostly because I love playing with " +
            "colors and this was a fun way to add variety to my project, but also because it allows anything to " +
            "be unique and to cater people's different necessities, like high-contrast options for those with " +
            "low vision or photosensitivity." +
            "<br><br>" +
            "Here's an example of the code for one of the various colour modes in CATE:" +
            "</p>" +

            "<p class=\"project-page-proj-code\">" +
            "<br>" +
            "if color == 'DARK':<br>" +
            "&nbsp;&nbsp;colors = {<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;0: '#191919',  # ln_color<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;1: '#55FBF7',  # for_color<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;2: '#DEDEDE',  # text_color<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;3: '#242424',  # files_color<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;4: '#494949',  # emb_ter_col1<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;...<br>" +
            "elif color == 'BLUE':<br>" +
            "elif color == 'ICEY':<br>" +
            "elif color == 'WHITE':<br>" +
            "elif color == 'RANDOM':<br>" +
            "&nbsp;&nbsp;...<br>" +
            "</p>"
    },

    {
        "name": "Personal website",
        "code": "0000 0101",
        "github": "",
        "specs-name": "GALLERY",
        "desc":
            "<p>Born as a way to have a personal presence on the web, this website has evolved to"
            + "also showcase my projects and my personal design style, which is noticeable in everything, "
            + "from colors, to font and images.<br><br>"
            + "I started web developing in 2014, as a way to get started with programming, while having" +
            " fun and creating aesthetically pleasing visuals.</p>",
        "specs":

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/web1.png' " +
            "alt='Home page image' " +
            "title='Home page'>" +

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/web2.png' " +
            "alt='About page image' " +
            "title='About page'>" +

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/web3.png' " +
            "alt='Portfolio page image' " +
            "title='Portfolio page'>" +

            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/web4.png' " +
            "alt='Mobile site image' " +
            "title='Mobile site'>"

    }
];
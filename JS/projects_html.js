// PROJECTS
let projects = [

    /*{
        "name": "PIXELMUG",
        "code": "0000 0000",
        "github": "",
        "specs-name": "INFO",
        "desc":
            "<p>TODO</p>",
        "specs":
            "<p>TODO</p>"
    },

    {
        "name": "ASU Software",
        "code": "0000 0001",
        "github": "",
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
        "specs-name": "INFO",
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
    },*/

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
            "TODO" +
            "</p>" +

            "<p class=\"project-page-proj-code\">" +
            "<br>" +
            "else if (instruction == 0x32)<br>" +
            "{<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;memory_write((reg_H << 8u) | reg_L, reg_A);<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;unsigned dec_HL = ((reg_H << 8u) | reg_L) - 1;<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;reg_H = dec_HL & 0xFF00;<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;reg_L = dec_HL & 0xFF;<br>" +
            "}<br>" +
            "else if (instruction == 0x2A)<br>" +
            "{<br>" +
            "...<br>" +
            "</p>" +

            "<p class=\"project-page-proj-expl\">" +
            "TODO" +
            "</p>" +

            "<h5 class=\"subsession-title\">HARDWARE</h5>" +

            "<img class='project-page-proj-img' alt='game boy memory visualization' src='../Imgs/projects/gb1.png'>" +

            "<p class=\"project-page-proj-expl\">" +
            "TODO" +
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
            "<p class=\"project-page-proj-expl\">\n" +
            "Created in 2016, CATE has been my first ever big project since I started programming. It is a " +
            "simple code and text editor, with a few more advanced and interesting IDE features like a syntax " +
            "highlighting and code completition." +
            "</p>\n" +
            "<img class='project-page-proj-img' alt='cate-png' src='../Imgs/projects/cate.png'>" +
            "<h5 class=\"subsession-title\">CUSTOMIZATION</h5>\n" +
            "<p class=\"project-page-proj-expl\">\n" +
            "Customization was a big during the creation of CATE, mostly because I love playing with " +
            "colors and this was a fun way to add variety to my project" +
            "</p>\n" +
            "<p class=\"project-page-proj-code\">\n" +
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
            "</p>\n" +
            "<p class=\"project-page-proj-expl\">\n" +
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